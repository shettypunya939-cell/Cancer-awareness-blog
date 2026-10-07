import React, { useState } from 'react';
import { DiagramData } from '../types';
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Activity, Dna, Info } from 'lucide-react';

interface Props {
  diagram: DiagramData;
}

export const InteractiveDiagram: React.FC<Props> = ({ diagram }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  if (diagram.type === 'cell-cycle') {
    const phases = [
      {
        name: 'G1 Phase (Growth 1)',
        detail: 'Cell doubles in size, synthesizes proteins and RNAs, and checks its metabolic readiness.',
        checkpoint: 'G1/S Restriction Checkpoint',
        cancerFlaw: 'In healthy cells, p53 halts division if DNA is broken. In cancer, mutated TP53 allows damaged DNA to be replicated unchecked.'
      },
      {
        name: 'S Phase (DNA Synthesis)',
        detail: 'The cell duplicates all 3 billion base pairs of its genomic sequence across 46 chromosomes.',
        checkpoint: 'Intra-S DNA Damage Checkpoint',
        cancerFlaw: 'Target of antimetabolite chemotherapies (like 5-FU, methotrexate) which insert faulty nucleotides to jam replication forks.'
      },
      {
        name: 'G2 Phase (Growth 2)',
        detail: 'Cell prepares for physical division, checking that all DNA was copied completely and error-free.',
        checkpoint: 'G2/M Integrity Checkpoint',
        cancerFlaw: 'Normal cells undergo apoptosis if replication errors are detected. Cancer cells bypass this and charge into mitosis.'
      },
      {
        name: 'M Phase (Mitosis)',
        detail: 'Chromosomes line up along the metaphase plate; spindle microtubules pull sister chromatids to opposite poles.',
        checkpoint: 'Spindle Assembly Checkpoint',
        cancerFlaw: 'Taxanes freeze microtubules here. Cancer cells often suffer chromosome missegregation, creating aneuploidy.'
      }
    ];

    return (
      <div className="my-10 p-6 md:p-8 bg-stone-900 text-stone-100 rounded-xl border border-stone-800 shadow-md">
        <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-teal-400 font-mono">
          <Activity className="w-4 h-4" />
          <span>Interactive Explainer · Cell Cycle & Checkpoints</span>
        </div>
        <h4 className="text-xl font-serif font-semibold text-white mb-2">{diagram.title}</h4>
        <p className="text-sm text-stone-300 mb-6">{diagram.caption}</p>

        {/* Phase selector tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {phases.map((phase, idx) => (
            <button
              key={phase.name}
              onClick={() => setActiveTab(idx)}
              className={`p-3 text-left rounded-lg transition-all border ${
                activeTab === idx
                  ? 'bg-teal-950/80 border-teal-500 text-white shadow-sm'
                  : 'bg-stone-800/60 border-stone-700/60 text-stone-400 hover:text-stone-200 hover:bg-stone-800'
              }`}
            >
              <div className="text-xs font-mono text-teal-400 mb-1">0{idx + 1}</div>
              <div className="text-xs font-semibold leading-tight">{phase.name.split(' (')[0]}</div>
            </button>
          ))}
        </div>

        {/* Phase details */}
        <div className="bg-stone-800/80 rounded-lg p-5 border border-stone-700/70">
          <div className="flex items-center justify-between border-b border-stone-700 pb-3 mb-4">
            <h5 className="font-semibold text-stone-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
              {phases[activeTab].name}
            </h5>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-700 text-teal-300">
              Checkpoint: {phases[activeTab].checkpoint}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-xs uppercase font-mono text-stone-400 block mb-1">Normal Cellular Function</span>
              <p className="text-stone-300 leading-relaxed">{phases[activeTab].detail}</p>
            </div>
            <div className="bg-rose-950/40 p-3 rounded-lg border border-rose-900/60">
              <span className="text-xs uppercase font-mono text-rose-300 block mb-1">What Fails in Cancer</span>
              <p className="text-rose-200/90 leading-relaxed">{phases[activeTab].cancerFlaw}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (diagram.type === 'metastasis-cascade') {
    const steps = [
      {
        step: '1. Local Invasion',
        biology: 'Epithelial-to-Mesenchymal Transition (EMT)',
        desc: 'Cells lose tight junction E-cadherin contacts, sprout pseudopodia, and secrete matrix metalloproteinases (MMPs) to digest the extracellular basement membrane.',
        attrition: 'Survival: High in primary site'
      },
      {
        step: '2. Intravasation',
        biology: 'Squeezing into Vessels',
        desc: 'Cells breach endothelium of microvessels or lymphatic capillaries. They are now suspended in the bloodstream or lymph.',
        attrition: 'Survival: Over 90% cleared within hours'
      },
      {
        step: '3. Circulatory Transit',
        biology: 'Surviving Shear Stress & Immune Surveillance',
        desc: 'High hemodynamic pressure shears unprotected cells; natural killer (NK) cells hunt them. Some survive by clothing themselves in platelet aggregates.',
        attrition: 'Survival: Fewer than 0.1% survive transit'
      },
      {
        step: '4. Extravasation',
        biology: 'Lodging in Distant Capillaries',
        desc: 'Cells physically wedge in tight capillary beds (e.g., lungs, liver sinusoids, bone marrow) and cross back through the vessel wall into tissue.',
        attrition: 'Survival: Small fraction arrest successfully'
      },
      {
        step: '5. Colonization & Niche',
        biology: 'The "Seed and Soil" Germination',
        desc: 'The hardest step: surviving foreign organ signaling. Cells may sleep for years (dormancy) or begin micrometastatic proliferation if the pre-metastatic niche is receptive.',
        attrition: 'Survival: < 0.01% ever successfully colonize'
      }
    ];

    return (
      <div className="my-10 p-6 md:p-8 bg-stone-900 text-stone-100 rounded-xl border border-stone-800 shadow-md">
        <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-teal-400 font-mono">
          <Dna className="w-4 h-4" />
          <span>Interactive Visualizer · The Metastatic Cascade</span>
        </div>
        <h4 className="text-xl font-serif font-semibold text-white mb-2">{diagram.title}</h4>
        <p className="text-sm text-stone-300 mb-6">{diagram.caption}</p>

        {/* Stepper controls */}
        <div className="flex flex-wrap gap-2 mb-6">
          {steps.map((st, idx) => (
            <button
              key={st.step}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-2 text-xs rounded-md transition-all font-medium ${
                activeTab === idx
                  ? 'bg-teal-500 text-stone-950 font-semibold'
                  : 'bg-stone-800 text-stone-400 hover:text-stone-200'
              }`}
            >
              Step {idx + 1}
            </button>
          ))}
        </div>

        <div className="bg-stone-800/90 rounded-lg p-5 border border-stone-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-700 pb-3 mb-4">
            <div>
              <span className="text-xs font-mono text-teal-400">{steps[activeTab].biology}</span>
              <h5 className="text-lg font-semibold text-white">{steps[activeTab].step}</h5>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-950/80 text-amber-300 border border-amber-800/60 self-start sm:self-auto">
              {steps[activeTab].attrition}
            </span>
          </div>

          <p className="text-stone-200 text-sm leading-relaxed mb-4">{steps[activeTab].desc}</p>

          <div className="flex items-center justify-between pt-2 text-xs text-stone-400">
            <span>Stage {activeTab + 1} of 5</span>
            <div className="flex gap-2">
              <button
                disabled={activeTab === 0}
                onClick={() => setActiveTab(prev => Math.max(0, prev - 1))}
                className="px-2.5 py-1 rounded bg-stone-700 hover:bg-stone-600 disabled:opacity-40 disabled:pointer-events-none"
              >
                Previous
              </button>
              <button
                disabled={activeTab === steps.length - 1}
                onClick={() => setActiveTab(prev => Math.min(steps.length - 1, prev + 1))}
                className="px-2.5 py-1 rounded bg-stone-700 hover:bg-stone-600 disabled:opacity-40 disabled:pointer-events-none"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (diagram.type === 'immunotherapy') {
    const [state, setState] = useState<'cloaked' | 'uncloaked'>('cloaked');

    return (
      <div className="my-10 p-6 md:p-8 bg-stone-900 text-stone-100 rounded-xl border border-stone-800 shadow-md">
        <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-teal-400 font-mono">
          <Sparkles className="w-4 h-4" />
          <span>Interactive Simulation · Immune Checkpoint Blockade</span>
        </div>
        <h4 className="text-xl font-serif font-semibold text-white mb-2">{diagram.title}</h4>
        <p className="text-sm text-stone-300 mb-6">{diagram.caption}</p>

        {/* State Toggle */}
        <div className="flex items-center gap-3 p-1.5 bg-stone-800/80 rounded-lg max-w-md mb-6 border border-stone-700">
          <button
            onClick={() => setState('cloaked')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-all ${
              state === 'cloaked'
                ? 'bg-rose-900 text-rose-100 shadow-sm font-semibold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            A. Cancer Cloak (PD-1 + PD-L1 Active)
          </button>
          <button
            onClick={() => setState('uncloaked')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-all ${
              state === 'uncloaked'
                ? 'bg-teal-600 text-white shadow-sm font-semibold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            B. Checkpoint Therapy (Antibody Blockade)
          </button>
        </div>

        {/* Visual Comparison Area */}
        <div className="grid md:grid-cols-2 gap-6 bg-stone-800/90 rounded-lg p-6 border border-stone-700">
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase font-mono text-stone-400 mb-2">Molecular Interaction</div>
              <h5 className="text-lg font-semibold text-white mb-3">
                {state === 'cloaked'
                  ? 'PD-1 binds PD-L1: The "Off" Switch Is Engaged'
                  : 'Monoclonal Antibody Caps PD-1: The Shield Is Neutralized'}
              </h5>
              <p className="text-sm text-stone-300 leading-relaxed mb-4">
                {state === 'cloaked'
                  ? 'The cancer cell produces PD-L1 on its surface. When cytotoxic T-cell PD-1 connects, an intracellular inhibitory signal halts T-cell attack. The tumor evades destruction and continues dividing.'
                  : 'Therapeutic antibodies (e.g., Pembrolizumab / Nivolumab) physically block the PD-1 / PD-L1 junction. Denied the inhibitory signal, the T-cell recognizes tumor neoantigens and unleashes perforin and granzymes to eliminate the cancer cell.'}
              </p>
            </div>
            <div className={`p-3 rounded-md text-xs font-mono ${
              state === 'cloaked' ? 'bg-rose-950/60 text-rose-300 border border-rose-900' : 'bg-teal-950/60 text-teal-300 border border-teal-900'
            }`}>
              {state === 'cloaked' ? 'Outcome: Immune Anergy & Tumor Progression' : 'Outcome: Cytotoxic T-Cell Activation & Tumor Apoptosis'}
            </div>
          </div>

          {/* Simple stylized SVG diagram */}
          <div className="flex items-center justify-center p-4 bg-stone-950 rounded-lg border border-stone-800">
            <svg viewBox="0 0 320 180" className="w-full h-auto max-w-[280px]">
              {/* T Cell */}
              <circle cx="80" cy="90" r="50" fill="#0f766e" opacity="0.85" />
              <text x="80" y="94" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">Cytotoxic T-Cell</text>
              
              {/* Tumor Cell */}
              <circle cx="240" cy="90" r="50" fill="#991b1b" opacity="0.85" />
              <text x="240" y="94" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">Tumor Cell</text>

              {/* Receptor & Ligand */}
              {state === 'cloaked' ? (
                <>
                  {/* Connected line */}
                  <line x1="130" y1="90" x2="190" y2="90" stroke="#f59e0b" strokeWidth="4" />
                  <circle cx="160" cy="90" r="6" fill="#f59e0b" />
                  <text x="160" y="70" fill="#fcd34d" fontSize="9" textAnchor="middle" fontFamily="monospace">PD-1 : PD-L1 Lock</text>
                  <text x="160" y="125" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="monospace">INHIBITED (OFF)</text>
                </>
              ) : (
                <>
                  {/* Blocked by antibody */}
                  <line x1="130" y1="90" x2="150" y2="90" stroke="#06b6d4" strokeWidth="3" />
                  {/* Antibody Y-shape */}
                  <path d="M 160 70 L 160 85 L 152 97 M 160 85 L 168 97" stroke="#38bdf8" strokeWidth="3.5" fill="none" />
                  <line x1="175" y1="90" x2="190" y2="90" stroke="#f87171" strokeWidth="3" />
                  <text x="160" y="60" fill="#38bdf8" fontSize="9" textAnchor="middle" fontFamily="monospace">Anti-PD-1 Antibody</text>
                  <text x="160" y="125" fill="#34d399" fontSize="9" textAnchor="middle" fontFamily="monospace">ACTIVATED (KILL)</text>
                </>
              )}
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // Diagnostic Matrix
  const modalities = [
    {
      name: 'Computed Tomography (CT)',
      mechanism: 'Rotational X-ray fan beams calculated into cross-sectional tissue slices',
      strength: 'Rapid, precise 3D anatomy, staging of chest, abdomen, pelvis',
      limit: 'Radiation exposure, lacks functional cellular metabolism data'
    },
    {
      name: 'Magnetic Resonance Imaging (MRI)',
      mechanism: 'Strong magnetic fields & radiofrequency alignment of water protons',
      strength: 'Unsurpassed soft-tissue contrast; indispensable for brain, spine, and prostate',
      limit: 'Long scan time, claustrophobia, impossible with certain metal implants'
    },
    {
      name: 'PET-CT (18F-FDG)',
      mechanism: 'Radioactive glucose tracer emission combined with anatomical CT slice',
      strength: 'Identifies hypermetabolic tumors anywhere in body; measures treatment response',
      limit: 'Infections can cause false positives; expensive specialized tracer synthesis'
    },
    {
      name: 'Tissue Core Needle Biopsy',
      mechanism: 'Physical extraction of tissue ribbon for histology & immunohistochemistry',
      strength: 'Definitive gold standard; proves cell type, grade, and molecular biomarkers',
      limit: 'Invasive, carries minor procedural risks, samples only a fraction of tumor'
    },
    {
      name: 'Circulating Tumor DNA (ctDNA)',
      mechanism: 'Next-Generation Sequencing of cell-free DNA fragments shed in blood',
      strength: 'Minimally invasive blood draw, tracks clonal evolution & minimal residual disease',
      limit: 'Currently complements rather than replaces primary histology diagnosis'
    }
  ];

  return (
    <div className="my-10 p-6 md:p-8 bg-stone-900 text-stone-100 rounded-xl border border-stone-800 shadow-md">
      <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-teal-400 font-mono">
        <Info className="w-4 h-4" />
        <span>Diagnostic Modality Reference Grid</span>
      </div>
      <h4 className="text-xl font-serif font-semibold text-white mb-2">{diagram.title}</h4>
      <p className="text-sm text-stone-300 mb-6">{diagram.caption}</p>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="border-b border-stone-700 text-stone-400 font-mono uppercase text-xs">
              <th className="py-2.5 pr-4">Modality</th>
              <th className="py-2.5 px-4">Biophysical Principle</th>
              <th className="py-2.5 px-4 text-teal-300">Key Diagnostic Strength</th>
              <th className="py-2.5 pl-4 text-stone-400">Clinical Limitation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800">
            {modalities.map((m, idx) => (
              <tr key={m.name} className="hover:bg-stone-800/50 transition-colors">
                <td className="py-3 pr-4 font-semibold text-white whitespace-nowrap">{m.name}</td>
                <td className="py-3 px-4 text-stone-300 max-w-xs">{m.mechanism}</td>
                <td className="py-3 px-4 text-teal-200 max-w-xs">{m.strength}</td>
                <td className="py-3 pl-4 text-stone-400 max-w-xs">{m.limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
