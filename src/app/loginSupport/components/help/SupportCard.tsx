import { LogOut } from 'lucide-react';
import Link from 'next/link';

export function SupportCard() {
  return (
    <div className="absolute top-4 right-4">
      <Link href="/">
        <div className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
          <LogOut className="h-6 w-6 text-white hover:text-white/80" />
        </div>
      </Link>
    </div>
  );
}