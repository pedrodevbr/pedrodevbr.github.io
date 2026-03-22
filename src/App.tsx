/**
 * Portfolio — Pedro Vieira
 * @license SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import {
  BrainCircuit, Settings, TrendingUp, Code2,
  Mail, Linkedin, Github, ExternalLink, ChevronRight,
  FileText, Database, Bot, Cpu, Globe, Terminal,
  Zap, Server, Coffee, BarChart2, Package,
} from "lucide-react";

type Lang = "pt" | "en" | "es";

/* ───────────────────────── Project Thumbnail ───────────────────────── */

interface ThumbProps {
  src?: string;
  gradient: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  tag: string;
  link?: string;
}

function ProjectThumb({ src, gradient, icon: Icon, tag, link }: ThumbProps) {
  const [imgError, setImgError] = useState(false);
  const useFallback = !src || imgError;

  const inner = (
    <div className={`relative h-40 rounded-2xl overflow-hidden mb-5 group/t ${useFallback ? gradient : ""}`}>
      {/* Real screenshot */}
      {!useFallback && (
        <img
          src={src}
          alt={tag}
          className="absolute inset-0 w-full h-full object-cover object-top scale-100 group-hover/t:scale-105 transition-transform duration-700"
          onError={() => setImgError(true)}
        />
      )}

      {/* Fallback: grid pattern + icon */}
      {useFallback && (
        <>
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-11 h-11 text-white/75" />
          </div>
        </>
      )}

      {/* Browser chrome */}
      <div className="absolute top-0 inset-x-0 h-7 bg-black/25 flex items-center px-3 gap-1.5 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-red-400/80" />
        <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
        <span className="w-2 h-2 rounded-full bg-green-400/80" />
        <span className="ml-2 flex-1 bg-white/20 rounded-full h-2.5 max-w-[7rem]" />
      </div>

      {/* Tag pill */}
      <span className="absolute bottom-2 right-3 text-[9px] font-bold uppercase tracking-widest text-white/90 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
        {tag}
      </span>

      {/* Hover overlay */}
      {link && (
        <div className="absolute inset-0 bg-black/0 group-hover/t:bg-black/20 transition-all flex items-center justify-center">
          <ExternalLink className="w-5 h-5 text-white opacity-0 group-hover/t:opacity-100 transition-opacity" />
        </div>
      )}
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    <>{inner}</>
  );
}

/* ───────────────────────── Translations ───────────────────────── */

