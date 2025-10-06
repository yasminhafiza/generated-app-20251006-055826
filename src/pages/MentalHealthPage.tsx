import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, CloudRain, Frown, Users, HeartCrack, CheckCircle } from 'lucide-react';
const iconMap: { [key: string]: React.ReactElement } = {
  CloudRain: <CloudRain className="w-10 h-10 text-light-blue" />,
  Frown: <Frown className="w-10 h-10 text-light-blue" />,
  Users: <Users className="w-10 h-10 text-light-blue" />,
  HeartCrack: <HeartCrack className="w-10 h-10 text-light-blue" />,
};
export function MentalHealthPage() {
  const { t } = useTranslation();
  const challenges = t('mentalHealthIssuesPage.commonChallenges.items', { returnObjects: true }) as { icon: string; name: string; description: string }[];
  const causes = t('mentalHealthIssuesPage.causes.items', { returnObjects: true }) as { name: string; description: string }[];
  const stats = t('mentalHealthIssuesPage.statistics.items', { returnObjects: true }) as { value: string; label: string }[];
  const signs = t('mentalHealthIssuesPage.signs.items', { returnObjects: true }) as string[];
  return (
    <div className="animate-fade-in">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display text-gray-800 mb-6">
            {t('mentalHealthIssuesPage.title')}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('mentalHealthIssuesPage.introduction')}
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-gray-50/50">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">{t('mentalHealthIssuesPage.commonChallenges.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((item, index) => (
            <motion.div key={index} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="text-center h-full shadow-soft rounded-2xl">
                <CardHeader className="items-center">
                  {iconMap[item.icon]}
                  <CardTitle className="mt-4">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('mentalHealthIssuesPage.causes.title')}</h2>
            <div className="space-y-4">
              {causes.map((cause, index) => (
                <Card key={index} className="bg-light-blue/10 border-l-4 border-light-blue">
                  <CardHeader>
                    <CardTitle className="text-xl">{cause.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{cause.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('mentalHealthIssuesPage.statistics.title')}</h2>
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-light-green/20 p-4 rounded-lg flex items-center gap-4">
                  <p className="text-3xl font-bold text-green-700">{stat.value}</p>
                  <p className="text-gray-700">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">{t('mentalHealthIssuesPage.signs.title')}</h2>
          <p className="text-center text-gray-600 mb-8">{t('mentalHealthIssuesPage.signs.description')}</p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {signs.map((sign, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
      <section className="py-16 md:py-24 bg-light-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl max-w-3xl mx-auto">
            {t('mentalHealthIssuesPage.cta.text')}
          </p>
          <Button asChild size="lg" variant="outline" className="mt-8 bg-white text-light-blue border-2 border-white hover:bg-transparent hover:text-white rounded-full text-lg px-8 py-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Link to={t('mentalHealthIssuesPage.cta.link')}>
              {t('mentalHealthIssuesPage.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}