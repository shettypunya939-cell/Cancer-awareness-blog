import { Article, QuizQuestion } from '../types';

// Visual asset paths generated
import heroImg from '../assets/images/cancer_hero_magazine_1791389179345.jpg';
import cellDnaImg from '../assets/images/cell_division_dna_1791389194077.jpg';
import detectionImg from '../assets/images/cancer_detection_scans_1791389206545.jpg';
import chemoImg from '../assets/images/chemotherapy_molecular_1791389216971.jpg';
import immuneImg from '../assets/images/immunotherapy_tcell_1791389228638.jpg';

export const ARTICLES: Article[] = [
  {
    id: 'cancer-isnt-just-one-disease',
    slug: 'cancer-isnt-just-one-disease',
    title: 'Cancer Isn’t Just One Disease: What Actually Happens Inside the Body?',
    subtitle: 'Why grouping over 200 distinct cellular rebellions under a single word misled us for decades—and what really happens when cells break the rules.',
    studentHook: 'When I first walked into my sophomore molecular biology lab, I still thought of cancer as a single terrifying monster. My professor drew a circle on the chalkboard, turned around, and asked: "If you had 200 distinct foreign languages, would you try to speak all of them with one word?" That question completely reframed how I see oncology.',
    readTimeMinutes: 7,
    publishDate: 'October 2, 2026',
    category: 'Cellular Biology',
    tags: ['Hallmarks of Cancer', 'Cell Biology', 'Genetics', 'Oncogenes'],
    heroImage: heroImg,
    heroImageAlt: 'Biomedical visualization of cellular DNA and dynamic microenvironment',
    heroCaption: 'Conceptual visualization of cellular chromatin and microenvironmental signaling. Even within a single tumor, cells display astonishing genetic diversity.',
    statusClassification: 'Established Biology',
    summary: 'Cancer is not a monolithic illness; it is an umbrella term for more than 200 distinct diseases. Learn how healthy cellular cooperation breaks down, why cancer cells become biological rule-breakers, and what the famous "Hallmarks of Cancer" reveal about how tumors survive.',
    keyTakeaways: [
      'Cancer represents more than 200 unique diseases, each originating from different tissues and driven by distinct genetic alterations.',
      'Healthy human bodies orchestrate roughly 37 trillion cells that cooperate through rigorous biochemical checks and balances.',
      'Tumors acquire common survival superpowers—known in biology as the "Hallmarks of Cancer"—including infinite replication and evasion of immune defenses.',
      'Even inside one patient’s tumor, individual cancer cells have different mutations, which explains why a single silver bullet cannot wipe them all out.'
    ],
    interactiveDiagram: {
      type: 'cell-cycle',
      title: 'The Cell Cycle & Checkpoint Failure',
      caption: 'In healthy tissue, checkpoints like G1/S halt division if DNA is damaged. In cancer, these brakes are dismantled.'
    },
    sections: [
      {
        id: 'the-great-biological-cooperative',
        heading: 'The Great Biological Cooperative: 37 Trillion Cells Playing by the Rules',
        content: [
          'Take a breath for a second. In the time it took you to read this sentence, your body quietly produced several million new cells to replace old, worn-out ones. Your skin sloughs off, the lining of your intestines regenerates every four to five days, and red blood cells retire after 120 days of faithful service.',
          'To make this possible, our roughly 37 trillion cells belong to what cell biologists call an ultimate cooperative society. A liver cell does not decide on a whim to divide and take over the gallbladder. A bone cell does not suddenly wander into the lung. Every cell listens to biochemical signals that command: "grow now," "stop growing," or "you are damaged beyond repair—commit suicide for the good of the organism."',
          'That programmed self-destruction has a name: apoptosis. In healthy biology, apoptosis is an act of quiet heroism. If a cell sustains severe DNA damage during replication, it initiates a cellular emergency brake, dismantles itself neatly, and is cleared away without causing inflammation. Cancer, at its most fundamental level, is what occurs when this cooperative contract is torn to pieces.'
        ],
        callout: {
          title: 'Verified Fact: The Scale of Cellular Turnover',
          text: 'According to a landmark 2016 census published in Cell, the human body replaces roughly 330 billion cells every single day. That is nearly 4 million cell divisions every second—each requiring a near-perfect copy of 3 billion DNA base pairs.',
          type: 'verified-fact'
        }
      },
      {
        id: 'why-not-one-disease',
        heading: 'Why One Word Masks 200 Different Realities',
        content: [
          'Saying someone has "cancer" is biologically as broad as saying someone has an "infection." You would never treat a fungal athlete’s foot infection the same way you treat bacterial meningitis or viral influenza. Yet for decades, public perception treated cancer as a single monolith.',
          'In reality, glioblastoma in the brain behaves nothing like ductal carcinoma in the breast. Melanoma in the skin relies on entirely different signaling pathways than acute myeloid leukemia in the bone marrow. They arise from different cell lineages (epithelial, mesenchymal, hematopoietic, neuroectodermal) and answer to completely different biochemical masters.',
          'Even more humbling is the concept of intratumoral heterogeneity. If you biopsy the top edge of a tumor and the deep core of that same tumor, you will often find two different genetic populations. As the tumor divides, new mutations sprout like branches on a chaotic Darwinian tree. A drug might wipe out 95% of the tumor, leaving behind a resilient 5% that shrugs off the treatment.'
        ]
      },
      {
        id: 'the-hallmarks-of-cancer',
        heading: 'The Rules Cancer Breaks: The Hallmarks of Cancer',
        content: [
          'In 2000, two legendary cancer biologists—Douglas Hanahan and Robert Weinberg—published a seminal paper in Cell titled "The Hallmarks of Cancer." They updated it in 2011 and again in 2022. Instead of cataloging thousands of individual mutations, they asked: what fundamental superpowers do all malignant cells share?',
          'The answers form the playbook of malignant survival: sustaining proliferative signaling (pressing the gas pedal permanently), evading growth suppressors (cutting the brakes, such as disabling the tumor suppressor gene TP53), resisting cell death (turning off apoptosis), enabling replicative immortality (reactivating telomerase to rebuild chromosome caps), and inducing angiogenesis (tricking the body into sprouting new blood vessels to feed the tumor).',
          'Later additions to the hallmarks include evading immune destruction, reprogramming energy metabolism (preferring fermentation even when oxygen is abundant, known as the Warburg effect), and phenotypic plasticity. When you view cancer through these hallmarks, you realize it is not supernatural chaos—it is Darwinian evolution occurring in real time inside our own tissue.'
        ],
        callout: {
          title: 'Student Insight: The Gas Pedal vs. The Brakes',
          text: 'In our oncology class, the simplest analogy that clicked was an automobile. Proto-oncogenes are normal gas pedals (they say "go" when needed). When mutated into oncogenes, the gas pedal is permanently jammed to the floor. Tumor suppressor genes are the brakes (like TP53). Cancer usually requires both: a jammed gas pedal AND severed brake lines.',
          type: 'insight'
        }
      }
    ],
    sources: [
      {
        id: 'hanahan-weinberg-2011',
        authorOrOrg: 'Hanahan, D. & Weinberg, R. A.',
        title: 'Hallmarks of Cancer: The Next Generation',
        publicationOrSource: 'Cell, Vol. 144, Issue 5, pp. 646–674',
        year: '2011',
        url: 'https://doi.org/10.1016/j.cell.2011.02.013'
      },
      {
        id: 'nci-what-is-cancer',
        authorOrOrg: 'National Cancer Institute (NCI)',
        title: 'What Is Cancer? Biological Basis, Types, and Growth',
        publicationOrSource: 'National Institutes of Health (NIH)',
        year: '2024',
        url: 'https://www.cancer.gov/about-cancer/understanding/what-is-cancer'
      },
      {
        id: 'who-cancer-overview',
        authorOrOrg: 'World Health Organization (WHO)',
        title: 'Cancer Fact Sheet & Global Disease Burden',
        publicationOrSource: 'WHO Media Centre',
        year: '2024',
        url: 'https://www.who.int/news-room/fact-sheets/detail/cancer'
      }
    ]
  },
  {
    id: 'where-does-cancer-begin',
    slug: 'where-does-cancer-begin',
    title: 'Where Does Cancer Begin? Understanding How Cancer Develops',
    subtitle: 'From a single misplaced chemical base in our DNA to the progressive mutational cascade that sparks a tumor.',
    studentHook: 'Every time a cell copies its genome, it must type out 3 billion letters with staggering fidelity. Imagine typing the entire Encyclopedia Britannica hundreds of times without a single typo. Your cells actually manage this with astounding proofreading enzymes—yet over a lifetime of trillions of divisions, typos inevitably slip through. That is where cancer’s origin story begins.',
    readTimeMinutes: 6,
    publishDate: 'October 3, 2026',
    category: 'Cellular Biology',
    tags: ['Mutations', 'DNA Repair', 'Carcinogenesis', 'TP53'],
    heroImage: cellDnaImg,
    heroImageAlt: 'Microscopic visualization of DNA transcription and cell cycle replication',
    heroCaption: 'Chromatin threads and replication machinery in a dividing cell nucleus. Polymerases duplicate 3 billion base pairs with an error rate under one in a billion.',
    statusClassification: 'Established Biology',
    summary: 'Cancer does not appear overnight. It is a multi-step genetic journey that usually takes years or decades to unfold. Explore the difference between inherited and acquired mutations, how DNA repair enzymes save your life every day, and why p53 is called the "guardian of the genome."',
    keyTakeaways: [
      'Cancer is fundamentally a genetic disease driven by progressive mutations in DNA over time.',
      'Most cancers (about 90–95%) arise from acquired (somatic) mutations accumulated during life, while only 5–10% are hereditary germline mutations.',
      'It takes multiple mutations—typically between two and eight driver mutations—in specific genes for a healthy cell to become fully malignant.',
      'The TP53 gene encodes the p53 protein, known as the "guardian of the genome," which is mutated or inactivated in more than 50% of all human cancers.'
    ],
    interactiveDiagram: {
      type: 'cell-cycle',
      title: 'The Multi-Hit Model of Carcinogenesis',
      caption: 'Normal tissue progresses through hyperplasia, dysplasia, carcinoma in situ, and finally invasive cancer over multiple mutational hits.'
    },
    sections: [
      {
        id: 'the-spelling-mistake-in-the-code',
        heading: 'The Spelling Mistake: How DNA Gets Damaged',
        content: [
          'Inside the nucleus of every human cell sits a six-foot-long strand of DNA tightly wound around histone proteins. It is written in a simple four-letter alphabet: Adenine (A), Thymine (T), Guanine (G), and Cytosine (C). When cells divide, DNA polymerase enzymes copy this text at roughly 50 nucleotides per second.',
          'Despite proofreading machinery that catches 99.9% of mistakes, occasional errors endure. But DNA is also under constant environmental bombardment: ultraviolet rays from sunlight break chemical bonds, reactive oxygen species produced during normal cellular metabolism nick strands, and carcinogens like tobacco smoke adduct directly onto guanine bases.',
          'To protect us, our cells carry an army of repair systems: base excision repair, nucleotide excision repair, and double-strand break repair (handled in part by the famous BRCA1 and BRCA2 proteins). When you have functioning repair machinery, hundreds of thousands of daily DNA lesions are patched up cleanly before you finish your morning coffee.'
        ],
        callout: {
          title: 'Verified Fact: How Often Does DNA Get Damaged?',
          text: 'Research reviewed by the National Institute of Environmental Health Sciences estimates that a single human cell experiences between 10,000 and 100,000 molecular DNA lesions every day. Our survival depends on constant, microscopic repair.',
          type: 'verified-fact'
        }
      },
      {
        id: 'the-multi-hit-hypothesis',
        heading: 'The Multi-Hit Hypothesis: Why One Mutation Is Not Enough',
        content: [
          'Back in 1971, geneticist Alfred Knudson studied retinoblastoma, a rare eye cancer in children, and proposed the revolutionary "two-hit hypothesis." He realized that a single damaged gene rarely causes cancer. Normal cells have redundant fail-safes.',
          'Think of it like an airliner with triple-redundant hydraulic systems. If one hydraulic line fails, warning lights chime in the cockpit, but backup pumps keep the aircraft stable. To cause an aerodynamic catastrophe, multiple independent systems must fail simultaneously.',
          'In human oncology, this is called the multi-step model of carcinogenesis. First, a cell acquires a "driver mutation" that gives it a slight growth advantage (hyperplasia). Decades later, a second mutation impairs its ability to detect DNA breaks. A third mutation knocks out p53, allowing the cell to ignore apoptosis signals. A fourth mutation unleashes telomerase. Only after this progressive accumulation of "hits" does a calm patch of tissue transform into an invasive carcinoma.'
        ]
      },
      {
        id: 'guardian-of-the-genome',
        heading: 'Meet p53: The Most Important Protein You Never Think About',
        content: [
          'If biology gave out Nobel prizes to individual molecules, the p53 protein would have a shelf full of them. Biologists universally refer to it as the "guardian of the genome." Discovered in 1979, p53 acts as an omnipresent quality-control inspector inside the nucleus.',
          'When p53 senses DNA damage, hypoxia, or oncogene hyperactivation, it stops the cell cycle dead in its tracks at the G1/S transition. It gives repair enzymes time to fix the damage. If the damage is too catastrophic to salvage, p53 flips the master switch for apoptosis, sacrificing the cell to protect the body.',
          'Because p53 is so effective, almost every malignant tumor must find a way to silence it. According to the National Cancer Institute, more than half of all human tumors possess a disabled or mutated TP53 gene. Without this guardian, damaged cells divide freely, accumulating bizarre chromosomal errors that fuel tumor evolution.'
        ],
        callout: {
          title: 'Clinical Context: Hereditary vs. Acquired',
          text: 'Many people worry they will inherit cancer. While hereditary cancer syndromes exist (such as Li-Fraumeni syndrome involving TP53, or Lynch syndrome involving DNA mismatch repair), the American Cancer Society emphasizes that 90% to 95% of cancers stem from acquired mutations over a lifetime, influenced by age, environmental exposures, and chance.',
          type: 'clinical-context'
        }
      }
    ],
    sources: [
      {
        id: 'knudson-1971',
        authorOrOrg: 'Knudson, A. G.',
        title: 'Mutation and Cancer: Statistical Study of Retinoblastoma',
        publicationOrSource: 'Proceedings of the National Academy of Sciences (PNAS), 68(4), 820-823',
        year: '1971',
        url: 'https://doi.org/10.1073/pnas.68.4.820'
      },
      {
        id: 'lane-p53-review',
        authorOrOrg: 'Lane, D. P. & Levine, A. J.',
        title: 'p53: 40 Years of Research into the Guardian of the Genome',
        publicationOrSource: 'Nature Reviews Molecular Cell Biology, 20, 661–680',
        year: '2019',
        url: 'https://doi.org/10.1038/s41580-019-0158-y'
      },
      {
        id: 'acs-genetics-cancer',
        authorOrOrg: 'American Cancer Society (ACS)',
        title: 'Genes and Cancer: How DNA Changes Lead to Malignancies',
        publicationOrSource: 'cancer.org Medical Editorial Team',
        year: '2024',
        url: 'https://www.cancer.org/cancer/understanding-cancer/genes-and-cancer.html'
      }
    ]
  },
  {
    id: 'the-warning-signs',
    slug: 'the-warning-signs',
    title: 'The Warning Signs: How Cancer Can Show Up in the Body',
    subtitle: 'From subtle biological whispers to measurable physical shifts—why listening to persistent bodily changes saves lives.',
    studentHook: 'In health class, they usually hand you an acronym and tell you to memorize it for a Friday test. But when you look at the human body from a physiological perspective, warning signs aren’t mysterious riddles—they are direct mechanical and biochemical consequences of an abnormal mass demanding resources or pressing on nerves.',
    readTimeMinutes: 6,
    publishDate: 'October 4, 2026',
    category: 'Diagnostics & Detection',
    tags: ['Symptoms', 'Early Detection', 'Clinical Signs', 'Patient Awareness'],
    heroImage: detectionImg,
    heroImageAlt: 'Medical imaging and clinical diagnostic visualization',
    heroCaption: 'Modern clinical oncology balances symptom evaluation with diagnostic imaging. The hallmark of a potential warning sign is unexplained persistence over time.',
    statusClassification: 'Standard of Care',
    summary: 'Why does cancer cause unexpected weight loss, persistent coughs, or new skin changes? Learn the biological mechanisms behind the body’s warning signals, understand the difference between acute temporary symptoms and chronic red flags, and explore the power of early detection.',
    keyTakeaways: [
      'Warning signs of cancer are typically non-specific; having a symptom does not mean you have cancer, but persistent symptoms warrant investigation.',
      'The American Cancer Society uses the classic "CAUTION" mnemonic to help people remember common signs of malignancy.',
      'Unexplained weight loss often stems from tumor-driven cytokine release (like TNF-alpha) causing cachexia and altered metabolism.',
      'Early-stage detection remains one of the single most reliable predictors of positive long-term cancer outcomes across virtually all cancer types.'
    ],
    interactiveDiagram: {
      type: 'diagnostic-matrix',
      title: 'Evaluating Clinical Signals: Acute vs. Persistent',
      caption: 'A symptom that resolves in days is usually benign or infectious. A symptom that progressively worsens over 3 to 4 weeks warrants clinical review.'
    },
    sections: [
      {
        id: 'the-language-of-symptoms',
        heading: 'Why Does a Tumor Make You Feel Sick? The Underlying Physiology',
        content: [
          'If a tumor starts as a microscopic cluster of cells, why does it eventually produce systemic symptoms? The answer lies in two mechanisms: mechanical mass effect and biochemical signaling.',
          'Mechanical mass effect is straightforward physics: as a cluster of cells expands, it occupies physical volume. In the bowel, it might partially obstruct transit, causing alternating constipation and diarrhea. In the chest, it might press on a bronchus, irritating stretch receptors and causing a cough that lingers for months. Under the skin or in breast tissue, it forms a palpable, non-tender, irregular lump.',
          'Biochemical signaling is far more sneaky. Fast-growing tumors consume staggering amounts of glucose and glutamine. Simultaneously, the body’s immune system releases pro-inflammatory cytokines—like Tumor Necrosis Factor-alpha (TNF-α) and Interleukin-6 (IL-6)—in an attempt to contain the abnormal cells. These cytokines cross the blood-brain barrier, suppress appetite in the hypothalamus, and signal skeletal muscle to break down. The result is unintentional weight loss and profound, unshakeable fatigue.'
        ],
        callout: {
          title: 'Verified Fact: The American Cancer Society "CAUTION" Guide',
          text: 'The American Cancer Society outlines 7 classic signs: Change in bowel or bladder habits; A sore that does not heal; Unusual bleeding or discharge; Thickening or lump in breast or elsewhere; Indigestion or difficulty swallowing; Obvious change in a wart or mole; Nagging cough or hoarseness.',
          type: 'verified-fact'
        }
      },
      {
        id: 'the-abcde-skin-rule',
        heading: 'The ABCDE Framework for Skin: Biology You Can See',
        content: [
          'Melanoma is one of the clearest examples where anyone can observe cellular chaos with their own eyes. Normal melanocytes (the cells that make pigment) produce symmetrical, evenly shaded moles with smooth borders.',
          'Dermatologists teach the ABCDE rule for evaluating pigmented skin lesions: Asymmetry (one half doesn’t match the other), Border irregularity (notched, ragged, or blurred edges), Color variation (shades of tan, brown, black, or even red/blue), Diameter (larger than 6mm, roughly the size of a pencil eraser), and Evolving (any change in size, shape, color, or symptoms like itching or bleeding).',
          'The key letter here is "E" for Evolving. Normal adult moles are static. Malignant tumors, driven by ongoing mutations and clonal expansion, are fundamentally dynamic. If a skin spot is actively changing its appearance over weeks or months, biology is in motion.'
        ]
      },
      {
        id: 'when-to-worry-vs-when-to-breathe',
        heading: 'Persistence Over Time: The Golden Rule of Early Detection',
        content: [
          'Here is an essential piece of advice every doctor emphasizes: almost every single symptom associated with cancer is far more commonly caused by something completely benign. A cough is usually a lingering viral infection. An upset stomach is usually acid reflux. A swollen lymph node in the neck is usually your immune system fighting off a common cold.',
          'The critical differentiator in clinical medicine is time and trajectory. A common cold infection peaks and resolves within 7 to 14 days. An inflamed lymph node shrinks once the sore throat clears.',
          'When an unexplained symptom persists for more than three to four weeks, does not respond to standard remedies, or progressively worsens, that is the clear signal to schedule an evaluation with a primary care physician. Early detection turns what could have been a late-stage crisis into a highly treatable localized condition.'
        ],
        callout: {
          title: 'Student Insight: Normalization of Symptoms',
          text: 'In medical sociology, researchers describe "symptom normalization"—where patients explain away fatigue ("I am just stressed from school") or persistent hoarseness ("It is just the dry weather") for months. Don’t normalize chronic changes; an objective medical checkup provides either peace of mind or timely intervention.',
          type: 'insight'
        }
      }
    ],
    sources: [
      {
        id: 'acs-signs-symptoms',
        authorOrOrg: 'American Cancer Society (ACS)',
        title: 'Signs and Symptoms of Cancer: What to Look For',
        publicationOrSource: 'American Cancer Society Guidelines',
        year: '2024',
        url: 'https://www.cancer.org/cancer/diagnosis-staging/signs-and-symptoms-of-cancer.html'
      },
      {
        id: 'nci-detection-screening',
        authorOrOrg: 'National Cancer Institute (NCI)',
        title: 'Cancer Screening and Early Detection Guidelines',
        publicationOrSource: 'National Institutes of Health',
        year: '2023',
        url: 'https://www.cancer.gov/about-cancer/screening'
      },
      {
        id: 'aad-melanoma-abcde',
        authorOrOrg: 'American Academy of Dermatology (AAD)',
        title: 'What to Look for: The ABCDEs of Melanoma',
        publicationOrSource: 'AAD Clinical Resource',
        year: '2024',
        url: 'https://www.aad.org/public/diseases/skin-cancer/find/at-risk/abcdes'
      }
    ]
  },
  {
    id: 'from-scan-to-biopsy',
    slug: 'from-scan-to-biopsy',
    title: 'From Scan to Biopsy: How Doctors Detect Cancer',
    subtitle: 'From physics-defying PET tracers to pathologist microscope slides and genomic liquid biopsies—the real diagnostic journey.',
    studentHook: 'I used to think finding cancer was like finding a needle in a haystack with a metal detector: you wave a wand, the machine beeps, and the doctor says "There it is." But shadowing in a hospital imaging suite showed me something far more sophisticated. Detecting cancer is an interdisciplinary detective story combining quantum physics, organic chemistry, pathology, and molecular sequencing.',
    readTimeMinutes: 8,
    publishDate: 'October 4, 2026',
    category: 'Diagnostics & Detection',
    tags: ['Biopsy', 'PET Scan', 'Histology', 'Pathology', 'Liquid Biopsy'],
    heroImage: detectionImg,
    heroImageAlt: 'Cross-sectional imaging tomography and pathology microscope histology slide',
    heroCaption: 'A dual-modality PET-CT scan fuses anatomy (CT) with cellular metabolism (PET). Below, a pathology slide provides the definitive microscopic diagnosis.',
    statusClassification: 'Standard of Care',
    summary: 'How do oncologists find an abnormal mass, determine whether it is benign or malignant, and establish its stage? Walk step-by-step through CT scans, MRI, radioactive glucose PET scans, needle biopsies, and cutting-edge blood liquid biopsies.',
    keyTakeaways: [
      'Imaging techniques (X-ray, CT, MRI, Ultrasound) reveal anatomical abnormalities, but they cannot definitively prove malignancy on their own.',
      'PET scans use a radioactive sugar tracer (FDG) to highlight hyper-metabolic cells, exploiting cancer’s immense appetite for glucose.',
      'A tissue biopsy evaluated by an anatomical pathologist remains the definitive gold standard for cancer diagnosis.',
      'Next-generation liquid biopsies analyze circulating tumor DNA (ctDNA) shed into the bloodstream, offering non-invasive genetic insights.'
    ],
    interactiveDiagram: {
      type: 'diagnostic-matrix',
      title: 'Comparing Modern Diagnostic Modalities',
      caption: 'Each diagnostic technology answers a specific question: from anatomical location to cellular metabolism and DNA sequence.'
    },
    sections: [
      {
        id: 'the-physics-of-looking-inside',
        heading: 'Peering Through Flesh: CT, MRI, and the Glucose Trick of PET Scans',
        content: [
          'When a physician suspects an abnormality, the first line of investigation is non-invasive medical imaging. Each technology uses distinct physical principles to illuminate our internal anatomy.',
          'Computed Tomography (CT) shoots thin X-ray beams from a rotating gantry, calculating thousands of cross-sectional attenuation slices to reconstruct a 3D volume of dense organs. Magnetic Resonance Imaging (MRI) uses powerful magnetic fields (typically 1.5 to 3 Tesla) to align hydrogen protons in water molecules, then pulses radio waves to capture exquisite soft-tissue contrasts in the brain, spine, and joints.',
          'Then there is Positron Emission Tomography (PET), which uses pure biochemistry. Otto Warburg observed in the 1920s that cancer cells consume up to 200 times more glucose than normal cells (aerobic glycolysis). Doctors capitalize on this by injecting a tiny amount of Fluorodeoxyglucose (18F-FDG)—a glucose molecule tagged with a radioactive fluorine atom. Cells with hyperactive metabolism greedily absorb the tracer. Inside the PET scanner, decaying positrons collide with electrons, emitting gamma rays that light up the tumor like a beacon against darker background tissues.'
        ],
        callout: {
          title: 'Verified Fact: The Warburg Effect',
          text: 'Even when plenty of oxygen is available, cancer cells frequently ferment glucose into lactate rather than using oxidative phosphorylation. This metabolic anomaly, discovered by Nobel laureate Otto Warburg, forms the exact biochemical basis for modern PET scans used worldwide.',
          type: 'verified-fact'
        }
      },
      {
        id: 'the-pathologists-verdict',
        heading: 'The True Gold Standard: The Pathologist and the Microscope',
        content: [
          'No matter how suspicious a PET scan looks, an oncologist will almost never declare "You have cancer" based on imaging alone. Imaging can show a mass, but an infection, a benign adenoma, or scar tissue can also create shadows and consume glucose.',
          'The definitive diagnosis requires a biopsy: physically harvesting a piece of tissue via fine-needle aspiration, core needle, or surgical excision. That tissue is fixed in formalin, embedded in paraffin wax, sliced into ribbons thinner than a single cell (around 4 micrometers), and stained with Hematoxylin and Eosin (H&E).',
          'An anatomical pathologist peers through the microscope to evaluate tissue architecture. Are the cells neatly organized in glandular structures, or are they chaotic and disorganized? Are their nuclei enlarged and dark (hyperchromatic)? Are there frequent, abnormal mitotic figures? The pathologist assigns a grade (how abnormal the cells look) and runs immunohistochemical stains to identify specific proteins on the cell surface (like HER2 or estrogen receptors in breast tissue).'
        ]
      },
      {
        id: 'the-rise-of-liquid-biopsies',
        heading: 'The Frontier: Liquid Biopsies and Circulating DNA',
        content: [
          'While needle biopsies remain the foundation, they have drawbacks: they are invasive, can carry risks depending on tumor location (such as the deep lung or pancreas), and only sample a tiny fragment of a heterogeneous tumor.',
          'Enter the liquid biopsy. As cells inside a tumor divide and die, they shed tiny fragments of their genetic code into the bloodstream—known as circulating tumor DNA (ctDNA). Using ultra-sensitive next-generation sequencing (NGS), modern blood tests can detect these fragmented mutant molecules even at concentrations as low as one mutant fragment per 10,000 healthy fragments.',
          'Liquid biopsies are already FDA-approved to detect actionable mutations (such as EGFR mutations in lung cancer) to guide targeted therapies, monitor minimal residual disease (MRD) after surgery, and track the emergence of drug resistance months before a scan would show tumor regrowth.'
        ],
        callout: {
          title: 'Clinical Distinction: Staging vs. Grading',
          text: 'It is easy to confuse these terms: Grade describes what the cancer cells look like under a microscope (Grade 1 looks almost normal; Grade 3 looks wild and disorganized). Stage describes where the cancer has traveled in the body, typically categorized using the TNM system (Tumor size, Node involvement, distant Metastasis).',
          type: 'clinical-context'
        }
      }
    ],
    sources: [
      {
        id: 'nci-diagnosis-staging',
        authorOrOrg: 'National Cancer Institute (NCI)',
        title: 'How Cancer Is Diagnosed: Imaging, Biopsy, and Pathology',
        publicationOrSource: 'National Institutes of Health',
        year: '2024',
        url: 'https://www.cancer.gov/about-cancer/diagnosis-staging/diagnosis'
      },
      {
        id: 'wan-liquid-biopsy-nature',
        authorOrOrg: 'Wan, J. C. M. et al.',
        title: 'Liquid Biopsies Come of Age: Towards Implementation of Circulating Tumour DNA',
        publicationOrSource: 'Nature Reviews Cancer, 17, 223–238',
        year: '2017',
        url: 'https://doi.org/10.1038/nrc.2017.8'
      },
      {
        id: 'acs-biopsy-types',
        authorOrOrg: 'American Cancer Society (ACS)',
        title: 'Biopsy Procedures: How Tissue Is Collected and Analyzed',
        publicationOrSource: 'Cancer.org Medical Editorial Team',
        year: '2023',
        url: 'https://www.cancer.org/cancer/diagnosis-staging/tests/biopsy-and-cytology-tests.html'
      }
    ]
  },
  {
    id: 'how-chemotherapy-works',
    slug: 'how-chemotherapy-works',
    title: 'The Fight Against Cancer: How Chemotherapy Works',
    subtitle: 'Unpacking the cellular physics of traditional cytotoxic drugs—why they target rapid division, and why the side effects occur.',
    studentHook: 'Chemotherapy is one of the most feared words in medicine, conjuring images of nausea, hair loss, and exhaustion. But when you examine how these drugs were invented—beginning with an accidental observation of mustard gas during World War II—you uncover a fascinating, gritty story of biochemical ingenuity. Chemotherapy is essentially a calculated bet on cellular math.',
    readTimeMinutes: 7,
    publishDate: 'October 5, 2026',
    category: 'Treatments & Therapies',
    tags: ['Chemotherapy', 'Cytotoxic Drugs', 'Cell Cycle', 'Side Effects'],
    heroImage: chemoImg,
    heroImageAlt: 'Molecular visualization of cytotoxic and targeted drug compounds interacting with cells',
    heroCaption: 'Chemotherapeutic agents interfere with DNA replication or spindle fiber assembly during cell division, triggering apoptosis in rapidly multiplying cells.',
    statusClassification: 'Standard of Care',
    summary: 'What actually happens inside a cell when chemotherapy is infused? Learn how cytotoxic drugs exploit the Achilles heel of rapid cell division, why healthy tissues like hair follicles and the intestinal lining get caught in the crossfire, and how modern supportive medicine transformed tolerance.',
    keyTakeaways: [
      'Chemotherapy works primarily by disrupting DNA replication or mitotic spindle formation in rapidly dividing cells.',
      'Common classes include alkylating agents (cross-linking DNA), antimetabolites (counterfeit building blocks), and microtubule inhibitors.',
      'Classic side effects (hair loss, nausea, neutropenia) occur because healthy cells that naturally divide quickly also sustain collateral damage.',
      'Advances in antiemetic medications (such as 5-HT3 and NK1 receptor antagonists) have dramatically improved patient tolerability compared to decades past.'
    ],
    interactiveDiagram: {
      type: 'cell-cycle',
      title: 'Chemotherapy Cell-Cycle Vulnerability Points',
      caption: 'Different chemo drugs strike at distinct phases: antimetabolites halt S-phase DNA synthesis, while taxanes freeze M-phase mitotic spindles.'
    },
    sections: [
      {
        id: 'the-wartime-origin-and-the-cellular-bet',
        heading: 'The Calculated Bet: Striking the Cell Cycle Where It Hurts',
        content: [
          'In December 1943, an Allied cargo ship carrying liquid sulfur mustard was bombed in the harbor of Bari, Italy. Doctors treating surviving soldiers noticed a startling phenomenon: their white blood cell counts had plummeted to nearly zero.',
          'Two pharmacologists at Yale—Louis Goodman and Alfred Gilman—read these confidential reports and asked a brilliant, daring question: if nitrogen mustard destroys rapidly multiplying normal white blood cells, could a modified version destroy rapidly multiplying malignant lymphoma cells? In 1942, they conducted the world’s first clinical trial of chemical cancer therapy. The patient’s massive lymphoma tumors shrank significantly within days.',
          'Traditional chemotherapy is built on this very premise: cancer cells divide much faster and far more recklessly than most adult somatic cells. By introducing a chemical agent that sabotages DNA replication or cell division, you trigger catastrophic damage in multiplying cells, forcing them into apoptosis.'
        ],
        callout: {
          title: 'Verified Fact: Sidney Farber and the First Remissions',
          text: 'In 1948, Dr. Sidney Farber at Boston Children’s Hospital used aminopterin—an antifolate that deprives dividing cells of folic acid needed to synthesize DNA—to achieve the first-ever temporary remissions in children with acute lymphoblastic leukemia, launching the modern era of chemotherapy.',
          type: 'verified-fact'
        }
      },
      {
        id: 'how-the-drugs-sabotage-cells',
        heading: 'Molecular Sabotage: Alkylators, Antimetabolites, and Spindle Poisons',
        content: [
          'Oncologists rarely use just one drug; they combine different classes that attack the cell cycle from multiple angles to prevent resistant clones from surviving:',
          '1. Alkylating Agents (e.g., Cyclophosphamide, Cisplatin): These act like molecular superglue. They attach chemical alkyl groups to DNA bases, forming covalent cross-links between the two strands. When the cell tries to unwind its DNA double helix to duplicate it, the strands are stuck together. The replication fork collides, DNA snaps, and the cell self-destructs.',
          '2. Antimetabolites (e.g., Methotrexate, 5-Fluorouracil): These are molecular counterfeiters. They closely mimic normal DNA building blocks (like folate, purines, or pyrimidines). The dividing cell absorbs the fake molecule and tries to incorporate it into its growing DNA strand, jamming the polymerase machinery like a flawed key stuck in a lock.',
          '3. Microtubule Inhibitors (e.g., Paclitaxel, Vincristine): During mitosis, cells build an intricate railway system of protein fibers called microtubules to pull duplicated chromosomes apart into two daughter cells. Taxanes (originally derived from the bark of the Pacific Yew tree) freeze these microtubules like ice, preventing the cell from completing division.'
        ]
      },
      {
        id: 'why-hair-and-gut-cells-suffer',
        heading: 'Collateral Damage: Why Hair Falls Out and Nausea Happens',
        content: [
          'The fundamental limitation of classic chemotherapy is selectivity. Systemic chemotherapy floats through the entire bloodstream; it cannot read a sign that says "cancer cell." It simply attacks whichever cells are dividing rapidly.',
          'Which normal human cells divide rapidly? The cells in your hair follicles (which continuously push out keratin), the epithelial cells lining your stomach and intestines (which face harsh digestive enzymes), and the hematopoietic stem cells in your bone marrow (which continuously produce red blood cells, white blood cells, and platelets).',
          'When chemo strikes these healthy populations, hair thins or falls out, the gut lining becomes inflamed causing nausea and diarrhea, and white blood cell counts drop (neutropenia), leaving patients temporarily vulnerable to infections. Fortunately, because normal cells retain intact DNA repair and checkpoint mechanisms, they typically recover and regenerate once the treatment cycle concludes.'
        ],
        callout: {
          title: 'Student Insight: The Revolution in Supportive Care',
          text: 'Older movies portray chemotherapy patients violently vomiting for days. While chemo remains physically demanding, modern supportive care drugs—specifically neurokinin-1 (NK1) antagonists and serotonin 5-HT3 receptor blockers like ondansetron—have turned severe vomiting into a manageable symptom for the vast majority of patients.',
          type: 'insight'
        }
      }
    ],
    sources: [
      {
        id: 'devita-chemo-history',
        authorOrOrg: 'DeVita, V. T. & Chu, E.',
        title: 'A History of Cancer Chemotherapy',
        publicationOrSource: 'Cancer Research, 68(21), 8643–8653',
        year: '2008',
        url: 'https://doi.org/10.1158/0008-5472.CAN-07-6611'
      },
      {
        id: 'nci-chemotherapy',
        authorOrOrg: 'National Cancer Institute (NCI)',
        title: 'Chemotherapy to Treat Cancer: Types, Administration, and Side Effects',
        publicationOrSource: 'National Institutes of Health',
        year: '2024',
        url: 'https://www.cancer.gov/about-cancer/treatment/types/chemotherapy'
      },
      {
        id: 'acs-chemo-guide',
        authorOrOrg: 'American Cancer Society (ACS)',
        title: 'How Chemotherapy Drugs Work and Managing Side Effects',
        publicationOrSource: 'American Cancer Society Guidelines',
        year: '2023',
        url: 'https://www.cancer.gov/about-cancer/treatment/types/chemotherapy'
      }
    ]
  },
  {
    id: 'more-than-chemotherapy',
    slug: 'more-than-chemotherapy',
    title: 'More Than Chemotherapy: Understanding Modern Cancer Treatments',
    subtitle: 'From targeted kinase inhibitors and hormone therapies to antibody-drug conjugates: how precision oncology shifted the paradigm.',
    studentHook: 'If traditional chemotherapy is a sledgehammer, modern cancer therapy is striving to be a laser-guided scalpel. In the 1990s, if two people had lung cancer, they received identical general chemotherapies. Today, their tumors are sent for genomic next-generation sequencing, and they might receive completely different designer pills that specifically target the single mutated protein driving their disease.',
    readTimeMinutes: 7,
    publishDate: 'October 5, 2026',
    category: 'Treatments & Therapies',
    tags: ['Targeted Therapy', 'Precision Medicine', 'ADCs', 'Hormone Therapy'],
    heroImage: chemoImg,
    heroImageAlt: 'Targeted kinase inhibitor drug docking into cell surface receptor protein',
    heroCaption: 'Precision oncology: Small-molecule targeted therapies fit precisely into mutant enzymatic pockets, shutting down aberrant survival signals with minimal damage to healthy cells.',
    statusClassification: 'Standard of Care',
    summary: 'Cancer treatment is experiencing a revolution beyond blunt cytotoxics. Discover how targeted therapies block the exact oncogenic switches fueling tumors, how hormone blockers starve endocrine cancers, and why antibody-drug conjugates are hailed as the "smart bombs" of oncology.',
    keyTakeaways: [
      'Targeted therapies specifically inhibit mutated molecules (like EGFR, BRAF, ALK, or HER2) essential for tumor survival, sparing normal cells.',
      'The landmark approval of Imatinib (Gleevec) in 2001 for Chronic Myeloid Leukemia proved that single-target molecular inhibition could turn fatal cancers into manageable conditions.',
      'Hormone therapies block estrogen or androgen receptors, cutting off vital growth fuel in hormone-receptor-positive breast and prostate cancers.',
      'Antibody-Drug Conjugates (ADCs) combine the precision guidance of monoclonal antibodies with lethal chemotherapy payloads, releasing the toxic drug only inside the cancer cell.'
    ],
    interactiveDiagram: {
      type: 'cell-cycle',
      title: 'Targeted Blockade vs. ADC Delivery',
      caption: 'Targeted TKIs block intracellular phosphorylation; ADCs bind surface antigens, internalize via endocytosis, and release cytotoxic warheads locally.'
    },
    sections: [
      {
        id: 'the-gleevec-moment',
        heading: 'The Gleevec Revolution: Turning a Death Sentence into a Manageable Disease',
        content: [
          'To understand why precision oncology changed everything, you have to know about Gleevec (imatinib). In Chronic Myeloid Leukemia (CML), a chromosomal accident called the Philadelphia chromosome fuses two genes together: BCR and ABL. This creates an abnormal mutant enzyme—BCR-ABL tyrosine kinase—that is permanently switched "on," ordering white blood cells to divide non-stop. For decades, CML was almost universally fatal within three to five years.',
          'In the late 1990s, researcher Brian Druker and collaborators tested a synthetic small molecule that slid into the exact ATP-binding pocket of this mutant kinase, locking it frozen. When tested in clinical trials, virtually 90% of CML patients saw their leukemia vanish into deep remission with just a daily oral pill and remarkably few side effects.',
          'This showed the oncology world what was possible: if you identify the specific oncogene driving a tumor (the "oncogene addiction"), you can design a targeted molecular key to turn it off.'
        ],
        callout: {
          title: 'Verified Fact: CML Survival Transformation',
          text: 'Prior to imatinib in 2001, the 5-year survival rate for Chronic Myeloid Leukemia was roughly 30%. With modern tyrosine kinase inhibitors, five-year survival exceeds 90%, giving most patients a near-normal life expectancy according to the Leukemia & Lymphoma Society.',
          type: 'verified-fact'
        }
      },
      {
        id: 'hormone-therapy-starving-the-engine',
        heading: 'Starving the Receptor: Hormone Therapy in Breast and Prostate Cancers',
        content: [
          'Many cancers arise from tissues that naturally respond to sex hormones. In approximately 70–80% of breast cancers, the cancer cells express estrogen receptors (ER-positive). Estrogen binds to these receptors and acts like lighter fluid on a campfire.',
          'Hormone therapy interrupts this fuel supply. Selective Estrogen Receptor Modulators (SERMs) like Tamoxifen act as deceptive mimics: they bind to estrogen receptors on breast cells, blocking natural estrogen from docking. In postmenopausal patients, aromatase inhibitors (like Anastrozole) block the enzyme that converts adrenal hormones into estrogen throughout the body.',
          'In prostate cancer, androgen deprivation therapy (ADT) uses drugs to shut down testosterone production in the testes or block androgen receptors in prostate tumor cells, starving them of the hormonal signals they require to thrive.'
        ]
      },
      {
        id: 'antibody-drug-conjugates',
        heading: 'The Smart Bombs of Oncology: Antibody-Drug Conjugates (ADCs)',
        content: [
          'One of the most exciting classes in modern oncology is the Antibody-Drug Conjugate (ADC). Think of an ADC as a biological guided missile with three parts: a monoclonal antibody, a chemical linker, and a cytotoxic warhead.',
          'The monoclonal antibody is engineered to seek out and bind only to a protein overexpressed on cancer cells (such as HER2 or TROP2). The cytotoxic payload attached to the back of the antibody is a chemotherapy compound so extraordinarily potent that if injected freely into a patient’s vein, it would be dangerously toxic.',
          'The stable chemical linker keeps the drug safely locked onto the antibody as it travels through the bloodstream. When the antibody docks onto the cancer cell’s surface, the entire complex is pulled inside the cell (endocytosis). Inside the acidic lysosome, the linker is cleaved, releasing the lethal payload directly into the tumor cell nucleus while leaving surrounding healthy cells largely unharmed.'
        ],
        callout: {
          title: 'Clinical Context: Genomic Tumor Profiling',
          text: 'Today, many comprehensive cancer centers perform Comprehensive Genomic Profiling (CGP) using next-generation DNA sequencing on every metastatic tumor biopsy, searching for actionable mutations across hundreds of cancer-associated genes simultaneously.',
          type: 'clinical-context'
        }
      }
    ],
    sources: [
      {
        id: 'druker-gleevec-nejm',
        authorOrOrg: 'Druker, B. J. et al.',
        title: 'Efficacy and Safety of a Specific Inhibitor of the BCR-ABL Tyrosine Kinase in Chronic Myeloid Leukemia',
        publicationOrSource: 'New England Journal of Medicine, 344(14), 1031–1037',
        year: '2001',
        url: 'https://doi.org/10.1056/NEJM200104053441401'
      },
      {
        id: 'nci-targeted-therapy',
        authorOrOrg: 'National Cancer Institute (NCI)',
        title: 'Targeted Therapy to Treat Cancer: Types, How It Works, and Testing',
        publicationOrSource: 'National Institutes of Health',
        year: '2024',
        url: 'https://www.cancer.gov/about-cancer/treatment/types/targeted-therapies'
      },
      {
        id: 'nature-adc-review',
        authorOrOrg: 'Drago, J. Z. et al.',
        title: 'Unlocking the Potential of Antibody–Drug Conjugates for Cancer Therapy',
        publicationOrSource: 'Nature Reviews Clinical Oncology, 18, 327–344',
        year: '2021',
        url: 'https://doi.org/10.1038/s41571-021-00470-8'
      }
    ]
  },
  {
    id: 'turning-the-immune-system-into-a-weapon',
    slug: 'turning-the-immune-system-into-a-weapon',
    title: 'Turning the Immune System Into a Weapon: The Rise of Immunotherapy',
    subtitle: 'How James Allison and Tasuku Honjo unlocked the immune brakes, and why training T-cells to hunt tumors won the Nobel Prize.',
    studentHook: 'For over a century, cancer treatments were based on a simple philosophy: introduce a knife, radiation, or poison from the outside to destroy the foreign invader. Immunotherapy completely inverted that logic. It asked: what if the cure isn’t an outside chemical, but the trillion-celled immune army already patrolling your blood vessels right now?',
    readTimeMinutes: 8,
    publishDate: 'October 6, 2026',
    category: 'Frontiers of Research',
    tags: ['Immunotherapy', 'Checkpoint Inhibitors', 'CAR-T Cells', 'Nobel Prize'],
    heroImage: immuneImg,
    heroImageAlt: 'Bioengineered CAR-T cell engaging tumor antigen in immunological synapse',
    heroCaption: 'An engineered CAR-T lymphocyte locking onto a cancer antigen. Checkpoint inhibitors cut off the tumor’s molecular "secret handshake" that shields it from destruction.',
    statusClassification: 'Standard of Care',
    summary: 'Explore the monumental breakthrough that won the 2018 Nobel Prize in Medicine. Understand how cancer cells disguise themselves with molecular shields like PD-L1, how checkpoint inhibitors drop their cloaking devices, and how CAR-T cell therapies re-engineer a patient’s own immune cells into living drugs.',
    keyTakeaways: [
      'Your immune system already destroys nascent cancer cells every day; tumors arise only when cells evolve ways to evade or exhaust T-cell surveillance.',
      'Checkpoint inhibitors (anti-PD-1, anti-PD-L1, anti-CTLA-4) block the inhibitory signals tumors use to deactivate cytotoxic T-cells.',
      'The 2018 Nobel Prize in Physiology or Medicine was awarded to James Allison and Tasuku Honjo for discovering immune checkpoint regulation.',
      'CAR-T cell therapy is a living cellular drug: a patient’s T-cells are harvested, genetically engineered with a synthetic chimeric antigen receptor, and reinfused to eradicate hematologic malignancies.'
    ],
    interactiveDiagram: {
      type: 'immunotherapy',
      title: 'Mechanism of Immune Checkpoint Blockade',
      caption: 'The PD-1/PD-L1 pathway acts as an immune "off switch." Monoclonal checkpoint inhibitors block this interaction, allowing cytotoxic T-cells to destroy the tumor.'
    },
    sections: [
      {
        id: 'the-cloaking-device-and-the-secret-handshake',
        heading: 'The Secret Handshake: Why the Immune System Misses Cancer',
        content: [
          'To understand why immunotherapy is so profound, you have to ask a puzzle: your immune system easily destroys a common influenza virus, so why does it let a massive tumor grow untouched?',
          'The answer is that unlike bacteria or viruses, cancer cells are made of your own flesh. They are self. To prevent autoimmune destruction (where immune cells attack your own kidneys, heart, or pancreas), healthy tissues display inhibitory proteins on their surface called immune checkpoints. Think of these like a molecular secret handshake or an ID badge that says: "Do not fire! Friendly citizen here."',
          'One of the most famous checkpoints is the PD-1 (Programmed Death-1) receptor on cytotoxic T-cells, which binds to PD-L1 on healthy tissue. When they connect, the T-cell stands down. Astoundingly, many cancer cells learn to exploit this exact loophole. They express dense fields of PD-L1 on their cell surface. When an eager T-cell arrives to investigate, the tumor offers the secret handshake, and the T-cell becomes exhausted and shuts off.'
        ],
        callout: {
          title: 'Verified Fact: The 2018 Nobel Prize',
          text: 'James P. Allison (MD Anderson Cancer Center) and Tasuku Honjo (Kyoto University) shared the 2018 Nobel Prize in Physiology or Medicine for establishing cancer therapy by inhibition of negative immune regulation.',
          type: 'verified-fact'
        }
      },
      {
        id: 'dropping-the-shields-checkpoint-inhibitors',
        heading: 'Cutting the Brakes: Checkpoint Inhibitors (Keytruda, Opdivo, Yervoy)',
        content: [
          'Checkpoint inhibitors are monoclonal antibody drugs (such as pembrolizumab, nivolumab, and ipilimumab). Crucially, these drugs do not kill cancer cells directly.',
          'Instead, they are designed to bind physically to the PD-1 receptor or the PD-L1 ligand, capping the molecular handshake like a plastic sheath over a keyhole. When the tumor tries to deactivate the T-cell, the signal fails to transmit.',
          'The T-cell recognizes the abnormal neoantigens on the tumor surface, releases perforin and granzymes, punches holes in the cancer cell membrane, and destroys it. For diseases like metastatic melanoma—which once had a median survival of less than a year—checkpoint inhibitors have produced durable, long-term remissions lasting a decade or more in a substantial fraction of patients.'
        ]
      },
      {
        id: 'living-drugs-car-t-cells',
        heading: 'CAR-T Cell Therapy: Engineering Living Cellular Assassins',
        content: [
          'If checkpoint inhibitors take the brakes off the immune system, CAR-T cell therapy is like rebuilding the engine entirely. CAR stands for Chimeric Antigen Receptor.',
          'The process is breathtaking: doctors harvest billions of T-cells from a patient’s blood through leukapheresis. In a specialized laboratory, scientists use a modified, harmless viral vector to insert a synthetic gene into the T-cells’ DNA. This gene instructs the T-cell to sprout a custom-designed synthetic receptor on its surface—often targeting the CD19 protein found on B-cell leukemias and lymphomas.',
          'These re-engineered T-cells are multiplied into millions in bioreactors and infused back into the patient. Once inside, they act as living, hunting drugs. When they encounter CD19 on leukemia cells, they lock on, unleash a cascade of cytotoxic proteins, and proliferate inside the patient’s body to eradicate residual cancer cells.'
        ],
        callout: {
          title: 'Clinical Nuance: Immune-Related Adverse Events (irAEs)',
          text: 'Immunotherapy is not without risk. When you unleash the immune system by cutting its natural brakes, it can sometimes attack normal organs, causing autoimmune inflammation of the colon (colitis), lungs (pneumonitis), or endocrine glands. Managing these therapies requires expert immunological care.',
          type: 'clinical-context'
        }
      }
    ],
    sources: [
      {
        id: 'nobel-prize-2018',
        authorOrOrg: 'The Nobel Assembly at Karolinska Institutet',
        title: 'The Nobel Prize in Physiology or Medicine 2018: Allison and Honjo',
        publicationOrSource: 'NobelPrize.org Press Release',
        year: '2018',
        url: 'https://www.nobelprize.org/prizes/medicine/2018/press-release/'
      },
      {
        id: 'ribas-wolchok-science',
        authorOrOrg: 'Ribas, A. & Wolchok, J. D.',
        title: 'Cancer Immunotherapy Using Checkpoint Blockade',
        publicationOrSource: 'Science, 359(6382), 1350–1355',
        year: '2018',
        url: 'https://doi.org/10.1126/science.aar4060'
      },
      {
        id: 'june-car-t-nejm',
        authorOrOrg: 'June, C. H. & Sadelain, M.',
        title: 'Chimeric Antigen Receptor Therapy',
        publicationOrSource: 'New England Journal of Medicine, 379(1), 64–73',
        year: '2018',
        url: 'https://doi.org/10.1056/NEJMra1706169'
      }
    ]
  },
  {
    id: 'when-cancer-spreads',
    slug: 'when-cancer-spreads',
    title: 'When Cancer Spreads: Understanding Metastasis',
    subtitle: 'The deadly journey from primary site to distant organs—why 90% of cancer deaths trace back to cellular migration.',
    studentHook: 'In my pathology class, the professor showed us two statistics that stunned the room. First: a primary tumor localized in the breast or prostate or colon rarely kills a patient on its own; it can almost always be surgically excised. Second: roughly 90% of all cancer-related deaths occur because cancer cells migrate, colonize, and disrupt vital distant organs. Metastasis is the true lethal hurdle of oncology.',
    readTimeMinutes: 7,
    publishDate: 'October 6, 2026',
    category: 'Cellular Biology',
    tags: ['Metastasis', 'Invasion', 'EMT', 'Tumor Microenvironment'],
    heroImage: cellDnaImg,
    heroImageAlt: 'Cellular migration and invasive movement through tissue basement membrane',
    heroCaption: 'Cancer cells undergoing epithelial-mesenchymal transition (EMT), detaching from neighboring cells to invade blood vessels.',
    statusClassification: 'Established Biology',
    summary: 'Metastasis is the primary cause of cancer mortality. Yet biologically, it is an astonishingly inefficient journey: out of millions of cancer cells that shed into the blood, fewer than 0.01% successfully establish a secondary colony. Walk through the intricate metastatic cascade.',
    keyTakeaways: [
      'Metastasis is responsible for approximately 90% of cancer-related mortality worldwide.',
      'To metastasize, a cell must complete the "metastatic cascade": local invasion, intravasation into blood/lymph, survival in circulation, extravasation, and colonization.',
      'The process is remarkably inefficient—the sheer physical shear stress in the bloodstream and immune attacks destroy 99.99% of circulating tumor cells.',
      'Tumors do not spread randomly; Stephen Paget’s 1889 "seed and soil" hypothesis proved that specific cancers preferentially colonize specific microenvironments.'
    ],
    interactiveDiagram: {
      type: 'metastasis-cascade',
      title: 'The Multi-Step Metastatic Cascade',
      caption: 'Primary Tumor → Local Invasion → Intravasation → Circulatory Transit → Extravasation → Pre-Metastatic Niche Colonization.'
    },
    sections: [
      {
        id: 'the-perilous-journey-the-metastatic-cascade',
        heading: 'The Gauntlet: A Step-by-Step Breakdown of the Metastatic Cascade',
        content: [
          'If a cell wants to break away from its primary home and establish a colony across the body, it must overcome an incredible biological gauntlet that scientists call the metastatic cascade:',
          '1. Local Invasion: Epithelial cells normally cling tightly to their neighbors via adhesion proteins called E-cadherin. To move, cancer cells undergo Epithelial-to-Mesenchymal Transition (EMT). They turn off E-cadherin, adopt an elongated, mobile shape, and secrete enzymes called matrix metalloproteinases (MMPs) to chew through the tough collagen basement membrane.',
          '2. Intravasation: The invading cells squeeze between endothelial cells lining a capillary or lymphatic vessel and slip into the fluid stream.',
          '3. Surviving the Torrent: The bloodstream is a violent place for a delicate cell. Hydrodynamic shear stress from pumping blood tears most naked cancer cells apart. Furthermore, natural killer (NK) cells hunt circulating cells. To survive, some cancer cells coat themselves in normal blood platelets, using them as a physical disguise and shield.',
          '4. Extravasation and Arrest: Once trapped in narrow capillaries of a distant organ (such as the liver or lungs), the cell adheres to the vessel wall, pushes its way back out into the organ tissue, and attempts to adapt.'
        ],
        callout: {
          title: 'Verified Fact: The Sheer Inefficiency of Metastasis',
          text: 'A growing 1-centimeter tumor can shed millions of circulating tumor cells (CTCs) into the blood daily. Yet studies show fewer than 0.01% of these circulating cells ever successfully form a distant metastasis. The challenge for medicine is that even 0.01% of millions is enough to spark secondary tumors.',
          type: 'verified-fact'
        }
      },
      {
        id: 'the-seed-and-the-soil',
        heading: 'Why Cancers Spread Where They Do: The "Seed and Soil" Theory',
        content: [
          'Why does prostate cancer almost always spread to the bones, while colon cancer travels preferentially to the liver, and breast cancer spreads to bones, lungs, liver, and brain?',
          'Back in 1889, an English surgeon named Stephen Paget studied the autopsies of 735 breast cancer patients. He noticed the distribution of secondary tumors was not random, nor could it be explained solely by blood flow mechanics.',
          'Paget formulated the iconic "seed and soil" hypothesis: cancer cells are the "seeds," and different organs are the "soil." A seed will only germinate and flourish if it lands in congenial soil that provides the specific growth factors, extracellular matrix signals, and vascular nutrients it requires.',
          'Modern research has validated Paget’s insight. We now know that primary tumors actually send out microscopic packets called exosomes packed with RNA and proteins to "prepare" distant organs in advance—creating what oncologists call a pre-metastatic niche before the cells even arrive.'
        ]
      },
      {
        id: 'the-final-frontier-dormancy-and-colonization',
        heading: 'Micrometastases and Cellular Hibernation: The Challenge of Dormancy',
        content: [
          'The hardest hurdle for a metastasized cell is colonization—actually dividing and growing into a clinically significant tumor in foreign territory. Many cells enter a state called dormancy.',
          'A cancer cell can settle into the bone marrow or liver, enter G0 cell cycle arrest, and sleep quietly for 5, 10, or even 20 years. Because chemotherapy and radiation specifically target actively dividing cells, dormant cells are completely impervious to standard treatments.',
          'Years later, an inflammatory signal, injury, or age-related shift in the microenvironment can wake the dormant cell, prompting it to proliferate. Understanding what keeps cells dormant—or learning how to safely flush them out and destroy them—is one of the most active frontiers in oncology research.'
        ],
        callout: {
          title: 'Student Insight: Redefining Metastatic Treatment',
          text: 'In the past, Stage IV metastatic cancer was viewed as an immediate end. Today, with targeted therapy, modern immunotherapy, and stereotactic body radiation for oligometastatic disease (just 1 to 3 isolated spots), many metastatic patients live high-quality lives for years, transforming terminal illness into a chronically managed condition.',
          type: 'insight'
        }
      }
    ],
    sources: [
      {
        id: 'fidler-seed-soil-nature',
        authorOrOrg: 'Fidler, I. J.',
        title: 'The Pathogenesis of Cancer Metastasis: The "Seed and Soil" Hypothesis Revisited',
        publicationOrSource: 'Nature Reviews Cancer, 3, 453–458',
        year: '2003',
        url: 'https://doi.org/10.1038/nrc1098'
      },
      {
        id: 'massague-metastasis-cell',
        authorOrOrg: 'Lambert, A. W., Pattabiraman, D. R. & Weinberg, R. A.',
        title: 'Emerging Biological Principles of Metastasis',
        publicationOrSource: 'Cell, 168(4), 670–691',
        year: '2017',
        url: 'https://doi.org/10.1016/j.cell.2016.11.037'
      },
      {
        id: 'nci-metastatic-cancer',
        authorOrOrg: 'National Cancer Institute (NCI)',
        title: 'Metastatic Cancer: When Cancer Spreads to Other Organs',
        publicationOrSource: 'National Institutes of Health',
        year: '2024',
        url: 'https://www.cancer.gov/types/metastatic-cancer'
      }
    ]
  },
  {
    id: 'could-we-cure-more-cancers',
    slug: 'could-we-cure-more-cancers',
    title: 'Could We Cure More Cancers? The Research Changing the Future',
    subtitle: 'From personalized mRNA cancer vaccines and CRISPR base editing to AI-guided spatial biology—the technologies reshaping oncology.',
    studentHook: 'If you want to feel genuinely hopeful about the future of medicine, spend an afternoon reading through the current pipeline of Phase I and Phase II clinical oncology trials. We are living through what historians will almost certainly look back on as the golden age of molecular oncology. Ideas that sounded like science fiction when our parents were in college are currently running in human trials.',
    readTimeMinutes: 8,
    publishDate: 'October 7, 2026',
    category: 'Frontiers of Research',
    tags: ['mRNA Vaccines', 'CRISPR', 'Clinical Trials', 'Artificial Intelligence', 'Epigenetics'],
    heroImage: heroImg,
    heroImageAlt: 'Biomedical laboratory technology, genetic engineering, and targeted nano-delivery',
    heroCaption: 'Biomedical innovation at the interface of computational genomics and synthetic biology. Individualized therapies are built using a patient’s specific mutational signature.',
    statusClassification: 'Active Clinical Trials',
    summary: 'What does the next generation of cancer therapy look like? Dive into the cutting-edge research: personalized mRNA therapeutic vaccines tailor-made for each patient’s tumor, CRISPR in vivo gene editing, and artificial intelligence predicting drug resistance before it happens.',
    keyTakeaways: [
      'Personalized mRNA cancer vaccines (like mRNA-4157 / V940) teach the patient’s immune system to recognize up to 34 patient-specific neoantigens.',
      'CRISPR and base editing allow scientists to precisely engineer immune cells without chromosomal translocations or off-target genomic damage.',
      'Multi-Cancer Early Detection (MCED) blood tests are in large-scale trials, aiming to screen for dozens of cancers with a single blood draw.',
      'It is vital to distinguish between early pre-clinical mouse studies, Phase I/II safety/efficacy trials, and Phase III standard-of-care approvals.'
    ],
    interactiveDiagram: {
      type: 'immunotherapy',
      title: 'Workflow of Personalized mRNA Cancer Vaccines',
      caption: 'Tumor Biopsy → Genomic Sequencing → AI Neoantigen Prediction → Custom mRNA Synthesis → Lipid Nanoparticle Injection → T-Cell Training.'
    },
    sections: [
      {
        id: 'personalized-mrna-cancer-vaccines',
        heading: 'Personalized mRNA Vaccines: Training Immune Snipers on Specific Neoantigens',
        content: [
          'Most people know mRNA technology from the COVID-19 pandemic. But what many don’t realize is that researchers like Katalin Karikó and companies like BioNTech and Moderna spent the previous fifteen years developing mRNA specifically to treat cancer.',
          'Unlike infectious disease vaccines (which are preventive and identical for everyone), cancer mRNA vaccines are therapeutic and completely personalized. Here is how the process works in ongoing Phase III clinical trials:',
          'A patient undergoes surgery to remove a high-risk melanoma or pancreatic tumor. Scientists sequence the DNA of the tumor and the patient’s healthy blood cells, comparing the two. An AI algorithm identifies up to 34 unique "neoantigens"—mutated peptide fragments that exist exclusively on that patient’s cancer cells and nowhere else in their body.',
          'Within six to eight weeks, a custom mRNA molecule coding for these specific neoantigens is synthesized and packaged inside lipid nanoparticles. When injected, dendritic cells produce these foreign antigens and present them to T-cells, creating a personalized army of immune snipers primed to track down any lingering microscopic micrometastases.'
        ],
        callout: {
          title: 'Verified Trial Data: Melanoma Vaccine Results',
          text: 'In a randomized Phase 2b trial published in The Lancet in 2024, combining a personalized neoantigen mRNA vaccine (mRNA-4157/V940) with Keytruda reduced the risk of recurrence or death by 44% compared to Keytruda alone in patients with high-risk resected melanoma.',
          type: 'verified-fact'
        }
      },
      {
        id: 'crispr-and-base-editing',
        heading: 'Rewriting Cellular Code: Next-Gen CRISPR and Base Editing',
        content: [
          'While first-generation CAR-T cell therapies transformed blood cancers, creating them is painstakingly slow and expensive—costing hundreds of thousands of dollars per patient. Furthermore, older viral gene insertion methods lacked spatial precision.',
          'Next-generation genome editing tools like CRISPR-Cas9 and base editing are changing this equation. Researchers can now perform "multiplex editing": knocking out the endogenous T-cell receptor (so donor cells don’t cause graft-versus-host disease), knocking out the PD-1 gene (making the T-cell immune to tumor exhaustion), and inserting a synthetic CAR receptor all in one elegant step.',
          'This paves the way for "allogeneic" or off-the-shelf CAR-T therapies. Instead of waiting weeks to harvest and engineer a patient’s own sick cells, hospitals could keep pre-manufactured, healthy donor-derived T-cell vials in a freezer, ready for immediate infusion.'
        ]
      },
      {
        id: 'multi-cancer-early-detection',
        heading: 'Catching Cancer Before Symptoms: Multi-Cancer Early Detection (MCED)',
        content: [
          'Today, we only have standard population screening tests for a small handful of cancers: breast (mammogram), colon (colonoscopy/stool DNA), cervix (Pap smear/HPV), and high-risk lung (low-dose CT). The vast majority of cancers—including pancreatic, ovarian, and stomach—have no routine screening tests and are usually found only after symptoms appear.',
          'Multi-Cancer Early Detection (MCED) blood tests (such as the Galleri test currently undergoing massive clinical validation trials with the UK’s NHS and US National Cancer Institute) analyze cell-free DNA methylation patterns. Abnormal epigenetic methyl groups act like molecular barcodes, not only revealing if cancer DNA is present, but pointing with high accuracy to the organ of origin.',
          'While researchers emphasize that false positives and overdiagnosis must be carefully managed, the potential to detect aggressive cancers at Stage I or II rather than Stage IV could transform global mortality.'
        ],
        callout: {
          title: 'Scientific Realism: Mouse Studies vs. Human Reality',
          text: 'You often see headlines proclaiming "Scientists Cure Cancer in Mice!" But veteran oncologist Judah Folkman famously quipped: "If you have cancer and you are a mouse, we can take good care of you." Human tumors possess immense genetic heterogeneity and intricate immune microenvironments that mice do not replicate. Always look for human clinical trial data.',
          type: 'clinical-context'
        }
      }
    ],
    sources: [
      {
        id: 'weber-mrna-lancet',
        authorOrOrg: 'Weber, J. S. et al.',
        title: 'Individualised Neoantigen Therapy mRNA-4157 (V940) Plus Pembrolizumab in Resected High-Risk Melanoma',
        publicationOrSource: 'The Lancet, Vol. 403, Issue 10427, pp. 632–644',
        year: '2024',
        url: 'https://doi.org/10.1016/S0140-6736(23)02268-7'
      },
      {
        id: 'nci-mced-trials',
        authorOrOrg: 'National Cancer Institute (NCI)',
        title: 'Multi-Cancer Detection Tests: The Cancer Screening Research Network (CSRN)',
        publicationOrSource: 'National Institutes of Health',
        year: '2024',
        url: 'https://www.cancer.gov/about-cancer/screening/mced-research'
      },
      {
        id: 'nature-biotech-crispr',
        authorOrOrg: 'Stadtmauer, E. A. et al.',
        title: 'CRISPR-Engineered T Cells in Patients with Refractory Cancer',
        publicationOrSource: 'Science, 367(6481), eaba9844',
        year: '2020',
        url: 'https://doi.org/10.1126/science.aba9844'
      }
    ]
  },
  {
    id: 'the-search-for-a-cure',
    slug: 'the-search-for-a-cure',
    title: 'The Search for a Cure: How Close Are We Really?',
    subtitle: 'Why scientists avoid the phrase "a cure for cancer"—and why the real victory looks like thousands of specific cures and chronic management.',
    studentHook: 'Every few months, an exciting headline flashes across social media: "Scientists Find The Miracle Cure For Cancer!" Millions share it, people feel a burst of hope, and then… nothing seems to change. Why? Because the very concept of "A" cure for cancer is a biological myth. When you talk to real oncologists, you learn that we aren’t waiting for one miraculous miracle drug; we are steadily, methodically winning hundreds of smaller, decisive wars.',
    readTimeMinutes: 7,
    publishDate: 'October 7, 2026',
    category: 'Frontiers of Research',
    tags: ['Oncology Ethics', 'Scientific Progress', 'Survival Rates', 'Future of Medicine'],
    heroImage: heroImg,
    heroImageAlt: 'Scientific research laboratory with advanced molecular oncology technologies',
    heroCaption: 'The modern search for a cure is not a single sprint for one silver bullet. It is thousands of parallel advances in molecular diagnostics, prevention, and targeted therapies.',
    statusClassification: 'Emerging Research',
    summary: 'Will there ever be a single cure for cancer? No—and understanding why is the key to appreciating genuine medical progress. Discover how cancer mortality has dropped by over 33% since 1991, what turning cancer into a manageable chronic condition really means, and where real hope lies.',
    keyTakeaways: [
      'There will never be one single universal cure for cancer because cancer is over 200 distinct diseases driven by thousands of unique genetic mutations.',
      'Progress in oncology is measured not by one miracle drug, but by the relentless, cumulative drop in overall cancer mortality.',
      'According to the American Cancer Society, cancer mortality in the United States dropped by 33% between 1991 and 2021, averting more than 4 million deaths.',
      'For many previously fatal cancers, modern medicine has already achieved "functional cures" or transformed acute death sentences into manageable chronic conditions.'
    ],
    interactiveDiagram: {
      type: 'diagnostic-matrix',
      title: 'The Evolution of Cancer Care Trajectory',
      caption: 'From blunt cytotoxics in 1970 to precision genomics in 2026: how multimodal combination therapies push survival curves higher.'
    },
    sections: [
      {
        id: 'the-myth-of-the-single-cure',
        heading: 'Why There Will Never Be a Single "Cure for Cancer"',
        content: [
          'If a pharmaceutical executive or politician tells you we are about to announce "The Cure for Cancer," run the other way. Biologically, that statement makes as much sense as announcing "The Cure for Weather."',
          'Cancer is not caused by one virus, one bacteria, or one defective protein. It is the consequence of human life itself: the inevitable by-product of 37 trillion cells copying 3 billion DNA letters over 70, 80, or 90 years. Every patient’s tumor is a unique genetic patchwork.',
          'Furthermore, tumors are subject to natural selection. If a single drug kills 99.9% of a billion tumor cells, that still leaves 1,000,000 cells alive. Among those million survivors, a few might harbor a random mutation that allows them to bypass that specific drug. Over months, those resistant cells multiply, and the tumor returns refractory to that medicine. That is why modern oncology uses combination therapies—hitting the tumor with multiple completely different mechanisms simultaneously.'
        ],
        callout: {
          title: 'Verified Fact: 4 Million Lives Saved Since 1991',
          text: 'The American Cancer Society’s 2024 Cancer Statistics report documented that between 1991 and 2021, the cancer death rate in the US dropped by 33%. That steady, 1% to 2% annual decline translates to over 4.1 million fewer cancer deaths than would have occurred if mortality remained at its peak.',
          type: 'verified-fact'
        }
      },
      {
        id: 'what-cures-look-like-in-reality',
        heading: 'The Quiet Cures We Already Have: Real Victories in Oncology',
        content: [
          'While the public waits for a fictional Hollywood cure, medicine has already quietly cured multiple forms of cancer that used to be fatal:',
          '1. Testicular Cancer: In the 1970s, metastatic testicular cancer had a cure rate below 10%. With the introduction of cisplatin-based combination chemotherapy regimens pioneered by Dr. Lawrence Einhorn, the long-term cure rate now exceeds 95%—even when the disease has spread to the lungs.',
          '2. Pediatric Acute Lymphoblastic Leukemia (ALL): In the 1960s, a child diagnosed with ALL faced a survival rate under 10%. Today, thanks to rigorous clinical trial protocols and targeted therapies, the five-year survival rate exceeds 90%.',
          '3. Cervical Cancer Prevention: The HPV vaccine prevents infection with the high-risk human papillomavirus strains responsible for over 90% of cervical cancers. In countries with high vaccination rates like Australia and the UK, cervical cancer rates among vaccinated cohorts have plummeted by nearly 90%, putting the disease on the path toward near-total eradication.'
        ]
      },
      {
        id: 'turning-cancer-into-a-chronic-disease',
        heading: 'The Real Future: Functional Cures and Chronic Management',
        content: [
          'What does the ultimate goal of oncology actually look like? For many cancers, it won’t be wiping every single mutated cell from the body. It will be transforming cancer into a manageable chronic condition—like type 1 diabetes or hypertension.',
          'Patients with certain advanced breast cancers, lung cancers with EGFR or ALK mutations, or multiple myeloma now take daily targeted pills that keep their cancer in check for 5, 10, or 15 years, living full, vibrant lives with their families, traveling, and working.',
          'The roadmap forward is clear: universal early detection through liquid biopsies, prevention through lifestyle and vaccines, pinpoint targeted therapies combined with immune activation, and rapid genetic adaptation when resistance arises. We aren’t waiting for a miracle. Science is building the future, one paper, one clinical trial, and one patient at a time.'
        ],
        callout: {
          title: 'Student Perspective: Curiosity Over Fear',
          text: 'Writing this series as a student taught me that cancer thrives in our cultural imagination as an invincible, supernatural force. But looking at the actual molecular biology strips away that mythology. Cancer is complex, tenacious, and terrifying—but it obeys the laws of physics and biology. And when you understand the rules, you can learn how to rewrite them.',
          type: 'insight'
        }
      }
    ],
    sources: [
      {
        id: 'siegel-acs-stats-2024',
        authorOrOrg: 'Siegel, R. L. et al.',
        title: 'Cancer Statistics, 2024: 33-Year Decline in Mortality Rates',
        publicationOrSource: 'CA: A Cancer Journal for Clinicians, 74(1), 12–49',
        year: '2024',
        url: 'https://doi.org/10.3322/caac.21820'
      },
      {
        id: 'who-global-action-plan',
        authorOrOrg: 'World Health Organization (WHO)',
        title: 'Global Action Plan for the Prevention and Control of Noncommunicable Diseases',
        publicationOrSource: 'WHO Guidelines & Targets',
        year: '2023',
        url: 'https://www.who.int/publications/i/item/9789241506236'
      },
      {
        id: 'einhorn-testicular-cure',
        authorOrOrg: 'Einhorn, L. H.',
        title: 'Curing Metastatic Testicular Cancer: The Paradigm Shift',
        publicationOrSource: 'Proceedings of the National Academy of Sciences (PNAS), 99(7), 4592–4595',
        year: '2002',
        url: 'https://doi.org/10.1073/pnas.072067999'
      }
    ]
  }
];