const T = {
  pt: {
    nav: { strategy: "Estratégia", corporate: "Corporativo", innovation: "Inovação", tools: "Ferramentas", skills: "Expertise", contact: "Contato" },
    hero: { t1: "Estratégia &", t2: "Inteligência.", sub: "Engenheiro Mecatrônico e Cientista de Dados.\nFocado em gerar valor de negócio através de IA, Automação e Otimização de Processos.", cta1: "Soluções Corporativas", cta2: "Projetos de Inovação" },
    about: {
      badge: "Visão Executiva",
      headline: "Integrando engenharia e inteligência de dados para impulsionar a eficiência em ambientes de alta complexidade.",
      p1_pre: "Com mais de 4 anos de atuação na ", p1_bold: "Itaipu Binacional", p1_post: ", desenvolvo soluções que unem a precisão da Engenharia Mecatrônica (UnB) à profundidade analítica do Data Science (USP).",
      p2_pre: "Minha abordagem foca no ", p2_bold: "ROI e na escalabilidade", p2_post: ", utilizando Python, Machine Learning e Agentes de IA para automatizar fluxos críticos, otimizar cadeias de suprimentos (SAP MM) e criar novos modelos de negócios baseados em inteligência artificial generativa.",
    },
    corp: { badge: "Itaipu Binacional", title: "Soluções Corporativas & Impacto", impact: "Impacto Gerado", access: "Acessar Solução" },
    innov: { badge: "Inovação & IA", title: "Projetos Pessoais & Empreendedorismo", result: "Resultado", view: "Ver Projeto" },
    tools: { badge: "Stack de Desenvolvimento", title: "Ferramentas & Tecnologias", sub: "As ferramentas que uso para construir, prototipar e entregar soluções de IA em produção." },
    skills: { badge: "Expertise", title: "Core Competencies" },
    contact: { title: "Pronto para escalar\nsua eficiência?", sub: "Vamos discutir como a inteligência artificial e a automação podem transformar seus resultados corporativos.", cta: "Contato Executivo" },
    footer: "Estratégia em Dados & Automação.",
  },
  en: {
    nav: { strategy: "Strategy", corporate: "Corporate", innovation: "Innovation", tools: "Tools", skills: "Expertise", contact: "Contact" },
    hero: { t1: "Strategy &", t2: "Intelligence.", sub: "Mechatronics Engineer and Data Scientist.\nFocused on generating business value through AI, Automation and Process Optimization.", cta1: "Corporate Solutions", cta2: "Innovation Projects" },
    about: {
      badge: "Executive Vision",
      headline: "Bridging engineering and data intelligence to drive efficiency in high-complexity environments.",
      p1_pre: "With over 4 years at ", p1_bold: "Itaipu Binacional", p1_post: ", I build solutions that merge Mechatronics Engineering (UnB) precision with Data Science (USP) analytical depth.",
      p2_pre: "My approach focuses on ", p2_bold: "ROI and scalability", p2_post: ", using Python, Machine Learning and AI Agents to automate critical workflows, optimize supply chains (SAP MM) and create new generative AI‑powered business models.",
    },
    corp: { badge: "Itaipu Binacional", title: "Corporate Solutions & Impact", impact: "Generated Impact", access: "Access Solution" },
    innov: { badge: "Innovation & AI", title: "Personal Projects & Entrepreneurship", result: "Result", view: "View Project" },
    tools: { badge: "Development Stack", title: "Tools & Technologies", sub: "The tools I use to build, prototype and ship AI solutions to production." },
    skills: { badge: "Expertise", title: "Core Competencies" },
    contact: { title: "Ready to scale\nyour efficiency?", sub: "Let's discuss how artificial intelligence and automation can transform your corporate results.", cta: "Executive Contact" },
    footer: "Data Strategy & Automation.",
  },
  es: {
    nav: { strategy: "Estrategia", corporate: "Corporativo", innovation: "Innovación", tools: "Herramientas", skills: "Expertise", contact: "Contacto" },
    hero: { t1: "Estrategia &", t2: "Inteligencia.", sub: "Ingeniero Mecatrónico y Científico de Datos.\nEnfocado en generar valor de negocio a través de IA, Automatización y Optimización de Procesos.", cta1: "Soluciones Corporativas", cta2: "Proyectos de Innovación" },
    about: {
      badge: "Visión Ejecutiva",
      headline: "Integrando ingeniería e inteligencia de datos para impulsar la eficiencia en entornos de alta complejidad.",
      p1_pre: "Con más de 4 años en ", p1_bold: "Itaipu Binacional", p1_post: ", desarrollo soluciones que unen la precisión de la Ingeniería Mecatrónica (UnB) con la profundidad analítica de la Ciencia de Datos (USP).",
      p2_pre: "Mi enfoque se centra en el ", p2_bold: "ROI y la escalabilidad", p2_post: ", utilizando Python, Machine Learning y Agentes de IA para automatizar flujos críticos, optimizar cadenas de suministro (SAP MM) y crear nuevos modelos de negocio basados en inteligencia artificial generativa.",
    },
    corp: { badge: "Itaipu Binacional", title: "Soluciones Corporativas & Impacto", impact: "Impacto Generado", access: "Acceder Solución" },
    innov: { badge: "Innovación & IA", title: "Proyectos Personales & Emprendimiento", result: "Resultado", view: "Ver Proyecto" },
    tools: { badge: "Stack de Desarrollo", title: "Herramientas & Tecnologías", sub: "Las herramientas que uso para construir, prototipar y desplegar soluciones de IA en producción." },
    skills: { badge: "Expertise", title: "Core Competencies" },
    contact: { title: "¿Listo para escalar\ntu eficiencia?", sub: "Hablemos sobre cómo la inteligencia artificial y la automatización pueden transformar tus resultados corporativos.", cta: "Contacto Ejecutivo" },
    footer: "Estrategia en Datos & Automatización.",
  },
};

/* ───────────────────────── Corporate Projects ───────────────────────── */

