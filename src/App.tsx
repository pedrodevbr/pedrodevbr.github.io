/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Cpu, 
  Database, 
  Bot, 
  FileText, 
  Zap, 
  Coffee, 
  Globe, 
  Code2, 
  BrainCircuit, 
  Settings, 
  TrendingUp,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  ChevronRight
} from "lucide-react";

const corporateProjects = [
  {
    id: 1,
    title: "Validação de Notas Fiscais (Atualização Tecnológica)",
    subtitle: "Itaipu Binacional | Cliente: MTAA",
    description: "Arquitetura de solução automatizada para validação de documentos fiscais em macroprojeto de atualização tecnológica da usina.",
    impact: "Redução drástica de erros manuais e aceleração do ciclo de recebimento de ativos críticos.",
    quote: "Sensacional! Muito obrigada pela solução desenvolvida e, especialmente, pela agilidade na entrega. A solução ficou excelente e trouxe um ganho enorme para o nosso dia a dia.",
    link: "https://cr-ats.streamlit.app/"
  },
  {
    id: 2,
    title: "Validação e Saneamento de Dados",
    subtitle: "Itaipu Binacional | Cliente: MTSE",
    description: "Desenvolvimento de rotinas para cruzamento de dados fiscais e contratuais, garantindo integridade e conformidade em processos complexos.",
    impact: "Garantia de conformidade e segurança no processamento de recebimentos de equipamentos e serviços."
  },
  {
    id: 3,
    title: "Inteligência em Suprimentos & Estoques",
    subtitle: "Itaipu Binacional | Cliente: MTSE",
    description: "Desenvolvimento de modelos preditivos e automação SAP MM para otimização de níveis de estoque e gestão de compras corporativas.",
    impact: "Melhoria na tomada de decisão estratégica e redução de capital imobilizado em inventário."
  },
  {
    id: 4,
    title: "Agentes de IA & Machine Learning",
    subtitle: "Itaipu Binacional | Clientes: COCA / MTSE",
    description: "Criação de agentes inteligentes e modelos de ML para automação de tarefas cognitivas e governança de dados.",
    subItems: [
      "Classificador de Grupo (COCA): IA com conhecimento corporativo que eliminou tarefa manual de 7.000+ itens pendentes.",
      "Buscador de Referência (MTSE): Agente especializado para auditoria e consistência técnica."
    ],
    impact: "Eliminação de gargalos históricos e automação total de triagem de dados corporativos."
  },
  {
    id: 5,
    title: "Automação de Reporting Estratégico",
    subtitle: "Itaipu Binacional | Cliente: MTSE",
    description: "Engenharia de dados para consolidação e geração automática de relatórios de alta complexidade (MTSE).",
    impact: "Economia de centenas de horas técnicas mensais, permitindo foco em análise e estratégia."
  }
];

const innovationProjects = [
  {
    id: 6,
    title: "FlashFactura: Disrupção Tributária",
    subtitle: "Startup | Vision AI",
    description: "SaaS voltado ao mercado paraguaio que utiliza IA para extração e processamento autônomo de dados fiscais a partir de imagens.",
    impact: "Escalabilidade para escritórios contábeis através da eliminação do data-entry manual.",
    link: "https://fast-factura.com/"
  },
  {
    id: 7,
    title: "Sistema de Gestão de Café",
    subtitle: "Inovação Interna | UX & Eficiência",
    description: "Sistema para controle, rateio e gestão do consumo de café na Superintendência de Materiais.",
    subItems: [
      "Implementação rápida e ágil.",
      "Adoção rápida e total pelos usuários.",
      "Transparência e autonomia para o usuário final."
    ],
    impact: "Digitalização de rotina administrativa com 100% de engajamento da equipe.",
    link: "https://mtcoffee.replit.app/"
  },
  {
    id: 8,
    title: "Arquitetura de Web Scraping",
    subtitle: "Market Intelligence",
    description: "Arquitetura de extração de dados em larga escala para monitoramento de mercado e coleta estratégica.",
    impact: "Geração de insights competitivos através de dados estruturados dinâmicos."
  }
];

