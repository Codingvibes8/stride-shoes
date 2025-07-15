import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-80px)] bg-cover bg-center bg-[url('/shoes.jpg')] w-full">
      // <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">Stride with Style</h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl">
          Discover the latest trends in footwear. Unbeatable quality, unmatched
          style.
        </p>
        <div className="mt-8 flex gap-4">
          <Button
            asChild
            size="lg"
            className={"bg-blue-900 hover:bg-indigo-600"}
          >
            <Link href="/products">Shop Now</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/about">Best Selling Shoes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