const corpProjects = [
  {
    id: 1,
    title: { pt: "Validação de Notas Fiscais", en: "Invoice Validation System", es: "Validación de Facturas" },
    sub: "Itaipu Binacional · MTAA",
    desc: {
      pt: "Arquitetura de solução automatizada para validação de documentos fiscais em macroprojeto de atualização tecnológica da usina.",
      en: "Automated solution architecture for fiscal document validation in the plant's major technology upgrade project.",
      es: "Arquitectura de solución automatizada para validación de documentos fiscales en el macroproyecto de actualización tecnológica.",
    },
    impact: {
      pt: "Redução drástica de erros manuais e aceleração do ciclo de recebimento de ativos críticos.",
      en: "Drastic reduction of manual errors and acceleration of critical asset receipt cycles.",
      es: "Reducción drástica de errores manuales y aceleración del ciclo de recepción de activos críticos.",
    },
    quote: "Sensacional! Muito obrigada pela solução desenvolvida e, especialmente, pela agilidade na entrega. A solução ficou excelente e trouxe um ganho enorme para o nosso dia a dia.",
    link: "https://cr-ats.streamlit.app/",
    thumb: { src: "https://image.thum.io/get/width/640/crop/360/https://cr-ats.streamlit.app/", gradient: "bg-gradient-to-br from-emerald-500 to-teal-700", icon: FileText, tag: "Streamlit" },
  },
  {
    id: 2,
    title: { pt: "Validação e Saneamento de Dados", en: "Data Validation & Cleansing", es: "Validación y Saneamiento de Datos" },
    sub: "Itaipu Binacional · MTSE",
    desc: {
      pt: "Desenvolvimento de rotinas para cruzamento de dados fiscais e contratuais, garantindo integridade e conformidade em processos complexos.",
      en: "Development of routines for cross-referencing fiscal and contractual data, ensuring integrity and compliance in complex processes.",
      es: "Desarrollo de rutinas para cruce de datos fiscales y contractuales, garantizando integridad y conformidad en procesos complejos.",
    },
    impact: {
      pt: "Garantia de conformidade e segurança no processamento de recebimentos de equipamentos e serviços.",
      en: "Compliance and security guaranteed in equipment and service receipt processing.",
      es: "Garantía de conformidad y seguridad en el procesamiento de recepciones de equipos y servicios.",
    },
    thumb: { gradient: "bg-gradient-to-br from-blue-500 to-indigo-700", icon: Database, tag: "Python · Pandas" },
  },
  {
    id: 3,
    title: { pt: "Inteligência em Suprimentos & Estoques", en: "Supply Chain Intelligence", es: "Inteligencia en Suministros" },
    sub: "Itaipu Binacional · MTSE",
    desc: {
      pt: "Desenvolvimento de modelos preditivos e automação SAP MM para otimização de níveis de estoque e gestão de compras corporativas.",
      en: "Development of predictive models and SAP MM automation for stock level optimization and corporate purchasing management.",
      es: "Desarrollo de modelos predictivos y automatización SAP MM para optimización de niveles de inventario.",
    },
    impact: {
      pt: "Melhoria na tomada de decisão estratégica e redução de capital imobilizado em inventário.",
      en: "Improved strategic decision-making and reduced capital tied up in inventory.",
      es: "Mejora en toma de decisiones estratégicas y reducción de capital inmovilizado en inventario.",
    },
    thumb: { gradient: "bg-gradient-to-br from-violet-500 to-purple-700", icon: TrendingUp, tag: "SAP MM · ML" },
  },
  {
    id: 4,
    title: { pt: "Agentes de IA & Machine Learning", en: "AI Agents & Machine Learning", es: "Agentes de IA & ML" },
    sub: "Itaipu Binacional · COCA / MTSE",
    desc: {
      pt: "Criação de agentes inteligentes e modelos de ML para automação de tarefas cognitivas e governança de dados.",
      en: "Creation of intelligent agents and ML models for cognitive task automation and data governance.",
      es: "Creación de agentes inteligentes y modelos de ML para automatización de tareas cognitivas.",
    },
    items: {
      pt: ["Classificador de Grupo (COCA): IA com conhecimento corporativo que eliminou tarefa manual de 7.000+ itens pendentes.", "Buscador de Referência (MTSE): Agente especializado para auditoria e consistência técnica."],
      en: ["Group Classifier (COCA): AI with corporate knowledge that eliminated a manual task of 7,000+ pending items.", "Reference Finder (MTSE): Specialized agent for audit and technical consistency."],
      es: ["Clasificador de Grupo (COCA): IA con conocimiento corporativo que eliminó tarea manual de 7.000+ ítems.", "Buscador de Referencia (MTSE): Agente especializado para auditoría y consistencia técnica."],
    },
    impact: {
      pt: "Eliminação de gargalos históricos e automação total de triagem de dados corporativos.",
      en: "Elimination of historical bottlenecks and full automation of corporate data triage.",
      es: "Eliminación de cuellos de botella históricos y automatización total del triaje de datos.",
    },
    thumb: { gradient: "bg-gradient-to-br from-orange-500 to-rose-600", icon: Bot, tag: "LLM · Gemini" },
  },
  {
    id: 5,
    title: { pt: "Automação de Reporting Estratégico", en: "Strategic Reporting Automation", es: "Automatización de Reporting" },
    sub: "Itaipu Binacional · MTSE",
    desc: {
      pt: "Engenharia de dados para consolidação e geração automática de relatórios de alta complexidade.",
      en: "Data engineering for consolidation and automatic generation of high-complexity reports.",
      es: "Ingeniería de datos para consolidación y generación automática de reportes de alta complejidad.",
    },
    impact: {
      pt: "Economia de centenas de horas técnicas mensais, permitindo foco em análise e estratégia.",
      en: "Saving hundreds of technical hours monthly, allowing focus on analysis and strategy.",
      es: "Ahorro de cientos de horas técnicas mensuales, permitiendo enfocarse en análisis y estrategia.",
    },
    thumb: { gradient: "bg-gradient-to-br from-cyan-500 to-sky-700", icon: Zap, tag: "Python · Reports" },
  },
];

