# Algae-Plast Fuel — Financial Times-Style Venture Portfolio & Dossier

A Financial Times-styled editorial portfolio and techno-economic venture dossier for **Algae-Plast Fuel**, an indigenous climate-tech innovation in Bangladesh that integrates an anaerobic co-pyrolysis reactor with an algal photobioreactor into a closed-loop system.

Designed with the aesthetic, typography, and palette of the **Financial Times** (`ft.com`), this web portfolio presents the complete research paper, empirical yields, market size, 0.5 TPD facility economics, and presentation deck errata audit.

---

## 1. Executive Summary & Core Content

### The Compounding Crises in Bangladesh
- **3,000+ tons/day** of plastic waste generated daily, with only **37% formally collected**.
- **63% (1,890 tons/day)** is uncollected, dumped, or openly burned, sending **~87,000 tons/year into the Bay of Bengal** and contributing to **>30,000 premature deaths annually** from toxic open combustion.
- Bangladesh imports **97% of its liquid petroleum**, draining **$5–8 billion/year** in sovereign foreign reserves.

### The Hybrid Closed-Loop Solution
- **Anaerobic Co-Pyrolysis Reactor**: Blends contaminated non-recyclable polymers with algal biomass at 450°C–520°C in an oxygen-free environment.
- **Algal Photobioreactor Scrubber**: Captures CO₂ from flue gas and consumes industrial textile wastewater, achieving **80–90% nitrogen removal**.
- **Yields & Outputs**:
  - **60% – 65%** crude bio-oil (fractionated into diesel, gasoline, and heavy fuel oil).
  - **20% – 25%** syngas (recirculated for autothermal self-heating).
  - **10% – 12%** agricultural-grade biochar.
- **Scale & Stage**:
  - Laboratory-scale prototype constructed and validated.
  - **Tk 1.2 million initial seed funding** secured.
  - Next phase targets a **0.2–0.5 TPD skid pilot plant producing 18,000 litres of fuel annually**.
- **Market Sizing**:
  - Total Addressable Market (TAM): **1.65 million tons of plastic/year** = **350–450 million litres of fuel** = **$408M – $522M value**.
  - Phase 1 Industrial Corridor (Dhaka, Chittagong, Gazipur): **60–75 million litres/year**.
- **Commercial Offtake**: Prospective agreements with City Corporations (Dhaka North/South, Gazipur), Bangladesh Textile Mills Association (BTMA) members, and the Bangladesh Petroleum Corporation (BPC).

### Slide Review & Errata Audit (Page 2 Resolution)
- **Unit Reconciliation**: The original deck slide listed fuel revenue as "Tk 1M" and tipping fees / by-products in "lacs", appearing inconsistent against the Tk 1.6M total.
  - *Proof*: 1 Lac (Lakh) = Tk 100,000. Tk 1.0M = 10 Lacs.
  - Fuel (10 Lacs / Tk 1.0M) + Tipping (3 Lacs / Tk 0.3M) + By-products (2 Lacs / Tk 0.2M) + Carbon Credits (1 Lac / Tk 0.1M) = **16 Lacs = Tk 1.60 Million Total**.
- **Typo Fixed**: Slide heading standardized to `FINANCIAL PROJECTIONS: 0.5 TPD FACILITY`.

---

## 2. FT Design System & Colour Palette

| Element | Specification | Hex / Value |
|---|---|---|
| Canvas Background | FT Pink / Bisque | `#fff1e5` |
| Secondary Container | FT Paper Tint | `#f6e9dc` / `#f2dfce` |
| Editorial Typography | Newsreader / Playfair Display / Source Sans | Broadsheet serif & clear sans |
| Primary Accent | FT Claret / Burgundy | `#990f3d` |
| Environmental Accent | FT Teal | `#0d7680` |
| Text Primary | Charcoal / Deep Slate | `#1a1a1a` / `#262a33` |
| Dividers | Double rules & Hairlines | `3px double #262a33` / `#d9c8b8` |

---

## 3. Architecture & Folder Structure

```
├── index.html                   # HTML entry point with FT typography
├── metadata.json                # Project metadata
├── package.json                 # Project dependencies & scripts
├── DEPLOYMENT.md                # Full Vercel & Production deployment guide
├── SECURITY.md                  # Comprehensive security, CORS & CSRF audit
├── src/
│   ├── main.tsx                 # React application bootstrapper
│   ├── App.tsx                  # Main dossier application component
│   ├── index.css                # Tailwind CSS v4 & custom FT rules
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces for market & financial models
│   ├── constants/
│   │   └── index.ts             # Research data, market tickers, and Unsplash imagery
│   └── components/
│       ├── Navbar.tsx           # FT Masthead, date, search, edition ribbon
│       ├── MarketTicker.tsx     # Commodity indices (Brent, Diesel, Scrap, Biochar)
│       ├── HeroDossier.tsx      # Lead broadsheet investigative story & Fast Read
│       ├── DualCrisesSection.tsx # The 3,000 TPD waste & $8B fuel deficit analysis
│       ├── ClosedLoopMethodSection.tsx # Interactive reactor & photobioreactor flow
│       ├── DataDiscussionSection.tsx # Empirical yields & competitive matrix
│       ├── FinancialModelSection.tsx # 0.5 TPD economics simulator & slide errata audit
│       ├── MarketAnalysisSection.tsx # $522M TAM & Dhaka-Gazipur-CTG corridor
│       ├── PartnershipsSection.tsx # BPC, City Corporations & RMG off-takers
│       ├── ErrataModal.tsx      # Pre-submission deck review modal & copyable proof
│       ├── BriefingModal.tsx    # Printable executive investor memorandum
│       └── Footer.tsx           # FT broadsheet footer & disclosures
```

---

## 4. Getting Started Locally

```bash
# Install dependencies
npm install

# Run Vite dev server
npm run dev

# Build for production
npm run build
```
