'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '@/types/schema';
import { toast } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';
import { BaseSyntheticEvent, useRef, useState } from 'react';
import { verifyCaptcha } from '@/actions/ServerActions';

type EmailFormType = z.infer<typeof contactFormSchema>;

const sendMail = async (
  formData: EmailFormType,
  e: BaseSyntheticEvent | undefined,
  setVerifiedFalse: () => void
) => {
  try {
    const response = await fetch('/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      e?.target.reset();
      setVerifiedFalse();
      return response.ok;
    } else {
      return response.ok;
    }
  } catch (error) {
    console.error('Error: ', error);
  }
};

export default function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormType>({ resolver: zodResolver(contactFormSchema) });

  const onSubmitForm = handleSubmit((data, e) => {
    if (!isVerified)
      return toast.error('Please check CAPTCHA', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        theme: 'colored',
      });
    toast.promise(
      sendMail(data, e, () => setIsVerified(false)),
      {
        error: 'Sorry, something went wrong',
        pending: 'Sending, please wait...',
        success: 'Email successfully sent, Thank you',
      },
      {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        theme: 'colored',
      }
    );
  });

  async function handleCaptchaSub(token: string | null) {
    await verifyCaptcha(token)
      .then(() => setIsVerified(true))
      .catch(() => setIsVerified(false));
  }

  return (
    <form onSubmit={onSubmitForm} className="flex flex-col">
      <div className="mb-4">
        <input
          placeholder="Your Name"
          {...register('name')}
          className="bg-gray-50 rounded-xl p-4 mb-2 w-full"
        />
        <p className="text-red-500">{errors.name && errors.name.message}</p>
      </div>
      <div className="mb-4">
        <input
          {...register('email')}
          placeholder="Email"
          className="bg-gray-50 rounded-xl p-4 mb-2 w-full"
        />
        <p className="text-red-500">{errors.email && errors.email.message}</p>
      </div>
      <div className="mb-4">
        <input
          {...register('subject')}
          placeholder="Your Subject"
          className="bg-gray-50 rounded-xl p-4 mb-2 w-full"
        />
        <p className="text-red-500">
          {errors.subject && errors.subject.message}
        </p>
      </div>
      <div className="mb-4">
        <textarea
          {...register('message')}
          placeholder="Your Message"
          className="bg-gray-50 rounded-xl p-4 mb-2 w-full"
        />
        <p className="text-red-500">
          {errors.message && errors.message.message}
        </p>
      </div>
      <div className="mb-4">
        <ReCAPTCHA
          sitekey={`6LeXNWkoAAAAAKMH8TNycy4tAfO3rf0QOD2Ryqtj`}
          ref={recaptchaRef}
          onChange={handleCaptchaSub}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-gray-800 text-slate-200 py-3 rounded-lg hover:bg-blue-500 transition-colors duration-200 disabled:bg-gray-400"
      >
        Send Message
      </button>
    </form>
  );
}