/* ───────────────────────── Innovation Projects ───────────────────────── */

const innovProjects = [
  {
    id: 6,
    title: { pt: "FlashFactura: Disrupção Tributária", en: "FlashFactura: Tax Disruption", es: "FlashFactura: Disrupción Tributaria" },
    sub: { pt: "Startup · Vision AI", en: "Startup · Vision AI", es: "Startup · Vision AI" },
    desc: {
      pt: "SaaS voltado ao mercado paraguaio que utiliza IA para extração e processamento autônomo de dados fiscais a partir de imagens.",
      en: "SaaS targeting the Paraguayan market that uses AI for autonomous extraction and processing of fiscal data from images.",
      es: "SaaS orientado al mercado paraguayo que utiliza IA para extracción y procesamiento autónomo de datos fiscales desde imágenes.",
    },
    impact: {
      pt: "Escalabilidade para escritórios contábeis através da eliminação do data-entry manual.",
      en: "Scalability for accounting firms through elimination of manual data entry.",
      es: "Escalabilidad para estudios contables mediante la eliminación del data-entry manual.",
    },
    link: "https://fast-factura.com/",
    thumb: { src: "https://image.thum.io/get/width/640/crop/360/https://fast-factura.com/", gradient: "bg-gradient-to-br from-yellow-500 to-orange-600", icon: FileText, tag: "Vision AI · SaaS" },
  },
  {
    id: 7,
    title: { pt: "Sistema de Gestão de Café", en: "Coffee Management System", es: "Sistema de Gestión de Café" },
    sub: { pt: "Inovação Interna · UX", en: "Internal Innovation · UX", es: "Innovación Interna · UX" },
    desc: {
      pt: "Sistema para controle, rateio e gestão do consumo de café na Superintendência de Materiais.",
      en: "System for control, apportionment and management of coffee consumption at the Materials Superintendence.",
      es: "Sistema para control, prorrateo y gestión del consumo de café en la Superintendencia de Materiales.",
    },
    items: {
      pt: ["Implementação rápida e ágil.", "Adoção total pelos usuários.", "Transparência e autonomia para o usuário final."],
      en: ["Fast and agile implementation.", "Full adoption by users.", "Transparency and autonomy for end users."],
      es: ["Implementación rápida y ágil.", "Adopción total por usuarios.", "Transparencia y autonomía para el usuario final."],
    },
    impact: {
      pt: "Digitalização de rotina administrativa com 100% de engajamento da equipe.",
      en: "Digitization of administrative routine with 100% team engagement.",
      es: "Digitalización de rutina administrativa con 100% de compromiso del equipo.",
    },
    link: "https://mtcoffee.replit.app/",
    thumb: { src: "https://image.thum.io/get/width/640/crop/360/https://mtcoffee.replit.app/", gradient: "bg-gradient-to-br from-amber-500 to-yellow-700", icon: Coffee, tag: "Replit · Node.js" },
  },
  {
    id: 10,
    title: { pt: "Arquitetura de Web Scraping", en: "Web Scraping Architecture", es: "Arquitectura de Web Scraping" },
    sub: { pt: "Market Intelligence", en: "Market Intelligence", es: "Market Intelligence" },
    desc: {
      pt: "Arquitetura de extração de dados em larga escala para monitoramento de mercado e coleta estratégica de informações.",
      en: "Large-scale data extraction architecture for market monitoring and strategic information gathering.",
      es: "Arquitectura de extracción de datos a gran escala para monitoreo de mercado y recopilación estratégica.",
    },
    impact: {
      pt: "Geração de insights competitivos através de dados estruturados dinâmicos.",
      en: "Generation of competitive insights through dynamic structured data.",
      es: "Generación de insights competitivos a través de datos estructurados dinámicos.",
    },
    link: "https://github.com/pedrodevbr",
    thumb: { gradient: "bg-gradient-to-br from-slate-600 to-gray-800", icon: Globe, tag: "Python · Scrapy" },
  },
];

