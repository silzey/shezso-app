
'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from '@/lib/utils';
import type { Dispensary } from '@/types/pos';
import { Button } from './ui/button';

interface DispensaryCardProps {
  dispensary: Dispensary;
  className?: string;
  onDispensaryClick: (dispensary: Dispensary) => void;
}

export function DispensaryCard({ dispensary, className, onDispensaryClick }: DispensaryCardProps) {
  return (
    <Card 
        className={cn(
            "h-full flex flex-col overflow-hidden group transition-all duration-300 ease-in-out liquid-glass",
            "rounded-[24px]", 
            "hover:transform hover:-translate-y-1 hover:shadow-2xl",
            className
        )}
    >
      <CardHeader className="p-0">
         <button onClick={() => onDispensaryClick(dispensary)} className="w-full aspect-square md:aspect-square relative overflow-hidden rounded-t-[24px]">
            <Image
              src={dispensary.logo}
              data-ai-hint={dispensary.hint}
              alt={dispensary.name}
              fill
              style={{ objectFit: 'cover' }}
              className="group-hover:scale-105 transition-transform"
            />
        </button>
      </CardHeader>
      <CardContent className="p-3 flex-grow">
        <CardTitle className="text-sm md:text-base font-semibold line-clamp-2">{dispensary.name}</CardTitle>
        <div className="flex items-center text-xs text-muted-foreground mt-1">
            <Star className="w-3 h-3 mr-1 text-yellow-500 fill-yellow-500" />
            <span>{dispensary.rating}</span>
            <span className="mx-1">&middot;</span>
            <span>{dispensary.deliveryTime} min</span>
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Button size="sm" onClick={() => onDispensaryClick(dispensary)} className="w-full">View</Button>
      </CardFooter>
    </Card>
  );
}
