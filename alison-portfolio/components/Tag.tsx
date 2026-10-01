export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.08] px-3 py-1 text-xs font-medium text-graphite">
      {children}
    </span>
  );
}
