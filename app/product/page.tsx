import type { Product } from "@/lib/types"
import ProductCard from "@/components/product-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductsPageProps {
  searchParams: {
    category?: string
    sort?: string
    page?: string
  }
}

// Mock products data
// Mock products data for Men's Shoes Store
const mockProducts: Product[] = [
  // Sneakers
  {
    id: "1",
    name: "Nike Air Max 270 Men's",
    description: "Iconic sneakers with Max Air cushioning for all-day comfort and modern style.",
    price: 149.99,
    category: "footwear",
    subcategory: "sneakers",
    images: ["/sneakers-nike-airmax.svg"],
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
    images: ["/sneakers-adidas-forum.svg"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Cloud White", "Core Black", "Bold Blue"],
    stock: 60,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

  // Running
  {
    id: "3",
    name: "New Balance FuelCell Rebel v4",
    description: "Lightweight racing shoes with energy-return FuelCell midsole.",
    price: 159.99,
    category: "footwear",
    subcategory: "running",
    images: ["/running-newbalance.svg"],
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["Electric Lime", "Blackout", "Deep Ocean"],
    stock: 45,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

  // Boots
  {
    id: "4",
    name: "Red Wing Iron Ranger Boot",
    description: "Heritage leather boots with Goodyear welt construction. Built to last.",
    price: 349.99,
    category: "footwear",
    subcategory: "boots",
    images: ["/boots-redwing.svg"],
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["Amber Harness", "Charcoal", "Copper"],
    stock: 30,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

  // Formal
  {
    id: "5",
    name: "Johnston & Murphy Melton Oxford",
    description: "Premium leather dress shoes with cushioned insole for professional elegance.",
    price: 229.99,
    category: "footwear",
    subcategory: "formal",
    images: ["/formal-oxford.svg"],
    sizes: ["8", "8.5", "9", "9.5", "10", "10.5"],
    colors: ["Black", "Dark Brown", "Burgundy"],
    stock: 25,
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

  // Sandals
  {
    id: "6",
    name: "Teva Hurricane XLT2",
    description: "Adventure-ready sandals with quick-dry webbing and rugged traction.",
    price: 79.99,
    category: "footwear",
    subcategory: "sandals",
    images: ["/sandals-teva.svg"],
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["Earth Tone", "Black", "Navy"],
    stock: 70,
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

  // Casual
  {
    id: "7",
    name: "Clarks Desert Trek",
    description: "Iconic moccasin-inspired casual shoes with crepe sole comfort.",
    price: 139.99,
    category: "footwear",
    subcategory: "casual",
    images: ["/casual-clarks.svg"],
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["Beeswax Leather", "Dark Brown", "Black Suede"],
    stock: 50,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
];

function getProducts(category?: string, sort?: string): Product[] {
  let filteredProducts = [...mockProducts]

  // Filter by category
  if (category && category !== "all") {
    filteredProducts = filteredProducts.filter((product) => product.category === category)
  }

  // Sort products
  switch (sort) {
    case "price-asc":
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case "price-desc":
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case "name":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
      break
    default:
      // Default to newest (already in order)
      break
  }

  return filteredProducts
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const category = searchParams.category || "all"
  const sort = searchParams.sort || "newest"

  const products = getProducts(category, sort)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">All Products</h1>
          <p className="text-muted-foreground">Showing {products.length} products</p>
        </div>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Select defaultValue={category}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="shoes">Shoes</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue={sort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">No products found</h2>
          <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
