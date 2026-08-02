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
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-black font-heading text-[#595959] tracking-tight">
              Mission
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base font-sans leading-relaxed">
              RISY Lab works at the intersection of research and youth
              development. We believe environmental problems can be solved through
              knowledge, and youth are the ones best equipped to find those
              solutions. By nurturing young researchers today, we are building the
              minds that will create a greener world tomorrow.
            </p>
          </div>

          <div className="rounded-[28px] border border-pink-200 bg-gradient-to-br from-white via-pink-50 to-sky-50 p-5 sm:p-6 shadow-sm">
            <div className="inline-flex items-center rounded-full bg-sky-300 px-4 py-1.5 text-sm font-semibold text-sky-950">
              Free
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {['IELTS, TOEFL, GRW, GMAT', 'RISY Skills'].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-pink-500 px-3 py-1.5 text-sm font-semibold text-white"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-dashed border-gray-300 p-4 sm:p-5">

              <div className=" space-y-2 text-sm text-gray-600">
                <p className="">Join our Weekly Podcast</p>
                <p>Follow page to get link update Fb</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
