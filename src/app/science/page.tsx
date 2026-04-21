import { generatePageMetadata, PAGE_SEO } from '@/lib/seo';
import ScienceContent from './ScienceContent';

export const metadata = generatePageMetadata(PAGE_SEO.science);

export default function SciencePage() {
  return <ScienceContent />;
}
