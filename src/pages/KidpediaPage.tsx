import { SectionWrapper } from '@/components/SectionWrapper';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Brain, Shield, Users, MessageSquare } from 'lucide-react';
interface Article {
  title: string;
  description: string;
}
const icons = [
  <BookOpen className="w-8 h-8 text-light-blue" />,
  <Heart className="w-8 h-8 text-light-blue" />,
  <Brain className="w-8 h-8 text-light-blue" />,
  <Shield className="w-8 h-8 text-light-blue" />,
  <Users className="w-8 h-8 text-light-blue" />,
  <MessageSquare className="w-8 h-8 text-light-blue" />,
];
export function KidpediaPage() {
  const { t } = useTranslation();
  const articles = t('kidpediaPage.articles', { returnObjects: true }) as Article[];
  return (
    <div className="animate-fade-in">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display text-gray-800 mb-6">
            {t('kidpediaPage.title')}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('kidpediaPage.introduction')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full shadow-soft rounded-2xl overflow-hidden flex flex-col">
                <CardHeader className="flex-row items-start gap-4">
                  {icons[index % icons.length]}
                  <CardTitle className="text-xl font-bold text-gray-800 pt-1">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">
                    {article.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}