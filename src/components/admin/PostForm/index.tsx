'use client';

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function PostForm() {
  return (
    <form className="flex flex-col py-16 gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="nome">Nome</Label>
        <Input
          id="nome"
          className={cn(
            "bg-white ring-2 ring-slate-400 transition focus-visible:border-blue-500 focus-visible:ring-blue-500",
            ""
          )}
          placeholder="Nome" />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="sobrenome-disabled">Sobrenome Disabled</Label>
        <Input
          id="sobrenome-disabled"
          className={cn(
            "bg-white ring-2 ring-slate-400 transition focus-visible:border-blue-500 focus-visible:ring-blue-500",
            " disabled:text-slate-400 disabled:bg-slate-200",
            " dark:disabled:text-slate-800 dark:disabled:bg-slate-600"
          )}
          disabled
          placeholder="Sobrenome Disabled" />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="sobrenome-readonly">Sobrenome readOnly</Label>
        <Input
          id="sobrenome-readonly"
          className={cn(
            "bg-white ring-2 ring-slate-400 transition focus-visible:border-blue-500 focus-visible:ring-blue-500",
            "read-only:bg-slate-100 dark:read-only:bg-accent"
          )}
          readOnly
          placeholder="Sobrenome readOnly"
          defaultValue='daad' />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" className="border outline-1 ring-1 ring-slate-400" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>

      <div className="flex justify-end">
        <Button className="bg-sky-500 hover:bg-sky-500/80 cursor-pointer">Enviar</Button>
      </div>
    </form>
  );
}