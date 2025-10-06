import { SectionWrapper } from '@/components/SectionWrapper';
import { useTranslation } from 'react-i18next';
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface Donor {
  name: string;
  amount: number;
  date: string;
}
export function DonorsPage() {
  const { t, i18n } = useTranslation();
  const donors = t('donors.donors', { returnObjects: true }) as Donor[];
  const totalGoal = Number(t('donors.totalGoal'));
  const totalDonated = donors.reduce((sum, donor) => sum + donor.amount, 0);
  const progressPercentage = totalGoal > 0 ? (totalDonated / totalGoal) * 100 : 0;
  const formatCurrency = (amount: number) => {
    const locale = i18n.language === 'id' ? 'id-ID' : 'en-US';
    const currency = i18n.language === 'id' ? 'IDR' : 'USD'; // Assuming USD for English for example
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency, minimumFractionDigits: 0 }).format(amount);
  };
  return (
    <div className="animate-fade-in">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display text-gray-800 mb-6">
            {t('donors.title')}
          </h1>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2 font-semibold text-gray-700">
              <span>{t('donors.collected')}: {formatCurrency(totalDonated)}</span>
              <span>{t('donors.target')}: {formatCurrency(totalGoal)}</span>
            </div>
            <Progress value={progressPercentage} className="w-full h-4 [&>*]:bg-light-green" />
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableCaption>{t('donors.updateInfo')}</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">{t('donors.headers.name')}</TableHead>
                  <TableHead className="font-bold text-right">{t('donors.headers.amount')}</TableHead>
                  <TableHead className="font-bold text-right">{t('donors.headers.date')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donors.map((donor, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{donor.name}</TableCell>
                    <TableCell className="text-right">{donor.amount > 0 ? formatCurrency(donor.amount) : '-'}</TableCell>
                    <TableCell className="text-right">{donor.date || '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}