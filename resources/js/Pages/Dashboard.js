import React, { Fragment } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import { Menu, Transition } from '@headlessui/react';

export default function Dashboard(props) {
    const { auth, can } = usePage().props;
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span>Home</span>
                    </h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {can.alumni && (
                                <>
                                    <div className="flex items-center justify-end -mb-4 -mt-2">
                                        <Menu as='div' className='relative'>
                                            <Menu.Button as='button' className='' >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                </svg>
                                            </Menu.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                            <Menu.Items as='div' className='absolute overflow-hidden right-8 bg-white w-36 border shadow-sm rounded-lg top-0'>
                                                <Menu.Item>
                                                    <Link as='a' className='w-full text-left py-2.5 px-4 block hover:bg-gray-50' href={route('alumniMe.edit', auth.user.identifier)}>
                                                        <div className='flex items-center gap-x-2'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                            </svg>
                                                            <span className='font-medium'>Edit Data</span>
                                                        </div>
                                                    </Link>
                                                </Menu.Item>
                                            </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                    <h1 className='block mb-4 text-xl md:text-2xl font-extrabold tracking-tight mt-4 text-gray-700 w-full'>👋 Hi, {auth.user.name} !</h1>
                                    <h1 className='block mb-4 text-xl md:text-2xl font-extrabold tracking-tighter mt-4 text-gray-700 w-full'>Selamat Datang di Tracer Study Alumni Polibatam 🎓</h1>
                                    <div className='h-px bg-gray-300'></div>
                                </>
                            )}
                            {can.perusahaan && (
                                <>
                                    <div className="flex items-center justify-end -mb-4 -mt-2">
                                        <Menu as='div' className='relative'>
                                            <Menu.Button as='button' className='' >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                </svg>
                                            </Menu.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                            <Menu.Items as='div' className='absolute overflow-hidden right-8 bg-white w-36 border shadow-sm rounded-lg top-0'>
                                                <Menu.Item>
                                                    <Link as='a' className='w-full text-left py-2.5 px-4 block hover:bg-gray-50' href={route('perusahaanMe.edit', auth.user.identifier)}>
                                                        <div className='flex items-center gap-x-2'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                            </svg>
                                                            <span className='font-medium'>Edit Data</span>
                                                        </div>
                                                    </Link>
                                                </Menu.Item>
                                            </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                    <h1 className='block mb-4 text-xl md:text-2xl font-extrabold tracking-tight mt-4 text-gray-700 w-full'>👋 Hi, {auth.user.name} !</h1>
                                    <h1 className='block mb-4 text-xl md:text-2xl font-extrabold tracking-tighter mt-4 text-gray-700 w-full'>Selamat Datang di Tracer Study Polibatam 🙏</h1>
                                    <div className='h-px bg-gray-300'></div>
                                </>
                            )}
                            {can.admin && (
                                <h2 className='text-md font-sans tracking-tight'>🔑 You're an Admin.</h2>
                            )}
                            {can.alumni && (
                                <>
                                    <h1 className='flex items-center gap-x-2 mt-6 w-full md:w-fit text-xl text-gray-800 justify-center font-semibold bg-gray-100 p-2 rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg>
                                        <span>Data Pribadi Alumni</span>
                                    </h1>
                                    <div className="flex flex-col md:flex-row w-screen m-3">
                                        <div className='w-full md:w-auto'>
                                            <table className="mr-10 flex items-center">
                                                <tbody>
                                                    <tr>
                                                        <td className='text-gray-700 text-sm font-semibold' width={`100px`}>NIM</td>
                                                        <td>:</td>    
                                                        <td className='p-2 text-gray-800 text-sm font-bold'>{auth.user.identifier}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-gray-700 text-sm font-semibold'>Nama</td>
                                                        <td>:</td>    
                                                        <td className='p-2 text-gray-800 text-sm font-bold'>{auth.user.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-gray-700 text-sm font-semibold'>Prodi</td>
                                                        <td>:</td>    
                                                        <td className='p-2 text-gray-800 text-sm font-bold'>{auth.user.prodi}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-gray-700 text-sm font-semibold'>Email</td>
                                                        <td>:</td>    
                                                        <td className='p-2 text-gray-800 text-sm font-bold'>{auth.user.email}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='w-full md:w-auto'>
                                            <table className="flex items-center">
                                                <tbody>
                                                    <tr>
                                                        <td className='text-gray-700 text-sm font-semibold' width={`100px`}>Telp</td>
                                                        <td>:</td>    
                                                        <td className='p-2 text-gray-800 text-sm font-bold'>{auth.user.telp}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-gray-700 text-sm font-semibold'>Kelamin</td>
                                                        <td>:</td>    
                                                        <td className='p-2 text-gray-800 text-sm font-bold'>{auth.user.kelamin == 'L' ? 'Laki-laki' : auth.user.kelamin == 'P' ? 'Perempuan' : auth.user.kelamin}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-gray-700 text-sm font-semibold'>IPK</td>
                                                        <td>:</td>    
                                                        <td className='p-2 text-gray-800 text-sm font-bold'>{auth.user.ipk}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-gray-700 text-sm font-semibold'>Angkatan</td>
                                                        <td>:</td>    
                                                        <td className='p-2 text-gray-800 text-sm font-bold'>20{ auth.user.identifier.slice(3,5) }</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </>
                            )}
                            {can.perusahaan && (
                                <>
                                    <h1 className='flex items-center gap-x-2 mt-6 w-full md:w-fit text-xl text-gray-800 justify-center font-semibold bg-gray-100 p-2 rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                                        </svg>
                                        <span>Data Perusahaan</span>
                                    </h1>
                                    <div className="flex flex-col md:flex-row w-screen m-3">
                                        <div className='w-full md:w-auto'>
                                            <table className="mr-10 flex items-center">
                                                <tbody>
                                                    <tr>
                                                        <td className='text-gray-700 text-sm font-semibold' width={`120px`}>ID Perusahaan</td>
                                                        <td>:</td>    
                                                        <td className='p-2 text-gray-800 text-sm font-bold'>{auth.user.identifier}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-gray-700 text-sm font-semibold'>Nama</td>
                                                        <td>:</td>    
                                                        <td className='p-2 text-gray-800 text-sm font-bold'>{auth.user.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-gray-700 text-sm font-semibold'>Email</td>
                                                        <td>:</td>    
                                                        <td className='p-2 text-gray-800 text-xs md:text-sm font-bold'>{auth.user.email}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='w-full md:w-auto'>
                                            <table className="flex items-center">
                                                <tbody>
                                                    <tr>
                                                        <td className='text-gray-700 text-sm font-semibold' width={`120px`}>Telp</td>
                                                        <td>:</td>    
                                                        <td className='p-2 text-gray-800 text-sm font-bold'>{auth.user.telp}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-gray-700 text-sm font-semibold'>Address</td>
                                                        <td>:</td>    
                                                        <td className='p-2 text-gray-800 text-sm font-bold'>{auth.user.address}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    {can.alumni && (
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <Link href={route('kuesioner.alumni.index')} className="p-3 mt-4 w-full inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-sm transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none">
                                <span className='text-sm font-semibold uppercase tracking-widest'>ISI KUESIONER 🚀</span>
                            </Link>
                        </div>
                    )}
                    {can.perusahaan && (
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <Link href={route('kuesioner.perusahaan.index')} className="p-3 mt-4 w-full inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-sm transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none">
                                <span className='text-sm font-semibold uppercase tracking-widest'>ISI KUESIONER 🚀</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </Authenticated>
    );
}
