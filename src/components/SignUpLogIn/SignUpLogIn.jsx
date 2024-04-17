import { useAuth } from '@/Context/AuthContext';
import { useCarto } from '@/Context/CartContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignUpLogIn = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { register, logIn } = useAuth()
    const handleRegister = (e) => {
        e.preventDefault()
        register(fullName, email, password)
    }
    const handleLogIn = (e) => {
        e.preventDefault()
        logIn(email, password)
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='max-w-screen-lg m-9 text-gray-400 bg-gray-900 body-font p-4 rounded-lg'>
                {/* {
                    users.map(item => console.log(item.userType))
                } */}

                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="account">Register</TabsTrigger>
                        <TabsTrigger value="password">LogIn</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <section className="">
                            <form onSubmit={handleRegister} className="px-5 py-24">
                                <div className=" mb-4">
                                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Full Name</label>
                                    <input
                                        required
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        type="text"
                                        id="full-name"
                                        name="full-name"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-orange-600 rounded border border-gray-600 focus:border-orange-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className=" mb-4">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                    <input
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        id="email"
                                        name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-orange-600 rounded border border-gray-600 focus:border-orange-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className=" mb-4">
                                    <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
                                    <input
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-orange-600 rounded border border-gray-600 focus:border-orange-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <button
                                    type='submit'
                                    className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
                            </form>
                        </section>
                    </TabsContent>
                    <TabsContent value="password">
                        <section className="">
                            <form onSubmit={handleLogIn} className="px-5 py-24">
                                <div className="relative mb-4">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                    <input
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-600 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
                                    <input
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-600 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <button
                                    type='submit'
                                    className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">LogIn</button>
                            </form>
                        </section>
                    </TabsContent>
                </Tabs>


            </div>
        </div>
    );
};

export default SignUpLogIn;