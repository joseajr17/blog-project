import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';


const loginExpSeconds = Number(process.env.LOGIN_EXPIRATION_SECONDS) || 86400;

const loginCookieName = process.env.LOGIN_COOKIE_NAME || 'loginSession';

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);
  const base64 = Buffer.from(hash).toString('base64');

  return base64;
}

export async function verifyPassword(password: string, hashBase64: string) {
  const hash = Buffer.from(hashBase64, 'base64').toString('utf-8');

  return bcrypt.compare(password, hash);
}

export async function createLoginSession(username: string) {
  const expireAt = new Date(Date.now() + loginExpSeconds * 1000);
  const loginSession = username + ' a123';
  const cookieStore = await cookies();

  cookieStore.set(loginCookieName, loginSession, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    expires: expireAt
  });

}



