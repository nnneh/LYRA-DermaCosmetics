import productSerum from '@/public/product-serum.jpg';
import productCream from '@/public/product-cream.jpg';
import productCleanser from '@/public/product-cleanser.jpg';
import productEyeCream from '@/public/product-eye-cream.jpg';

interface Category {
  id: number;
  name: string;
  image: string;
  href: string;
}

const categories: Category[] = [
  { id: 1, name: 'FACIAL CLEANSERS', image: productCleanser.src, href: '#' },
  { id: 2, name: 'Facial Moisturizers', image: productCream.src, href: '#' },
  { id: 3, name: 'Body Moisturizers', image: productSerum.src, href: '#' },
  { id: 4, name: 'Acne', image: productEyeCream.src, href: '#' },
  { id: 5, name: 'Haircare', image: productCleanser.src, href: '#' },
  { id: 6, name: 'Baby', image: productCream.src, href: '#' },
  { id: 7, name: 'Sunscreen', image: productSerum.src, href: '#' },
  { id: 8, name: 'Anti-Aging', image: productEyeCream.src, href: '#' },
];

const CategorySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="category-card group"
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 mb-3 overflow-hidden rounded-full bg-secondary/50">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="font-display text-xs md:text-sm font-semibold text-foreground text-center leading-tight group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;