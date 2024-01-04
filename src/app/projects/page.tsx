'use client';

import Tweety from '@/assets/Tweety.png';
import WezaImage from '@/assets/Weza-Ripoto.png';
import ChatApp from '@/assets/chat-app.png';
import Shoppingify from '@/assets/Shoppingify.jpeg';
import ManageLandingPage from '@/assets/manage-landing-page.png';
import { AnimateSection } from '@/components/Animate';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge, badgeVariants } from '@/components/ui/badge';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProjectsPage = () => {
  return (
    <>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-5">
        <ProjectCard
          title="Weather Report App"
          img={WezaImage}
          description="Simple weather report app using OpenWeatherMap API."
          srcCode="https://github.com/fajarhidayad/weza-ripoto"
          srcLive="https://weza-ripoto.vercel.app"
        >
          <div className="flex items-center gap-3 mb-3">
            <Badge className={badgeVariants({ className: 'bg-blue-400' })}>
              React.js
            </Badge>
            <Badge className={badgeVariants({ className: 'bg-blue-500' })}>
              Tailwind CSS
            </Badge>
            <Badge className={badgeVariants({ className: 'bg-purple-400' })}>
              Vite
            </Badge>
          </div>
          <div>
            <h3 className="mb-1 font-bold">Features:</h3>
            <ul>
              <li>Search weather by current location</li>
              <li>Weather forecast for up to 3 days</li>
              <li>Fully responsive</li>
            </ul>
          </div>
        </ProjectCard>
        <ProjectCard
          title="Manage Landing Page"
          img={ManageLandingPage}
          description="Slicing a fully responsive landing page challenge in frontendmentor.io using Tailwind CSS."
          srcCode="https://github.com/fajarhidayad/landing-page-tailwind"
          srcLive="https://landing-page-tailwind.vercel.app/"
        >
          <div className="flex items-center gap-3 mb-3">
            <Badge className={badgeVariants({ className: 'bg-orange-400' })}>
              HTML
            </Badge>
            <Badge className={badgeVariants({ className: 'bg-blue-500' })}>
              Tailwind CSS
            </Badge>
          </div>
          <div>
            <h3 className="mb-1 font-bold">Features:</h3>
            <ul>
              <li>Pixel perfect</li>
              <li>Fully responsive</li>
            </ul>
          </div>
        </ProjectCard>
        <ProjectCard
          title="Twitter Clone"
          img={Tweety}
          description="Twitter clone with some of its features using Next.js, Tailwind CSS, tRPC, React Query, and Prisma."
          srcCode="https://github.com/fajarhidayad/twitter-clone"
        >
          <div className="flex items-center gap-3 mb-3">
            <Badge className={badgeVariants({ className: 'bg-slate-800' })}>
              Next.js
            </Badge>
            <Badge className={badgeVariants({ className: 'bg-blue-500' })}>
              Tailwind CSS
            </Badge>
            <Badge className={badgeVariants({ className: 'bg-blue-600' })}>
              tRPC
            </Badge>
            <Badge className={badgeVariants({ className: 'bg-red-400' })}>
              React Query
            </Badge>
            <Badge className={badgeVariants({ className: 'bg-teal-500' })}>
              Prisma
            </Badge>
          </div>
          <div>
            <h3 className="mb-1 font-bold">Features:</h3>
            <ul>
              <li>Google Authentication</li>
              <li>Follow each other user</li>
              <li>Add tweet</li>
              <li>Like & Unlike Tweet</li>
              <li>Change profile</li>
            </ul>
          </div>
        </ProjectCard>
        <ProjectCard
          title="Firebase Chat App"
          img={ChatApp}
          srcLive="https://chat-group-rho.vercel.app/"
          description="Realtime chat app using Next.js & Firebase."
          srcCode="https://github.com/fajarhidayad/chat-app-firebase"
        >
          <div className="flex items-center gap-3 mb-3">
            <Badge className={badgeVariants({ className: 'bg-slate-800' })}>
              Next.js
            </Badge>
            <Badge className={badgeVariants({ className: 'bg-blue-500' })}>
              Tailwind CSS
            </Badge>
            <Badge className={badgeVariants({ className: 'bg-orange-400' })}>
              Firebase
            </Badge>
          </div>
          <div>
            <h3 className="mb-1 font-bold">Features:</h3>
            <ul>
              <li>Firebase Authentication</li>
              <li>Realtime chat using Firestore</li>
              <li>User can add new channel</li>
              <li>Automatically join channel</li>
            </ul>
          </div>
        </ProjectCard>
        <ProjectCard
          title="Shoppingify"
          img={Shoppingify}
          srcLive="https://shoppingify-topaz.vercel.app/"
          description="Shopping list app for taking notes of their shopping items"
          srcCode="https://github.com/fajarhidayad/shoppingify"
        >
          <div className="flex items-center gap-3 mb-3">
            <Badge className={badgeVariants({ className: 'bg-blue-300' })}>
              React.js
            </Badge>
            <Badge className={badgeVariants({ className: 'bg-blue-500' })}>
              Tailwind CSS
            </Badge>
            <Badge className={badgeVariants({ className: 'bg-slate-700' })}>
              shadcn
            </Badge>
            <Badge className={badgeVariants({ className: 'bg-green-400' })}>
              Zustand
            </Badge>
            <Badge className={badgeVariants({ className: 'bg-purple-400' })}>
              Vite
            </Badge>
          </div>
          <div>
            <h3 className="mb-1 font-bold">Features:</h3>
            <p>Work in progress</p>
          </div>
        </ProjectCard>
      </main>
    </>
  );
};

const ProjectCard = (props: {
  img: StaticImageData;
  title: string;
  children: React.ReactNode;
  srcCode: string;
  description?: string;
  srcLive?: string;
}) => {
  return (
    <AnimateSection
      animation="scaleUp"
      className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition-shadow duration-300"
    >
      <Zoom>
        <Image
          src={props.img}
          alt={props.title}
          className="rounded-xl mb-5 bg-contain"
        />
      </Zoom>
      <h2 className="font-medium text-2xl text-slate-800 mb-5">
        {props.title}
      </h2>
      <Link
        href={props.srcCode}
        className={buttonVariants({
          className: 'mr-3 bg-slate-800 hover:bg-slate-600',
        })}
      >
        Source Code
      </Link>
      {props.srcLive && (
        <Link
          href={props.srcLive}
          className={buttonVariants({
            className: 'mr-3 bg-lime-500 hover:bg-lime-600',
          })}
        >
          Visit
        </Link>
      )}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Details</Button>
        </DialogTrigger>
        <DialogContent className="w-6xl">
          <DialogHeader>
            <DialogTitle className="mb-4">{props.title}</DialogTitle>
            <DialogDescription>
              <div className="mb-3">
                <h3 className="mb-2 font-bold">Description:</h3>
                <p>{props.description}</p>
              </div>
              <h3 className="mb-2 font-bold">Made with:</h3>
              {props.children}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </AnimateSection>
  );
};

export default ProjectsPage;
