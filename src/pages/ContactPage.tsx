import { SectionWrapper } from '@/components/SectionWrapper';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Instagram, Youtube } from 'lucide-react';
const iconMap = {
  mail: <Mail className="w-6 h-6 text-light-blue" />,
  'map-pin': <MapPin className="w-6 h-6 text-light-blue" />,
  phone: <Phone className="w-6 h-6 text-light-blue" />,
};
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);
export function ContactPage() {
  const { t } = useTranslation();
  const contactSchema = z.object({
    name: z.string().min(2, { message: t('contact.form.errors.name') }),
    email: z.string().email({ message: t('contact.form.errors.email') }),
    message: z.string().min(10, { message: t('contact.form.errors.message') }),
  });
  type ContactFormValues = z.infer<typeof contactSchema>;
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = async (data: ContactFormValues) => {
    // Mock submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Contact form submission:', data);
    toast.success(t('contact.successMessage'));
    reset();
  };
  const contactDetails = t('contact.details', { returnObjects: true }) as { icon: string; text: string }[];
  return (
    <div className="animate-fade-in">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display text-gray-800 mb-6">
            {t('contact.title')}
          </h1>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {contactDetails.map((item) => (
              <div key={item.icon} className="flex items-start gap-4">
                {iconMap[item.icon as keyof typeof iconMap]}
                <p className="text-lg text-gray-600">{item.text}</p>
              </div>
            ))}
            <div className="flex items-center gap-4 pt-4">
                <div className="flex items-start gap-4">
                    <p className="text-lg text-gray-600 font-semibold">{t('contact.socials.follow')}</p>
                    <a href={t('contact.socials.instagram')} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-light-blue transition-colors"><Instagram /></a>
                    <a href={t('contact.socials.whatsapp')} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-light-blue transition-colors"><WhatsAppIcon /></a>
                    <a href={t('contact.socials.youtube')} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-light-blue transition-colors"><Youtube /></a>
                </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.name')}</label>
              <Input id="name" type="text" placeholder={t('contact.form.namePlaceholder')} {...register('name')} />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.email')}</label>
              <Input id="email" type="email" placeholder={t('contact.form.emailPlaceholder')} {...register('email')} />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.message')}</label>
              <Textarea id="message" placeholder={t('contact.form.messagePlaceholder')} rows={5} {...register('message')} />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" className="w-full bg-light-blue hover:bg-light-blue/90 text-gray-800 text-lg py-6">
              {t('contact.form.submit')}
            </Button>
          </form>
        </div>
      </SectionWrapper>
      <div className="w-full h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666421984285!2d106.88235367591016!3d-6.175392393805727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2c6e1e1e8b0b2d!2sJl.%20Waru%20No.20a%2C%20RT.12%2FRW.7%2C%20Rawamangun%2C%20Kec.%20Pulo%20Gadung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013220!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Adhikti Foundation Location"
        ></iframe>
      </div>
    </div>
  );
}