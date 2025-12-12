const IngredientsSection = () => {
  return (
    <section id="ingredients" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Unwrap the Gift of Healthy Skin.
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              This holiday season, give your skin the deep hydration and essential care it deserves. Get the exclusive holiday edition Lyra Moisturizing Cream, developed with dermatologists, delivers 48-hour moisture with 3 essential ceramides and hyaluronic acid, available at Amazon, Walgreens & Walmart.
            </p>
            <a href="#" className="btn-primary inline-block">
              BUY NOW
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/hero-products.jpg"
                alt="Holiday edition moisturizing cream"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;