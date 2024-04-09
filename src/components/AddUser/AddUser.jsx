import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useCarto } from '@/Context/CartContext';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { CiTrash } from 'react-icons/ci';


const AddUser = () => {
    const { users, addUser, handleDeleteUser, deleteFromCart, addFromCart } = useCarto()
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [country, setCountry] = useState('United States')
    const [email, setEmail] = useState(' ')
    const [organization, setOrganization] = useState('')
    const [designation, setDesignation] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userType, setUserType] = useState('Regular User')

    const addUserInfo = (e) => {
        e.preventDefault()
        addUser({ id: Date.now(), firstName, middleName, lastName, country, email, organization, designation, password, confirmPassword, userType })
        addFromCart()
        setFirstName(''); setMiddleName(''); setLastName(''); setEmail(''); setOrganization(''); setDesignation(''), setPassword(''); setConfirmPassword('');
    }
    const deleteUserInfo = (id) => {
        handleDeleteUser(id)
        deleteFromCart()
    }

    return (
        <div className='max-w-6xl mx-auto p-5 my-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-5'>
                <form onSubmit={addUserInfo} className="  border-gray-900/10 pb-12">
                    <h2 className="text-center text-xl my-5 font-semibold leading-7 text-gray-900">Add User</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    required
                                    type="text"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="middle-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Middle name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    onChange={(e) => setMiddleName(e.target.value)}
                                    value={middleName}
                                    name="middle-name"
                                    id="middle-name"
                                    autoComplete="family-name"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    required
                                    type="text"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Country
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    onChange={(e) => setCountry(e.target.value)}
                                    value={country}
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="organization" className="block text-sm font-medium leading-6 text-gray-900">
                                Organization
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    onChange={(e) => setOrganization(e.target.value)}
                                    value={organization}
                                    name="organization"
                                    id="organization"
                                    autoComplete="organization"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="designation" className="block text-sm font-medium leading-6 text-gray-900">
                                Designation
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"

                                    onChange={(e) => setDesignation(e.target.value)}
                                    value={designation}
                                    name="designation"
                                    id="designation"
                                    autoComplete="designation"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3 sm:col-start-1">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    required
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    name="password"
                                    id="password"
                                    autoComplete="address-level2"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm Password
                            </label>
                            <div className="mt-2">
                                <input
                                    required
                                    type="password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    value={confirmPassword}
                                    name="confirm-password"
                                    id="confirm-password"
                                    autoComplete="address-level2"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="role-user" className="block text-sm font-medium leading-6 text-gray-900">
                                User Type
                            </label>
                            <div className="mt-2">
                                <select
                                    id="role-user"
                                    onChange={(e) => setUserType(e.target.value)}
                                    value={userType}
                                    name="role-user"
                                    autoComplete="role-user"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>Regular User</option>
                                    <option>Admin</option>
                                    <option>Employe</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <Button type='submit' className=' uppercase mt-9 px-6 py-4 bg-orange-500 rounded-md font-bold text-white'>Add User</Button>
                </form>
                <div>
                    <h4 className="text-center text-xl my-5 underline font-semibold leading-7 text-gray-900">User List</h4>
                    <Table>
                        <TableCaption>{users?.length > 0 ? 'A list of your recent users.' : 'Empty User List'}</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className=" ">ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead className="">UserType</TableHead>
                                <TableHead className="">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users?.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.id}</TableCell>
                                    <TableCell className='flex gap-2'>
                                        <span>{user.firstName}</span>
                                        <span>{user.lastName}</span>
                                    </TableCell>
                                    <TableCell>{"*****" + user.email.slice(5,)}</TableCell>
                                    <TableCell className="">{user.userType}</TableCell>
                                    <TableCell className=""><CiTrash onClick={() => deleteUserInfo(user.id)} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>

                    {/* {console.log(users)} */}
                </div>
            </div>
        </div>
    );
};

export default AddUser;