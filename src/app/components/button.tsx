export function Button({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <button
      className={`px-4  rounded-sm text-[16px] font-semibold transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${className}`}
    >
      {children}
    </button>
  );
}