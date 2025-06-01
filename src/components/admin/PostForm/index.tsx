'use client';

import { CheckboxLabel } from "@/components/CheckboxLabel";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkDownEditor";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ImageUploader } from "../ImageUploader";

export function PostForm() {
  const [contentValue, setContentValue] = useState('');

  return (
    <form className="flex flex-col py-16 gap-4">

      <InputText labelText="Nome" placeholder="Nome" />

      <ImageUploader />

      <InputText labelText="Nome" placeholder="Nome" disabled />
      <InputText labelText="Nome" placeholder="Nome" defaultValue='daad' readOnly />

      <MarkdownEditor
        labelText='Conteúdo'
        disabled={false}
        textAreaName='content'
        value={contentValue}
        setValue={setContentValue}

      />

      <CheckboxLabel labelText="Accept terms and conditions" />

      <div className="flex justify-end">
        <Button className="bg-sky-500 hover:bg-sky-500/80 cursor-pointer">Enviar</Button>
      </div>
    </form>
  );
}