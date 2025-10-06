import { useTranslation } from 'react-i18next';
import { SectionWrapper } from '@/components/SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Shield, HelpCircle } from 'lucide-react';
const iconMap: { [key: string]: React.ReactElement } = {
  MessageSquare: <MessageSquare className="w-8 h-8 text-light-blue" />,
  Heart: <Heart className="w-8 h-8 text-light-blue" />,
  Shield: <Shield className="w-8 h-8 text-light-blue" />,
  HelpCircle: <HelpCircle className="w-8 h-8 text-light-blue" />,
};
export function ParentingGuidancePage() {
  const { t } = useTranslation();
  const sections = t('parentingGuidancePage.sections', { returnObjects: true }) as { icon: string; title: string; content: string; points: string[] }[];
  return (
    <div className="animate-fade-in">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display text-gray-800 mb-6">
            {t('parentingGuidancePage.title')}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('parentingGuidancePage.introduction')}
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-0">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="bg-white rounded-2xl shadow-soft border-none">
                  <AccordionTrigger className="text-lg font-semibold text-left p-6 hover:no-underline">
                    <div className="flex items-center gap-4">
                      {iconMap[section.icon]}
                      <span className="text-xl font-bold text-gray-800">{section.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <p className="text-gray-600 mb-4">{section.content}</p>
                    <ul className="space-y-2 list-disc list-inside text-gray-700">
                      {section.points.map((point, pIndex) => (
                        <li key={pIndex}>{point}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>
    </div>
  );
}