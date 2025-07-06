import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useId } from "react";

type InputTextProps = {
  labelText?: string,
  isHidden?: boolean
} & React.ComponentProps<typeof Input>;

export function InputText({ labelText = '', isHidden, ...props }: InputTextProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <Label htmlFor={id} hidden={isHidden}>
          {labelText}
        </Label>
      )}
      <Input
        {...props}
        id={id}
        className={cn(
          "bg-white ring-2 ring-slate-400 transition",
          "focus-visible:border-blue-500 focus-visible:ring-blue-500",
          " disabled:text-slate-400 disabled:bg-slate-200",
          " dark:disabled:text-slate-800 dark:disabled:bg-slate-600",
          "read-only:bg-slate-100 dark:read-only:bg-accent"
        )}
        hidden={isHidden}
      />
    </div>
  );
}