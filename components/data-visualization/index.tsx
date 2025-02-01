import { RevenueDistributionChart } from "./revenue-distribution-chart";
import { TopSongsChart } from "./top-songs-chart";
import UserGrowthChart from "./user-growth-chart";

export default function DataVisualization() {
  return (
    <div className="space-y-4">
      <p className="text-4xl font-bold">Data vizualization</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UserGrowthChart />
        <RevenueDistributionChart />
        <TopSongsChart />
      </div>
    </div>
  );
}
