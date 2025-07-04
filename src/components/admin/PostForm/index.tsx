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

type PostFormProps = {
  publicPost?: PublicPost;
}

export function PostForm({ publicPost }: PostFormProps) {

  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };

  const [state, action, isPending] = useActionState(createPostAction, initialState);

  useEffect(() => {
    if (state.errors.length > 0) {
      toast.dismiss();

      state.errors.forEach(error => toast.error(error));
    }
  }, [state.errors]);

  const { formState } = state;
  const [contentValue, setContentValue] = useState(publicPost?.content || '');

  return (
    <form action={action} className="flex flex-col py-16 gap-8">

      <InputText labelText="Título" name="title" placeholder="Digite o título do post" type="text" defaultValue={formState.title} />

      <InputText labelText="Autor" name="author" placeholder="Digite o nome do autor" type="text" defaultValue={formState.author} />

      <InputText labelText="Resumo" name="excerpt" placeholder="Digite o resumo do post" type="text" defaultValue={formState.excerpt} />

      <MarkdownEditor
        labelText='Conteúdo'
        value={contentValue}
        setValue={setContentValue}
        textAreaName='content'
        disabled={false}
      />


      <ImageUploader />

      <InputText labelText="URL da imagem da capa" name="coverImageUrl" placeholder="Digite a URL da imagem" type="text" defaultValue={formState.coverImageUrl} />

      <CheckboxLabel labelText="Publicar Post?" name="published" defaultChecked={formState.published} />

      <div className="flex justify-end">
        <Button className="bg-sky-500 hover:bg-sky-500/80 cursor-pointer">Enviar</Button>
      </div>
    </form>
  );
}