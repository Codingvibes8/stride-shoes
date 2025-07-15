import Link from "next/link";
import { Search } from "lucide-react";

interface MobileNavProps {
  onClose: () => void;
  isSignedIn: boolean;
}

export function MobileNav({ onClose, isSignedIn }: MobileNavProps) {
  return (
    <div className="sm:hidden border-t py-4 px-10 w-full top-16 z-50 bg-indigo-600">
      <nav className="flex flex-col space-y-4 h-[90vh]">
        {["products", "categories", "deals", "about"].map((path) => (
          <Link
            key={path}
            href={`/${path}`}
            className="text-sm font-medium text-white transition-colors hover:bg-blue-400 hover:text-black hover:font-bold px-4 py-2 rounded-md"
            onClick={onClose}
          >
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </Link>
        ))}

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search shoes..."
            className=" w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </nav>
    </div>
  );
}
