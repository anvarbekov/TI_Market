"use client"
import Link from 'next/link';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  surname: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<string>('');
  const [statusType, setStatusType] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Xabar yuborildi');
      setStatusType('success');
      setFormData({
        name: '',
        surname: '',
        phone: '',
        message: '',
      });
    } else {
      setStatus('Xatolik yuz berdi');
      setStatusType('error');
    }
  };

  useEffect(() => {
    if (status) {
       toast.success(status);
      const timer = setTimeout(() => {
        setStatus('');
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer if component unmounts or status changes
    }
  }, [status]);

  return (
<section className="text-gray-600 body-font relative">
  <div className="mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-3/5 md:w-1/2 shadow bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0"  title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.9875163241313!2d71.77244247479608!3d40.36480115880015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb84ba1d76a659%3A0x7bc998c6a195e3d5!2sTatuff!5e0!3m2!1sru!2s!4v1737877789701!5m2!1sru!2s"></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">MANZIL</h2>
          <p className="mt-1">Mustaqillik ko'chasi</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">fbtuit@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">+998-00-000-00-00</p>
        </div>
      </div>
    </div>
  <form onSubmit={handleSubmit} className="form lg:w-2/5 shadow md:w-1/2 p-2 rounded-md bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-center text-lg mb-1 font-medium title-font">Fikr-mulohaza</h2>
      <p className="leading-relaxed text-center mb-5 text-gray-600">Sizning fikringiz biz uchun muhim!</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Ismingiz</label>
        <input
          name="name"
          placeholder='Ismingiz'
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="surname" className="leading-7 text-sm text-gray-600">Telegram username</label>
        <input type="text"
            id="surname"
            name="surname"
            placeholder='@telegramUsername'
            value={formData.surname}
            onChange={handleChange}
            required
             className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Telefon raqamingiz</label>
        <input id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Fikringizni yozing!</label>
        <textarea id="textarea"
            name="message"
            placeholder='Salom, menimcha...'
            value={formData.message}
            onChange={handleChange}
            required className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white btn btn-success border-0 py-2 px-6 focus:outline-none rounded text-lg" type="submit">Yuborish</button>
  </form>
  </div>
</section>

  );
}
