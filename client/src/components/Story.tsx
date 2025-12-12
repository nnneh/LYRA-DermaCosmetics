const StorySection = () => {
  return (
    <section id="story" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="/hero-products.jpg"
                alt="Lyra Healing Ointment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Lyra Healing Ointment
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Formulated with Ceramides and Hyaluronic Acid, this healing ointment locks in moisture and helps repair the skin barrier with a non-greasy finish
            </p>
            <a href="#" className="btn-primary inline-block">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;