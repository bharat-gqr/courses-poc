"use client";

import { useEffect, useRef, useState } from "react";

const mentors = [
  {
    name: "Aarav Bhatia",
    role: "Interview Mentor",
    videos: 156,
    views: "1.2M",
    thumbnail:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "Megha Singh",
    role: "Career Coach",
    videos: 94,
    views: "860K",
    thumbnail:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "Rohit Menon",
    role: "Freelance Mentor",
    videos: 122,
    views: "740K",
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "Riya Patel",
    role: "Communication Coach",
    videos: 110,
    views: "690K",
    thumbnail:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "Neeraj Kulkarni",
    role: "Internship Mentor",
    videos: 88,
    views: "560K",
    thumbnail:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "Sana Farooq",
    role: "Growth Strategist",
    videos: 102,
    views: "610K",
    thumbnail:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "Kabir Ahuja",
    role: "AI Career Coach",
    videos: 75,
    views: "490K",
    thumbnail:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "Ishita Rao",
    role: "Communication Mentor",
    videos: 138,
    views: "910K",
    thumbnail:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=640&q=80",
  },
];

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

function MentorCarousel({ mentors }) {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 720) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, mentors.length - cardsPerView);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [index, maxIndex]);

  const goNext = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const goPrev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <div className="learningCarouselWrap">
      <div className="learningViewport withCorners">
        <button type="button" className="cornerNav left" onClick={goPrev} aria-label="Previous mentors">
          ←
        </button>

        <div
          className="learningTrack"
          style={{
            transform: `translateX(-${(100 / cardsPerView) * index}%)`,
          }}
        >
          {mentors.map((mentor) => (
            <article
              className="mentorCard"
              key={mentor.name}
              style={{ flex: `0 0 ${100 / cardsPerView}%` }}
            >
              <img src={mentor.thumbnail} alt={mentor.name} className="mentorThumb" />
              <h4>{mentor.name}</h4>
              <p>{mentor.role}</p>
              <div className="mentorMeta">
                <span>{mentor.videos} videos</span>
                <span>{mentor.views} views</span>
              </div>
            </article>
          ))}
        </div>

        <button type="button" className="cornerNav right" onClick={goNext} aria-label="Next mentors">
          →
        </button>
      </div>
    </div>
  );
}

export default function Page() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showAllForYou, setShowAllForYou] = useState(false);
  const [showAllMentors, setShowAllMentors] = useState(false);
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
      </section>

      <section className="sectionBlock">
        <div className="sectionHead">
          <h3>Learn from the best mentors</h3>
          <button type="button" className="viewAllLink" onClick={() => setShowAllMentors((prev) => !prev)}>
            {showAllMentors ? "Collapse" : "View all"}
          </button>
        </div>
        {showAllMentors ? (
          <div className="expandedGrid mentorsGrid">
            {mentors.map((mentor) => (
              <article className="mentorCard" key={mentor.name}>
                <img src={mentor.thumbnail} alt={mentor.name} className="mentorThumb" />
                <h4>{mentor.name}</h4>
                <p>{mentor.role}</p>
                <div className="mentorMeta">
                  <span>{mentor.videos} videos</span>
                  <span>{mentor.views} views</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <MentorCarousel mentors={mentors} />
        )}
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
