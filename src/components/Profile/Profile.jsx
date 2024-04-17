import { useAuth } from '@/Context/AuthContext';
import React from 'react';

const Profile = () => {
    const { user } = useAuth()
    console.log(user?.user_metadata)
    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-white text-lg">
                                        {user?.user_metadata.full_name}
                                    </h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                                    <p className="text-base text-gray-400">{user?.user_metadata.email}</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">Welcome mr {user?.user_metadata.full_name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Profile;