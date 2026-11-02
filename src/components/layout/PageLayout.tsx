import { Outlet } from 'react-router-dom';

import { PageRevealController } from '@/components/motion/PageRevealController';
import { Header } from '@/components/navigation/Header';
import { FloatingWhatsAppButton } from './FloatingWhatsAppButton';

export function PageLayout() {
  return (
    <div className="min-h-dvh bg-white text-brand-text-primary antialiased">
      <Header />
      <PageRevealController />
      {/* Contain sideways reveal animations without creating a scroll container. */}
      <main className="overflow-x-clip">
        <Outlet />
      </main>
      <FloatingWhatsAppButton />
    </div>
  );
}

