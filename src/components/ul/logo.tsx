import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">C</span>
      </div>
      <span className="text-xl font-bold text-foreground">CryptoAsset</span>
    </Link>
  );
};

export default Logo;
