"use client";

// import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
  { month: "January", total: 1860, active: 800 },
  { month: "February", total: 3050, active: 2000 },
  { month: "March", total: 3370, active: 1200 },
  { month: "April", total: 3730, active: 1900 },
  { month: "May", total: 4209, active: 1300 },
  { month: "June", total: 5214, active: 1400 },
  { month: "July", total: 5214, active: 2400 },
  { month: "August", total: 6214, active: 2140 },
  { month: "September", total: 6514, active: 3540 },
  { month: "October", total: 7014, active: 4140 },
  { month: "November", total: 7214, active: 4640 },
  { month: "December", total: 8514, active: 5640 },
];

const chartConfig = {
  total: {
    label: "Total users",
    color: "hsl(var(--chart-1))",
  },
  active: {
    label: "Active users",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function UserGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth Chart</CardTitle>
        <CardDescription>January - December 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="total"
              type="monotone"
              stroke="var(--color-total)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="active"
              type="monotone"
              stroke="var(--color-active)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            {/* <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month{" "}
                <TrendingUp className="h-4 w-4" />
              </div> */}
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              A line chart that shows the growth in the number of total users
              and active users over the past 12 months.
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

/**
    User Growth Chart: A line chart that shows the growth in the number of total users and active    users over the past 12 months.
    Revenue Distribution: A pie chart that shows the breakdown of revenue from different sources (e.g., Subscriptions, Ads).
    Top 5 Streamed Songs: A bar chart that displays the top 5 most-streamed songs over the past 30   days.    
 */
