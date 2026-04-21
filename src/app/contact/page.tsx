import { generatePageMetadata, PAGE_SEO } from '@/lib/seo';
import ContactContent from './ContactContent';

export const metadata = generatePageMetadata(PAGE_SEO.contact);

export default function ContactPage() {
  return <ContactContent />;
}
