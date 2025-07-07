'use client'

import { loginAction } from "@/actions/login/login-action";
import { InputText } from "@/components/InputText";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export const dynamic = 'force-dynamic';

export default function LoginForm() {

  const initialState = {
    username: '',
    error: ''
  };

  const [state, action, isPending] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state.error) {
      toast.dismiss();

      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className="flex items-center justify-center text-center max-w-sm mt-16 mb-32 mx-auto">
      <form action={action} className="flex flex-1 flex-col py-16 gap-8">

        <InputText
          labelText="Usuário"
          name="username"
          placeholder="Digite o seu usuário"
          type="text"
          disabled={isPending}
        />

        <InputText
          labelText="Senha"
          name="password"
          placeholder="Digite a sua senha"
          type="password"
          disabled={isPending}
        />

        <div className="">
          <Button className="bg-sky-500 hover:bg-sky-500/80 cursor-pointer w-full" disabled={isPending} type="submit"><LogInIcon /> Entrar</Button>
        </div>
      </form>

    </div>
  );
}