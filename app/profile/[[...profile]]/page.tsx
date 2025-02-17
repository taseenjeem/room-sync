import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-32 xl:py-0">
      <UserProfile appearance={{ baseTheme: dark }} />
    </div>
  );
}
