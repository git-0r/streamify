"use client";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function KeyMetrics() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <p className="text-4xl font-bold">Key Metrics</p>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="">Total users</CardTitle>
            <CardDescription>
              The total number of registered users on the platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-center">934929</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="">Active users</CardTitle>
            <CardDescription>
              The number of users who have streamed at least one song in the
              last 30 days.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-center">232938</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="">Total streams</CardTitle>
            <CardDescription>
              The total number of song streams on the platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-center">38473847</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="">Revenue</CardTitle>
            <CardDescription>
              The total revenue generated from subscriptions and advertisements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <p className="text-4xl font-bold">$16,232.65</p>
              <TrendingUp className="size-10" />
            </div>
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
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  dataKey="desktop"
                  type="natural"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                  dot={{
                    fill: "var(--color-desktop)",
                  }}
                  activeDot={{
                    r: 6,
                  }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="">Top artist</CardTitle>
            <CardDescription>
              The artist with the most streams in the past 30 days.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <Avatar className="size-1/2">
              <AvatarImage src="https://avatars.githubusercontent.com/u/75239?v=4" />
              <AvatarFallback>TOP</AvatarFallback>
            </Avatar>
            <p className="text-2xl font-bold mt-4">Huan Lee</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/**
 * Total Users: The total number of registered users on the platform.
  Active Users: The number of users who have streamed at least one song in the last 30 days.
  Total Streams: The total number of song streams on the platform.
  Revenue: The total revenue generated from subscriptions and advertisements.
  Top Artist: The artist with the most streams in the past 30 days.
 */
