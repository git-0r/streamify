"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { source: "subscriptions", revenue: 275, fill: "var(--color-subscriptions)" },
  { source: "advertising", revenue: 200, fill: "var(--color-advertising)" },
  { source: "partnerships", revenue: 187, fill: "var(--color-partnerships)" },
  { source: "merchandise", revenue: 173, fill: "var(--color-merchandise)" },
  { source: "exclusives", revenue: 90, fill: "var(--color-exclusives)" },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
  },
  subscriptions: {
    label: "Subscriptions",
    color: "hsl(var(--chart-1))",
  },
  advertising: {
    label: "Advertising",
    color: "hsl(var(--chart-2))",
  },
  partnerships: {
    label: "Partnerships",
    color: "hsl(var(--chart-3))",
  },
  merchandise: {
    label: "Merchandise",
    color: "hsl(var(--chart-4))",
  },
  exclusives: {
    label: "Exclusives",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function RevenueDistributionChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Revenue Distribution</CardTitle>
        <CardDescription>January - December 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="revenue" hideLabel />}
            />
            <Pie data={chartData} dataKey="revenue">
              <LabelList
                dataKey="source"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          A pie chart that shows the breakdown of revenue from different sources
        </div>
      </CardFooter>
    </Card>
  );
}

/**
 * Revenue Distribution: A pie chart that shows the breakdown of revenue from different sources (e.g., Subscriptions, Ads).
 */
