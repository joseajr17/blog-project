'use client'

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { CircleXIcon, FileTextIcon, HomeIcon, MenuIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  return (
    <nav className="flex items-center justify-center">
      <div className="max-w-screen-xl items-center justify-center border-2 rounded-md">
        <div className="sm:hidden flex">
          <Button variant="ghost" className="cursor-pointer hover:bg-slate-200 w-full justify-start rounded-md" onClick={() => setIsOpen(prev => !prev)}>
            {!isOpen && (
              <>
                <MenuIcon />
                Menu
              </>
            )}

            {isOpen && (
              <>
                <CircleXIcon />
                Fechar
              </>
            )}
          </Button>
        </div>

        <NavigationMenu className="">
          <NavigationMenuList
            className={`flex flex-col gap-2 rounded-md sm:flex-row sm:items-center sm:justify-start ${isOpen ? 'block' : 'hidden'} sm:flex`}
          >

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="/" target="_blank" className="flex flex-row items-center justify-start gap-2 h-10 shrink-0 hover:bg-slate-200 dark:hover:bg-accent/80">
                  <HomeIcon /> Home</a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/admin/post" className="flex flex-row items-center justify-start gap-2 h-10 shrink-0 hover:bg-slate-200 dark:hover:bg-accent/80">
                  <FileTextIcon /> Posts</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link className="flex flex-row items-center justify-start gap-2 h-10 shrink-0 hover:bg-slate-200 dark:hover:bg-accent/80" href='/admin/post/new'>
                  <PlusIcon /> Criar post
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav >
  );
}