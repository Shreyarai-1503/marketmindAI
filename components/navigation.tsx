"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserNav } from "@/components/user-nav";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";


export function Navigation() {
  const pathname = usePathname();
  const { isSignedIn, user, isLoaded } = useUser();
  const [isClient, setIsClient] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const routes = [
    {
      href: "./#insights",
      label: "Insights",
      active: pathname === "/insights",
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      active: pathname === "/dashboard",
    },
    {
      href: "/campaigns",
      label: "Campaigns",
      active: pathname === "/campaigns",
    },
    {
      href: "./#pricing",
      label: "Pricing",
      active: pathname === "/pricing",
    },
  ];

  return (
    <header className="px-4 top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Brain className="h-6 w-6" />
          <span className="font-bold">MarketMind AI</span>
        </Link>

        {/* Navigation Links for Larger Screens */}
        <nav className="hidden md:flex md:items-center md:space-x-6 ml-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                route.active ? "text-foreground" : "text-foreground/60"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          {isClient && isLoaded && (
            <>
              <SignedIn>
                <UserNav />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="default">
                    Sign in
                  </Button>
                </SignInButton>
              </SignedOut>
            </>
          )}
        </div>

        {/* Hamburger Icon - Hidden on medium screens and up*/}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-5 text-foreground focus:outline-none md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Dropdown Menu for Small Screens */}
        {menuOpen && (
          <div className="absolute top-14 right-4 bg-background shadow-lg rounded-lg w-52 md:hidden">
            <nav className="flex flex-col space-y-2 p-4">
              {routes.map((route) => (
                <Link
                  onClick={() => setMenuOpen(false)}
                  key={route.href}
                  href={route.href}
                  className={`text-xl font-medium transition-colors hover:text-primary ${
                    route.active ? "text-foreground" : "text-foreground/60"
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
