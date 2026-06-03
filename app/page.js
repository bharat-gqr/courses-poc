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

const assignedCourses = [
  {
    id: "a1",
    title: "Interview Confidence Bootcamp",
    description: "Complete all clips before your mock interview round.",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    dueDate: daysFromNow(1),
    progress: 72,
    status: "in_progress",
    assignedBy: "Career Coach",
    format: "short",
    skill: "Interview Prep",
    nextClip: "STAR method in 60 seconds",
    totalClips: 12,
    completedClips: 9,
  },
  {
    id: "a2",
    title: "English Speaking for Interviews",
    description: "Fluency drills assigned for placement week.",
    thumbnail:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
    dueDate: daysFromNow(2),
    progress: 35,
    status: "in_progress",
    assignedBy: "HR Team",
    format: "short",
    skill: "Communication",
    nextClip: "Pronunciation warm-up drill",
    totalClips: 15,
    completedClips: 5,
  },
  {
    id: "a3",
    title: "Portfolio That Gets Replies",
    description: "Submit proof of updated portfolio sections.",
    thumbnail:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
    dueDate: daysFromNow(-2),
    progress: 18,
    status: "overdue",
    assignedBy: "Mentor",
    format: "long",
    skill: "Career Growth",
    nextClip: "Case study layout checklist",
    totalClips: 8,
    completedClips: 1,
  },
  {
    id: "a4",
    title: "AI Tools for Career Growth",
    description: "Mandatory toolkit walkthrough for your cohort.",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    dueDate: daysFromNow(5),
    progress: 0,
    status: "not_started",
    assignedBy: "Program Admin",
    format: "short",
    skill: "AI for Work",
    nextClip: "Prompt templates for resumes",
    totalClips: 9,
    completedClips: 0,
  },
  {
    id: "a5",
    title: "30-Day Internship Roadmap",
    description: "Daily checklist — stay on track for internship readiness.",
    thumbnail:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
    dueDate: daysFromNow(7),
    progress: 54,
    status: "in_progress",
    assignedBy: "Career Coach",
    format: "long",
    skill: "Internships",
    nextClip: "Day 17 — outreach message draft",
    totalClips: 30,
    completedClips: 16,
  },
  {
    id: "a6",
    title: "Freelancer Pricing Fundamentals",
    description: "Pricing scenarios and client negotiation practice.",
    thumbnail:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
    dueDate: daysFromNow(14),
    progress: 100,
    status: "completed",
    assignedBy: "Mentor",
    format: "short",
    skill: "Freelancing",
    nextClip: "Final recap",
    totalClips: 10,
    completedClips: 10,
  },
];

function daysFromNow(offset) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  d.setHours(0, 0, 0, 0);
  return d.toISOString();
}

function getDueMeta(dueDateIso) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDateIso);
  due.setHours(0, 0, 0, 0);
  const diffDays = Math.round((due - today) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    const n = Math.abs(diffDays);
    return { label: n === 1 ? "Overdue by 1 day" : `Overdue by ${n} days`, tone: "overdue" };
  }
  if (diffDays === 0) return { label: "Due today", tone: "urgent" };
  if (diffDays === 1) return { label: "Due tomorrow", tone: "urgent" };
  if (diffDays <= 7) return { label: `Due in ${diffDays} days`, tone: "soon" };
  return {
    label: `Due ${due.toLocaleDateString("en-IN", { day: "numeric", month: "short" })}`,
    tone: "normal",
  };
}

function deriveStatus(course) {
  if (course.status === "completed" || course.progress >= 100) return "completed";
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(course.dueDate);
  due.setHours(0, 0, 0, 0);
  if (due < today && course.progress < 100) return "overdue";
  if (course.progress > 0) return "in_progress";
  return "not_started";
}

function clipsLeft(course) {
  return Math.max(0, course.totalClips - course.completedClips);
}

function estMinutesLeft(course) {
  return clipsLeft(course) * 4;
}

