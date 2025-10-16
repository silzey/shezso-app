
'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BottomNavBar } from '@/components/bottom-nav-bar';
import { DispensaryCard } from '@/components/dispensary-card';
import { DispensaryDetailSheet } from '@/components/dispensary-detail-sheet';
import { dispensariesByState } from '@/lib/dispensaries';
import { states } from '@/lib/states';
import type { Dispensary } from '@/types/pos';
import { Store } from 'lucide-react';
import { ProductDetailModal } from '@/components/product-detail-modal';
import type { Product } from '@/types/product';
import { useRouter, useSearchParams } from 'next/navigation';
import { HeroSlider } from '@/components/hero-slider';

const beautyBrands: Omit<Dispensary, 'reviews'>[] = [
    "L'Oréal", "Estée Lauder", "Maybelline", "Lancôme", "MAC Cosmetics", "NARS", "Clinique", 
    "Bobbi Brown", "Too Faced", "Fenty Beauty", "Dior", "Chanel", "Giorgio Armani Beauty", "Revlon", 
    "CoverGirl", "NYX", "Smashbox", "Benefit Cosmetics", "Hourglass", "Tarte", "Urban Decay", 
    "BareMinerals", "KIKO Milano", "Shiseido", "Amorepacific", "The Body Shop", "Huda Beauty", 
    "Charlotte Tilbury", "Pat McGrath Labs", "Ilia Beauty", "Kosé", "Pola Cosmetics", "P&G", 
    "Avon", "Oriflame", "Farmasi", "Rimmel", "Max Factor", "Elizabeth Arden", "Nude by Nature", 
    "Laura Mercier", "Bare Escentuals", "Milani", "Wet n Wild", "e.l.f. Cosmetics", 
    "Physicians Formula", "Cover FX", "Dermablend", "Glossier"
].map((name, i) => ({
    id: `brand-${i}`,
    name: name,
    logo: `https://picsum.photos/seed/${name.replace(/[^a-zA-Z0-9]/g, '')}/400/400`,
    hint: 'beauty brand logo',
    rating: (4.2 + (i % 8) * 0.1).toFixed(1),
    deliveryTime: 0,
    address: 'Global Beauty Brand',
    state: 'Global',
    hours: '24/7 Online',
    lat: 0,
    lng: 0,
}));


export default function StatePage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedDispensary, setSelectedDispensary] = useState<Dispensary | null>(null);
  const [isDetailSheetOpen, setIsDetailSheetOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const stateName = decodeURIComponent(params.stateName as string);
  
  const stateData = states.find(s => s.name.toLowerCase() === stateName.toLowerCase());
  
  if (!stateData) {
    notFound();
  }
  
  const isFoundationPage = stateName.toLowerCase() === 'hawaii';
  const displayData = isFoundationPage
    ? beautyBrands
    : (dispensariesByState.find(s => s.stateName.toLowerCase() === stateName.toLowerCase())?.dispensaries || []);


  const handleDispensaryClick = (dispensary: Dispensary) => {
    setSelectedDispensary(dispensary);
    setIsDetailSheetOpen(true);
  };

  const handleDetailSheetOpenChange = (open: boolean) => {
    if (!open) {
      setIsDetailSheetOpen(false);
      setTimeout(() => setSelectedDispensary(null), 300);
    }
  };
  
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };
  
  const closeProductModal = () => {
    setSelectedProduct(null);
  }

  const pageTitle = isFoundationPage ? 'Foundation' : `Dispensaries in ${stateData.name}`;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-32">
        <header className="text-center mb-12 flex items-center justify-center p-4">
          <HeroSlider />
        </header>
        <section className="py-12 text-center">
          <Store className="mx-auto h-12 w-12 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold font-cursive mt-4 text-primary">
            {pageTitle}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore top-rated companies and products
          </p>
        </section>

        <section className="container mx-auto px-4 md:px-6 py-8">
           {displayData.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                     {displayData.map((item) => (
                        <DispensaryCard
                          key={item.id}
                          dispensary={item as Dispensary}
                          onDispensaryClick={handleDispensaryClick}
                        />
                    ))}
                </div>
            ) : (
            <p className="col-span-full text-center text-muted-foreground">
                No companies listed for this state yet.
            </p>
            )}
        </section>
      </main>
      <Footer />
      <BottomNavBar />

      <DispensaryDetailSheet
        dispensary={selectedDispensary}
        isOpen={isDetailSheetOpen}
        onOpenChange={handleDetailSheetOpenChange}
      />
       <ProductDetailModal
        isOpen={!!selectedProduct}
        onOpenChange={(isOpen) => !isOpen && closeProductModal()}
        product={selectedProduct ?? undefined}
      />
    </div>
  );
}