/* ───────────────────────── Dev Tools ───────────────────────── */

const devTools = [
  {
    name: "Claude Code",
    desc: { pt: "Desenvolvimento assistido por IA diretamente no terminal", en: "AI-assisted development directly in the terminal", es: "Desarrollo asistido por IA directo en el terminal" },
    icon: Terminal,
    color: "bg-[#d97706]/10 text-[#d97706]",
    badge: "CLI",
    link: "https://claude.ai/code",
  },
  {
    name: "Google AI Studio",
    desc: { pt: "Prototipagem e testes com modelos Gemini", en: "Prototyping and testing with Gemini models", es: "Prototipado y pruebas con modelos Gemini" },
    icon: Cpu,
    color: "bg-blue-500/10 text-blue-600",
    badge: "API",
    link: "https://aistudio.google.com",
  },
  {
    name: "Replit",
    desc: { pt: "IDE online, deploy instantâneo e colaboração", en: "Online IDE, instant deployment and collaboration", es: "IDE online, deploy instantáneo y colaboración" },
    icon: Code2,
    color: "bg-orange-500/10 text-orange-600",
    badge: "IDE",
    link: "https://replit.com",
  },
  {
    name: "Vercel",
    desc: { pt: "Deploy de frontends com CI/CD automático", en: "Frontend deployment with automatic CI/CD", es: "Deploy de frontends con CI/CD automático" },
    icon: Zap,
    color: "bg-black/10 text-black",
    badge: "Frontend",
    link: "https://vercel.com",
  },
  {
    name: "Netlify",
    desc: { pt: "Hospedagem, serverless e edge functions", en: "Hosting, serverless and edge functions", es: "Hosting, serverless y edge functions" },
    icon: Globe,
    color: "bg-teal-500/10 text-teal-600",
    badge: "Hosting",
    link: "https://netlify.com",
  },
  {
    name: "GitHub Actions",
    desc: { pt: "Automação de CI/CD e workflows de deploy", en: "CI/CD automation and deployment workflows", es: "Automatización de CI/CD y flujos de deploy" },
    icon: Server,
    color: "bg-purple-500/10 text-purple-600",
    badge: "CI/CD",
    link: "https://github.com/features/actions",
  },
  {
    name: "Streamlit",
    desc: { pt: "Apps de dados e dashboards em Python", en: "Data apps and dashboards in Python", es: "Apps de datos y dashboards en Python" },
    icon: BarChart2,
    color: "bg-red-500/10 text-red-600",
    badge: "Python",
    link: "https://streamlit.io",
  },
  {
    name: "Docker",
    desc: { pt: "Containerização e ambientes reprodutíveis", en: "Containerization and reproducible environments", es: "Containerización y entornos reproducibles" },
    icon: Package,
    color: "bg-sky-500/10 text-sky-600",
    badge: "Container",
    link: "https://docker.com",
  },
];

/* ───────────────────────── Skills ───────────────────────── */

