import { useTranslation } from 'react-i18next';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Megaphone, ShieldCheck, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const iconMap: { [key: string]: React.ReactElement } = {
  Megaphone: <Megaphone className="w-10 h-10 text-soft-blue" />,
  ShieldCheck: <ShieldCheck className="w-10 h-10 text-soft-blue" />,
  DollarSign: <DollarSign className="w-10 h-10 text-soft-blue" />,
};
export function CommunityActionPage() {
  const { t } = useTranslation();
  const sections = t('communityActionPage.sections', { returnObjects: true }) as { icon: string; title: string; content: string; cta: string }[];
  const getCtaLink = (ctaText: string) => {
    if (ctaText.toLowerCase().includes('donasi') || ctaText.toLowerCase().includes('donate')) {
      return '/donors';
    }
    return '#'; // Placeholder for other links
  };
  return (
    <div className="animate-fade-in">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('communityActionPage.title')}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('communityActionPage.introduction')}
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-gray-50/50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-soft rounded-2xl overflow-hidden h-full flex flex-col">
                <CardHeader className="flex-row items-center gap-4 p-6">
                  {iconMap[section.icon]}
                  <CardTitle className="text-2xl font-bold text-gray-800">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6 flex-grow">{section.content}</p>
                  <Button asChild className="mt-auto bg-soft-blue hover:bg-soft-blue/90 text-gray-800 self-start">
                    <Link to={getCtaLink(section.cta)}>
                      {section.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}