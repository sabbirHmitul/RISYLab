import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '../Common/Container';
import ResearchAchievementCard from './ResearchAchievementCard';
import { NewsItem } from '../../types/news';
import hydrologyMapImg from '../../../assets/img/research/hydrology-map.webp';

/**
 * Achievements section for the Research page.
 * Compact cards (photo left, text right) in a slider on wide screens:
 * two full cards plus one third of the next are visible, the row slides every 5 seconds,
 * and left / right arrows let visitors move it by hand. Add more cards to the list below;
 * the slider adjusts to any number of cards.
 * Edit the cards here; they are separate from the home page and News page stories.
 */
const researchAchievements: (NewsItem & { imageFit?: 'cover' | 'contain' })[] = [
  {
    id: 'research-ach-zero-waste',
    title: 'Zero Waste Product',
    excerpt:
      'We are developing products from biomass sources. From the waste and used products, we will then develop new usable products for human applications.',
    date: 'Aug, 2026',
    category: 'Patent & Implementation',
    imageUrl: '', // photo to be uploaded
    link: '#',
    collaborators: ['Dr. Latiful Bari (CARS, DU)', 'Suman Dewanjee (USA)', 'UNIDO, Bangladesh'],
  },
  {
    id: 'research-ach-hydrology',
    title: 'Prediction Algorithm for Climate & Hydrology in Bangladesh',
    excerpt:
      'We are analyzing hydrology and developing machine learning models for advanced hydrological prediction across Bangladesh.',
    date: 'Jun, 2025',
    category: 'Ongoing Project',
    imageUrl: hydrologyMapImg,
    imageFit: 'contain', // show the whole map, no cropping
    link: '#',
    collaborators: ['Mehedi Hasan (Canada)', 'IWA'],
  },
  {
    id: 'research-ach-new-project',
    title: 'New Project', // title to be added
    excerpt: 'Details of this project will be added soon.', // text to be added
    date: 'Oct, 2026',
    category: 'Ongoing Project',
    imageUrl: '', // photo to be uploaded
    link: '#',
    collaborators: [],
  },
];

const SLIDE_INTERVAL_MS = 5000;
const GAP_PX = 40; // space between cards (gap-10)

/**
 * Sliding position for step `i` of `n` cards.
 * Card width w = 3/7 of (row width - 2 gaps), so two cards plus one third of the next fill the row.
 * Steps 0 .. n-3 move one card at a time; the last step lines the final card up with the right edge,
 * leaving one third of the previous card visible on the left.
 */
const offsetFor = (i: number, n: number) => {
  const isLast = i === n - 2;
  const widthSevenths = isLast ? 3 * n - 7 : 3 * i; // card widths, in sevenths of (row - 2 gaps)
  const gaps = isLast ? n - 3 : i;
  return `translateX(calc((100% - ${2 * GAP_PX}px) * -${widthSevenths} / 7 - ${gaps * GAP_PX}px))`;
};

const arrowClass =
  'absolute top-[113px] -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md ring-1 ring-gray-200 transition hover:bg-pink-600 hover:text-white disabled:pointer-events-none disabled:opacity-0';

export const ResearchAchievements: React.FC = () => {
  const total = researchAchievements.length;
  const lastStep = Math.max(0, total - 2);
  const canSlide = total > 2;
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto slide every 5 seconds; after the last step it goes back to the start.
  // The timer restarts whenever the step changes, so a click on an arrow gets a full 5 seconds.
  useEffect(() => {
    if (!canSlide || paused) return;
    const timer = window.setTimeout(
      () => setStep((prev) => (prev >= lastStep ? 0 : prev + 1)),
      SLIDE_INTERVAL_MS,
    );
    return () => window.clearTimeout(timer);
  }, [canSlide, paused, step, lastStep]);

  return (
    <section id="achievements" className="py-10 bg-gray-50/70 border-t border-gray-100">
      <Container>
        {/* Wide screens: slider with left / right arrows */}
        <div
          className="relative hidden xl:block"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex gap-10 transition-transform duration-700 ease-in-out motion-reduce:transition-none"
              style={{ transform: canSlide ? offsetFor(step, total) : 'none' }}
            >
              {researchAchievements.map((item) => (
                <div key={item.id} className="flex-none" style={{ width: `calc((100% - ${2 * GAP_PX}px) * 3 / 7)` }}>
                  <ResearchAchievementCard item={item} collaboratorsLabel="Thanks to:" compact />
                </div>
              ))}
            </div>
          </div>

          {canSlide && (
            <>
              <button
                type="button"
                aria-label="Previous"
                className={`${arrowClass} -left-5`}
                onClick={() => setStep((prev) => Math.max(0, prev - 1))}
                disabled={step === 0}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                className={`${arrowClass} -right-5`}
                onClick={() => setStep((prev) => Math.min(lastStep, prev + 1))}
                disabled={step === lastStep}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Smaller screens: cards stacked one under another */}
        <div className="grid grid-cols-1 gap-10 xl:hidden">
          {researchAchievements.map((item) => (
            <ResearchAchievementCard key={item.id} item={item} collaboratorsLabel="Thanks to:" />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ResearchAchievements;
