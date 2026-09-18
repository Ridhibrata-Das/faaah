"use client";
import { useCallback } from 'react';
import CameraPreview from './components/CameraPreview';
import ChartDisplay from './components/ChartDisplay';
import { useState } from 'react';
import type { AnalysisResult } from './services/detailAnalysisService';

export default function BalaramAI() {
  const [searchResults, setSearchResults] = useState<any>(null);
  const [chartData, setChartData] = useState<AnalysisResult | null>(null);

  const handleTranscription = useCallback((_: string) => {}, []);
  const handleSearchResults = useCallback((results: any) => setSearchResults(results), []);
  const handleChartData = useCallback((data: AnalysisResult) => setChartData(data), []);

  return (
    <div className="min-h-screen h-full w-full bg-white flex flex-col p-3 gap-3">
      {/* Camera window fills the screen */}
      <div className="flex-1 w-full rounded-xl overflow-hidden" style={{ minHeight: '75vh' }}>
        <CameraPreview
          onTranscription={handleTranscription}
          onSearchResults={handleSearchResults}
          onChartData={handleChartData}
          className="h-full w-full"
        />
      </div>

      {/* Chart only shows if AI generates one */}
      {chartData && chartData.chart_data && (
        <ChartDisplay
          chartData={chartData.chart_data}
          isFromSearch={!!searchResults}
        />
      )}
    </div>
  );
}