export const CATEGORIES = [
  'All',
  'Cellular Biology',
  'Diagnostics & Detection',
  'Treatments & Therapies',
  'Frontiers of Research'
] as const;

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Why do cancer biologists emphasize that there cannot be one single "cure for cancer"?',
    options: [
      'Cancer is too contagious to be eliminated with any single drug',
      'Cancer is over 200 distinct diseases with different genetic drivers, lineages, and evolutions',
      'The immune system permanently shuts down once any cancer begins',
      'Pharmaceutical companies are prevented by law from combining different therapies'
    ],
    correctIndex: 1,
    explanation: 'Correct! Cancer is an umbrella term for more than 200 biologically distinct diseases. A brain glioblastoma behaves nothing like a bone osteosarcoma, and tumors constantly evolve new mutations that require multifaceted combination approaches.'
  },
  {
    id: 2,
    question: 'What is the primary function of immune checkpoint inhibitors like anti-PD-1 drugs?',
    options: [
      'They inject chemotherapy directly into the tumor core',
      'They block the inhibitory "secret handshake" signal that tumors use to turn off cytotoxic T-cells',
      'They stimulate hair follicles to divide faster during treatment',
      'They freeze microtubule fibers during cell division'
    ],
    correctIndex: 1,
    explanation: 'Correct! Checkpoint inhibitors don’t attack tumors directly; they block the PD-1/PD-L1 or CTLA-4 receptors, taking the brakes off the patient’s own immune T-cells so they can identify and eliminate cancer cells.'
  },
  {
    id: 3,
    question: 'Which gene is often called the "guardian of the genome" and is mutated in more than 50% of all human cancers?',
    options: [
      'HER2',
      'TP53',
      'EGFR',
      'BCR-ABL'
    ],
    correctIndex: 1,
    explanation: 'Correct! The TP53 gene produces the p53 protein, which arrests the cell cycle when DNA is damaged to allow repair, or triggers apoptosis (programmed cell death) if the damage is fatal.'
  },
  {
    id: 4,
    question: 'According to the American Cancer Society, what happened to US cancer mortality between 1991 and 2021?',
    options: [
      'It remained completely unchanged',
      'It increased by 15% due to aging demographics',
      'It declined by roughly 33%, averting more than 4 million deaths',
      'It only dropped for childhood cancers, remaining flat in adults'
    ],
    correctIndex: 2,
    explanation: 'Correct! Thanks to smoking cessation, earlier screening (mammograms, colonoscopies), and modern targeted/immunotherapy treatments, overall cancer death rates fell by 33% between 1991 and 2021.'
  }
];
