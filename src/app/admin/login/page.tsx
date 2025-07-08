import LoginForm from "@/components/admin/LoginForm";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Login',
};


export default async function AdminLoginPage() {
  return (
    <LoginForm />
  )
}