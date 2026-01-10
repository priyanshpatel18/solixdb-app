const stats = [
  { value: "<500ms", label: "Average Query Time" },
  { value: "8+", label: "Protocols Supported" },
  { value: "24/7", label: "Real-Time Updates" },
  { value: "3 APIs", label: "REST, GraphQL, SQL" },
];

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center py-4 sm:py-0">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-gradient2 font-bold mb-2 sm:mb-3">
        {value}
      </div>
      <div className="text-muted-foreground text-sm sm:text-base lg:text-lg text-white font-medium">{label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="w-full py-6 sm:py-8 relative flex items-center justify-center overflow-hidden">
      <div className="w-full rotate-1 absolute inset-0 bg-[#1362FE]" />
      <div className="w-full -rotate-1 absolute inset-0 bg-black" />
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-between">
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
