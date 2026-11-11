import type { ReactNode } from "react";
import { CalendarDays, MessageCircleMore, Smartphone, TrendingUp } from "lucide-react";
import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const COLORS = {
  ink: "#07091c",
  navy: "#0a0c22",
  red: "#d9142e",
  white: "#ffffff",
  mist: "#aeb2d6",
};

const BrandMark = ({ size = 88 }: { size?: number }) => (
  <svg viewBox="0 0 48 48" style={{ width: size, height: size }}>
    <path d="M24 2 44 12v24L24 46 4 36V12L24 2Z" fill={COLORS.red} />
    <path d="m13.5 16.5 10.8-5.4h11.4l-4.4 5.4H25l-2.5 4h7.1l-4.3 5.3h-6.2L14 34H9l4.5-17.5Z" fill="white" />
    <path d="M27 29.2h7.1l-2.4 3.2h-7.2l2.5-3.2Zm4.7-6.1H39l-2.5 3.2h-7.3l2.5-3.2Z" fill={COLORS.navy} />
  </svg>
);

const Noise = () => (
  <AbsoluteFill
    style={{
      opacity: 0.045,
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
    }}
  />
);

const Hook = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 13, stiffness: 170 } });
  const exit = interpolate(frame, [70, 90], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const strike = interpolate(frame, [18, 55], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.ink, color: COLORS.white, padding: "150px 82px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 22, opacity: enter * exit }}>
        <BrandMark size={70} />
        <span style={{ fontFamily: "Arial, sans-serif", fontSize: 24, fontWeight: 800, letterSpacing: 8 }}>SITE PARA ACADEMIAS</span>
      </div>
      <div
        style={{
          position: "absolute",
          left: 82,
          right: 82,
          top: 485,
          transform: `translateY(${(1 - enter) * 150}px) scale(${0.86 + enter * 0.14})`,
          opacity: enter * exit,
          fontFamily: "Arial Narrow, Arial, sans-serif",
          fontSize: 128,
          lineHeight: 0.89,
          fontWeight: 950,
          letterSpacing: -7,
          textTransform: "uppercase",
        }}
      >
        Seu site<br />traz alunos<br />ou <span style={{ color: COLORS.red }}>espanta?</span>
      </div>
      <div style={{ position: "absolute", left: 82, bottom: 250, width: `${strike * 640}px`, height: 12, background: COLORS.red }} />
      <div style={{ position: "absolute", left: 82, bottom: 165, font: "700 30px Arial", color: COLORS.mist, opacity: enter * exit }}>
        A concorrência já disputa atenção no celular.
      </div>
      <Noise />
    </AbsoluteFill>
  );
};

