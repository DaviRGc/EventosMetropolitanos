import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../../components/SeccionHeader";
import { ChevronDown } from "lucide-react";

const docs = [
  {
    id: "BRD",
    name: "Business Requirements Document",
    tagline: "El contrato intelectual del proyecto",
    desc: "El BRD es el primer documento que se genera despues de las entrevistas iniciales. Su proposito es simple: dejar por escrito que quiere el cliente, para que lo quiere, y como sabremos que lo logramos. No es un documento tecnico. Esta escrito en lenguaje de negocio, pensado para que el cliente lo lea y lo firme.",
    why: "Sin un BRD, cada persona del equipo tiene una version diferente de lo que el cliente quiere. Con el tiempo, esas versiones divergen tanto que el evento resultante no se parece a lo que nadie imagino. El BRD es el ancla que mantiene a todos alineados.",
    fields: [
      {
        name: "Objetivos del evento",
        detail:
          "Que se quiere lograr, expresado en terminos concretos y medibles.",
      },
      {
        name: "Alcance y limitaciones",
        detail:
          "Que esta incluido en el proyecto y que no. Las limitaciones son tan importantes como los objetivos.",
      },
      {
        name: "Stakeholders identificados",
        detail:
          "Todas las personas y organizaciones que tienen interes en el evento.",
      },
      {
        name: "Cronograma general",
        detail:
          "Fechas clave: primera reunion, cierre de requisitos, dia del evento, entrega de informes.",
      },
      {
        name: "Criterios de exito",
        detail:
          "Los numeros y condiciones que definiran si el evento fue exitoso o no.",
      },
      {
        name: "Supuestos y dependencias",
        detail:
          "Las cosas que asumimos como ciertas y las cosas de las que dependemos para avanzar.",
      },
    ],
  },
  {
    id: "SRS",
    name: "Software Requirements Specification",
    tagline: "El plano tecnico de la operacion",
    desc: "El SRS traduce los requisitos de negocio del BRD al lenguaje de quienes van a ejecutar el evento. Si el BRD dice 'necesitamos que los asistentes se puedan registrar de forma facil', el SRS dice exactamente como va a funcionar ese registro: que datos se piden, que pasa si alguien ya esta registrado, como se genera la credencial, que dispositivos se necesitan, etc.",
    why: "El SRS evita malentendidos entre el cliente y los equipos tecnicos. Cuando hay un conflicto sobre como deberia funcionar algo, el SRS es el arbitro. Si no esta en el SRS, se asume que no es parte del alcance.",
    fields: [
      {
        name: "Requisitos funcionales",
        detail:
          "Que tiene que hacer el sistema o proceso: registrar asistentes, gestionar tiempos, coordinar proveedores.",
      },
      {
        name: "Requisitos no funcionales",
        detail: "Como tiene que hacerlo: velocidad, capacidad, disponibilidad, seguridad.",
      },
      {
        name: "Requisitos de espacio",
        detail:
          "Dimensiones, capacidad, accesos, servicios basicos y restricciones del venue.",
      },
      {
        name: "Equipamiento tecnico",
        detail:
          "Sonido, iluminacion, pantallas, conectividad, generadores, etc.",
      },
      {
        name: "Personal necesario",
        detail:
          "Cantidad y perfil de cada tipo de personal: tecnicos, coordinadores, seguridad, atencion al publico.",
      },
      {
        name: "Proveedores asignados",
        detail:
          "Lista de proveedores confirmados con sus responsabilidades y condiciones contractuales.",
      },
    ],
  },
  {
    id: "UCD",
    name: "Use Case Documentation",
    tagline: "Como viven el evento sus protagonistas",
    desc: "La UCD es la documentacion de los escenarios de uso real del evento. Describimos, paso a paso, como interactua cada tipo de persona con el evento: el asistente que llega por primera vez, el proveedor de catering coordinando con el equipo de logistica, el coordinador gestionando una incidencia en tiempo real. Estas historias nos permiten anticipar problemas antes de que ocurran.",
    why: "Muchos problemas en eventos ocurren porque nadie se pregunto 'que pasa exactamente cuando...?'. La UCD nos obliga a pensar en todos los escenarios posibles, incluyendo los incomodos: que pasa si alguien pierde su credencial, si hay un accidente, si un proveedor llega tarde.",
    fields: [
      {
        name: "Actores principales",
        detail:
          "Las personas o roles que participan en el escenario: asistente, coordinador, proveedor, seguridad.",
      },
      {
        name: "Precondiciones",
        detail:
          "Lo que tiene que ser cierto antes de que el escenario pueda ocurrir.",
      },
      {
        name: "Flujo principal",
        detail:
          "La secuencia paso a paso de lo que sucede en el caso normal y esperado.",
      },
      {
        name: "Flujos alternativos",
        detail: "Que pasa cuando algo sale diferente de lo esperado.",
      },
      {
        name: "Poscondiciones",
        detail:
          "El estado en que queda el sistema o proceso despues de que el escenario se completa.",
      },
      {
        name: "Notas de implementacion",
        detail:
          "Observaciones practicas sobre como ejecutar este escenario en la realidad.",
      },
    ],
  },
  {
    id: "VAL",
    name: "Validation Report",
    tagline: "La prueba de que todo funciona",
    desc: "El VAL es el documento que certifica que todo lo que se planifico fue revisado y aprobado por las personas correspondientes. No se trata de decir 'lo hicimos', sino de probar que funciona segun lo acordado. Antes del evento, el VAL cubre la revision de instalaciones, permisos y sistemas. Despues del evento, recoge los resultados reales y los compara con los objetivos.",
    why: "Sin un proceso de validacion formal, hay una tendencia natural a asumir que las cosas estan bien cuando en realidad no han sido revisadas. El VAL nos obliga a verificar cada punto critico de forma explicita y documentada.",
    fields: [
      {
        name: "Criterios de aceptacion",
        detail:
          "Las condiciones especificas que tienen que cumplirse para que cada requisito se considere aprobado.",
      },
      {
        name: "Resultados de verificacion",
        detail:
          "Lo que encontramos cuando revisamos cada punto: aprobado, en revision, o rechazado con motivo.",
      },
      {
        name: "Registro de aprobaciones",
        detail:
          "Quien aprobo que y en que fecha. Trazabilidad total de las decisiones.",
      },
      {
        name: "Observaciones y hallazgos",
        detail:
          "Notas sobre lo que funciono diferente a lo esperado, sin importar si fue mejor o peor.",
      },
      {
        name: "Plan de accion para hallazgos",
        detail: "Que hacemos con las cosas que encontramos que necesitan mejora.",
      },
      {
        name: "Firma de cierre",
        detail:
          "La firma del cliente y del responsable del proyecto que certifica que el informe fue revisado y acordado.",
      },
    ],
  },
  {
    id: "RTM",
    name: "Requirements Traceability Matrix",
    tagline: "El mapa que conecta todo con todo",
    desc: "La Matriz de Trazabilidad de Requisitos (RTM) es un documento que conecta cada requisito del BRD con su especificacion tecnica en el SRS, su caso de uso en la UCD, y su criterio de validacion en el VAL. Parece burocratico, pero en realidad es el seguro de vida del proyecto: si alguien pregunta 'por que tenemos esto?', la RTM tiene la respuesta.",
    why: "En proyectos complejos, es facil perder de vista por que se esta haciendo algo. La RTM mantiene visible la conexion entre cada decision tecnica y el objetivo de negocio que la origino. Tambien es util cuando el cliente quiere cambiar algo: la RTM muestra inmediatamente que otros elementos se ven afectados.",
    fields: [
      {
        name: "ID de requisito",
        detail:
          "Un identificador unico para cada requisito, que se usa en todos los demas documentos.",
      },
      {
        name: "Descripcion del requisito",
        detail:
          "El requisito en lenguaje natural, tal como fue expresado por el stakeholder.",
      },
      {
        name: "Fuente",
        detail:
          "De donde vino el requisito: entrevista, regulacion legal, estandar interno, etc.",
      },
      {
        name: "Elemento de SRS relacionado",
        detail: "La especificacion tecnica que implementa este requisito.",
      },
      {
        name: "Caso de uso relacionado",
        detail: "El escenario en la UCD que demuestra como se usa este requisito.",
      },
      {
        name: "Estado de validacion",
        detail:
          "Si el requisito ya fue validado, esta pendiente, o tiene observaciones.",
      },
    ],
  },
];

