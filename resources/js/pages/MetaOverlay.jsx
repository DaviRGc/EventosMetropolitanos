export default function MetaOverlay({ text, className = "" }) {
  return (
    <span className={`font-mono text-[10px] text-lime/40 tracking-widest uppercase ${className}`}>
      {text}
    </span>
  );
}