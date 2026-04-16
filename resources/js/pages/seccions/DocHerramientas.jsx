import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../../components/SeccionHeader";
import {
  FileText,
  MessageSquare,
  BarChart3,
  ClipboardList,
  Layers,
  GitBranch,
  Calendar,
  Shield,
  Users,
  Megaphone,
  Map,
  CheckSquare,
} from "lucide-react";

const tools = [
  {
    icon: MessageSquare,
    name: "Entrevistas Estructuradas",
    front: "Conversaciones planeadas con el cliente y los stakeholders para extraer toda la información que necesitamos antes de empezar.",
    back: "Usamos guías de preguntas divididas por fases (visión, audiencia, recursos, historial, restricciones). Cada entrevista se graba con consentimiento, se transcribe y se analiza buscando requisitos explícitos e implícitos. Una entrevista bien hecha puede eliminar semanas de malentendidos.",
  },
  {
    icon: ClipboardList,
    name: "Formularios de Requisitos",
    front: "Plantillas estandarizadas para capturar necesidades específicas de cada área del evento de forma estructurada.",
    back: "Cada formulario incluye campos de prioridad (Must/Should/Could/Won't), dependencias con otros requisitos, responsable de validación y fecha límite.",
  },
  {
    icon: Layers,
    name: "Diagramas de Flujo",
    front: "Mapas visuales que muestran cómo se mueven las personas y los procesos durante el evento.",
    back: "Creamos diagramas de procesos y mapas de experiencia del asistente. Son base para accesos, señalización y flujo.",
  },
  {
    icon: GitBranch,
    name: "Matrices de Trazabilidad",
    front: "Tablas que conectan cada requisito con su implementación, su caso de uso y su criterio de validación.",
    back: "Garantiza que todo lo solicitado tiene implementación y validación. También permite medir impacto de cambios.",
  },
  {
    icon: FileText,
    name: "Actas y Minutas",
    front: "Registro formal de cada reunión.",
    back: "Incluye participantes, decisiones y tareas con responsables. Se envían en 24h.",
  },
  {
    icon: BarChart3,
    name: "Dashboards de Seguimiento",
    front: "Paneles con estado del proyecto en tiempo real.",
    back: "Incluyen KPIs: avance, validaciones, proveedores, permisos y presupuesto.",
  },
  {
    icon: Calendar,
    name: "Cronograma Maestro",
    front: "Calendario completo del proyecto.",
    back: "Incluye ruta crítica y dependencias. Se actualiza semanalmente.",
  },
  {
    icon: Shield,
    name: "Plan de Contingencias",
    front: "Plan B y C para fallas críticas.",
    back: "Define responsables, tiempos y acciones. Se ensaya antes del evento.",
  },
  {
    icon: Users,
    name: "Organigramas de Evento",
    front: "Estructura del equipo.",
    back: "Define jerarquías, roles y toma de decisiones.",
  },
  {
    icon: Map,
    name: "Planos del Espacio",
    front: "Mapas detallados del venue.",
    back: "Incluyen accesos, evacuación, servicios y zonas.",
  },
  {
    icon: Megaphone,
    name: "Plan de Comunicación",
    front: "Estrategia de comunicación.",
    back: "Define canales, tono, calendario y crisis.",
  },
  {
    icon: CheckSquare,
    name: "Listas de Verificación",
    front: "Checklists de control.",
    back: "Cubren instalación, operación y cierre con responsables.",
  },
];

function ToolCard({ tool }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = tool.icon;

  return (
    <div
      className="relative h-64 cursor-pointer"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <AnimatePresence mode="wait">
        {!flipped ? (
          <motion.div
            key="front"
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -90 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 border border-border bg-iron/40 p-6 flex flex-col hover:border-lime/40 transition-colors"
          >
            <div className="w-10 h-10 border border-lime/30 flex items-center justify-center mb-4">
              <Icon size={18} className="text-lime" />
            </div>
            <h3 className="font-space font-bold text-sm text-silver mb-2">
              {tool.name}
            </h3>
            <p className="font-inter text-xs text-muted-foreground leading-relaxed flex-1">
              {tool.front}
            </p>
            <span className="font-mono text-[10px] text-lime/40 mt-3">
              TOCA PARA VER MÁS →
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 border border-lime/40 bg-lime/5 p-6 flex flex-col"
          >
            <span className="font-mono text-[10px] text-lime tracking-widest mb-3">
              // CÓMO LO USAMOS
            </span>
            <h3 className="font-space font-bold text-sm text-lime mb-2">
              {tool.name}
            </h3>
            <p className="font-inter text-xs text-silver/80 leading-relaxed flex-1 overflow-y-auto">
              {tool.back}
            </p>
            <span className="font-mono text-[10px] text-lime/40 mt-3">
              ← TOCA PARA VOLVER
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DocHerramientas() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl"
    >
      <SectionHeader
        tag="// DOC.003 — TOOLKIT"
        title="Herramientas de Trabajo"
        subtitle="Cada herramienta tiene un propósito claro dentro del proceso."
      />

      <div className="space-y-4 mb-8">
        <p className="font-inter text-sm text-silver/70 leading-relaxed">
          Cada herramienta tiene un protocolo de uso definido, un momento específico y un responsable.
        </p>
        <p className="font-inter text-sm text-silver/70 leading-relaxed">
          Toca cada tarjeta para ver cómo la usamos realmente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <ToolCard tool={tool} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}