import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800 bg-background bg-opacity-50 py-2.5 backdrop-blur">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link
            href={"/"}
            className="text-xl font-semibold uppercase tracking-widest"
          >
            RoomSync
          </Link>
          <ul className="flex space-x-4">
            <li className="hidden md:block">
              <Button asChild variant={"outline"}>
                <Link href="/sign-up">Create New Account</Link>
              </Button>
            </li>
            <li className="hidden md:block">
              <Button asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </li>
            <li className="md:hidden">
              <MobileMenu />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
