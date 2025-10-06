import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Users, Stethoscope, HeartHandshake, CheckCircle, ArrowRight } from 'lucide-react';
const iconMap: { [key: string]: React.ReactElement } = {
  Users: <Users className="w-10 h-10 text-light-blue" />,
  Stethoscope: <Stethoscope className="w-10 h-10 text-light-blue" />,
  HeartHandshake: <HeartHandshake className="w-10 h-10 text-light-blue" />,
};
export function SolutionsSupportPage() {
  const { t } = useTranslation();
  const sections = t('solutionsSupportPage.sections', { returnObjects: true }) as { icon: string; title: string; content: string; points: string[] }[];
  return (
    <div className="animate-fade-in">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display text-gray-800 mb-6">
            {t('solutionsSupportPage.title')}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('solutionsSupportPage.introduction')}
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-gray-50/50">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-soft rounded-2xl overflow-hidden">
                <CardHeader className="bg-white flex-row items-center gap-4 p-6">
                  {iconMap[section.icon]}
                  <CardTitle className="text-2xl font-bold text-gray-800">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600">{section.content}</p>
                  <ul className="space-y-2">
                    {section.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
      <section className="py-16 md:py-24 bg-light-green text-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl max-w-3xl mx-auto font-semibold">
            {t('solutionsSupportPage.cta.text')}
          </p>
          <Button asChild size="lg" className="mt-8 bg-white text-green-700 border-2 border-white hover:bg-transparent hover:text-white rounded-full text-lg px-8 py-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Link to={t('solutionsSupportPage.cta.link')}>
              {t('solutionsSupportPage.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}