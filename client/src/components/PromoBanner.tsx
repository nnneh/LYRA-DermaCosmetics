const PromoBanner = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              FIND THE PERFECT GIFT FOR YOU & YOURS
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Take our Holiday Gift Finder quiz to discover the perfect skincare gift for yourself or someone close to you. Just answer a few questions to share the gift of healthy skin!
            </p>
            <a href="#" className="btn-primary inline-block">
              TAKE THE QUIZ
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden bg-primary">
              <img
                src="/heroImage-products.jpg"
                alt="Gift finder promotional banner"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;