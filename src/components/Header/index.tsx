import { ThemeSwitcher } from "../ThemeSwitcher";

export function Header() {
  return (
    <header className="flex items-stretch flex-col sm:flex-row sm:items-center sm:justify-between pb-8">
      <h1 className="font-extrabold text-3xl py-8 sm:text-5xl sm:py-10 md:py-11 lg:py-12">
        <a href="#" >Flamengo News</a>
      </h1>
      <ThemeSwitcher />
    </header>
  );
}