import BaseCard from '@/components/BaseCard';
import Image from 'next/image';
import SuryaImg from '@/assets/surya.jpeg';
import WezaImg from '@/assets/Weza-Ripoto.png';
import {
  FaAngleRight,
  FaReact,
  FaGolang,
  FaNodeJs,
  FaGithub,
  FaMedium,
  FaLinkedin,
} from 'react-icons/fa6';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <section className="grid grid-rows-4 grid-cols-1 md:grid-cols-4 gap-5 mb-5">
        <BioCard />
        <BaseCard colSpan="col-span-2">
          <h3 className="text-lg text-slate-500">
            The Fullstack <span className="text-blue-500">Developer</span>{' '}
            You&apos;ll Ever Need
          </h3>
        </BaseCard>
        <BaseCard colSpan="col-span-2" rowSpan="row-span-3">
          <div className="flex-1">
            <Image
              src={WezaImg}
              width={200}
              height={100}
              alt="Projects"
              className="rounded-2xl mb-3 mx-auto"
            />
            <h3 className="text-slate-500 uppercase text-sm mb-2">Showcase</h3>
            <div className="flex justify-between">
              <h2 className="text-2xl">Projects</h2>{' '}
              <ButtonLinkSpan href="/projects" />
            </div>
          </div>
        </BaseCard>
      </section>
      <section className="grid grid-rows-1 grid-cols-1 sm:grid-cols-4 gap-5 mb-5">
        <BaseCard colSpan="col-span-1">
          <div className="flex-1">
            <h3 className="text-slate-500 text-xs uppercase mb-2">Blog</h3>
            <Link
              href="/blog"
              className="text-2xl hover:text-blue-500 duration-200 transition-colors"
            >
              Check Out My Latest Articles
            </Link>
          </div>
        </BaseCard>
        <BaseCard colSpan="col-span-2">
          <div className="flex-1">
            <div className="flex justify-around items-center mb-8">
              <span className="text-4xl text-blue-300">
                <FaReact />
              </span>
              <span className="text-4xl text-slate-900">
                <SiNextdotjs />
              </span>
              <span className="text-4xl text-green-500">
                <FaNodeJs />
              </span>
              <span className="text-4xl text-blue-600">
                <SiTypescript />
              </span>
              <span className="text-4xl text-blue-400">
                <FaGolang />
              </span>
            </div>
            <h3 className="text-slate-500 text-xs uppercase mb-2">
              Specialization
            </h3>
            <h2 className="text-2xl ">All Skills</h2>
          </div>
        </BaseCard>
        <BaseCard colSpan="col-span-1">
          <div className="flex-1">
            <div className="flex justify-around items-center mb-8">
              <Link
                href="https://github.com/fajarhidayad"
                className="text-4xl text-slate-700"
              >
                <FaGithub />
              </Link>
              <Link
                href={'https://www.linkedin.com/in/fajar-hidayad-0a6963133/'}
                className="text-4xl text-blue-500"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://medium.com/@fajarhidayad"
                className="text-4xl text-slate-900"
              >
                <FaMedium />
              </Link>
            </div>
            <h3 className="text-slate-500 text-xs uppercase mb-2">
              Social Media
            </h3>
            <h2 className="text-2xl ">Profiles</h2>
          </div>
        </BaseCard>
      </section>

      <section className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <BaseCard colSpan="col-span-1">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
            <div className="rounded-3xl bg-gray-100 px-4 py-8 flex flex-col items-center">
              <span className="text-blue-500 text-4xl mb-3">7</span>
              <p className="text-center font-light text-slate-500">
                Total Projects
              </p>
            </div>
            <div className="rounded-3xl bg-gray-100 px-4 py-8 flex flex-col items-center">
              <span className="text-blue-500 text-4xl mb-3">4</span>
              <p className="text-center font-light text-slate-500">
                Frontend Projects
              </p>
            </div>
            <div className="rounded-3xl bg-gray-100 px-4 py-8 flex flex-col items-center">
              <span className="text-blue-500 text-4xl mb-3">3</span>
              <p className="text-center font-light text-slate-500">
                Backend Projects
              </p>
            </div>
          </div>
        </BaseCard>
        <BaseCard colSpan="col-span-1">
          <h1 className="text-5xl">
            Let&apos;s work <span className="text-blue-500">together.</span>
          </h1>
          <ButtonLinkSpan href="/contact" />
        </BaseCard>
      </section>
    </main>
  );
}

const BioCard = () => {
  return (
    <BaseCard colSpan="col-span-2" rowSpan="row-span-4">
      <div className="flex flex-col sm:flex-row items-center md:items-start gap-5 flex-1">
        <Image
          src={SuryaImg}
          width={180}
          height={180}
          alt="Surya Image"
          className="rounded-full border-4 border-blue-500 mx-auto md:mx-0"
        />

        <div className="w-full flex-1 flex flex-row justify-between items-center md:flex-col">
          <div>
            <h3 className="text-gray-400 text-sm font-semibold mb-1">
              A FULLSTACK DEVELOPER
            </h3>
            <h2 className="text-gray-800 text-4xl mb-3">
              Fajar <span className="text-blue-500">Surya</span> Hidayad
            </h2>
            <p className="text-gray-500 mb-4 text-sm">
              I&apos;m a Fullstack Developer based in Sidoarjo.
            </p>
          </div>
          <ButtonLinkSpan href="/about" />
        </div>
      </div>
    </BaseCard>
  );
};

const ButtonLinkSpan = (props: { href: string }) => {
  return (
    <Link
      href={props.href}
      className="ml-auto rounded-full text-gray-400 hover:text-gray-600 border border-blue-200 hover:border-blue-500 p-2 transition-all duration-200"
    >
      <FaAngleRight />
    </Link>
  );
};
