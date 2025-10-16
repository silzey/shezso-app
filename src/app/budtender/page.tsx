
'use-client';

import React, { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, useAuth, useFirestore } from '@/firebase';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, X, Plus, Minus, User, ShoppingCart, DollarSign, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { allProductsFlat } from '@/lib/products';
import { mockCustomers } from '@/lib/mockCustomers';
import type { Product } from '@/types/product';
import type { UserProfile } from '@/types/pos';
import { Skeleton } from '@/components/ui/skeleton';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

// In a real app, customers would be fetched from a database.
const customers: UserProfile[] = mockCustomers;

// POS Main Component
export default function BudtenderPOSPage() {
    const { user, isUserLoading: loading } = useUser();
    const auth = useAuth();
    const db = useFirestore();
    const [userRole, setUserRole] = useState<string | null>(null);
    const router = useRouter();
    const { toast } = useToast();
    const [isClient, setIsClient] = useState(false);

    // State Management
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCustomer, setActiveCustomer] = useState<UserProfile | null>(null);

    useEffect(() => {
        setIsClient(true);
        if (customers.length > 0) {
            setActiveCustomer(customers[0]);
        }
    }, []);

    useEffect(() => {
        const fetchUserRole = async () => {
            if (user && db) {
                const userDoc = await getDoc(doc(db, "users", user.uid));
                if (userDoc.exists()) {
                    setUserRole(userDoc.data().role);
                }
            }
        };
        fetchUserRole();
    }, [user, db]);

    // Derived State
    const filteredProducts = useMemo(() => {
        if (!searchTerm) return allProductsFlat.slice(0, 50); // Limit initial display
        return allProductsFlat.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm]);
    
    useEffect(() => {
        if (!loading && !user) {
            router.replace('/login');
        }
    }, [user, loading, router]);
    
    useEffect(() => {
        if (user && userRole && userRole !== 'budtender') {
             router.replace('/');
        }
    }, [user, userRole, router]);
    
    if (loading || !isClient || (user && !userRole)) {
        return (
          <div className="flex flex-col min-h-screen bg-muted/40">
            <Header />
            <main className="flex-grow flex items-center justify-center bg-muted">
                <div className="flex flex-col items-center gap-4">
                    <Sparkles className="h-12 w-12 text-primary animate-spin" />
                    <p className="text-muted-foreground">Loading POS...</p>
                </div>
            </main>
            <Footer />
          </div>
        );
    }
    
    if (!user || userRole !== 'budtender') {
        return (
             <div className="flex flex-col min-h-screen bg-muted/40">
                <Header />
                <main className="flex-grow container mx-auto px-4 md:px-6 py-8 flex items-center justify-center">
                   <p>Redirecting...</p>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen bg-muted/40 font-sans">
            <Header />
            <main className="flex-grow flex flex-col lg:flex-row container mx-auto px-2 sm:px-4 md:px-6 py-4 md:py-8 gap-4 md:gap-8 overflow-hidden">
                
                {/* Left Column (Product Grid) */}
                <div className="flex-grow lg:col-span-2 bg-background/60 backdrop-blur-sm rounded-lg shadow-md flex flex-col h-full">
                    <div className="p-4 border-b">
                         <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input 
                                placeholder="Search products..." 
                                className="pl-10 h-10 text-base"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <ScrollArea className="flex-1">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                            {filteredProducts.map(product => (
                                <Card 
                                    key={product.id} 
                                    className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden group bg-card/60 backdrop-blur-sm"
                                >
                                    <div className="relative aspect-square">
                                        <Image src={product.image} alt={product.name} fill style={{objectFit: 'cover'}} className="group-hover:scale-105 transition-transform" data-ai-hint={product.hint} />
                                    </div>
                                    <div className="p-2 sm:p-3">
                                        <p className="font-semibold text-sm truncate">{product.name}</p>
                                        <p className="text-xs text-muted-foreground">{product.category}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </ScrollArea>
                </div>

                {/* Right Column (Customer) */}
                <div className="w-full lg:w-96 flex-shrink-0 bg-background/60 backdrop-blur-sm rounded-lg shadow-md flex flex-col h-full">
                    <div className="p-4 border-b">
                        {activeCustomer ? (
                            <div className="flex items-center gap-3">
                                <Avatar className="h-12 w-12 border-2 border-primary">
                                    <AvatarImage src={activeCustomer.avatarUrl} alt={activeCustomer.firstName} data-ai-hint={activeCustomer.dataAiHint} />
                                    <AvatarFallback>{activeCustomer.firstName[0]}{activeCustomer.lastName[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-bold">{activeCustomer.firstName} {activeCustomer.lastName}</p>
                                    <p className="text-xs text-muted-foreground">Member Since: {new Date(activeCustomer.memberSince).toLocaleDateString()}</p>
                                </div>
                                <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setActiveCustomer(null)}><X className="h-4 w-4" /></Button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <Input placeholder="Search Customer..." className="h-10" />
                                <Button><User className="mr-2 h-5 w-5"/>Add New Customer</Button>
                            </div>
                        )}
                    </div>

                    <ScrollArea className="flex-1">
                        <div className="p-4 space-y-3">
                            <div className="text-center py-10 text-muted-foreground">
                                <Sparkles className="mx-auto h-10 w-10 mb-2"/>
                                <p>Select products to view details.</p>
                            </div>
                        </div>
                    </ScrollArea>
                </div>

            </main>
        </div>
    );
}
