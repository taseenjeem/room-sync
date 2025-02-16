import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-32 xl:py-0">
      <SignUp appearance={{ baseTheme: dark }} />
    </div>
  );
}
