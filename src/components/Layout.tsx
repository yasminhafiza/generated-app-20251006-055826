import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { HandHeart, DollarSign } from 'lucide-react';
import { ScrollToTopButton } from './ScrollToTopButton';
export function Layout() {
  const { t } = useTranslation();
  const [isScrollButtonVisible, setScrollButtonVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setScrollButtonVisible(true);
      } else {
        setScrollButtonVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        <ScrollToTopButton isVisible={isScrollButtonVisible} />
        <Button asChild size="lg" className="rounded-full shadow-lg bg-light-blue hover:bg-light-blue/90 text-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <Link to="/volunteer">
            <HandHeart className="mr-2 h-5 w-5" />
            {t('floatingCta.join')}
          </Link>
        </Button>
        <Button asChild size="lg" className="rounded-full shadow-lg bg-light-green hover:bg-light-green/90 text-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <Link to="/donors">
            <DollarSign className="mr-2 h-5 w-5" />
            {t('floatingCta.donate')}
          </Link>
        </Button>
      </div>
    </div>
  );
}