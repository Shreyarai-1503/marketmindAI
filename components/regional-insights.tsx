"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function RegionalInsights({ data }: { data: any[] }) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Regional Insights</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Region</TableHead>
            <TableHead>Growth Rate</TableHead>
            <TableHead>Top Categories</TableHead>
            <TableHead>Languages</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.region}>
              <TableCell>{item.region}</TableCell>
              <TableCell>{item.growthRate}%</TableCell>
              <TableCell>{item.topCategories.join(", ")}</TableCell>
              <TableCell>{item.languages.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}