"use client";
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import { LogOut, User as UserIcon } from "lucide-react";
import NavItems from "./navItems";
import { signOut } from "@/lib/actions/auth.actions";

const USER_ROLE = "Investor";

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "U";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const UserDropdown = ({user} : {user: User}) => {
  const router = useRouter()

  const handleSignOut = async() => {
    try {
      const result = await signOut()
      
      if(result?.success) {
        router.push('/sign-in')
        router.refresh()
      } else {
        console.error('Sign out failed:', result?.error)
      }
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }
   
  return (
  <DropdownMenu>

  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 hover:bg-gray-700/50 rounded-lg px-3 py-2 transition-colors">
      <Avatar className="h-8 w-8 ring-2 ring-yellow-500/30">
        <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 text-sm font-bold">
          {getInitials(user.name)}
        </AvatarFallback>
      </Avatar>
      <div className="hidden md:flex flex-col items-start">
        <span className="text-sm font-semibold text-gray-200 leading-tight">
          {user.name}
        </span>
        <span className="text-xs text-gray-500 leading-tight">{USER_ROLE}</span>
      </div>
    </Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent
    align="end"
    className="w-64 bg-gray-800 border border-gray-600 shadow-xl rounded-xl p-1 text-gray-400"
  >
    <DropdownMenuLabel className="px-3 py-3">
      <div className="flex items-center gap-3">
        <Avatar className="h-11 w-11 ring-2 ring-yellow-500/40 shrink-0">
          <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 text-base font-bold">
            {getInitials(user.name)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-semibold text-gray-100 truncate">
            {user.name}
          </span>
          <span className="text-xs text-gray-500 truncate">{user.email}</span>
          <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-yellow-500">
            <UserIcon className="h-3 w-3" />
            {USER_ROLE}
          </span>
        </div>
      </div>
    </DropdownMenuLabel>

    <DropdownMenuSeparator className="bg-gray-600 my-1" />

    <DropdownMenuItem
      onClick={handleSignOut}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 rounded-lg cursor-pointer focus:bg-gray-700 focus:text-yellow-500 hover:bg-gray-700 hover:text-yellow-500 transition-colors"
    >
      <LogOut className="h-4 w-4 shrink-0" />
      Sign Out
    </DropdownMenuItem>

    <DropdownMenuSeparator className="sm:hidden bg-gray-600 my-1" />
    <nav className="sm:hidden">
      <NavItems />
    </nav>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default UserDropdown