const Benefit = ({
  from,
  to,
  icon,
  eyebrow,
  children,
}: {
  from: number;
  to: number;
  icon: ReactNode;
  eyebrow: string;
  children: ReactNode;
}) => {
  const frame = useCurrentFrame();
  const visible = interpolate(frame, [from, from + 10, to - 10, to], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [from, from + 12], [55, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div
      style={{
        position: "absolute",
        left: 54,
        right: 54,
        bottom: 70,
        display: "flex",
        alignItems: "center",
        gap: 26,
        padding: "28px 34px",
        background: "rgba(7,9,28,.94)",
        border: "2px solid rgba(255,255,255,.18)",
        boxShadow: "0 24px 80px rgba(0,0,0,.5)",
        opacity: visible,
        transform: `translateY(${y}px)`,
        color: COLORS.white,
      }}
    >
      <div style={{ width: 76, height: 76, display: "grid", placeItems: "center", background: COLORS.red, flex: "0 0 auto" }}>{icon}</div>
      <div>
        <div style={{ font: "800 20px Arial", letterSpacing: 5, color: "#ff7182", marginBottom: 9 }}>{eyebrow}</div>
        <div style={{ font: "900 35px/1.05 Arial", letterSpacing: -1 }}>{children}</div>
      </div>
    </div>
  );
};

const Product = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 17, stiffness: 130 } });
  const scroll = interpolate(frame, [20, 90, 108, 178, 196, 258], [0, -1250, -1250, -2600, -2600, -3900], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: (value) => value * value * (3 - 2 * value),
  });
  const exit = interpolate(frame, [252, 270], [1, 0.25], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "radial-gradient(circle at 50% 38%, #2b306c 0%, #0a0c22 48%, #07091c 100%)", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 72, left: 0, right: 0, textAlign: "center", color: COLORS.white }}>
        <div style={{ font: "800 19px Arial", letterSpacing: 7, color: "#ff7182" }}>UMA EXPERIÊNCIA QUE VENDE</div>
        <div style={{ font: "950 52px Arial", marginTop: 10, letterSpacing: -2 }}>Seu negócio. No próximo nível.</div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 203,
          top: 200,
          width: 674,
          height: 1480,
          padding: 18,
          borderRadius: 86,
          background: "linear-gradient(145deg, #3b3e52, #090a12 52%, #4d5060)",
          boxShadow: "0 80px 170px rgba(0,0,0,.65), inset 0 0 0 3px rgba(255,255,255,.18)",
          transform: `translateY(${(1 - enter) * 260}px) scale(${0.88 + enter * 0.12}) rotate(${(1 - enter) * 4}deg)`,
          opacity: enter * exit,
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 68, background: COLORS.navy, overflow: "hidden" }}>
          <Img
            src={staticFile("assets/site-mobile-long.png")}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", transform: `translateY(${scroll}px)` }}
          />
          <div style={{ position: "absolute", top: 16, left: "50%", width: 180, height: 42, borderRadius: 30, background: "#05060c", transform: "translateX(-50%)" }} />
        </div>
      </div>
      <Benefit from={14} to={92} eyebrow="PRESENÇA PREMIUM" icon={<Smartphone size={42} strokeWidth={2.5} />}>
        Design rápido. Feito para celular.
      </Benefit>
      <Benefit from={92} to={178} eyebrow="MAIS CONVERSAS" icon={<MessageCircleMore size={42} strokeWidth={2.5} />}>
        Matrícula direta pelo WhatsApp.
      </Benefit>
      <Benefit from={178} to={264} eyebrow="MENOS ATRITO" icon={<CalendarDays size={42} strokeWidth={2.5} />}>
        Planos e horários sempre acessíveis.
      </Benefit>
      <Noise />
    </AbsoluteFill>
  );
};

const CTA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 12, stiffness: 140 } });
  const line = interpolate(frame, [22, 65], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLORS.red, color: COLORS.white, padding: "130px 82px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: -300, background: "radial-gradient(circle, rgba(255,255,255,.18), transparent 48%)", transform: `scale(${0.7 + pop * 0.3})` }} />
      <div style={{ transform: `scale(${0.75 + pop * 0.25})`, opacity: pop }}>
        <BrandMark size={112} />
      </div>
      <div style={{ position: "absolute", left: 82, top: 470, right: 82, transform: `translateY(${(1 - pop) * 110}px)`, opacity: pop }}>
        <div style={{ font: "950 122px/.88 Arial Narrow, Arial", letterSpacing: -7, textTransform: "uppercase" }}>
          Sua academia<br />pode ter<br /><span style={{ color: COLORS.ink }}>isso.</span>
        </div>
        <div style={{ width: `${line * 100}%`, height: 12, background: COLORS.ink, marginTop: 58 }} />
        <div style={{ marginTop: 54, font: "700 36px/1.25 Arial", maxWidth: 780 }}>
          Um site que transforma atenção em visitas, conversas e matrículas.
        </div>
      </div>
      <div style={{ position: "absolute", left: 82, right: 82, bottom: 120, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "34px 38px", background: COLORS.ink, transform: `translateY(${(1 - pop) * 120}px)` }}>
        <div>
          <div style={{ font: "800 18px Arial", letterSpacing: 5, color: "#ff7182" }}>QUER VER SUA MARCA AQUI?</div>
          <div style={{ font: "900 34px Arial", marginTop: 10 }}>Responda esta mensagem.</div>
        </div>
        <TrendingUp size={58} strokeWidth={2.5} />
      </div>
      <Noise />
    </AbsoluteFill>
  );
};

export const AcademyPromo = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.ink }}>
    <Audio
      src={staticFile("assets/digital-clouds.mp3")}
      trimBefore={60}
      volume={(frame) => interpolate(frame, [0, 24, 420, 449], [0, 0.15, 0.15, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
    />
    <Sequence from={0} durationInFrames={90} premountFor={15}><Hook /></Sequence>
    <Sequence from={90} durationInFrames={270} premountFor={15}><Product /></Sequence>
    <Sequence from={360} durationInFrames={90} premountFor={15}><CTA /></Sequence>
  </AbsoluteFill>
);
