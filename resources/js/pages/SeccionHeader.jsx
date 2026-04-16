export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="mb-6">
      <span className="font-mono text-xs text-lime/50">{tag}</span>
      <h2 className="font-space text-2xl text-silver font-bold mt-2">{title}</h2>
      <p className="text-muted-foreground text-sm mt-2">{subtitle}</p>
    </div>
  );
}