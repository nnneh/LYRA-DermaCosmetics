const ContactSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide">
        <div className="text-center max-w-xl mx-auto">
          <p className="font-display text-xs font-semibold text-primary uppercase tracking-widest mb-4">
            LYRA IS DEVELOPED WITH DERMATOLOGISTS
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            Have Questions?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary">
              Contact us
            </a>
            <a href="#" className="btn-outline">
              SEE OUR FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;