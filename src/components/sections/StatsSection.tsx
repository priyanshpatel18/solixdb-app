const stats = [
  { value: "<500ms", label: "Average Query Time" },
  { value: "5+", label: "Protocols Supported" },
  { value: "24/7", label: "Real-Time Updates" },
  { value: "3 APIs", label: "REST, GraphQL, SQL" },
];

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-7xl text-gradient2 font-bold mb-3">
        {value}
      </div>
      <div className="text-muted-foreground text-lg text-white font-medium">{label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="w-full py-8 relative flex items-center justify-center">
      <div className="w-full rotate-1 absolute inset-0 bg-[#1362FE] " />
      <div className="w-full -rotate-1 absolute inset-0 bg-black  " />
      <div className="container relative z-10">
        <div className="grid grid-cols-4 justify-between">
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
