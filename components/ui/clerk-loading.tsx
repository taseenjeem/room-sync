import { Spinner } from "@/components/ui/spinner";

export default function ClerkLoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex items-center gap-3">
        <Spinner className="flex">
          Verifying identity. This may take a moment...
        </Spinner>
      </div>
    </div>
  );
}
