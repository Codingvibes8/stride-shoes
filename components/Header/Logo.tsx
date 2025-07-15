import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center pr-8">
      <span className="font-bold text-lg text-red-800">Nex</span>
      <span className="font-bold text-lg text-blue-800">Stride</span>
    </Link>
  )
}

export default Logo