export default function DocDocumentacion() {
  const [openDoc, setOpenDoc] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl"
    >
      <SectionHeader
        tag="// DOC.005 — ARCHIVOS"
        title="Qué Documentación Generamos"
        subtitle="Cada proyecto genera un conjunto de documentos formales. No son papeleo: son la memoria del proyecto, el contrato intelectual entre nosotros y el cliente, y la garantía de que nada queda en el aire."
      />

      <div className="space-y-4 mb-8">
        <p className="font-inter text-sm text-silver/70 leading-relaxed">
          La documentacion es lo que nos separa de una empresa que improvisa de una que aprende. Cada documento que generamos tiene un proposito especifico y un momento especifico en el proceso. No los generamos todos al principio ni todos al final: van apareciendo a medida que el proyecto avanza.
        </p>
        <p className="font-inter text-sm text-silver/70 leading-relaxed">
          Todos los documentos estan interconectados: lo que se define en el BRD guia el SRS, el SRS alimenta la UCD, y la UCD determina los criterios del VAL. Si cambias algo en un documento, el cambio se propaga a todos los demas.
        </p>
      </div>

      <div className="space-y-3">
        {docs.map((doc, i) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border border-border bg-iron/20 overflow-hidden hover:border-lime/30 transition-colors"
          >
            <button
              onClick={() => setOpenDoc(openDoc === doc.id ? null : doc.id)}
              className="w-full flex items-center gap-4 p-5 text-left"
            >
              <div className="w-14 h-14 bg-lime/10 border border-lime/20 flex items-center justify-center shrink-0">
                <span className="font-mono text-sm font-bold text-lime">
                  {doc.id}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="font-space font-bold text-base text-silver">
                  {doc.name}
                </h3>
                <p className="font-inter text-xs text-lime/60 mt-0.5">
                  {doc.tagline}
                </p>
              </div>

              <ChevronDown
                size={16}
                className={`shrink-0 transition-all duration-300 ${
                  openDoc === doc.id
                    ? "rotate-180 text-lime"
                    : "rotate-0 text-lime/40"
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openDoc === doc.id && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 border-t border-border pt-5 space-y-5">
                    <p className="font-inter text-sm text-silver/70 leading-relaxed">
                      {doc.desc}
                    </p>

                    <div className="border-l-2 border-lime/30 pl-4">
                      <span className="font-mono text-[10px] text-lime/40 block mb-1">
                        ¿POR QUÉ EXISTE ESTE DOCUMENTO?
                      </span>
                      <p className="font-inter text-xs text-lime/70 leading-relaxed italic">
                        {doc.why}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-lime/40 tracking-widest block mb-3">
                        CAMPOS Y SECCIONES:
                      </span>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {doc.fields.map((field) => (
                          <div
                            key={field.name}
                            className="border border-border p-3 bg-asphalt/50"
                          >
                            <span className="font-mono text-[11px] text-lime block mb-1">
                              {field.name}
                            </span>
                            <p className="font-inter text-xs text-muted-foreground leading-relaxed">
                              {field.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}