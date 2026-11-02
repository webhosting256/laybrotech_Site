import { Section } from '@/components/sections/Section';

type PlaceholderPageProps = {
  title: string;
};

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <Section className="flex min-h-[100vh] items-center">
      <h1 className="type-h1 text-balance">{title}</h1>
    </Section>
  );
}
