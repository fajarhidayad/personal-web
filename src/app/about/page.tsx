import Image from 'next/image';
import SuryaImg from '@/assets/surya.jpeg';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa6';

const AboutCard = () => {
  return (
    <section className="bg-white w-full md:w-auto rounded-3xl p-6 shadow-sm flex flex-col items-center sm:sticky md:top-5">
      <Image
        src={SuryaImg}
        width={250}
        height={250}
        alt="Surya-image"
        className="rounded-2xl mb-8"
      />
      <h1 className="text-2xl font-medium mb-2">Fajar Surya Hidayad</h1>
      <h3 className="text-slate-400 mb-10">@surya_hidayad</h3>
      <div className="flex items-center justify-between gap-5 mb-5">
        <Link
          href="https://github.com/fajarhidayad"
          className="text-2xl text-slate-700 p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
        >
          <FaGithub />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/fajar-hidayad-0a6963133/'}
          className="text-2xl text-blue-500 p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://medium.com/@fajarhidayad"
          className="text-2xl text-slate-900 p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
        >
          <FaMedium />
        </Link>
      </div>
      <Link
        href={'/contact'}
        className="py-3 text-slate-100 font-medium bg-gray-800 rounded-xl w-full text-center hover:bg-blue-500 transition-colors duration-200"
      >
        Contact Me
      </Link>
    </section>
  );
};

const AboutPage = () => {
  return (
    <main className="flex flex-col md:flex-row justify-between gap-10 items-start px-5">
      <AboutCard />
      <section className="flex-1">
        <div className="mb-14">
          <h2 className="text-2xl mb-4">About Me</h2>
          <p className="text-slate-500">
            I&apos;m a Fullstack Developer specializing in React.js or Next.js
            with TypeScript on the frontend, and Express.js or Golang on the
            backend, I am driven by a passion for crafting seamless,
            high-performance web applications.
          </p>
        </div>
        <div className="mb-14">
          <h2 className="text-2xl mb-5">Experiences</h2>
          <ul>
            <li className="mb-6">
              <h4 className="text-slate-400 mb-1">2021</h4>
              <h3 className="text-blue-500 text-lg mb-1">
                Front-End Developer
              </h3>
              <h4 className="text-slate-400 mb-1">
                Korlantas Polri - KodeKoding
              </h4>
              <p className="text-slate-400">
                Create a landing page for Korlantas Polri Instance using Laravel
                and Tailwind CSS.
              </p>
            </li>
            <li className="mb-6">
              <h4 className="text-slate-400 mb-1">2021</h4>
              <h3 className="text-blue-500 text-lg mb-1">
                Front-End Developer
              </h3>
              <h4 className="text-slate-400 mb-1">Coffeehub.id - KodeKoding</h4>
              <p className="text-slate-400">
                Coffee shop website that provide auctions feature for selling
                arabica and robusta coffee using Laravel and Bootstrap.
              </p>
            </li>
          </ul>
        </div>
        <div className="mb-14">
          <h2 className="text-2xl mb-4">Education</h2>
          <h4 className="text-slate-400 mb-1">2016 - 2023</h4>
          <h3 className="text-blue-500 text-lg mb-1">
            Bachelor Degree of Computer
          </h3>
          <h4 className="text-slate-400 mb-1">Jember University</h4>
        </div>
        <div className="mb-14">
          <h2 className="text-2xl mb-4">Skills</h2>
          <ul className="grid grid-cols-2 gap-5">
            <li>
              <h3 className="text-blue-500 text-lg">React.js</h3>
            </li>
            <li>
              <h3 className="text-blue-500 text-lg">Next.js</h3>
            </li>
            <li>
              <h3 className="text-blue-500 text-lg">Typescript</h3>
            </li>
            <li>
              <h3 className="text-blue-500 text-lg">Express.js</h3>
            </li>
            <li>
              <h3 className="text-blue-500 text-lg">Golang</h3>
            </li>
            <li>
              <h3 className="text-blue-500 text-lg">SQL / No-SQL Database</h3>
            </li>
          </ul>
        </div>
        <div className="mb-14">
          <h2 className="text-2xl mb-4">Certificates</h2>
          <ul>
            <LinkItems
              title="Fullstack Javascript Developer 2021: Top Up Voucher Game"
              platform="BuildWithAngga"
              date="May 2022"
              link="#"
            />
            <LinkItems
              title="Belajar Membuat Front-End Web untuk Pemula"
              platform="Dicoding"
              date="July 2022"
              link="https://www.dicoding.com/certificates/QLZ9R45O2P5D"
            />
            <LinkItems
              title="Belajar Dasar Pemrograman JavaScript"
              platform="Dicoding"
              date="July 2022"
              link="https://www.dicoding.com/certificates/MRZML81RRXYQ"
            />
            <LinkItems
              title="Belajar Membuat Aplikasi Web dengan React"
              platform="Dicoding"
              date="July 2022"
              link="https://www.dicoding.com/certificates/4EXG5V6EEXRL"
            />
            <LinkItems
              title="Belajar Membuat Aplikasi Back-End untuk Pemula"
              platform="Dicoding"
              date="September 2023å"
              link="https://www.dicoding.com/certificates/EYX4Y0L55ZDL"
            />
            <LinkItems
              title="Meta Front-End Developer Specialization"
              platform="Coursera"
              date="September 2023"
              link="https://www.coursera.org/account/accomplishments/specialization/certificate/A4VMBTJ2NBQK"
            />
            <LinkItems
              title="Database Structures and Management with MySQL"
              platform="Coursera"
              date="September 2023"
              link="https://www.coursera.org/account/accomplishments/certificate/29SHCZLCGL87"
            />
          </ul>
        </div>
      </section>
    </main>
  );
};

const LinkItems = (props: {
  date: string;
  link: string;
  title: string;
  platform: string;
}) => {
  return (
    <li className="mb-5">
      <h4 className="text-slate-400 mb-1">{props.date}</h4>
      <Link href={props.link} className="text-blue-500 text-lg mb-1">
        {props.title}
      </Link>
      <h4 className="text-slate-400 mb-1">{props.platform}</h4>
    </li>
  );
};

export default AboutPage;
