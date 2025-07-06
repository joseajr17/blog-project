import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMAGE_UPLOADER_MAX_SIZE } from "@/lib/constants";
import { ImageUpIcon } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { toast } from "react-toastify";

type ImageUploaderProps = {
  disabled?: boolean
}

export function ImageUploader({ disabled = false }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState('');

  function handleClick() {
    const fileInput = fileInputRef.current;

    if (!fileInput)
      return;

    fileInput.click();
  }

  function handleChange() {
    toast.dismiss();

    const fileInput = fileInputRef.current;

    if (!fileInput) {
      setImgUrl('');
      return;
    }

    const file = fileInput?.files?.[0];

    if (!file) {
      setImgUrl('');
      return;
    }

    if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOADER_MAX_SIZE / 1024;
      toast.error(`Imagem muito grande. Máx.: ${readableMaxSize}KB.`);

      setImgUrl('');
      fileInput.value = '';
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = '';
        setImgUrl('');
        return;
      }

      setImgUrl(result.url);
      toast.success('Imagem enviada com sucesso!');
    });
    fileInput.value = '';
  }

  return (
    <div className="flex flex-col py-6 gap-4">
      <Button onClick={handleClick} type="button" variant='outline' disabled={isPending || disabled}
        className="self-start border border-slate-400 dark:border-slate-400 cursor-pointer">
        <ImageUpIcon /> Enviar uma imagem
      </Button>

      {!!imgUrl && (
        <div className='flex flex-col gap-4'>
          <p>
            <b>URL:</b> {imgUrl}
          </p>

          {/* eslint-disable-next-line */}
          <img className='rounded-lg' src={imgUrl} />
        </div>
      )}

      <Input
        onChange={handleChange}
        ref={fileInputRef}
        name="file"
        type="file"
        accept="image/*"
        disabled={isPending || disabled}
        hidden />
    </div>
  );
}