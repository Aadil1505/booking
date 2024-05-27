import { CalendarCheck, Menu } from "lucide-react";
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import Mode from "./mode-trigger"

 export default function Navbar() {
  return (
    <div className="flex items-center justify-around h-16 px-4 bg-background shadow-sm">
      <div>
        <Link className="flex items-center" href="/">
          <CalendarCheck className="w-9 h-9 text-black dark:text-white" />
          {/* <span className="ml-2 text-2xl font-semibold text-black dark:text-white">Aadil&apos;s Portfolio</span> */}
        </Link>
      </div>
      <div>
        <nav className="lg:flex hidden space-x-4">
          <Link
            className="text-lg font-medium text-muted-foreground hover:text-foreground"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-lg font-medium text-muted-foreground hover:text-foreground"
            href="/demo"
          >
            Demo
          </Link>
          <Link
            className="text-lg font-medium text-muted-foreground hover:text-foreground"
            href="/help"
          >
            Help
          </Link>
        </nav>
      </div>
      <div>
        <div className="lg:flex hidden items-center space-x-4">
          <Mode />
        </div>
        <div className="lg:hidden flex items-center">
          <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <CalendarCheck className="h-6 w-6" />
                    <span className="sr-only">Aadil&apos;s Portfolio</span>
                  </Link>
                  <Link href="/" className="hover:text-foreground">
                    Home
                  </Link>
                  <Link
                    href="/demo"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Demo
                  </Link>
                  <Link
                    href="/help"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Help
                  </Link>
                  <Mode />
                </nav>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </div>
  )
 }