const skills = [
  { 
    category: "IA & Dados", 
    items: ["Machine Learning", "Vision AI", "LLMs (Gemini, Kimi)", "Prompt Engineering", "Data Pipelines", "Web Scraping"],
    icon: <BrainCircuit className="w-5 v-5" />
  },
  { 
    category: "Sistemas & Gestão", 
    items: ["SAP (Módulo MM)", "Otimização de Estoques", "Metodologias Ágeis"],
    icon: <Settings className="w-5 v-5" />
  },
  { 
    category: "Negócios & Inovação", 
    items: ["Modelagem de Startups", "Propostas de Valor", "Otimização de Fluxos", "Experimentação e construção de soluções"],
    icon: <TrendingUp className="w-5 v-5" />
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header / Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">PEDRO.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-black/60">
            <a href="#about" className="hover:text-black transition-colors">Estratégia</a>
            <a href="#corporate" className="hover:text-black transition-colors">Corporativo</a>
            <a href="#innovation" className="hover:text-black transition-colors">Inovação</a>
            <a href="#skills" className="hover:text-black transition-colors">Expertise</a>
            <a href="#contact" className="hover:text-black transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              Estratégia & <br />
              <span className="text-emerald-600">Inteligência.</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/60 max-w-2xl font-medium leading-relaxed">
              Engenheiro Mecatrônico e Cientista de Dados. <br />
              Focado em gerar valor de negócio através de IA, Automação e Otimização de Processos.
            </p>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <a 
                href="#corporate" 
                className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-black/80 transition-all flex items-center gap-2 group"
              >
                Soluções Corporativas
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#innovation" 
                className="px-8 py-4 border border-black/10 rounded-full font-medium hover:bg-black/5 transition-all"
              >
                Projetos de Inovação
              </a>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-widest font-bold text-emerald-600 mb-4">Visão Executiva</h2>
              <p className="text-3xl font-medium leading-tight mb-8">
                Integrando engenharia e inteligência de dados para impulsionar a eficiência em ambientes de alta complexidade.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-black/70 space-y-6"
            >
              <p>
                Com mais de 4 anos de atuação na <strong>Itaipu Binacional</strong>, desenvolvo soluções que unem a precisão da Engenharia Mecatrônica (UnB) à profundidade analítica do Data Science (USP).
              </p>
              <p>
                Minha abordagem foca no <strong>ROI e na escalabilidade</strong>, utilizando Python, Machine Learning e Agentes de IA para automatizar fluxos críticos, otimizar cadeias de suprimentos (SAP MM) e criar novos modelos de negócios baseados em inteligência artificial generativa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Corporate Projects */}
        <section id="corporate" className="max-w-6xl mx-auto px-6 mb-32">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-widest font-bold text-emerald-600 mb-4">Itaipu Binacional</h2>
            <h3 className="text-4xl font-bold tracking-tight">Soluções Corporativas & Impacto</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corporateProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-10 rounded-3xl border border-black/5 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all"
              >
                <div className="mb-6">
                  <span className="text-xs font-bold text-emerald-600/60 uppercase tracking-wider">{project.subtitle}</span>
                  <div className="flex items-center justify-between mt-1">
                    <h4 className="text-2xl font-bold group-hover:text-emerald-600 transition-colors">{project.title}</h4>
                  </div>
                </div>
                <p className="text-black/70 text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                {project.subItems && (
                  <div className="mb-6 space-y-3">
                    {project.subItems.map((item, i) => (
                      <div key={i} className="flex gap-2 text-sm text-black/70 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}
                
                {project.quote && (
                  <div className="mb-6 p-4 bg-emerald-50/30 border-l-4 border-emerald-500 italic text-sm text-emerald-900">
                    "{project.quote}"
                  </div>
                )}

                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-600 mb-2">Impacto Gerado</p>
                  <p className="text-sm font-medium text-emerald-900">{project.impact}</p>
                </div>

                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors group/link"
                  >
                    Acessar Solução
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Innovation Projects */}
        <section id="innovation" className="max-w-6xl mx-auto px-6 mb-32">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-widest font-bold text-emerald-600 mb-4">Inovação & IA</h2>
            <h3 className="text-4xl font-bold tracking-tight">Projetos Pessoais & Empreendedorismo</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {innovationProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-3xl border border-black/5 hover:border-emerald-500/30 transition-all flex flex-col"
              >
                <div className="mb-4">
                  <span className="text-xs font-bold text-emerald-600/60 uppercase tracking-wider">{project.subtitle}</span>
                  <div className="flex items-center justify-between mt-1">
                    <h4 className="text-xl font-bold">{project.title}</h4>
                  </div>
                </div>
                <p className="text-black/60 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                {project.subItems && (
                  <div className="mb-6 space-y-3">
                    {project.subItems.map((item, i) => (
                      <div key={i} className="flex gap-2 text-xs text-black/70 font-medium">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-6 border-t border-black/5">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-black/40 mb-2">Resultado</p>
                  <p className="text-xs font-medium text-black/80 mb-4">{project.impact}</p>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors group/link"
                    >
                      Ver Projeto
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-black py-32 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          </div>

          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-widest font-bold text-emerald-400 mb-4">Expertise</h2>
              <h3 className="text-4xl font-bold tracking-tight">Core Competencies</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-4">{skill.category}</h4>
                  <ul className="space-y-2">
                    {skill.items.map(item => (
                      <li key={item} className="text-sm text-white/60 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto px-6 pt-32">
          <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Pronto para escalar <br /> sua eficiência?
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto">
                Vamos discutir como a inteligência artificial e a automação podem transformar seus resultados corporativos.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="mailto:pedrohvb@itaipu.gov.br" 
                  className="px-10 py-5 bg-white text-emerald-600 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-3 shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  Contato Executivo
                </a>
                <div className="flex gap-4">
                  <a href="#" className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/pedrodevbr" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-black/5 text-center text-black/40 text-sm">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Pedro. Estratégia em Dados & Automação.</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest">UnB • USP • Itaipu Binacional</p>
        </div>
      </footer>
    </div>
  );
}
