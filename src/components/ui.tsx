import React, { ReactNode, useEffect, useState } from "react";
import { Sparkles, Star } from "lucide-react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  narrow?: boolean;
};

export function SectionShell({ children, className = "", id, narrow = false }: SectionShellProps) {
  const widthClass = narrow ? "section-shell-narrow" : "section-shell";
  return (
    <section id={id} className={`w-full flex flex-col items-center text-center text-white ${className}`}>
      <div className={`${widthClass} flex flex-col items-center gap-6 w-full`}>{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={`w-full flex flex-col gap-3 ${alignment}`}>
      {eyebrow && <p className="tagline mb-1">{eyebrow}</p>}
      <h2 className="heading-2 title-gradient">{title}</h2>
      {description && <div className="body-text text-slate-200 readable-block">{description}</div>}
    </div>
  );
}

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return <div className={`card-surface bg-white/5 border border-white/10 rounded-card backdrop-blur ${className}`}>{children}</div>;
}

type CTASectionProps = {
  title: ReactNode;
  body: ReactNode;
  ctaLabel: string;
  note: ReactNode;
  initialTime?: { hours: number; minutes: number; seconds: number };
};

export function CTASection({ title, body, ctaLabel, note, initialTime = { hours: 23, minutes: 59, seconds: 45 } }: CTASectionProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionShell className="bg-[#0A0A0F] text-white relative overflow-hidden py-32" narrow>
      <div className="absolute inset-0 pattern-mist opacity-70" />
      <div className="layout-container relative z-10 max-w-[900px] mx-auto flex flex-col items-center gap-6">
        <div className="w-full flex flex-col items-center gap-6 text-center">
          <h2 className="heading-2 title-gradient mb-6">{title}</h2>
          <div className="body-text text-slate-200 mb-12 readable-block split-lines mx-auto">{body}</div>

          <Card className="p-6 mb-8 max-w-md mx-auto card-emphasis">
            <div className="caption-text text-amber-200 mb-3">특별 혜택 종료까지</div>
            <div className="flex items-center justify-center gap-3 text-white">
              {[
                { label: "시간", value: String(timeLeft.hours).padStart(2, "0") },
                { label: "분", value: String(timeLeft.minutes).padStart(2, "0") },
                { label: "초", value: String(timeLeft.seconds).padStart(2, "0") },
              ].map((item, idx) => (
                <React.Fragment key={item.label}>
                  <div className="text-center">
                    <div className="text-3xl font-semibold bg-black/40 rounded-lg px-4 py-2 font-[600]">{item.value}</div>
                    <div className="caption-text mt-1 text-slate-300">{item.label}</div>
                  </div>
                  {idx < 2 && <div className="text-2xl text-amber-400">:</div>}
                </React.Fragment>
              ))}
            </div>
          </Card>

          <button className="primary-cta px-16 py-6 rounded-full text-xl transition-all transform hover:scale-105 shadow-2xl shadow-amber-500/40 mb-4">
            <span className="flex items-center gap-3 mx-auto w-fit">
              <Sparkles className="w-6 h-6" />
              {ctaLabel}
            </span>
          </button>

          <p className="caption-text flex items-center justify-center gap-2 text-slate-400">
            <Star className="w-4 h-4 text-amber-500" />
            {note}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

type TrustSectionProps = {
  heading: ReactNode;
  intro: ReactNode;
  highlights: { icon: React.ComponentType<{ className?: string }>; text: ReactNode }[];
  narrow?: boolean;
  className?: string;
  columns?: 2 | 3;
};

export function TrustSection({ heading, intro, highlights, narrow = false, className = "", columns = 3 }: TrustSectionProps) {
  const maxWidth = narrow ? "max-w-[900px]" : "max-w-5xl";
  const gridCols = columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 md:grid-cols-3";
  return (
    <section className={`w-full bg-[#0A0A0F] text-white py-20 overflow-visible ${className}`}>
      <ParticlesLayer />
      <div className={`${maxWidth} mx-auto px-4 relative z-10 flex flex-col items-center gap-6`}>
        <SectionHeading title={heading} description={intro} />
        <div className={`mt-6 grid ${gridCols} gap-x-8 gap-y-8 justify-items-center w-full`}>
          {highlights.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center hover:border-amber-500/40 transition-all hover:-translate-y-1 card-emphasis w-full h-full">
                <div className="w-16 h-16 bg-amber-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-amber-300" />
                </div>
                <p className="caption-text leading-relaxed text-slate-200">{benefit.text}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type ParticlesLayerProps = {
  className?: string;
};

// Soft golden dust / aura overlay for section backgrounds
export function ParticlesLayer({ className = "" }: ParticlesLayerProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none opacity-60 ${className}`}
      style={{
        background:
          "radial-gradient(800px at 20% 20%, rgba(255,180,72,0.12), transparent 50%), radial-gradient(700px at 80% 15%, rgba(255,58,30,0.1), transparent 45%), radial-gradient(900px at 50% 70%, rgba(255,164,30,0.08), transparent 50%)",
        mixBlendMode: "screen",
        filter: "blur(0px)",
      }}
    />
  );
}
