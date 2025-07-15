"use client";

import { useUser } from "@clerk/nextjs";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import AuthButtons from "./AuthButtons";
import { CartButton } from "./CartButton";
//import { SearchBar } from "./SearchBar"
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-blue-300 h-16 px-8 mx-auto">
      {/* Top navbar */}
      <div className="container flex h-16 items-center">
        <Logo />
        <div className="pl-8-hidden md:flex md:flex-1 md:items-center md:justify-between">
          <DesktopNav />
          <div className="flex items-center space-x-4">
            <AuthButtons isSignedIn={!!isSignedIn} />
            <CartButton />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <MobileNav
          isSignedIn={!!isSignedIn}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
