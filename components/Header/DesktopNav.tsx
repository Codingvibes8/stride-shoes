import Link from "next/link"

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {["products", "categories", "deals", "about"].map((path) => (
        <Link
          key={path}
          href={`/${path}`}
          className="text-sm font-medium hover:text-primary-600 transition-colors"
        >
          {path.charAt(0).toUpperCase() + path.slice(1)}
        </Link>
      ))}
    </nav>
  )
}
