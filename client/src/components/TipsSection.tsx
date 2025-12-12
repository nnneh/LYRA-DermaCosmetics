import productCream from '@/public/product-cream.jpg';
import productSerum from '@/public/product-serum.jpg';
import productCleanser from '@/public/product-cleanser.jpg';

interface Tip {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

const tips: Tip[] = [
  {
    id: 1,
    category: 'Skincare tips & advice',
    title: 'Moisturizing 101',
    description: 'Body moisturizers play a key role in any skincare regimen for healthy-looking skin. They help to hydrate your skin, seal in moisture, and may even h...',
    image: productCream.src,
  },
  {
    id: 2,
    category: 'SKINCARE TIPS & ADVICE',
    title: 'How To Choose a Lyra Body Moisturizer for Mature Skin',
    description: 'Mature skin may be prone to dryness, but that doesn\'t mean your skin needs to look ashy, scaly, or flaky. With the right body moisturizing routine, it\'s p...',
    image: productSerum.src,
  },
  {
    id: 3,
    category: 'SKINCARE TIPS & ADVICE',
    title: 'What Are Emollients, Humectants, and Occlusives?',
    description: 'In skincare, moisturizing ingredients fall into one or more of these three categories: humectants, occlusives, and emollients. While ingredients of all t...',
    image: productCleanser.src,
  },
];

const TipsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
          Skincare Tips & Advice
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <article key={tip.id} className="product-card group">
              <a href="#" className="block">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <span className="font-display text-xs font-semibold text-primary uppercase tracking-wide">
                    {tip.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                    {tip.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground line-clamp-3">
                    {tip.description}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;