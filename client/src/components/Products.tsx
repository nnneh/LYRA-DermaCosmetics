"use client"
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import productSerum from '@/public/product-serum.jpg';
import productCream from '@/public/product-cream.jpg';
import productCleanser from '@/public/product-cleanser.jpg';
import productEyeCream from '@/public/product-eye-cream.jpg';

interface Product {
  id: number;
  name: string;
  skinType: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  imageBack?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Oil Control Balancing Shampoo',
    skinType: 'Normal to Oily Scalp & Hair',
    price: 10.99,
    rating: 4.6,
    reviews: 5,
    image: productSerum.src         ,
  },
  {
    id: 2,
    name: 'Skin Renewing Brightening Lotion with SPF 30',
    skinType: 'For Normal to Dry Skin',
    price: 29.99,
    rating: 4.6,
    reviews: 206,
    image: productCream.src,
  },
  {
    id: 3,
    name: 'Intensive Moisturizing Cream',
    skinType: 'For: Dry to Very Dry Skin',
    price: 17.99,
    rating: 4.8,
    reviews: 962,
    image: productCleanser.src,
  },
  {
    id: 4,
    name: 'Blemish Barrier Patches',
    skinType: 'Oily, Blemish-Prone, and Sensitive Skin',
    price: 9.99,
    rating: 4.7,
    reviews: 875,
    image: productEyeCream.src,
  },
  {
    id: 5,
    name: 'Balancing Air Foam Facial Cleanser',
    skinType: 'For Normal, Combination, and Sensitive Skin Types',
    price: 18.99,
    rating: 4.6,
    reviews: 937,
    image: productSerum.src,
  },
  {
    id: 6,
    name: 'Hydrating Facial Cleanser',
    skinType: 'Normal to Dry Skin',
    price: 15.99,
    rating: 4.7,
    reviews: 2341,
    image: productCream.src,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={`${
            i < Math.floor(rating)
              ? 'fill-yellow-400 text-yellow-400'
              : i < rating
              ? 'fill-yellow-400/50 text-yellow-400'
              : 'fill-muted text-muted'
          }`}
        />
      ))}
      <span className="font-body text-sm text-foreground ml-1">{rating}</span>
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#" className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-secondary/30">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-2">
          <p className="font-body text-xs text-muted-foreground">
            {product.skinType}
          </p>
          <h3 className="font-display text-sm font-semibold text-foreground leading-tight min-h-[40px]">
            {product.name}
          </h3>
          <StarRating rating={product.rating} />
          <p className="font-body text-xs text-muted-foreground">
            {product.rating} out of 5 stars. {product.reviews} reviews
          </p>
          <p className="font-display text-lg font-bold text-foreground">
            ${product.price.toFixed(2)}
          </p>
          <button className="w-full btn-primary !py-2 !text-xs mt-2">
            Buy Online
          </button>
        </div>
      </a>
    </article>
  );
};

const ProductsSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            New Launches
          </h2>
          <a
            href="#"
            className="font-display text-sm font-semibold text-primary hover:underline"
          >
            Explore Products
          </a>
        </div>

        {/* Products carousel */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 md:gap-6 pb-4">
              {products.map((product) => (
                <div key={product.id} className="flex-none w-64 md:w-72">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            className="absolute -left-4 top-1/3 -translate-y-1/2 w-10 h-10 bg-background shadow-medium rounded-full flex items-center justify-center hover:bg-secondary transition-colors hidden lg:flex"
            aria-label="Previous products"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button
            className="absolute -right-4 top-1/3 -translate-y-1/2 w-10 h-10 bg-background shadow-medium rounded-full flex items-center justify-center hover:bg-secondary transition-colors hidden lg:flex"
            aria-label="Next products"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;