import KeyMetrics from "@/components/key-metrics";
import { Separator } from "@/components/ui/separator";
import dynamic from "next/dynamic";

const DataVisualization = dynamic(
  () => import("@/components/data-visualization")
);
const RecentStreams = dynamic(() => import("@/components/data-table"));

export default function Page() {
  return (
    <div className="p-4 space-y-8 w-screen md:w-auto">
      <KeyMetrics />
      <Separator />
      <DataVisualization />
      <Separator />
      <RecentStreams />
    </div>
  );
}
