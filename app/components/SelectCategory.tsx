"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { categoryItems } from "../lib/categoryItems";
import Image from "next/image";
import { useState } from "react";

export function SelectCategory() {
  const [selectCategory, setSelectCategory] = useState<string | null>(null); //state for selected category

  return (
    <div className="grid grid-cols-4 gap-8 mt-10 w-3/5 mx-auto mb-36">
      {categoryItems.map((items) => (
        <div key={items.id} className="cursor-pointer">
          <Card
        //   use state for selected category 
            className={
              selectCategory === items.name ? "border-primary border-2" : ""
            }
            onClick={() => setSelectCategory(items.name)}
          >
            <CardHeader>
              <Image
                src={items.imageUrl}
                alt={items.title}
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <h3 className="font-medium">{items.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
