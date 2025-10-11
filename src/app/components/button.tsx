export function Button({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <button
      className={`px-4 py-2 rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${className}`}
    >
      {children}
    </button>
  );
}