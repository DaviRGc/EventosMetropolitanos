const tickerItems = [
  "EVT-001: Logística Validada → Foro Metropolitano",
  "EVT-042: Entrevista Stakeholder completada",
  "EVT-108: Escenarios de usuario definidos",
  "EVT-203: Análisis de requisitos en curso",
  "EVT-067: Documentación entregada al cliente",
  "EVT-312: Reunión de coordinación — Auditorio Central",
  "EVT-089: Validación de información — APROBADA",
  "EVT-150: Caso de uso #7 implementado",
];

export default function LiveTicker() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-iron border-t border-border py-2 overflow-hidden">
      <div className="ticker-scroll flex whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span key={i} className="inline-flex items-center mx-8">
            <span className="w-2 h-2 bg-lime rounded-full mr-3 animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}