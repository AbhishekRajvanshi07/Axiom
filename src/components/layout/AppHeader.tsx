"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Bell, Search, User, LogOut, Settings } from "lucide-react";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-3 md:px-4 h-14 flex items-center gap-3">
        {/* LEFT — Brand */}
        <div className="flex items-center gap-3">
          <div className="text-lg font-semibold tracking-tight text-white">
            Axiom
          </div>

          <nav className="hidden lg:flex items-center gap-4 text-sm text-zinc-400">
            <button className="hover:text-white">Pulse</button>
            <button className="hover:text-white">Discover</button>
            <button className="hover:text-white">Portfolio</button>
          </nav>
        </div>

        {/* Search */}
        <div className="flex-1 flex justify-center">
          <div className="relative hidden md:block w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Search tokens…"
              className="pl-9 bg-zinc-900 border-zinc-800 text-sm"
            />
          </div>

          {/* Mobile search icon */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-zinc-400"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* RIGHT — Actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-400 hover:text-white"
          >
            <Bell className="h-4 w-4" />
          </Button>

          {/* Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 hover:opacity-90 transition">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-zinc-800 text-zinc-200">
                    U
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-48 bg-zinc-900 border-zinc-800"
            >
              <DropdownMenuItem className="gap-2">
                <User className="h-4 w-4" />
                Profile
              </DropdownMenuItem>

              <DropdownMenuItem className="gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="gap-2 text-red-400">
                <LogOut className="h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
