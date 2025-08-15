"use client";
import { Hero } from "@/components/Hero";
import ProductsPage from "@/app/products/page";
import { FeaturedShoes } from "@/components/featured-shoes";
import type { Product } from "@/types/types";

const products: Product[] = [
  {
    id: "1",
    name: "Nike Air Max 270 Men's",
    description:
      "Iconic sneakers with Max Air cushioning for all-day comfort and modern style.",
    price: 149.99,
    category: "footwear",
    subcategory: "sneakers",
    images: ["/shoes.jpg"],
    sizes: ["8", "9", "10", "11", "12", "13"],
    colors: ["Black/White", "Midnight Navy", "Wolf Grey"],
    stock: 85,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Adidas Originals Forum Low",
    description: "Classic 80s basketball silhouette reimagined for streetwear.",
    price: 119.99,
    category: "footwear",
    subcategory: "sneakers",
    images: ["/shoes.jpg"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Cloud White", "Core Black", "Bold Blue"],
    stock: 60,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "7",
    name: "Clarks Desert Trek",
    description:
      "Iconic moccasin-inspired casual shoes with crepe sole comfort.",
    price: 139.99,
    category: "footwear",
    subcategory: "casual",
    images: ["/shoes.jpg"],
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["Beeswax Leather", "Dark Brown", "Black Suede"],
    stock: 50,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export default function HomePage() {
  return (
    <section className="">
      <Hero />
      <ProductsPage searchParams={{ category: "footwear" }} />
      <FeaturedShoes products={products} />
    </section>
  );
}