function getOverallReadiness(courses) {
  const active = courses.filter((c) => deriveStatus(c) !== "completed");
  if (active.length === 0) return 100;
  const sum = active.reduce((acc, c) => acc + c.progress, 0);
  return Math.round(sum / active.length);
}

function getContinueCourse(courses) {
  const open = courses.filter((c) => deriveStatus(c) !== "completed");
  const inProgress = open.filter((c) => deriveStatus(c) === "in_progress");
  const pool = inProgress.length ? inProgress : open;
  return [...pool].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))[0] ?? null;
}

function getFocusCourses(courses) {
  return [...courses]
    .filter((c) => deriveStatus(c) !== "completed")
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 3);
}

function getWeekTimeline(courses) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = [];

  for (let i = 0; i < 7; i += 1) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    const label =
      i === 0 ? "Today" : i === 1 ? "Tmrw" : d.toLocaleDateString("en-IN", { weekday: "short" });
    const dueCourses = courses.filter((c) => {
      if (deriveStatus(c) === "completed") return false;
      const due = new Date(c.dueDate);
      due.setHours(0, 0, 0, 0);
      return due.getTime() === d.getTime();
    });
    days.push({ key, label, isToday: i === 0, count: dueCourses.length, courses: dueCourses });
  }

  return days;
}

const ASSIGNED_FILTERS = [
  { id: "all", label: "All" },
  { id: "in_progress", label: "In progress" },
  { id: "not_started", label: "Not started" },
  { id: "completed", label: "Completed" },
  { id: "overdue", label: "Overdue" },
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

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconBookmark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 4h12a1 1 0 011 1v15l-7-4-7 4V5a1 1 0 011-1z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PageTabBar({ activeTab, onChange }) {
  return (
    <nav className="pageTabBar" aria-label="Main sections">
      <button
        type="button"
        className={`pageTab ${activeTab === "home" ? "active" : ""}`}
        onClick={() => onChange("home")}
        aria-pressed={activeTab === "home"}
      >
        Home
      </button>
      <button
        type="button"
        className={`pageTab ${activeTab === "assigned" ? "active" : ""}`}
        onClick={() => onChange("assigned")}
        aria-pressed={activeTab === "assigned"}
      >
        Assigned
        <span className="tabBadge">{assignedCourses.filter((c) => deriveStatus(c) !== "completed").length}</span>
      </button>
    </nav>
  );
}

function ReadinessRing({ value }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="readinessRing" aria-label={`Learning readiness ${value} percent`}>
      <svg viewBox="0 0 100 100" role="img">
        <circle className="ringTrack" cx="50" cy="50" r={radius} />
        <circle
          className="ringProgress"
          cx="50"
          cy="50"
          r={radius}
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <div className="ringCenter">
        <strong>{value}%</strong>
        <span>ready</span>
      </div>
    </div>
  );
}

function ContinueLearningHero({ course }) {
  if (!course) {
    return (
      <div className="continueHero complete">
        <div>
          <p className="heroEyebrow">All caught up</p>
          <h2>Great work — every assignment is complete.</h2>
          <p>Explore Home for new skills while you wait for the next cohort assignment.</p>
        </div>
      </div>
    );
  }

  const due = getDueMeta(course.dueDate);
  const left = clipsLeft(course);
  const minutes = estMinutesLeft(course);

  return (
    <article className={`continueHero tone-${due.tone}`}>
      <img src={course.thumbnail} alt="" className="continueHeroBg" />
      <div className="continueHeroOverlay" />
      <div className="continueHeroContent">
        <p className="heroEyebrow">Continue learning</p>
        <h2>{course.title}</h2>
        <p className="continueNextClip">
          Up next: <strong>{course.nextClip}</strong>
        </p>
        <div className="continueHeroMeta">
          <span className={`dueLabel tone-${due.tone}`}>{due.label}</span>
          <span>
            {left} clips left · ~{minutes} min
          </span>
          <span className="skillChip">{course.skill}</span>
        </div>
        <div className="progressTrack light" aria-hidden="true">
          <span className="progressFill" style={{ width: `${course.progress}%` }} />
        </div>
        <button type="button" className="primaryBtn continueCta">
          {deriveStatus(course) === "not_started" ? "Start course" : "Resume now"}
        </button>
      </div>
    </article>
  );
}

