import type { ReactNode } from "react";

/**
 * Kit de ilustração em estilo Corporate Memphis:
 * figuras sem rosto, membros longos e curvos, formas geométricas chapadas,
 * confetes (círculos, cruzes, zigue-zagues) e paleta vibrante sobre o roxo do site.
 */

export const C = {
  deep: "#241D52",
  night: "#3B3279",
  orange: "#FF9D6E",
  coral: "#FF6F61",
  pink: "#FF8FB8",
  yellow: "#FFD166",
  mint: "#6EE7C8",
  lilac: "#B9A7FF",
  cream: "#FFF1E6",
  white: "#FCFAFF",
  skin: ["#F5C29B", "#D9966A", "#A56A45", "#7A4A30"] as const,
};

export type P = [number, number];

const lerp = (a: P, b: P, t: number): P => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];

/** Moldura padrão: viewBox fixo 480×360, decorativa por padrão. */
export function Frame({
  children,
  label,
  blob = C.night,
  blobPath = "M60 210c-20-70 30-150 120-168s190 8 235 70 22 150-40 190-150 40-215 18S72 262 60 210Z",
  confetti = true,
}: {
  children: ReactNode;
  label: string;
  blob?: string;
  blobPath?: string;
  confetti?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 480 360"
      role="img"
      aria-label={label}
      className="h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={blobPath} fill={blob} />
      {confetti && <Confetti />}
      {children}
    </svg>
  );
}

/** Confetes Memphis nas bordas — mantidos longe do centro para não competir com a cena. */
export function Confetti() {
  return (
    <g>
      <circle cx="34" cy="58" r="7" fill={C.yellow} />
      <circle cx="452" cy="300" r="9" fill={C.pink} />
      <path d="M430 40v18M421 49h18" stroke={C.mint} strokeWidth="4" strokeLinecap="round" />
      <path d="M26 300v14M19 307h14" stroke={C.orange} strokeWidth="4" strokeLinecap="round" />
      <path
        d="M52 330q8-10 16 0t16 0 16 0"
        fill="none"
        stroke={C.lilac}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M392 20l12 20h-24Z" fill={C.coral} />
      <circle cx="458" cy="120" r="5" fill="none" stroke={C.yellow} strokeWidth="3" />
    </g>
  );
}

type Hair = "short" | "bun" | "long" | "cap" | "curly";

export function Person({
  head,
  hip,
  arms,
  legs,
  skin = C.skin[0],
  top = C.orange,
  pants = C.deep,
  hair = C.deep,
  hairStyle = "short",
  shoe = C.white,
  tilt = 0,
}: {
  head: P;
  hip: P;
  /** cada braço: [cotovelo, mão] */
  arms: [[P, P], [P, P]];
  /** cada perna: [joelho, pé] */
  legs: [[P, P], [P, P]];
  skin?: string;
  top?: string;
  pants?: string;
  hair?: string;
  hairStyle?: Hair;
  shoe?: string;
  tilt?: number;
}) {
  const shoulder = lerp(hip, head, 0.74);
  const [hx, hy] = head;
  const limb = (a: P, k: P, b: P) => `M${a[0]} ${a[1]}Q${k[0]} ${k[1]} ${b[0]} ${b[1]}`;

  return (
    <g transform={tilt ? `rotate(${tilt} ${hip[0]} ${hip[1]})` : undefined}>
      {legs.map(([k, f], i) => (
        <g key={`l${i}`}>
          <path d={limb(hip, k, f)} stroke={pants} strokeWidth="17" strokeLinecap="round" fill="none" />
          <ellipse cx={f[0] + (f[0] >= hip[0] ? 6 : -6)} cy={f[1] + 3} rx="12" ry="6" fill={shoe} />
        </g>
      ))}
      <path
        d={`M${shoulder[0]} ${shoulder[1]}L${hip[0]} ${hip[1]}`}
        stroke={top}
        strokeWidth="40"
        strokeLinecap="round"
      />
      {arms.map(([e, h], i) => (
        <g key={`a${i}`}>
          <path d={limb(shoulder, e, h)} stroke={top} strokeWidth="14" strokeLinecap="round" fill="none" />
          <circle cx={h[0]} cy={h[1]} r="7.5" fill={skin} />
        </g>
      ))}
      <rect x={hx - 5} y={hy + 10} width="10" height="14" rx="4" fill={skin} />
      <circle cx={hx} cy={hy} r="19" fill={skin} />
      {hairStyle === "short" && (
        <path d={`M${hx - 19} ${hy - 2}a19 19 0 0 1 38 0q-10-9-20-6t-18 6Z`} fill={hair} />
      )}
      {hairStyle === "bun" && (
        <>
          <circle cx={hx + 2} cy={hy - 25} r="9" fill={hair} />
          <path d={`M${hx - 19} ${hy}a19 19 0 0 1 38 0q-8-12-19-11t-19 11Z`} fill={hair} />
        </>
      )}
      {hairStyle === "long" && (
        <path
          d={`M${hx - 20} ${hy + 22}q-6-30 4-38a19 19 0 0 1 32 0q10 8 4 38-6-14-10-24-14 2-30 6Z`}
          fill={hair}
        />
      )}
      {hairStyle === "curly" && (
        <>
          <circle cx={hx - 12} cy={hy - 10} r="10" fill={hair} />
          <circle cx={hx} cy={hy - 15} r="11" fill={hair} />
          <circle cx={hx + 12} cy={hy - 10} r="10" fill={hair} />
        </>
      )}
      {hairStyle === "cap" && (
        <>
          <path d={`M${hx - 20} ${hy - 2}a20 20 0 0 1 40 0Z`} fill={hair} />
          <path d={`M${hx + 4} ${hy - 3}h28a2 2 0 0 1 0 5h-28Z`} fill={hair} />
        </>
      )}
    </g>
  );
}

