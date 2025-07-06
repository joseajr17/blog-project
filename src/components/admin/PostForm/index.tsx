'use client';

import { CheckboxLabel } from "@/components/CheckboxLabel";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkDownEditor";
import { Button } from "@/components/ui/button";
import { useActionState, useEffect, useState } from "react";
import { ImageUploader } from "../ImageUploader";
import { makePartialPublicPost, PublicPost } from "@/dto/post/dto";
import { createPostAction } from "@/actions/post/create-post-action";
import { toast } from "react-toastify";
import { updatePostAction } from "@/actions/post/update-post-action";

type PostFormCreateProps = {
  mode: 'create';
}

type PostFormUpdateProps = {
  publicPost: PublicPost;
  mode: 'update';
}

type PostFormProps = PostFormCreateProps | PostFormUpdateProps;

export function PostForm(props: PostFormProps) {
  const { mode } = props;

  let publicPost;
  if (mode === 'update') {
    publicPost = props.publicPost;
  }

  const actionsMap = {
    update: updatePostAction,
    create: createPostAction
  }

  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };

  const [state, action, isPending] = useActionState(actionsMap[mode], initialState);

  useEffect(() => {
    if (state.errors.length > 0) {
      toast.dismiss();

      state.errors.forEach(error => toast.error(error));
    }
  }, [state.errors]);

  useEffect(() => {
    if (state.success) {
      toast.dismiss();

      toast.success("Post atualizado com sucesso!");
    }
  }, [state]);

  const { formState } = state;
  const [contentValue, setContentValue] = useState(publicPost?.content || '');

  return (
    <form action={action} className="flex flex-col py-16 gap-8">

      <InputText
        labelText="Id"
        name="id"
        placeholder="Digite o id do post"
        type="text"
        defaultValue={formState.id}
        disabled={isPending}
        isHidden
      />

      <InputText
        labelText="Título"
        name="title"
        placeholder="Digite o título do post"
        type="text"
        defaultValue={formState.title}
        disabled={isPending}
      />

      <InputText
        labelText="Autor"
        name="author"
        placeholder="Digite o nome do autor"
        type="text"
        defaultValue={formState.author}
        disabled={isPending}
      />

      <InputText
        labelText="Resumo"
        name="excerpt"
        placeholder="Digite o resumo do post"
        type="text"
        defaultValue={formState.excerpt}
        disabled={isPending}
      />

      <MarkdownEditor
        labelText='Conteúdo'
        value={contentValue}
        setValue={setContentValue}
        textAreaName='content'
        disabled={isPending}
      />


      <ImageUploader disabled={isPending} />

      <InputText
        labelText="URL da imagem da capa"
        name="coverImageUrl"
        placeholder="Digite a URL da imagem"
        type="text"
        defaultValue={formState.coverImageUrl}
        disabled={isPending}
      />

      <CheckboxLabel
        labelText="Publicar Post?"
        name="published"
        defaultChecked={formState.published}
        disabled={isPending}
      />

      <div className="flex justify-end">
        <Button className="bg-sky-500 hover:bg-sky-500/80 cursor-pointer" disabled={isPending}>Enviar</Button>
      </div>
    </form>
  );
}