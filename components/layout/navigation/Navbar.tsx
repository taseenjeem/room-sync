import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800 bg-background bg-opacity-50 py-2.5 backdrop-blur">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold uppercase tracking-widest">
            RoomSync
          </h1>
          <ul className="flex space-x-4">
            <li>
              <Button asChild variant={"outline"}>
                <Link href="/sign-up">Create New Account</Link>
              </Button>
            </li>
            <li>
              <Button asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
