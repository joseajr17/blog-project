import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMAGE_UPLOADER_MAX_SIZE } from "@/lib/constants";
import { ImageUpIcon } from "lucide-react";
import { useRef, useTransition } from "react";
import { toast } from "react-toastify";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    const fileInput = fileInputRef.current;

    if (!fileInput)
      return;

    fileInput.click();
  }

  function handleChange() {
    toast.dismiss();

    const fileInput = fileInputRef.current;

    if (!fileInput) return;

    const file = fileInput?.files?.[0];

    if (!file) return;

    if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOADER_MAX_SIZE / 1024;
      toast.error(`Imagem muito grande. Máx.: ${readableMaxSize}KB.`);

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
        return;
      }

      toast.success(result.url);

    });

    fileInput.value = '';
  }

  return (
    <div className="flex py-6">
      <Button onClick={handleClick} variant='outline' type="button"
        className="border border-slate-400 dark:border-slate-400 cursor-pointer">
        <ImageUpIcon /> Enviar uma imagem</Button>
      <Input onChange={handleChange} ref={fileInputRef} name="file" type="file" accept="image/*" hidden />
    </div>
  );
}