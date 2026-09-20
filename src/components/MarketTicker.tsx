import React from 'react';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
import { FT_MARKET_TICKERS } from '../constants';

export const MarketTicker: React.FC = () => {
  return (
    <aside aria-label="Energy & Commodity Indicators" className="bg-[#f6e9dc] border-b border-[#d9c8b8] text-[#262a33] text-xs py-2 px-4 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 pr-4 border-r border-[#d9c8b8] shrink-0">
          <span className="font-serif font-bold text-[11px] uppercase tracking-wider text-[#990f3d]">
            Energy & Waste Indices
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0d7680] animate-pulse"></span>
        </div>

        <div className="flex items-center space-x-6 overflow-x-auto scrollbar-none py-0.5 px-3">
          {FT_MARKET_TICKERS.map((item) => (
            <div key={item.symbol} className="flex items-center space-x-2 shrink-0">
              <span className="font-mono text-[11px] font-bold text-[#4d4845]">{item.symbol}</span>
              <span className="font-sans font-semibold text-[#1a1a1a]">{item.value}</span>
              <span className="text-[10px] text-[#66605b]">{item.unit}</span>
              <span
                className={`flex items-center text-[11px] font-mono font-medium ${
                  item.isPositive ? 'text-[#0d7680]' : 'text-[#990f3d]'
                }`}
              >
                {item.isPositive ? (
                  <TrendingUp className="w-3 h-3 mr-0.5 inline" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-0.5 inline" />
                )}
                {item.change}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center text-[11px] text-[#66605b] pl-4 border-l border-[#d9c8b8] shrink-0">
          <RefreshCw className="w-3 h-3 mr-1 text-[#8c827a]" />
          <span>Daily Benchmarks (Dhaka Hub)</span>
        </div>
      </div>
    </aside>
  );
};
