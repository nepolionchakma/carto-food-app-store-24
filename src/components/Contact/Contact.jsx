import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";
import { Button } from '../ui/button';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='max-w-5xl mx-auto px-5 py-9'>
            <div className='w-2/3 mx-auto text-center'>
                <h4 className='font-bold text-2xl my-2'>Get In Touch With Us</h4>
                <p className='opacity-50 tracking-tight'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className='flex justify-center gap-4 p-4 mx-auto'>
                <div className=''>
                    <div className='flex gap-2 w-[300px] p-4'>
                        <div className='flex items-center p-4 text-xl text-orange-500'><FaLocationDot /></div>
                        <div className='flex flex-col'>
                            <h3 className='font-bold'>Phone</h3>
                            <span className='tracking-tight opacity-90'> Mobile : <a className='hover:underline' href="tel:+84546-6789">+(84) 546-6789</a></span>

                            <span className='tracking-tight opacity-90'>Hotline : <a href="tel:+84456-6789">+(84) 456-6789</a></span>
                        </div>
                    </div>
                    <div className='flex gap-2 w-[300px] p-4'>
                        <div className='flex items-center p-4 text-xl text-orange-500'><FaPhoneAlt /></div>
                        <div>
                            <h3 className='font-bold'>Working Time</h3>
                            <span className='tracking-tight opacity-90'>Monday-Friday: 9:00 - 22:00</span>
                            <span className='tracking-tight opacity-90'> Saturday-Sunday: 9:00 - 21:00</span>
                        </div>
                    </div>
                    <div className='flex gap-2 w-[300px] p-4'>
                        <div className='flex items-center p-4 text-xl text-orange-500'><MdOutlineWorkHistory /></div>
                        <div>
                            <h3 className='font-bold'>Address</h3>
                            <span className='tracking-tight opacity-90'>236 5th SE Avenue, New York NY10000, United States</span>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div className=''>
                    <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Your name
                            </label>
                            <div className="mt-2">
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder='Enter Your Name'
                                    autoComplete="given-name"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    required
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder='Email'
                                    autoComplete="email"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
                                Subject
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder='Enter Your Subject'
                                    autoComplete="subject"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                                Message
                            </label>
                            <div className="mt-2">
                                <textarea
                                    type="text"
                                    name="message"
                                    id="message"
                                    placeholder='Enter Your Message'
                                    rows={4}
                                    autoComplete="message"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <Button type='submit' className='uppercase mt-9 px-6 py-4 bg-orange-500 rounded-md font-bold text-white'>Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;