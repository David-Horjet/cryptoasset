import Link from "next/link";

export function AuthHeader() {
  return (
    <header className="w-full px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="text-xl font-bold text-foreground">CryptoAsset</span>
        </Link>

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
