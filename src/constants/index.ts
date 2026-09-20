import { MarketTickerItem, SystemProcessStep, Partnership } from '../types';

export const FT_MARKET_TICKERS: MarketTickerItem[] = [
  {
    symbol: 'BRENT.OIL',
    name: 'Brent Crude Spot',
    value: '$78.40',
    change: '+1.2%',
    isPositive: true,
    unit: '/barrel',
  },
  {
    symbol: 'BD.DSL',
    name: 'Dhaka Low-Sulfur Diesel',
    value: 'Tk 109.00',
    change: '+0.0%',
    isPositive: true,
    unit: '/litre',
  },
  {
    symbol: 'PET.SCRAP',
    name: 'Mixed Non-Recyclable Plastic',
    value: 'Tk 18.50',
    change: '-2.4%',
    isPositive: false,
    unit: '/kg gate-fee',
  },
  {
    symbol: 'BIOCHAR.HQ',
    name: 'Agri-Biochar By-product',
    value: 'Tk 42.00',
    change: '+4.8%',
    isPositive: true,
    unit: '/kg spot',
  },
  {
    symbol: 'CARB.VCM',
    name: 'Voluntary Carbon Offset',
    value: '$14.20',
    change: '+3.1%',
    isPositive: true,
    unit: '/tCO2e',
  },
  {
    symbol: 'BDT.USD',
    name: 'Bangladesh Taka / USD',
    value: '117.85',
    change: '-0.15%',
    isPositive: false,
    unit: 'forex',
  },
];

export const EDITORIAL_IMAGES = {
  heroRefinery: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80', // Industrial bio-reactor/refinery in golden dusk
  laboratoryAlgae: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80', // Lab glassware with green microalgae culture
  plasticDumping: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?auto=format&fit=crop&w=1200&q=80', // Plastic waste stream
  riverPollution: 'https://images.unsplash.com/photo-1618060932014-4deda4932554?auto=format&fit=crop&w=1200&q=80', // Waterway and environmental landscape
  industrialReactor: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80', // High-tech engineering thermal reactor
  textileWastewater: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=1200&q=80', // Textile dyeing industrial facility
};

export const SYSTEM_STEPS: SystemProcessStep[] = [
  {
    id: 'step-1',
    title: '1. Non-Recyclable Feedstock Intake',
    category: 'feedstock',
    description: 'Intercepting the 63% uncollected plastic stream that normally ends in open burning or the Bay of Bengal.',
    metric: '3,000+ tons/day',
    metricLabel: 'National Plastic Generation (only 37% formally collected)',
    keyDetails: [
      'Focuses strictly on contaminated, low-value polyolefins (LDPE, HDPE, PP, multilayer sachets) that mechanical recyclers reject',
      'Eliminates open burning hazards causing 30,000+ premature respiratory deaths annually',
      'Sourced via municipal collection networks and textile packaging scraps in Dhaka and Gazipur',
    ],
    scientificPrinciple: 'Pre-treated, shredded, and blended with dried algal biomass at optimal carbon-to-nitrogen ratios.',
  },
  {
    id: 'step-2',
    title: '2. Anaerobic Co-Pyrolysis Reactor',
    category: 'pyrolysis',
    description: 'Thermal decomposition at 450°C–520°C in an oxygen-depleted environment with catalytic synergy.',
    metric: '60–65% Oil Yield',
    metricLabel: 'Liquid Bio-Crude Conversion Rate (vs <50% in single feedstock)',
    keyDetails: [
      'Algal biomass acts as an intrinsic hydrogen donor, reducing wax formation and improving liquid cracking',
      'Catalytic synergy lowers activation energy and enhances heavy hydrocarbon cracking into light aromatics and alkanes',
      'Continuous oxygen-free rotary kiln designed for rapid heat transfer and minimum coke formation',
    ],
    scientificPrinciple: 'Co-pyrolysis of plastic polymers and microalgal lipids yields higher radical interaction, suppressing char formation.',
  },
  {
    id: 'step-3',
    title: '3. Photobioreactor Carbon & Water Loop',
    category: 'algae',
    description: 'Algae unit performs dual remediation: flue-gas CO₂ capture and textile effluent wastewater stripping.',
    metric: '80–90% N Removal',
    metricLabel: 'Nitrogen & Phosphorus Remediation Efficiency from Effluent',
    keyDetails: [
      'Captures process CO₂ directly from pyrolysis combustion flue gas, converting greenhouse gas into cellular biomass',
      'Consumes industrial wastewater from surrounding dyeing mills, stripping high nitrogen and phosphorus loads',
      'Harvested algae is dewatered and recirculated back into the reactor as renewable co-feedstock, achieving a closed loop',
    ],
    scientificPrinciple: 'Microalgae (Chlorella / Scenedesmus consortia) utilizes inorganic carbon (CO₂) and ammoniacal nitrogen for rapid photosynthesis.',
  },
  {
    id: 'step-4',
    title: '4. Fractional Distillation & Offtake',
    category: 'fractionation',
    description: 'Condensation column refines bio-crude into high-demand transportation and industrial energy products.',
    metric: '350–450M Litres',
    metricLabel: 'TAM Domestic Fuel Yield from 1.65M tons/yr plastic',
    keyDetails: [
      'Diesel Fraction (55%): High cetane, low sulfur, compliant for industrial boilers and generator blending',
      'Gasoline/Light Naphtha (30%): Low-boiling hydrocarbon solvent or motor spirit additive',
      'Heavy Fuel Oil (15%): Low-cost burner fuel for brick kilns and textile steam boilers',
    ],
    scientificPrinciple: 'Continuous multi-stage atmospheric column separates fractions based on hydrocarbon chain lengths (C8–C24).',
  },
  {
    id: 'step-5',
    title: '5. Syngas & Biochar By-Products',
    category: 'byproduct',
    description: 'Non-condensable syngas powers internal plant heating; activated biochar feeds high-value soil remediation.',
    metric: '20–25% Syngas | 10–12% Biochar',
    metricLabel: 'Zero Solid-Waste Residue Yield',
    keyDetails: [
      'Syngas (CO, H₂, CH₄) is filtered and recirculated to burner nozzles, providing 70%+ of self-sustaining thermal energy',
      'Biochar by-product is rich in alkaline minerals and fixed carbon, packaged for agricultural soil amendment',
      'Eligible for carbon credits through durable soil carbon sequestration and landfill methane avoidance',
    ],
    scientificPrinciple: 'Fixed carbon remains stable for 100+ years when applied to soil, generating verified carbon units (VCUs).',
  },
];

