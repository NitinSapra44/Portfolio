import React, { useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from "@emailjs/browser";


const Contact = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    Promise.all([
        emailjs.sendForm( import.meta.env.VITE_EMAILJS_SERVICE_ID,import.meta.env.VITE_EMAILJS_TEMPLATE_ID1, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
        emailjs.sendForm( import.meta.env.VITE_EMAILJS_SERVICE_ID,import.meta.env.VITE_EMAILJS_TEMPLATE_ID2, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    ]).then(([res1, res2]) => {
            alert("We Will Reach you out soon");
        form.current.reset();
    }).catch((err) => {
        console.error('Email error:', err);
    });

  };



    return (
        <div className='h-screen mt-[1200px] sm:mt-[600px] md:mt-[450px] scroll-mt-24 pt-10 '>
        <section id="contact" className="py-16 px-4 md:px-8 bg-gray-50 rounded-lg shadow-xl max-w-4xl mx-auto my-10 font-sans">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-8">Get in Touch</h2>

            <p className="text-lg text-center text-gray-600 mb-10 leading-relaxed">
                I'm always open to new opportunities, collaborations, or just a friendly chat.
                Feel free to reach out using the form below or connect with me on social media!
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
                {/* Contact Form Section */}
                <div className="w-full lg:w-3/5 bg-white p-8 rounded-lg shadow-md text-left">
                    <h3 className="text-3xl font-semibold text-gray-700 mb-6">Send a Message</h3>
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
                        <div>
                            <label htmlFor="user_name" className="block text-gray-700 text-sm font-medium mb-2">Name:</label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="user_email" className="block text-gray-700 text-sm font-medium mb-2">Email:</label>
                            <input
                                type="email"
                                id="user_email"
                                name="user_email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Message:</label>
                            <textarea
                                id="message"
                                name="user_message"
                                rows="5"
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Send Message
                        </button>

                        {/* Placeholder for success/error messages */}
                        {/* <p className="mt-4 text-center text-green-600">Message sent successfully!</p> */}
                        {/* <p className="mt-4 text-center text-red-600">Failed to send message. Please try again.</p> */}
                    </form>
                </div>

                {/* Social Links Section */}
                <div className="w-full lg:w-2/5 bg-white p-8 rounded-lg shadow-md text-left flex flex-col justify-center">
                    <h3 className="text-3xl font-semibold text-gray-700 mb-6">Connect with Me</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        You can also find me on these platforms:
                    </p>
                    <div className="flex flex-col space-y-4">
               <a
    href="https://www.linkedin.com/in/nitin-sapra-6b8587368"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-blue-600 hover:text-blue-800 text-lg transition duration-300 ease-in-out"
>
    <FaLinkedin className="mr-3 text-2xl" /> LinkedIn
</a>
                        <a
                            href="https://github.com/NitinSapra44"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-gray-900 text-lg transition duration-300 ease-in-out"
                        >
                            <FaGithub className="mr-3 text-2xl" /> GitHub
                        </a>
                        <a
                            href="mailto:nitinsapra.2000@gmail.com"
                            className="flex items-center text-red-600 hover:text-red-800 text-lg transition duration-300 ease-in-out"
                        >
                            <FaEnvelope className="mr-3 text-2xl" /> Email
                        </a>
                        {/* Add more social links as needed */}
                        {/* <a
                            href="https://twitter.com/your-twitter-handle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-400 hover:text-blue-600 text-lg transition duration-300 ease-in-out"
                        >
                            <FaTwitter className="mr-3 text-2xl" /> Twitter
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Contact;