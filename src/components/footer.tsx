
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="hidden border-t bg-card/80 md:block dark:bg-primary/10">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-foreground">
                Shezso
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">Your friendly guide to beauty.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#menu" className="text-muted-foreground hover:text-primary">Foundation</Link></li>
              <li><Link href="/#menu" className="text-muted-foreground hover:text-primary">Lipstick</Link></li>
              <li><Link href="/#menu" className="text-muted-foreground hover:text-primary">Mascara</Link></li>
              <li><Link href="/#menu" className="text-muted-foreground hover:text-primary">Skincare</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shezso. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
