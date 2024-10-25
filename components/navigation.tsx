"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserNav } from "@/components/user-nav";
import { useSession } from "next-auth/react";

export function Navigation() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      active: pathname === "/dashboard",
    },
    {
      href: "/insights",
      label: "Insights",
      active: pathname === "/insights",
    },
    {
      href: "/campaigns",
      label: "Campaigns",
      active: pathname === "/campaigns",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Brain className="h-6 w-6" />
          <span className="font-bold">MarketMind AI</span>
        </Link>
        <nav className="flex items-center space-x-6 ml-6">
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
          {session ? (
            <UserNav user={session.user} />
          ) : (
            <Link href="/api/auth/signin">
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}