export default function CaseToggle({ active, onToggle }) {
  return (
    <div className="flex items-center gap-px my-8 max-w-md">
      <button
        onClick={() => onToggle("vision")}
        className={`flex-1 py-3 font-mono text-xs tracking-widest text-center transition-all ${
          active === "vision"
            ? "bg-lime text-asphalt font-bold"
            : "bg-iron/50 text-muted-foreground hover:text-silver border border-border"
        }`}
      >
        LA VISIÓN
      </button>
      <button
        onClick={() => onToggle("blueprint")}
        className={`flex-1 py-3 font-mono text-xs tracking-widest text-center transition-all ${
          active === "blueprint"
            ? "bg-lime text-asphalt font-bold"
            : "bg-iron/50 text-muted-foreground hover:text-silver border border-border"
        }`}
      >
        EL BLUEPRINT
      </button>
    </div>
  );
}