export const PARTNERSHIPS_DATA: Partnership[] = [
  {
    name: 'Dhaka North, Dhaka South & Gazipur City Corporations',
    category: 'Municipal',
    status: 'Prospective MOU',
    description: 'Long-term waste concession agreements to divert 0.5 to 10 TPD of non-recyclable solid plastic waste from Aminbazar and Matuail landfills.',
    strategicValue: 'Secures zero-cost or gate-fee-subsidized feedstock while reducing municipal landfill overburden and toxic leachate into the Buriganga.',
  },
  {
    name: 'Bangladesh Textile Mills Association (BTMA) Industrialists',
    category: 'Industrial',
    status: 'In Discussion',
    description: 'On-site wastewater polishing and boiler fuel offtake for textile dyeing and finishing units in Gazipur and Narayanganj.',
    strategicValue: 'Solves heavy nitrogen compliance penalties for wet-processing factories while providing cheaper thermal steam fuel.',
  },
  {
    name: 'Bangladesh Petroleum Corporation (BPC)',
    category: 'Government',
    status: 'Letter of Support',
    description: 'Prospective bulk testing and blending framework for domestic light diesel and furnace oil substitution.',
    strategicValue: 'Addresses Bangladesh’s 97% imported petroleum dependency ($5–8 billion annual outflow) through sovereign green synthesis.',
  },
];

export const FINANCIAL_ERRATA_EXPLANATION = {
  originalFinding: "The presentation deck's Financials slide listed fuel revenue as 'Tk 1M' but recorded tipping fees and by-products in 'lacs' (lakhs), leading to apparent unit discrepancy against the stated Tk 1.6M total.",
  reconciliationSummary: "In the Bangladeshi financial numbering convention, 1 Lac (Lakh) equals Tk 100,000 (0.10 Million). When standardized, Tk 1.0 Million equals 10 Lacs. The 0.5 TPD facility revenues reconcile precisely as:",
  breakdown: [
    { item: 'Refined Fuel Sales (18,000 L @ ~Tk 55.5/L net margin)', originalUnit: 'Tk 1.0M', standardizedTk: 1000000, inLacs: '10.0 Lacs', percent: '62.5%' },
    { item: 'Municipal Gate & Tipping Fees (182.5 tons @ Tk 1,640/ton)', originalUnit: '3 Lacs', standardizedTk: 300000, inLacs: '3.0 Lacs', percent: '18.75%' },
    { item: 'Biochar & High-Calorific Syngas By-Products', originalUnit: '2 Lacs', standardizedTk: 200000, inLacs: '2.0 Lacs', percent: '12.5%' },
    { item: 'Carbon Offset Credits (Voluntary VCU certification)', originalUnit: '1 Lac', standardizedTk: 100000, inLacs: '1.0 Lacs', percent: '6.25%' },
  ],
  totalBDT: 1600000,
  totalLacs: '16.0 Lacs',
  totalMillion: 'Tk 1.60 Million',
};
