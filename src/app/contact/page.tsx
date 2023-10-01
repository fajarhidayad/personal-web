import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa6';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';

const ContactPage = () => {
  return (
    <main className="flex flex-col md:flex-row gap-10 px-5">
      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-5">Contact Info</h2>
        <div className="flex gap-4 mb-10">
          <div className="rounded-xl p-4 bg-white text-3xl text-blue-500">
            <HiOutlineMail />
          </div>
          <div>
            <h3 className="text-sm text-slate-400">Mail Us</h3>
            <p>fajarsuryahidayad@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-4 mb-10">
          <div className="rounded-xl p-4 bg-white text-3xl text-blue-500">
            <HiOutlineLocationMarker />
          </div>
          <div>
            <h3 className="text-sm text-slate-400">Location</h3>
            <p>Sidoarjo, East Java, Indonesia</p>
          </div>
        </div>
        <h2 className="text-2xl font-medium mb-5">Social Info</h2>
        <div className="flex gap-5">
          <Link
            href="https://github.com/fajarhidayad"
            className="text-2xl text-slate-700 p-5 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200"
          >
            <FaGithub />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/fajar-hidayad-0a6963133/'}
            className="text-2xl text-blue-500 p-5 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://medium.com/@fajarhidayad"
            className="text-2xl text-slate-900 p-5 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200"
          >
            <FaMedium />
          </Link>
        </div>
      </section>
      <section className="bg-white rounded-3xl p-8 flex-1">
        <h1 className="text-4xl font-medium mb-8">
          Let&apos;s Work <span className="text-blue-500">Together</span>
        </h1>

        <ContactForm />
      </section>
    </main>
  );
};

export default ContactPage;
