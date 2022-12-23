import React, { useCallback, useEffect, useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import { debounce, pickBy } from 'lodash';
import { Inertia } from '@inertiajs/inertia';
import DialogModal from '@/Components/DialogModal';
import aos from 'aos';
import '../../../../node_modules/aos/dist/aos.css'
import { Menu } from '@headlessui/react';

export default function RiwayatKerjaIndex(props) {
    const { data:riwayatkerja, links} = props.riwayat
    const [params, setParams] = useState({
        page: 1,
    });
    const reload = useCallback(
        debounce((query) => {
            Inertia.get(
                route('riwayatkerja.index'),
                {...pickBy(query), page: query.q ? 1 : query.page},
                {
                    preserveState: true,
                    preserveScroll: true,
                }
            )
        }, 150)
        ,
        []
        )

        useEffect(() => reload(params), [params]);

        const [ShowDelete, setShowDelete] = useState(false)
        const [ShowDataHistory, setShowDataHistory] = useState(false)
        const [ dataHistory, setDataHistory ] = useState(false)

        const showHistory = (riwayat) => {
            setDataHistory(riwayat)
            setShowDataHistory(true)
        }

        const deleteHistory = (riwayat) => {
            setDataHistory(riwayat)
            setShowDelete(true)
        }

        useEffect(()=>{
            aos.init({
                once: true,
            })
        })
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                        <span>Riwayat Kerja</span>
                    </h2>}
        >
            <Head title="Riwayat Kerja" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col">
                        <div className='md:w-1/2'>
                            <div className="flex item-center justify-start gap-x-2 mb-6">
                                <Link href={route('riwayatkerja.create')} className='w-16 mx-2 inline-flex items-center justify-center h-8 font-medium tracking-wide text-black shadow-sm md:shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                </Link>

                                {/*  */}

                                {ShowDelete && 
                                    <DialogModal
                                        svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>}
                                        content='Are you sure you want to delete this work history ?'    
                                    >
                                        <div className='block mb-3 text-sm tracking-tight font-sans p-2 border rounded-md'>
                                            <span className='text-xs md:text-base block font-bold'>{dataHistory.perusahaan}</span>
                                            <span className='text-xs md:text-base font-sans'>{dataHistory.posisi}</span>
                                        </div>
                                        <button onClick={(e)=>setShowDelete(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                        <Link onClick={(e)=>setShowDelete(false)} className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none' href={route('riwayatkerja.destroy', dataHistory.id)} method='delete' as="button">
                                            Delete
                                        </Link>
                                    </DialogModal>
                                }
                                {ShowDataHistory && 
                                    <DialogModal 
                                        svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                            </svg>}
                                    >
                                        <h1 className='block mb-3 text-md tracking-tight font-sans font-semibold'>Show Riwayat Kerja</h1>
                                        <div className='flex items-start text-left mb-4 border rounded-md p-2 w-80 md:w-full'>
                                            <div className='block md:flex'>
                                                <div>
                                                    <table className="flex items-center px-4">
                                                        <tbody>
                                                            <tr>
                                                                <td className='text-gray-700 text-xs md:text-base font-semibold' width={`100px`}>Perusahaan</td>
                                                                <td>:</td>    
                                                                <td className='px-2 py-1 text-gray-800 text-xs md:text-base font-bold'>{dataHistory.perusahaan}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-gray-700 text-xs md:text-base font-semibold'>Posisi</td>
                                                                <td>:</td>    
                                                                <td className='px-2 py-1 text-gray-800 text-xs md:text-base font-bold'>{dataHistory.posisi}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className='ml-4 md:ml-2'>
                                                <table className="flex items-center">
                                                    <tbody>
                                                        <tr>
                                                            <td className='text-gray-700 text-xs md:text-base font-semibold' width={`100px`}>Durasi</td>
                                                            <td>:</td>    
                                                            <td className='px-2 py-1 text-gray-800 text-xs md:text-base font-bold'>{dataHistory.durasi}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='text-gray-700 text-xs md:text-base font-semibold'>Pendapatan</td>
                                                            <td>:</td>    
                                                            <td className='px-2 py-1 text-gray-800 text-xs md:text-base font-bold'>
                                                                {dataHistory.pendapatan}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={(e) => setShowDataHistory(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    </DialogModal>
                                }

                                {/*  */}
                            </div>
                        </div>
                        <div className="-my-2 sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    {riwayatkerja.length == 0 ? (
                                        <div className='block text-gray-700 text-sm font-bold ml-2 mb-2 tracking-tight font-sans'>
                                            Tidak ada Riwayat Kerja 
                                            <span className='ml-2 text-md' >📝</span>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="shadow border-b border-gray-200 sm:rounded-lg">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gray-50">
                                                        <tr>
                                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                <div className='flex items-center gap-x-2'>
                                                                    Perusahaan
                                                                </div>
                                                            </th>
                                                            <th scope="col" className="hidden md:block px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                <div className='flex items-center gap-x-2'>
                                                                    Posisi
                                                                </div>
                                                            </th>
                                                            <th scope="col" className='relative px-6 py-3'>
                                                                <span className='sr-only'>Edit</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200">
                                                        {riwayatkerja.map((riwayat) => (
                                                            <tr key={riwayat.id}>
                                                                <td className="px-6 py-4 text-sm whitespace-nowrap">
                                                                    {riwayat.perusahaan}
                                                                </td>
                                                                <td className="hidden md:block px-6 py-4 text-sm whitespace-nowrap">
                                                                    {riwayat.posisi}
                                                                </td>
                                                                <td className="w-1/6 text-sm whitespace-nowrap">
                                                                    <Menu>
                                                                        <Menu.Button as='button' className='' >
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                                            </svg>
                                                                        </Menu.Button>
                                                                        <div className='relative'>
                                                                            <Menu.Items as='div' className='absolute right-14 lg:right-52 md:right-32 bg-white w-52 border shadow-sm rounded-lg py-0.5 top-0'>
                                                                                <Menu.Item>
                                                                                    <button onClick={() => showHistory(riwayat)} className='w-full text-left py-2.5 px-4 block hover:bg-gray-50'>
                                                                                        <div className='flex items-center gap-x-2'>
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                                                            </svg>
                                                                                            <span>Show</span>
                                                                                        </div>
                                                                                    </button>
                                                                                </Menu.Item>
                                                                                <Menu.Item>
                                                                                    <Link as='a' className='py-2.5 px-4 block hover:bg-gray-50' href={route('riwayatkerja.edit', riwayat.id)}>
                                                                                        <div className='flex items-center gap-x-2'>
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                                                            </svg>
                                                                                            <span>Edit</span>
                                                                                        </div>
                                                                                    </Link>
                                                                                </Menu.Item>
                                                                                <Menu.Item>
                                                                                    <button onClick={() => deleteHistory(riwayat)} className='w-full text-left py-2.5 px-4 block hover:bg-gray-50'>
                                                                                        <div className='flex items-center gap-x-2'>
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                                                            </svg>
                                                                                            <span>Delete</span>
                                                                                        </div>
                                                                                    </button>
                                                                                </Menu.Item>
                                                                            </Menu.Items>
                                                                        </div>
                                                                    </Menu>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                    {riwayatkerja.length != 0 && (
                        <>
                            <ul className='flex items-center gap-x-1 mt-10'>
                                {
                                    links.map((item, index) => (
                                        <button key={index} disabled={item.url == null ? true : false} className={`${item.url == null ? 'text-gray-700 cursor-default mx-2 font-sans' : 'w-12 h-9 text-gray-800 rounded-lg flex items-center justify-center shadow-md font-sans bg-white'} ${item.active && 'bg-gray-50/50 text-gray-800 cursor-default font-sans'}`} href={item.url || ''} onClick={() => setParams({...params, page: new URL(item.url).searchParams.get('page')})}>{item.label}</button>    
                                    ))
                                }
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </Authenticated>
    );
}
