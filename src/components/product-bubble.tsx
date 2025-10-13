
"use client";

import Image from "next/image";
import type { Product } from "@/types/product";
import { Button } from "./ui/button";
import { Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ProductDetailModal } from "./product-detail-modal";
import { useState } from "react";

interface ProductBubbleProps {
    product: Product;
}

export function ProductBubble({ product }: ProductBubbleProps) {
    const { toast } = useToast();
    const [isDetailModalOpen, setDetailModalOpen] = useState(false);

    return (
        <>
            <div className="w-full p-3 rounded-2xl liquid-glass">
                <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                        <Image 
                            src={product.image} 
                            alt={product.name} 
                            fill 
                            className="object-cover" 
                            data-ai-hint={product.hint}
                        />
                    </div>
                    <div className="flex-grow space-y-1 min-w-0">
                        <p className="text-xs text-muted-foreground font-medium truncate">{product.category}</p>
                        <h4 className="font-semibold text-sm truncate">{product.name}</h4>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                            <span>{product.type}</span>
                            <span className="font-bold text-primary">|</span>
                            <span>THC: {product.thc}%</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <Button size="icon" variant="ghost" onClick={() => setDetailModalOpen(true)} className="h-9 w-9 text-muted-foreground">
                            <Info className="h-5 w-5" />
                            <span className="sr-only">Details</span>
                        </Button>
                    </div>
                </div>
            </div>
            <ProductDetailModal
                isOpen={isDetailModalOpen}
                onOpenChange={setDetailModalOpen}
                product={product}
            />
        </>
    );
}
