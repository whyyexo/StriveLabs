"use client"

import { SectionHeader } from "@/components/SectionHeader"
import { ProductCard } from "@/components/ProductCard"
import { products } from "@/content/products"

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-32">
      <section className="container mx-auto px-6">
        <SectionHeader
          title="Our Products"
          description="A comprehensive suite of AI-powered tools designed to accelerate your workflow"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

