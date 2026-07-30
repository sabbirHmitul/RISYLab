import React from 'react';
import Container from '../Common/Container';


export const Mission: React.FC = () => {


  return (
    <section id="mission" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative Subtle Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-gray-900 tracking-tight">Mission
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base font-sans leading-relaxed">
            At RISY Team, we combine academic rigor with youthful passion to address societal challenges and empower the next generation of researchers. At RISY Team, we combine academic rigor with youthful passion to address societal challenges and empower the next generation of researchers. At RISY Team, we combine academic rigor with youthful passion to address societal challenges and empower the next generation of researchers. At RISY Team, we combine academic rigor with youthful passion to address societal challenges and empower the next generation of researchers. At RISY Team, we combine academic rigor with youthful passion to address societal challenges and empower the next generation of researchers.          </p>
        </div>



      </Container>
    </section>
  );
};

export default Mission;
