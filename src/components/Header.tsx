import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu, HeartHandshake, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const mentalHealthNav = t('nav.mentalHealth', { returnObjects: true }) as { title: string, items: { label: string, href: string }[] };
  const toggleLanguage = () => {
    const newLang = i18n.language === 'id' ? 'en' : 'id';
    i18n.changeLanguage(newLang);
  };
  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <HeartHandshake className="h-8 w-8 text-soft-blue" />
          <span className="text-2xl font-bold text-gray-800">
            {t('header.title')}
          </span>
        </Link>
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>{mentalHealthNav.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                  {mentalHealthNav.items.map((item) => (
                    <ListItem key={item.label} title={item.label} href={item.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/volunteer">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t('nav.volunteer')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/community-action">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t('nav.communityAction')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <Button onClick={toggleLanguage} variant="outline" className="hidden sm:inline-flex rounded-full border-soft-blue text-soft-blue hover:bg-soft-blue hover:text-white transition-all duration-300">
            {i18n.language === 'id' ? 'EN' : 'ID'}
          </Button>
          <Button asChild className="hidden md:inline-flex bg-soft-green hover:bg-soft-green/90 text-gray-800 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
            <Link to="/donors">{t('nav.donateNow')}</Link>
          </Button>
          {/* Mobile Navigation */}
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex flex-col h-full p-6">
                <Link to="/" className="flex items-center gap-2 mb-8" onClick={() => setMenuOpen(false)}>
                  <HeartHandshake className="h-8 w-8 text-soft-blue" />
                  <span className="text-2xl font-bold text-gray-800">
                    {t('header.title')}
                  </span>
                </Link>
                <nav className="flex flex-col gap-2">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="mental-health" className="border-b-0">
                      <AccordionTrigger className="text-xl font-medium text-gray-700 hover:text-soft-blue transition-colors duration-200 hover:no-underline">
                        {mentalHealthNav.title}
                      </AccordionTrigger>
                      <AccordionContent className="pl-4">
                        {mentalHealthNav.items.map(item => (
                          <NavLink key={item.href} to={item.href} onClick={() => setMenuOpen(false)} className={({isActive}) => cn("block py-2 text-lg", isActive ? "text-soft-blue font-semibold" : "text-gray-600")}>
                            {item.label}
                          </NavLink>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <NavLink to="/volunteer" onClick={() => setMenuOpen(false)} className={({isActive}) => cn("py-2 text-xl font-medium", isActive ? "text-soft-blue font-bold" : "text-gray-700")}>{t('nav.volunteer')}</NavLink>
                  <NavLink to="/community-action" onClick={() => setMenuOpen(false)} className={({isActive}) => cn("py-2 text-xl font-medium", isActive ? "text-soft-blue font-bold" : "text-gray-700")}>{t('nav.communityAction')}</NavLink>
                </nav>
                <div className="mt-auto space-y-4">
                    <Button asChild className="w-full bg-soft-green hover:bg-soft-green/90 text-gray-800 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                        <Link to="/donors" onClick={() => setMenuOpen(false)}>{t('nav.donateNow')}</Link>
                    </Button>
                    <Button onClick={() => { toggleLanguage(); setMenuOpen(false); }} variant="outline" className="w-full rounded-full border-soft-blue text-soft-blue hover:bg-soft-blue hover:text-white transition-all duration-300">
                        {i18n.language === 'id' ? 'EN' : 'ID'}
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}