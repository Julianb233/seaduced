import { generatePageMetadata, PAGE_SEO } from '@/lib/seo';
import IngredientsContent from './IngredientsContent';

export const metadata = generatePageMetadata(PAGE_SEO.ingredients);

export default function IngredientsPage() {
  return <IngredientsContent />;
}
