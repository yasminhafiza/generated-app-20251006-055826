import { SectionWrapper } from '@/components/SectionWrapper';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Building, Target, MapPin, Award, ShieldCheck } from 'lucide-react';
const iconMap: Record<string, React.ReactElement> = {
  "profile.about.title": <Building className="w-8 h-8 text-light-blue" />,
  "profile.vision.title": <Target className="w-8 h-8 text-light-blue" />,
  "profile.mission.title": <CheckCircle className="w-8 h-8 text-light-blue" />,
  "profile.strategicIssues.title": <Award className="w-8 h-8 text-light-blue" />,
  "profile.workArea.title": <MapPin className="w-8 h-8 text-light-blue" />,
  "profile.programs.title": <Award className="w-8 h-8 text-light-blue" />,
  "profile.legality.title": <ShieldCheck className="w-8 h-8 text-light-blue" />,
};
export function ProfilePage() {
  const { t } = useTranslation();
  const strategicIssues = t('profile.strategicIssues.issues', { returnObjects: true }) as string[];
  const programs = t('profile.programs.items', { returnObjects: true }) as { name: string; description: string }[];
  const legalityDetails = t('profile.legality.details', { returnObjects: true }) as { key: string; value: string }[];
  const cardHoverEffect = {
    scale: 1.03,
    transition: { duration: 0.2 }
  };
  return (
    <div className="animate-fade-in">
      <SectionWrapper>
        <div className="space-y-12">
          <motion.div whileHover={cardHoverEffect}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-3xl font-bold">
                  {iconMap['profile.about.title']}
                  {t('profile.about.title')}
                </CardTitle>
              </CardHeader>
              <CardContent><p className="text-gray-600 text-lg">{t('profile.about.text')}</p></CardContent>
            </Card>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div whileHover={cardHoverEffect}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-2xl font-bold">
                    {iconMap['profile.vision.title']}
                    {t('profile.vision.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent><p className="text-gray-600">{t('profile.vision.text')}</p></CardContent>
              </Card>
            </motion.div>
            <motion.div whileHover={cardHoverEffect}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-2xl font-bold">
                    {iconMap['profile.mission.title']}
                    {t('profile.mission.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent><p className="text-gray-600">{t('profile.mission.text')}</p></CardContent>
              </Card>
            </motion.div>
          </div>
          <motion.div whileHover={cardHoverEffect}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-2xl font-bold">
                  {iconMap['profile.strategicIssues.title']}
                  {t('profile.strategicIssues.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {strategicIssues.map((issue, i) => <li key={i}>{issue}</li>)}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={cardHoverEffect}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-2xl font-bold">
                  {iconMap['profile.programs.title']}
                  {t('profile.programs.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {programs.map((program, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-gray-800">{program.name}</h4>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div whileHover={cardHoverEffect}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-2xl font-bold">
                    {iconMap['profile.workArea.title']}
                    {t('profile.workArea.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent><p className="text-gray-600">{t('profile.workArea.text')}</p></CardContent>
              </Card>
            </motion.div>
            <motion.div whileHover={cardHoverEffect}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-2xl font-bold">
                    {iconMap['profile.legality.title']}
                    {t('profile.legality.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    {legalityDetails.map(item => (
                      <li key={item.key}><strong>{item.key}:</strong> {item.value}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}