export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="mb-12">

      {tag && (
        <span className="font-mono text-[10px] text-lime/50 tracking-widest block mb-3">
          {tag}
        </span>
      )}

      <h2 className="font-space font-bold text-3xl md:text-5xl text-silver leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 font-inter text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="mt-6 h-px bg-gradient-to-r from-lime/60 via-lime/20 to-transparent" />
    </div>
  );
}