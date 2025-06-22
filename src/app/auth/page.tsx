'use client';

import {
  Home,
  ClipboardList,
  User,
} from "lucide-react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function Auth() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white border-r p-6 flex flex-col">
        <Image
          src="/logo.png"
          alt=""
          width={140}
          height={15}
          className="pb-10"
          priority
        />

        <nav className="space-y-2">
          <SidebarLink icon={<Home className="h-5 w-5" />} label="Home" isActive />
          <SidebarLink icon={<ClipboardList className="h-5 w-5" />} label="Boards" />
          <SidebarLink icon={<User className="h-5 w-5" />} label="Profile" />
        </nav>
      </aside>

      <div className="flex flex-col flex-1">
        <header className="h-16 bg-white border-b flex justify-end items-center px-6">
          <div className="flex items-center gap-2 text-sm font-medium">
            John Doe
            <Avatar className="h-8 w-8">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-1">Nothing to show here</h2>
            <p className="text-gray-500 mb-4">Create or join a new board</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Create New Board
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarLink({
  icon,
  label,
  isActive = false,
}: {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}) {
  return (
    <Button
      variant={isActive ? "secondary" : "ghost"}
      className={cn(
        "w-full justify-start gap-2 rounded-md",
        isActive ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-700"
      )}
    >
      {icon}
      {label}
    </Button>
  );
}
