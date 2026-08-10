import React from "react";
import Container from "../Common/Container";

export const Mission: React.FC = () => {
  return (
    <section
      id="mission"
      className="py-5 bg-white relative overflow-hidden"
    >
      {/* Decorative Subtle Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container>
        <div className="grid gap-30 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="text-center lg:text-left max-w-6xl mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-black font-heading text-[#595959] tracking-tight">
              Mission
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base font-sans leading-relaxed text-justify ">
              RISY Lab works at the intersection of research and youth
              development. We believe environmental problems can be solved through
              knowledge, and youth are the ones best equipped to find those
              solutions. By nurturing young researchers today, we are building the
              minds that will create a greener world tomorrow.
            </p>
          </div>

          <div className="rounded-lg border border-pink-200 bg-gradient-to-br from-white via-pink-50 to-sky-50 p-4  shadow-sm">
            <div className=" rounded-lg bg-sky-300 px-4 py-1.5 text-sm font-semibold text-sky-950">
              Free
            </div>

            <div className="mt-4 flex flex-wrap gap-5">
              {[ 'RISY Skills', 'IELTS, TOEFL, GRW, GMAT'].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-pink-500 px-4 py-1.5 text-sm font-semibold text-white"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-2 rounded-2xl border border-dashed border-gray-300 ">

              <div className=" space-y-2 text-sm text-gray-600 bg-amber-100 p-4">
                <p className="font-bold text-lg">Join our Weekly Podcast</p>
                <button className="bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors w-full">
                  Get Update Link At Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
