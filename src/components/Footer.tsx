import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeartHandshake, Instagram, Youtube } from 'lucide-react';
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);
const newsletterSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});
type NewsletterFormValues = z.infer<typeof newsletterSchema>;
export function Footer() {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });
  const onSubmit = async (data: NewsletterFormValues) => {
    // Mock submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Newsletter subscription:', data);
    toast.success(t('newsletter.success'));
    reset();
  };
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <HeartHandshake className="h-8 w-8 text-light-blue" />
              <span className="text-2xl font-display font-bold text-gray-800">
                {t('header.title')}
              </span>
            </Link>
            <p className="text-gray-600">{t('footer.tagline')}</p>
            <div className="flex space-x-4">
              <a href={t('contact.socials.instagram')} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-light-blue transition-colors"><Instagram /></a>
              <a href={t('contact.socials.whatsapp')} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-light-blue transition-colors"><WhatsAppIcon /></a>
              <a href={t('contact.socials.youtube')} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-light-blue transition-colors"><Youtube /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/mental-health" className="text-gray-600 hover:text-light-blue">{t('nav.mentalHealth')}</Link></li>
              <li><Link to="/volunteer" className="text-gray-600 hover:text-light-blue">{t('nav.volunteer')}</Link></li>
              <li><Link to="/profile" className="text-gray-600 hover:text-light-blue">{t('nav.profile')}</Link></li>
              <li><Link to="/donors" className="text-gray-600 hover:text-light-blue">{t('nav.donors')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-gray-600">
              <li>{t('contact.details.0.text')}</li>
              <li>{t('contact.details.1.text')}</li>
              <li>{t('contact.details.2.text')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">{t('footer.newsletter')}</h3>
            <p className="text-gray-600 mb-4">{t('footer.newsletterPrompt')}</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Input type="email" placeholder={t('footer.emailPlaceholder')} {...register('email')} className="flex-1" />
                <Button type="submit" className="bg-light-blue hover:bg-light-blue/90 text-gray-800">{t('footer.subscribe')}</Button>
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          <p className="text-sm mt-1">{t('footer.builtWith')}</p>
        </div>
      </div>
    </footer>
  );
}