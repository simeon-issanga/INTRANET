"use client";
import React from 'react'
import ILink from '../../types/link';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuSeparator, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const Header = ({ props }: { props: ILink[] }) => {
  const pathname = usePathname();

  return (
    <header className="flex flex-row w-full justify-between items-center p-4 border-b bg-gray-700">
      <div className="font-bold">
        <Link href="/">MON LOGO</Link>
      </div>

      <div className="flex items-center gap-3">
        {props.map((item, index) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link 
              href={item.href} 
              key={index} 
              className={`${isActive ? 'text-blue-500 pointer-events-none' : 'hover:text-blue-500'}`}
            >
              {item.name}
            </Link>
          );
        })}
      
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline">A propos</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuGroup>
            <DropdownMenuLabel>A propos</DropdownMenuLabel>
            <DropdownMenuItem>Propositions</DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
    </div>

    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline">Profile</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuGroup>
            <DropdownMenuLabel>Votre Compte</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
    </header>
  );
};

export default Header;