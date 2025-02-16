import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="hidden" />
        </SheetHeader>
        <div className="w-full pt-10">
          <ul className="w-full space-y-4">
            <li className="w-full">
              <SheetClose asChild>
                <Button className="w-full" asChild>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </SheetClose>
            </li>
            <li className="w-full">
              <SheetClose asChild>
                <Button className="w-full" asChild variant="outline">
                  <Link href="/sign-up">Create New Account</Link>
                </Button>
              </SheetClose>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
