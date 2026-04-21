import { generatePageMetadata, PAGE_SEO } from '@/lib/seo';
import AboutContent from './AboutContent';

export const metadata = generatePageMetadata(PAGE_SEO.about);

export default function AboutPage() {
  return <AboutContent />;
}