function WeekTimeline({ courses }) {
  const days = getWeekTimeline(courses);

  return (
    <div className="weekTimeline">
      {days.map((day) => (
        <div key={day.key} className={`weekDay ${day.isToday ? "isToday" : ""}`}>
          <span className="weekDayLabel">{day.label}</span>
          <div className={`weekDayDot ${day.count > 0 ? "hasDue" : ""} ${day.count > 1 ? "busy" : ""}`}>
            {day.count > 0 ? day.count : ""}
          </div>
          {day.isToday && day.count > 0 && <span className="weekDayHint">{day.count} due</span>}
        </div>
      ))}
    </div>
  );
}

function FocusCard({ course, rank }) {
  const due = getDueMeta(course.dueDate);
  const left = clipsLeft(course);

  return (
    <article className={`focusCard tone-${due.tone}`}>
      <span className="focusRank">#{rank}</span>
      <img src={course.thumbnail} alt="" className="focusThumb" />
      <div className="focusBody">
        <span className="skillChip">{course.skill}</span>
        <h4>{course.title}</h4>
        <p className={`dueLabel tone-${due.tone}`}>{due.label}</p>
        <div className="clipMeter">
          <span>
            {course.completedClips}/{course.totalClips} clips
          </span>
          <span>{left} left</span>
        </div>
        <div className="progressTrack" aria-hidden="true">
          <span className="progressFill" style={{ width: `${course.progress}%` }} />
        </div>
        <button type="button" className="resumeBtn">
          {deriveStatus(course) === "not_started" ? "Start" : "Resume"}
        </button>
      </div>
    </article>
  );
}

function LearningPathCard({ course }) {
  const due = getDueMeta(course.dueDate);
  const status = deriveStatus(course);
  const left = clipsLeft(course);
  const minutes = estMinutesLeft(course);

  return (
    <article className={`pathCard status-${status}`}>
      <div className="pathCardMedia">
        <img src={course.thumbnail} alt="" />
        <span className={`pathFormat ${course.format}`}>{course.format === "short" ? "Short" : "Long"}</span>
      </div>
      <div className="pathCardBody">
        <div className="pathCardTop">
          <div>
            <span className="skillChip">{course.skill}</span>
            <h4>{course.title}</h4>
          </div>
          <span className={`statusPill status-${status}`}>
            {status === "in_progress"
              ? "In progress"
              : status === "not_started"
                ? "Not started"
                : status === "overdue"
                  ? "Overdue"
                  : "Completed"}
          </span>
        </div>
        <p className="pathNext">Next: {course.nextClip}</p>
        <div className="pathProgressRow">
          <div className="progressTrack" aria-hidden="true">
            <span className="progressFill" style={{ width: `${course.progress}%` }} />
          </div>
          <span>{course.progress}%</span>
        </div>
        <div className="pathMeta">
          <span>
            {course.completedClips}/{course.totalClips} clips · ~{minutes} min left
          </span>
          <span className={`dueLabel tone-${due.tone}`}>{due.label}</span>
        </div>
        <div className="pathFooter">
          <span>Assigned by {course.assignedBy}</span>
          <button type="button" className="resumeBtn compact">
            {status === "completed" ? "Review" : status === "not_started" ? "Start" : "Resume"}
          </button>
        </div>
      </div>
    </article>
  );
}

