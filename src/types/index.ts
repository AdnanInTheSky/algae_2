export interface MarketTickerItem {
  symbol: string;
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
  unit: string;
}

export interface SystemProcessStep {
  id: string;
  title: string;
  category: 'feedstock' | 'pyrolysis' | 'algae' | 'fractionation' | 'byproduct';
  description: string;
  metric: string;
  metricLabel: string;
  keyDetails: string[];
  scientificPrinciple: string;
}

export interface FinancialProjection {
  capacityTPD: number;
  annualPlasticTons: number;
  annualFuelLitres: number;
  fuelRevenueBDT: number;
  tippingFeeRevenueBDT: number;
  byproductRevenueBDT: number;
  carbonCreditRevenueBDT: number;
  totalRevenueBDT: number;
  co2DivertedTons: number;
  nitrogenRemediatedKg: number;
}

export interface Partnership {
  name: string;
  category: 'Municipal' | 'Industrial' | 'Government';
  status: 'In Discussion' | 'Prospective MOU' | 'Letter of Support';
  description: string;
  strategicValue: string;
}
