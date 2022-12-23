import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Show(props) {
    const { user } = props
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{user.name}</h2>}
        >
            <Head title={user.name} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <div className="flex flex-col md:flex-row w-screen m-3">
                                    <div className='w-full md:w-auto'>
                                        <table className="mr-4 flex items-center">
                                            <tbody>
                                                <tr>
                                                    <td className='text-gray-700 text-md font-semibold' width={`120px`}>ID Perusahaan</td>
                                                    <td>:</td>    
                                                    <td className='p-2 text-gray-800 text-md font-bold'>{user.identifier}</td>
                                                </tr>
                                                <tr>
                                                    <td className='text-gray-700 text-md font-semibold'>Nama</td>
                                                    <td>:</td>    
                                                    <td className='p-2 text-gray-800 text-md font-bold'>{user.name}</td>
                                                </tr>
                                                <tr>
                                                    <td className='text-gray-700 text-md font-semibold'>Email</td>
                                                    <td>:</td>    
                                                    <td className='p-2 text-gray-800 text-md font-bold'>{user.email}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='w-full md:w-auto'>
                                        <table className="flex items-center">
                                            <tbody>
                                                <tr>
                                                    <td className='text-gray-700 text-md font-semibold' width={`120px`}>Telp</td>
                                                    <td>:</td>    
                                                    <td className='p-2 text-gray-800 text-md font-bold'>{user.telp}</td>
                                                </tr>
                                                <tr>
                                                    <td className='text-gray-700 text-md font-semibold'>Address</td>
                                                    <td>:</td>    
                                                    <td className='p-2 text-gray-800 text-md font-bold'>{user.address}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            <Link className='mr-2 mt-5 inline-flex items-center px-4 py-2 bg-white border-2 border-black rounded-md font-semibold text-xs text-black uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150' href={route('perusahaan.index')}>Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
