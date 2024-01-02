import React from "react";
import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {};

type ServicesData = {
  icon: any;
  title: string;
  description: string;
};

const servicesData: ServicesData[] = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corporis maxime harum beatae nobis, tempora commodi qui iusto aliquid.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corporis maxime harum beatae nobis, tempora commodi qui iusto aliquid.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corporis maxime harum beatae nobis, tempora commodi qui iusto aliquid.",
  },
];

export default function Services({}: Props) {
  return (
    <div className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24">
          {servicesData.map((item, index) => {
            return (
              <Card
                key={index}
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
