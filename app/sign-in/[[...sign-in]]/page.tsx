import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-32 xl:py-0">
      <SignIn appearance={{ baseTheme: dark }} />
    </div>
  );
}
