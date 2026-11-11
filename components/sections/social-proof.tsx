export function SocialProof() {
  const facts = [["9", "modalidades"], ["3", "planos fictícios"], ["6h-22h", "horário demonstrativo"]];
  return (
    <section aria-label="Destaques da Forja 12" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-4 sm:grid-cols-3 sm:px-6">
        {facts.map(([value, label]) => <div key={label} className="flex min-h-24 items-center justify-center gap-3 border-b border-white/25 px-4 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"><strong className="font-display text-4xl font-extrabold tracking-tight">{value}</strong><span className="text-xs font-bold uppercase">{label}</span></div>)}
      </div>
    </section>
  );
}
