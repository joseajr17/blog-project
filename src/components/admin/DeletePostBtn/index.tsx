'use client'

import { deletePostAction } from "@/actions/post/delete-post-action";
import { Dialog } from "@/components/Dialog";
import { useState, useTransition } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";

type DeletePostBtnProps = {
  id: string,
  title: string,
}

export function DeletePostBtn({ id, title }: DeletePostBtnProps) {
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  function handleClick() {
    setShowDialog(true);
  }

  function handleDialogChange(open: boolean) {
    setShowDialog(open);
  }

  function handleCofirm() {
    toast.dismiss();
    startTransition(async () => {
      const result = await deletePostAction(id);

      if (result.error) {
        toast.error(result.error);
        return;
      }
      toast.success('Post apagado com sucesso!');
    });
  }

  return (
    <>
      <Button
        size='icon'
        className="text-red-500 bg-accent/0 hover:text-red-500/80 hover:bg-accent/0 hover:scale-120 shadow-none disabled:text-slate-700 disabled:cursor-not-allowed cursor-pointer"
        aria-label={`Apgar post: ${title}`}
        title={`Apagar post: ${title}`}
        onClick={handleClick}
        disabled={isPending}
      >
        <FaTrash />
      </Button>
      <Dialog
        isVisible={showDialog}
        onClose={handleDialogChange}
        title="Tem certeza que deseja apagar o Post?"
        description={`Essa ação irá apagar o post "${title}".`}
        onConfirm={handleCofirm}
      />
    </>

  );
}