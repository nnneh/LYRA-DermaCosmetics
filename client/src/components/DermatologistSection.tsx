import ingredientsImage from '@/assets/ingredients-hero.jpg';

const DermatologistSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square md:aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={ingredientsImage.src}
                alt="Dr. Hope Mitchell, Board Certified Dermatologist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Quote */}
          <div className="order-1 lg:order-2 space-y-6">
            <blockquote className="relative">
              <div className="text-primary text-6xl font-display leading-none mb-4">"</div>
              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed italic">
                As a dermatologist, I value products that are effective, affordable, and backed by science, like Lyra, which never deviate from the ceramide-based formulation and the importance of a healthy skin barrier.
              </p>
            </blockquote>
            <div className="pt-4 border-t border-border">
              <p className="font-display text-sm font-bold text-foreground uppercase tracking-wide">
                DR. HOPE MITCHELL
              </p>
              <p className="font-body text-sm text-muted-foreground">
                BOARD CERTIFIED DERMATOLOGIST
              </p>
            </div>
            <a href="#" className="font-display text-sm font-semibold text-primary hover:underline inline-block">
              Why Lyra →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DermatologistSection;