import { hashPassword } from '@/lib/login/manage-login';

(async () => {
  const minhaSenha = '';
  const hashDaSuaSenhaEmBase64 = await hashPassword(minhaSenha);

  console.log({ hashDaSuaSenhaEmBase64 });
})();