export function Phone({
  x,
  y,
  w = 110,
  h = 210,
  rot = 0,
  screen = C.cream,
  children,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  rot?: number;
  screen?: string;
  children?: ReactNode;
}) {
  return (
    <g transform={`rotate(${rot} ${x + w / 2} ${y + h / 2})`}>
      <rect x={x} y={y} width={w} height={h} rx="20" fill={C.deep} />
      <rect x={x + 6} y={y + 6} width={w - 12} height={h - 12} rx="15" fill={screen} />
      <rect x={x + w / 2 - 14} y={y + 11} width="28" height="5" rx="2.5" fill={C.deep} />
      {children}
    </g>
  );
}

/** Notificação push estilizada: ícone + duas linhas de "texto". */
export function Notif({
  x,
  y,
  w,
  color = C.lilac,
  icon = C.white,
  dim = false,
}: {
  x: number;
  y: number;
  w: number;
  color?: string;
  icon?: string;
  dim?: boolean;
}) {
  return (
    <g opacity={dim ? 0.55 : 1}>
      <rect x={x} y={y} width={w} height="34" rx="10" fill={color} />
      <circle cx={x + 16} cy={y + 17} r="8" fill={icon} />
      <rect x={x + 32} y={y + 9} width={w - 46} height="6" rx="3" fill={C.white} opacity="0.95" />
      <rect x={x + 32} y={y + 20} width={(w - 46) * 0.6} height="5" rx="2.5" fill={C.white} opacity="0.6" />
    </g>
  );
}

export function Cylinder({ x, y, w = 56, h = 62, color = C.mint }: { x: number; y: number; w?: number; h?: number; color?: string }) {
  const ry = 9;
  return (
    <g>
      <path d={`M${x} ${y + ry}v${h - 2 * ry}a${w / 2} ${ry} 0 0 0 ${w} 0v${-(h - 2 * ry)}Z`} fill={color} />
      <ellipse cx={x + w / 2} cy={y + ry} rx={w / 2} ry={ry} fill={C.white} opacity="0.55" />
      <path
        d={`M${x} ${y + h * 0.45}a${w / 2} ${ry} 0 0 0 ${w} 0M${x} ${y + h * 0.7}a${w / 2} ${ry} 0 0 0 ${w} 0`}
        stroke={C.deep}
        strokeWidth="3"
        opacity="0.35"
        fill="none"
      />
    </g>
  );
}

export function Plant({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-18 0h36l-6 34h-24Z" fill={C.coral} />
      <path d="M0 0Q-26-22-16-52Q4-34 0 0Z" fill={C.mint} />
      <path d="M0 0Q26-26 14-60Q-4-36 0 0Z" fill="#3FC9A8" />
      <path d="M0 0Q-2-30 0-48" stroke={C.mint} strokeWidth="5" strokeLinecap="round" fill="none" />
    </g>
  );
}

export function Star({ x, y, r = 12, fill = C.yellow }: { x: number; y: number; r?: number; fill?: string }) {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const rr = i % 2 === 0 ? r : r * 0.45;
    return `${(x + Math.cos(a) * rr).toFixed(1)},${(y + Math.sin(a) * rr).toFixed(1)}`;
  }).join(" ");
  return <polygon points={pts} fill={fill} />;
}

export function Check({ x, y, r = 11, fill = C.mint }: { x: number; y: number; r?: number; fill?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={fill} />
      <path
        d={`M${x - r * 0.45} ${y}l${r * 0.3} ${r * 0.33} ${r * 0.62}-${r * 0.7}`}
        stroke={C.deep}
        strokeWidth={r * 0.28}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  );
}
