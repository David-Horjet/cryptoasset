import Link from "next/link";
import Logo from "../ul/logo";

export function AuthHeader() {
  return (
    <header className="w-full px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Logo/>

        <Link
          href="/help"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Help
        </Link>
      </div>
    </header>
  );
}
