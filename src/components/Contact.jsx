import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { IoIosSend } from "react-icons/io";
import Swal from 'sweetalert2';  // Ensure you import Swal for showing pop-ups

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus('sending');  // Set status to 'sending' when the email is being sent

    try {
      const templateParams = {
        to_name: 'Pinki Gupta',
        from_name: formData.name,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(
        'service_98tw0xc',  // Replace with your actual EmailJS service ID
        'template_as6sjil', // Replace with your actual EmailJS template ID
        templateParams,
        'LKJg32gTvTg56DrCk' // Replace with your actual EmailJS user ID
      );

      setFormData({ name: '', email: '', message: '' });
      setStatus('success');  // Set status to 'success' after successful email

      // Show success message using Swal
      Swal.fire({
        title: 'Success!',
        text: 'Message sent successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        background: '#1e1e1e',
        color: '#fff',
        customClass: {
          popup: 'dark-popup',
          confirmButton: 'dark-button',
          icon: 'dark-icon'
        }
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');  // Set status to 'error' if the email fails to send

      // Show error message using Swal
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send message. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#1e1e1e',
        color: '#fff',
        customClass: {
          popup: 'dark-popup',
          confirmButton: 'dark-button',
          icon: 'dark-icon'
        }
      });
    } finally {
      setStatus('');  // Reset status after completion
    }
  };

  return (
    <div className='border-b border-neutral-900 pb-4'> 
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Contact Me <span className='text-neutral-500'></span>.
      </motion.h1>

      <div className="max-w-2xl mx-auto mt-10 p-4 sm:p-6 rounded-lg bg-gray-500 bg-opacity-20 backdrop-filter backdrop-blur-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              className="flex-1 bg-gray-600 border border-gray-300 rounded-md py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="flex-1 bg-gray-600 border border-gray-300 rounded-md py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            className="w-full bg-gray-600 border border-gray-300 rounded-md py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
          ></textarea>

          <div className="flex justify-center">
            <button
              className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <IoIosSend className="h-5 w-5 mr-2" />
                  Send
                </>
              )}
            </button>
          </div>
        </form>

        {status === 'success' && (
          <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
            Message sent successfully!
          </div>
        )}
        {status === 'error' && (
          <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            Failed to send message. Please try again.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
