import { SectionWrapper } from '@/components/SectionWrapper';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface Faq {
  question: string;
  answer: string;
}
interface Volunteer {
  code: string;
  name: string;
  occupation: string;
  location: string;
}
export function VolunteerPage() {
  const { t } = useTranslation();
  const faqs = t('volunteer.faqs', { returnObjects: true }) as Faq[];
  const volunteerListHeaders = t('volunteer.volunteerList.headers', { returnObjects: true }) as string[];
  const volunteers = t('volunteer.volunteerList.volunteers', { returnObjects: true }) as Volunteer[];
  return (
    <div className="animate-fade-in">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display text-gray-800 mb-6">
            {t('volunteer.title')}
          </h1>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{t('volunteer.faqTitle')}</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-gray-50/50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {t('volunteer.volunteerList.title')}
          </h2>
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <Table>
            <TableCaption>{t('volunteer.volunteerList.caption')}</TableCaption>
            <TableHeader>
              <TableRow>
                {volunteerListHeaders.map((header, index) => (
                  <TableHead key={index} className="font-bold">{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {volunteers.map((volunteer) => (
                <TableRow key={volunteer.code}>
                  <TableCell className="font-medium">{volunteer.code}</TableCell>
                  <TableCell>{volunteer.name}</TableCell>
                  <TableCell>{volunteer.occupation}</TableCell>
                  <TableCell>{volunteer.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SectionWrapper>
    </div>
  );
}