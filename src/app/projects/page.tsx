'use client';

import Image from 'next/image';
import WezaImage from '@/assets/Weza-Ripoto.png';
import ManageLandingPage from '@/assets/manage-landing-page.png';
import Link from 'next/link';
import { AnimateSection } from '@/components/Animate';

const ProjectsPage = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-5">
      <AnimateSection animation="scaleUp" className="bg-white rounded-2xl p-5">
        <Image
          src={WezaImage}
          alt="Weza-Ripoto-App"
          className="rounded-xl mb-5"
        />
        <h2 className="font-medium text-2xl text-slate-800 mb-5">
          Weather Report App
        </h2>
        <Link
          href={'https://github.com/fajarhidayad/weza-ripoto'}
          className="px-4 py-3 bg-gray-800 text-slate-100 rounded mr-3"
        >
          Source Code
        </Link>
        <Link
          href={'https://weza-ripoto.vercel.app'}
          className="px-4 py-3 bg-blue-500 text-slate-100 rounded"
        >
          Visit
        </Link>
      </AnimateSection>
      <AnimateSection animation="scaleUp" className="bg-white rounded-2xl p-5">
        <Image
          src={ManageLandingPage}
          alt="Weza-Ripoto-App"
          className="rounded-xl mb-5"
        />
        <h2 className="font-medium text-2xl text-slate-800 mb-5">
          FrontendMentor-Manage Landing Page
        </h2>
        <Link
          href={'https://github.com/fajarhidayad/landing-page-tailwind'}
          className="px-4 py-3 bg-gray-800 text-slate-100 rounded mr-3"
        >
          Source Code
        </Link>
        <Link
          href={'https://landing-page-tailwind.vercel.app/'}
          className="px-4 py-3 bg-blue-500 text-slate-100 rounded"
        >
          Visit
        </Link>
      </AnimateSection>
    </main>
  );
};

export default ProjectsPage;
