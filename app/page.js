"use client";

import { useEffect, useRef, useState } from "react";

const learningCards = [
  {
    title: "Interview Confidence Bootcamp",
    description: "Top answers + body language in one practical sequence.",
    duration: "12m series",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Portfolio That Gets Replies",
    description: "Structure your projects for recruiter attention quickly.",
    duration: "8 clips",
    thumbnail:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Freelancer Pricing Fundamentals",
    description: "How to quote rates without losing serious clients.",
    duration: "10m series",
    thumbnail:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "English Speaking for Interviews",
    description: "Fluency templates for high-pressure conversation rounds.",
    duration: "15m series",
    thumbnail:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "AI Tools for Career Growth",
    description: "Use AI to prepare faster and showcase stronger outputs.",
    duration: "9 clips",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "30-Day Internship Roadmap",
    description: "Daily steps to become internship-ready with proof.",
    duration: "30 steps",
    thumbnail:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
  },
];

const topRankedCards = [
  {
    title: "AI Channel Growth Blueprint",
    description: "A practical plan to scale content and improve watch time.",
    duration: "7 clips",
    thumbnail:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "YouTube Growth in 30 Days",
    description: "The exact posting and packaging routine creators use.",
    duration: "10 clips",
    thumbnail:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Reels That Cross 1M Views",
    description: "Framework for hooks, retention loops, and payoff beats.",
    duration: "12 clips",
    thumbnail:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Notification CTR Mastery",
    description: "Improve click-through with better titles and thumbnails.",
    duration: "8 clips",
    thumbnail:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Learner Journey Design",
    description: "Structure content flow to maximize completion rates.",
    duration: "9 clips",
    thumbnail:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Shorts Editing Speedrun",
    description: "Edit faster while keeping rhythm and story clarity.",
    duration: "11 clips",
    thumbnail:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Monetization Without Burnout",
    description: "Build recurring revenue with sustainable production.",
    duration: "6 clips",
    thumbnail:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Audience Psychology Basics",
    description: "Use demand cues and narrative tension to keep viewers.",
    duration: "7 clips",
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Brand + Personal Identity",
    description: "Create a recognizable style that compounds over time.",
    duration: "5 clips",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Content Ops for Teams",
    description: "A lightweight workflow to ship consistently every week.",
    duration: "8 clips",
    thumbnail:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1000&q=80",
  },
];

const testimonials = [
  {
    name: "Nikita, Delhi",
    quote: "Short, practical, and directly useful. I applied tips in interviews the same week.",
  },
  {
    name: "Prakash, Bengaluru",
    quote: "The flow feels addictive in a good way. I learn in 10-minute breaks every day.",
  },
  {
    name: "Aditya, Patna",
    quote: "No clutter, no noise — just actionable learning and clear progress.",
  },
];

function LearningCarousel({ cards }) {
  const [cardsPerView, setCardsPerView] = useState(5);
  const trackRef = useRef(null);
  const frameRef = useRef(0);
  const offsetRef = useRef(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 720) setCardsPerView(1);
      else if (window.innerWidth < 900) setCardsPerView(2);
      else if (window.innerWidth < 1200) setCardsPerView(3);
      else setCardsPerView(5);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (cards.length <= cardsPerView) return undefined;
    const track = trackRef.current;
    if (!track) return undefined;

    const tick = () => {
      if (!trackRef.current) return;
      if (!isPausedRef.current) {
        const singleSetWidth = trackRef.current.scrollWidth / 2;
        offsetRef.current += 0.35;
        if (offsetRef.current >= singleSetWidth) {
          offsetRef.current -= singleSetWidth;
        }
        trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
      }
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [cards.length, cardsPerView]);

  const nudge = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.clientWidth / cardsPerView;
    const step = cardWidth + 14;
    const singleSetWidth = track.scrollWidth / 2;
    offsetRef.current += direction * step;

    while (offsetRef.current < 0) offsetRef.current += singleSetWidth;
    while (offsetRef.current >= singleSetWidth) offsetRef.current -= singleSetWidth;

    track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
  };

  const cardBasis = `calc((100% - ${(cardsPerView - 1) * 14}px) / ${cardsPerView})`;
  const renderSet = (setKey) => (
    <div className="learningSet" key={setKey}>
      <div className="railEdgeSpacer" aria-hidden="true" />
      {cards.map((card, idx) => (
        <article
          className="learningCard"
          key={`${setKey}-${card.title}-${idx}`}
          style={{ flex: `0 0 ${cardBasis}` }}
        >
          <img src={card.thumbnail} alt={card.title} className="learningThumb" />
          <div className="learningBody">
            <h4>{card.title}</h4>
            <p>{card.description}</p>
            <span>{card.duration}</span>
          </div>
        </article>
      ))}
      <div className="railEdgeSpacer" aria-hidden="true" />
    </div>
  );

  return (
    <div className="learningCarouselWrap">
      <div
        className="learningViewport withCorners"
        onMouseEnter={() => {
          isPausedRef.current = true;
        }}
        onMouseLeave={() => {
          isPausedRef.current = false;
        }}
      >
        <button type="button" className="cornerNav left" onClick={() => nudge(-1)} aria-label="Previous For You cards">
          ←
        </button>

        <div className="learningTrack" ref={trackRef}>
          {renderSet("set-a")}
          {renderSet("set-b")}
        </div>

        <button type="button" className="cornerNav right" onClick={() => nudge(1)} aria-label="Next For You cards">
          →
        </button>
      </div>
    </div>
  );
}

