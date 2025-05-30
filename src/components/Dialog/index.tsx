'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type DialogProps = {
  isVisible?: boolean,
  onClose?: (open: boolean) => void;
  title: string,
  description: React.ReactNode,
  onConfirm: () => void;
}

export function Dialog({ isVisible = false, onClose, title, description, onConfirm }: DialogProps) {

  return (
    <AlertDialog open={isVisible} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer hover:bg-primary/70"
            onClick={onConfirm}
          >Ok</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}