function AssignedView() {
  const [filter, setFilter] = useState("all");
  const readiness = getOverallReadiness(assignedCourses);
  const continueCourse = getContinueCourse(assignedCourses);
  const focusCourses = getFocusCourses(assignedCourses);

  const openCount = assignedCourses.filter((c) => deriveStatus(c) !== "completed").length;
  const clipsToday = assignedCourses
    .filter((c) => deriveStatus(c) !== "completed")
    .reduce((sum, c) => sum + clipsLeft(c), 0);

  const sorted = [...assignedCourses].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  const filtered = sorted.filter((course) => {
    const status = deriveStatus(course);
    if (filter === "all") return true;
    return status === filter;
  });

  return (
    <div className="assignedView">
      <section className="learnerDashboard">
        <div className="dashboardIntro">
          <ReadinessRing value={readiness} />
          <div>
            <p className="heroEyebrow">Your learning path</p>
            <h2>
              {openCount > 0
                ? `${openCount} active assignments`
                : "You are placement-ready on assigned work"}
            </h2>
            <p>
              {clipsToday > 0
                ? `Finish ~${Math.min(clipsToday, 3)} clips today to stay on track. Small steps compound.`
                : "No open clips right now. Review completed courses or explore Home."}
            </p>
            <div className="dashboardPills">
              <span>{openCount} open</span>
              <span>{clipsToday} clips remaining</span>
              <span>
                {assignedCourses.filter((c) => deriveStatus(c) === "overdue").length} overdue
              </span>
            </div>
          </div>
        </div>
        <ContinueLearningHero course={continueCourse} />
      </section>

      <section className="sectionBlock assignedSection timelineSection">
        <div className="sectionHead">
          <h3>This week</h3>
          <span>Plan your learning rhythm</span>
        </div>
        <WeekTimeline courses={assignedCourses} />
      </section>

      {focusCourses.length > 0 && (
        <section className="sectionBlock assignedSection">
          <div className="sectionHead">
            <h3>Focus queue</h3>
            <span>Do these first — nearest deadlines</span>
          </div>
          <div className="focusQueue">
            {focusCourses.map((course, idx) => (
              <FocusCard key={course.id} course={course} rank={idx + 1} />
            ))}
          </div>
        </section>
      )}

      <section className="sectionBlock assignedSection">
        <div className="sectionHead">
          <h3>All learning paths</h3>
          <span>{filtered.length} courses</span>
        </div>

        <div className="assignedFilterStrip">
          {ASSIGNED_FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`categoryChip ${filter === item.id ? "active" : ""}`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="assignedEmptyState">
            <h4>No courses in this view</h4>
            <p>Try another filter or check back when new assignments arrive.</p>
          </div>
        ) : (
          <div className="pathCardList">
            {filtered.map((course) => (
              <LearningPathCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>
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
  const [activeTab, setActiveTab] = useState("home");
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

  const pendingAssigned = assignedCourses.filter((c) => deriveStatus(c) !== "completed").length;

  return (
    <main className="seekhoInspiredPage">
      <header className="appTopRail">
        <div className="topRailBrand">
          <span className="brandMark" aria-hidden="true">
            GQ
          </span>
          <div className="topRailTitles">
            <p className="topRailEyebrow">
              Grow<b>QR</b> Videos
            </p>
            <p className="topRailTagline">
              <span>Learn</span>
              <span className="taglineDot" aria-hidden="true" />
              <span>Verify</span>
              <span className="taglineDot" aria-hidden="true" />
              <span>Grow</span>
            </p>
          </div>
        </div>

        <PageTabBar activeTab={activeTab} onChange={setActiveTab} />

        <div className="topRailUtils">
          <button type="button" className="utilIconBtn" aria-label="Search videos">
            <IconSearch />
          </button>
          <button type="button" className="utilIconBtn" aria-label="Saved videos">
            <IconBookmark />
            {pendingAssigned > 0 ? (
              <span className="utilBadge" aria-hidden="true">
                {pendingAssigned}
              </span>
            ) : null}
          </button>
        </div>
      </header>

      {activeTab === "assigned" ? (
        <AssignedView />
      ) : (
        <>
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
        </>
      )}
    </main>
  );
}
