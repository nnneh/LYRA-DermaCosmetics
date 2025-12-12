const QuizSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold">
            Skincare Solution Finder
          </h2>
          <p className="font-body text-lg opacity-90">
            Personalized skincare developed with dermatologists ready at your finger tips
          </p>
          <a href="#" className="btn-white inline-block">
            TAKE THE QUIZ
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;