const skills = [
  {
    category: { pt: "IA & Dados", en: "AI & Data", es: "IA & Datos" },
    items: ["Machine Learning", "Vision AI", "LLMs (Gemini, Claude)", "Prompt Engineering", "Data Pipelines", "Web Scraping"],
    icon: <BrainCircuit className="w-5 h-5" />,
  },
  {
    category: { pt: "Sistemas & Gestão", en: "Systems & Management", es: "Sistemas & Gestión" },
    items: ["SAP (Módulo MM)", "Otimização de Estoques", "Metodologias Ágeis", "Automação de Processos"],
    icon: <Settings className="w-5 h-5" />,
  },
  {
    category: { pt: "Negócios & Inovação", en: "Business & Innovation", es: "Negocios & Innovación" },
    items: ["Modelagem de Startups", "Propostas de Valor", "Otimização de Fluxos", "Design de Produto"],
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    category: { pt: "Dev & Deploy", en: "Dev & Deploy", es: "Dev & Deploy" },
    items: ["Python · TypeScript", "React · Streamlit", "GitHub Actions", "Vercel · Netlify", "Docker"],
    icon: <Code2 className="w-5 h-5" />,
  },
];

/* ───────────────────────── App ───────────────────────── */

export default function App() {
  const [lang, setLang] = useState<Lang>("pt");
  const tr = T[lang];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-emerald-100 selection:text-emerald-900">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <span className="font-bold text-xl tracking-tight shrink-0">PEDRO.</span>

          <div className="hidden md:flex gap-6 text-sm font-medium text-black/60">
            <a href="#about"      className="hover:text-black transition-colors">{tr.nav.strategy}</a>
            <a href="#corporate"  className="hover:text-black transition-colors">{tr.nav.corporate}</a>
            <a href="#innovation" className="hover:text-black transition-colors">{tr.nav.innovation}</a>
            <a href="#tools"      className="hover:text-black transition-colors">{tr.nav.tools}</a>
            <a href="#skills"     className="hover:text-black transition-colors">{tr.nav.skills}</a>
            <a href="#contact"    className="hover:text-black transition-colors">{tr.nav.contact}</a>
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-0.5 border border-black/10 rounded-full p-1 shrink-0">
            {(["pt", "en", "es"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all ${
                  lang === l
                    ? "bg-black text-white shadow-sm"
                    : "text-black/40 hover:text-black"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">

        {/* ── Hero ── */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              {tr.hero.t1} <br />
              <span className="text-emerald-600">{tr.hero.t2}</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/60 max-w-2xl font-medium leading-relaxed whitespace-pre-line">
              {tr.hero.sub}
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#corporate"
                className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-black/80 transition-all flex items-center gap-2 group"
              >
                {tr.hero.cta1}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#innovation"
                className="px-8 py-4 border border-black/10 rounded-full font-medium hover:bg-black/5 transition-all"
              >
                {tr.hero.cta2}
              </a>
            </div>
          </motion.div>
        </section>

        {/* ── About ── */}
        <section id="about" className="max-w-6xl mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-widest font-bold text-emerald-600 mb-4">
                {tr.about.badge}
              </h2>
              <p className="text-3xl font-medium leading-tight mb-8">{tr.about.headline}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-black/70 space-y-6"
            >
              <p>
                {tr.about.p1_pre}
                <strong className="text-black">{tr.about.p1_bold}</strong>
                {tr.about.p1_post}
              </p>
              <p>
                {tr.about.p2_pre}
                <strong className="text-black">{tr.about.p2_bold}</strong>
                {tr.about.p2_post}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Corporate Projects ── */}
        <section id="corporate" className="max-w-6xl mx-auto px-6 mb-32">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-widest font-bold text-emerald-600 mb-4">{tr.corp.badge}</h2>
            <h3 className="text-4xl font-bold tracking-tight">{tr.corp.title}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corpProjects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white p-8 rounded-3xl border border-black/5 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all"
              >
                <ProjectThumb {...p.thumb} link={p.link} />

                <div className="mb-4">
                  <span className="text-xs font-bold text-emerald-600/60 uppercase tracking-wider">{p.sub}</span>
                  <h4 className="text-2xl font-bold mt-1 group-hover:text-emerald-600 transition-colors">
                    {(p.title as Record<Lang, string>)[lang]}
                  </h4>
                </div>

                <p className="text-black/70 text-base mb-6 leading-relaxed">
                  {(p.desc as Record<Lang, string>)[lang]}
                </p>

                {"items" in p && p.items && (
                  <div className="mb-6 space-y-3">
                    {(p.items as Record<Lang, string[]>)[lang].map((item, j) => (
                      <div key={j} className="flex gap-2 text-sm text-black/70 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {"quote" in p && p.quote && (
                  <div className="mb-6 p-4 bg-emerald-50/40 border-l-4 border-emerald-500 italic text-sm text-emerald-900 leading-relaxed">
                    "{p.quote}"
                  </div>
                )}

                <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-100">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-600 mb-2">{tr.corp.impact}</p>
                  <p className="text-sm font-medium text-emerald-900">{(p.impact as Record<Lang, string>)[lang]}</p>
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors group/link"
                  >
                    {tr.corp.access}
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Innovation Projects ── */}
        <section id="innovation" className="max-w-6xl mx-auto px-6 mb-32">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-widest font-bold text-emerald-600 mb-4">{tr.innov.badge}</h2>
            <h3 className="text-4xl font-bold tracking-tight">{tr.innov.title}</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovProjects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white p-7 rounded-3xl border border-black/5 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all flex flex-col"
              >
                <ProjectThumb {...p.thumb} link={p.link} />

                <div className="mb-3">
                  <span className="text-xs font-bold text-emerald-600/60 uppercase tracking-wider">
                    {(p.sub as Record<Lang, string>)[lang]}
                  </span>
                  <h4 className="text-xl font-bold mt-1 group-hover:text-emerald-600 transition-colors">
                    {(p.title as Record<Lang, string>)[lang]}
                  </h4>
                </div>

                <p className="text-black/60 text-sm mb-5 flex-grow leading-relaxed">
                  {(p.desc as Record<Lang, string>)[lang]}
                </p>

                {"items" in p && p.items && (
                  <div className="mb-5 space-y-2">
                    {(p.items as Record<Lang, string[]>)[lang].map((item, j) => (
                      <div key={j} className="flex gap-2 text-xs text-black/70 font-medium">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-5 border-t border-black/5 mt-auto">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-black/40 mb-1.5">{tr.innov.result}</p>
                  <p className="text-xs font-medium text-black/80 mb-4">{(p.impact as Record<Lang, string>)[lang]}</p>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors group/link"
                    >
                      {tr.innov.view}
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Dev Tools ── */}
        <section id="tools" className="max-w-6xl mx-auto px-6 mb-32">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-widest font-bold text-emerald-600 mb-4">{tr.tools.badge}</h2>
            <h3 className="text-4xl font-bold tracking-tight">{tr.tools.title}</h3>
            <p className="text-black/60 mt-3 text-lg max-w-2xl">{tr.tools.sub}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {devTools.map((tool, i) => (
              <motion.a
                key={tool.name}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white p-6 rounded-2xl border border-black/5 hover:border-emerald-500/20 hover:shadow-lg transition-all flex flex-col gap-3"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tool.color}`}>
                  <tool.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-bold text-sm">{tool.name}</span>
                    <span className="text-[9px] uppercase tracking-widest bg-black/5 text-black/40 px-1.5 py-0.5 rounded-full font-bold">
                      {tool.badge}
                    </span>
                  </div>
                  <p className="text-xs text-black/50 leading-relaxed">{(tool.desc as Record<Lang, string>)[lang]}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-black/20 group-hover:text-emerald-600 transition-colors self-end" />
              </motion.a>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="bg-black py-32 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          </div>

          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-widest font-bold text-emerald-400 mb-4">{tr.skills.badge}</h2>
              <h3 className="text-4xl font-bold tracking-tight">{tr.skills.title}</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                    {s.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-4">{(s.category as Record<Lang, string>)[lang]}</h4>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="text-sm text-white/60 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="max-w-6xl mx-auto px-6 pt-32">
          <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 whitespace-pre-line">
                {tr.contact.title}
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto">{tr.contact.sub}</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:pedrohvb@itaipu.gov.br"
                  className="px-10 py-5 bg-white text-emerald-600 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-3 shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  {tr.contact.cta}
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/pedro-henrique-vieira-batista"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/pedrodevbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-black/5 text-center text-black/40 text-sm">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Pedro. {tr.footer}</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest">UnB · USP · Itaipu Binacional</p>
        </div>
      </footer>
    </div>
  );
}