function RankedCarousel({ cards }) {
  const [cardsPerView, setCardsPerView] = useState(5);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 720) setCardsPerView(1);
      else if (window.innerWidth < 900) setCardsPerView(2);
      else if (window.innerWidth < 1200) setCardsPerView(3);
      else setCardsPerView(5);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, cards.length - cardsPerView);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [index, maxIndex]);

  useEffect(() => {
    if (maxIndex <= 0) return undefined;
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2600);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const nudge = (direction) => {
    setIndex((prev) => {
      if (direction > 0) return prev >= maxIndex ? 0 : prev + 1;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  return (
    <div className="learningCarouselWrap rankedCarouselWrap">
      <div className="learningViewport withCorners">
        <button type="button" className="cornerNav left" onClick={() => nudge(-1)} aria-label="Previous Top 10 cards">
          ←
        </button>

        <div
          className="learningTrack"
          style={{
            transform: `translateX(-${(100 / cardsPerView) * index}%)`,
          }}
        >
          {cards.map((card, idx) => {
            const rank = idx + 1;
            return (
              <article
                className="learningCard rankedCard"
                key={`${card.title}-${idx}`}
                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
              >
                <img src={card.thumbnail} alt={card.title} className="learningThumb" />
                <div className="rankNumber" aria-hidden="true">
                  {rank}
                </div>
                <div className="learningBody">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                  <span>{card.duration}</span>
                </div>
              </article>
            );
          })}
        </div>

        <button type="button" className="cornerNav right" onClick={() => nudge(1)} aria-label="Next Top 10 cards">
          →
        </button>
      </div>
    </div>
  );
}

export default function Page() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showAllForYou, setShowAllForYou] = useState(false);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const goNextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  const goPrevTestimonial = () =>
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <main className="seekhoInspiredPage">
      <header className="stickyTopNav">
        <div className="brandBlock">
          <span className="brandHalo" aria-hidden="true" />
          <div>
            <p>GrowQR Learn</p>
            <h1>Short Learning Videos</h1>
          </div>
        </div>
        <div className="navCtas">
          <button type="button" className="ghostBtn">
            Download App
          </button>
          <button type="button" className="primaryBtn">
            Start Learning
          </button>
        </div>
      </header>

      <section className="sectionBlock forYouSection">
        <div className="sectionHead">
          <h3>For You Videos</h3>
          <button type="button" className="viewAllLink" onClick={() => setShowAllForYou((prev) => !prev)}>
            {showAllForYou ? "Collapse" : "View all"}
          </button>
        </div>
        {showAllForYou ? (
          <div className="expandedGrid">
            {learningCards.map((card) => (
              <article className="learningCard expanded" key={card.title}>
                <img src={card.thumbnail} alt={card.title} className="learningThumb" />
                <div className="learningBody">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                  <span>{card.duration}</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <LearningCarousel cards={learningCards} />
        )}

        <div className="sectionHead topTenHead">
          <h3>Top 10 On Grow<b>QR</b></h3>
        </div>
        <RankedCarousel cards={topRankedCards} />
      </section>

      <section className="sectionBlock">
        <div className="sectionHead">
          <h3>Why learners trust this experience</h3>
          <div className="headActions">
            <button
              type="button"
              className="viewAllLink"
              onClick={() => setShowAllTestimonials((prev) => !prev)}
            >
              {showAllTestimonials ? "Collapse" : "View all"}
            </button>
            <button type="button" className="navCircle" onClick={goPrevTestimonial} aria-label="Previous testimonial">
              ←
            </button>
            <button type="button" className="navCircle" onClick={goNextTestimonial} aria-label="Next testimonial">
              →
            </button>
          </div>
        </div>
        {showAllTestimonials ? (
          <div className="expandedGrid">
            {testimonials.map((item) => (
              <article className="testimonialCard" key={item.name}>
                <p className="quote">"{item.quote}"</p>
                <span className="author">{item.name}</span>
              </article>
            ))}
          </div>
        ) : (
          <article className="testimonialCard">
            <p className="quote">"{testimonials[testimonialIndex].quote}"</p>
            <span className="author">{testimonials[testimonialIndex].name}</span>
            <div className="testimonialDots">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={`dot ${index === testimonialIndex ? "active" : ""}`}
                  onClick={() => setTestimonialIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </article>
        )}
      </section>
    </main>
  );
}
