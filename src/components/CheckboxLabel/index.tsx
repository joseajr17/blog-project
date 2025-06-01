import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useId } from "react";

type InputCheckboxProps = {
  labelText?: string;
} & React.ComponentProps<typeof Checkbox>;

export function CheckboxLabel({ labelText = '', ...props }: InputCheckboxProps) {
  const id = useId();

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        {...props}
        className="border outline-1 ring-1 ring-slate-400"
        id={id}
      />

      {labelText && (
        <Label htmlFor={id}>
          {labelText}
        </Label>
      )}
    </div>
  );
}