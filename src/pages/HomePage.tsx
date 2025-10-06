import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, HeartHandshake, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from 'framer-motion';
const iconMap: { [key: string]: React.ReactElement } = {
  ShieldCheck: <ShieldCheck className="w-10 h-10 text-soft-blue" />,
  HeartHandshake: <HeartHandshake className="w-10 h-10 text-soft-blue" />,
  Users: <Users className="w-10 h-10 text-soft-blue" />,
};
export function HomePage() {
  const { t } = useTranslation();
  const communityCards = t('home.communitySection.cards', { returnObjects: true }) as { icon: string; title: string; description: string }[];
  const carouselSlides = t('home.carousel', { returnObjects: true }) as { imageUrl: string; headline: string; caption: string; buttonText: string; link: string }[];
  return (
    <div className="animate-fade-in">
      {/* Hero Carousel Section */}
      <section className="relative w-full">
        <Carousel className="w-full" opts={{ loop: true }} plugins={[]}>
          <CarouselContent>
            {carouselSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] md:h-[80vh] w-full">
                  <img src={slide.imageUrl} alt={slide.headline} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-soft-blue/30 to-soft-green/30" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
                    <motion.h1
                      className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight drop-shadow-lg max-w-4xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    >
                      {slide.headline}
                    </motion.h1>
                    <motion.p
                      className="mt-4 text-lg md:text-xl max-w-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.4 }}
                    >
                      {slide.caption}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.6 }}
                    >
                      <Button asChild size="lg" className="mt-8 bg-soft-blue hover:bg-soft-blue/90 text-gray-800 rounded-full text-lg px-8 py-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <Link to={slide.link}>{slide.buttonText}</Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:inline-flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:inline-flex" />
        </Carousel>
      </section>
      {/* Campaign Title Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-4xl mx-auto">
            {t('home.campaignTitle')}
          </h2>
        </div>
      </section>
      {/* Community Awareness Section */}
      <section id="community-awareness" className="py-16 md:py-24 bg-gradient-to-br from-soft-blue/10 to-soft-green/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('home.communitySection.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            {t('home.communitySection.introduction')}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {communityCards.map((card, index) => (
              <motion.div key={index} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Card className="text-left h-full shadow-soft rounded-2xl">
                  <CardHeader className="flex-row items-start gap-4">
                    {iconMap[card.icon]}
                    <CardTitle className="text-xl font-bold text-gray-800 pt-2">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <Button asChild size="lg" className="bg-soft-blue hover:bg-soft-blue/90 text-gray-800 rounded-full text-lg px-8 py-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Link to={t('home.communitySection.communityActionLink')}>
              {t('home.communitySection.learnMoreButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <div className="mt-8">
            <Link to={t('home.communitySection.parentingGuidanceLink')} className="text-soft-blue hover:underline font-semibold transition-colors">
              {t('home.communitySection.kidpediaTeaser')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}