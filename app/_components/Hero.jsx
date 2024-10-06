import React from 'react';

function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-text">
            AI Course Generator
            <strong className="font-extrabold text-secondary sm:block">
              Custom Learning Path, Powered By AI
            </strong>
          </h1>

          <p className="mt-4 text-muted sm:text-xl">
            Unlock personalized education with AI-driven course creation. Tailor your learning journey to fit your unique goals and pace.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              className="block w-full rounded-lg bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#7BB02D] focus:outline-none focus:ring active:bg-[#7BB02D] sm:w-auto"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
