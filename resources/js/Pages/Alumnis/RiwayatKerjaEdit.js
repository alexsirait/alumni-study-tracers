import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Edit(props) {
    const { riwayatKerja } = props
    const { data, setData, put, errors } = useForm({
        perusahaan: riwayatKerja.perusahaan || '',
        posisi: riwayatKerja.posisi || '',
        durasi: riwayatKerja.durasi || '',
        pendapatan: riwayatKerja.pendapatan || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('riwayatkerja.update', riwayatKerja.id))
    }
    const handleChange = (e) => setData(e.target.name, e.target.value)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                        <span>Riwayat Kerja - Edit</span>
                    </h2>}
        >
            <Head title="Riwayat Kerja" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div>
                                <form onSubmit={updateHandler}>
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="perusahaan">
                                                    Perusahaan <span className='text-red-600 font-bold'>*</span>
                                                </label>
                                                <Input placeholder='e.g. PT Jaya Selalu' className='w-full' type='text' name='perusahaan' value={data.perusahaan} handleChange={handleChange}/>
                                                {errors.perusahaan && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                    <span>Required.</span>
                                                </div>}
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="posisi">
                                                    Posisi <span className='text-red-600 font-bold'>*</span>
                                                </label>
                                                <Input placeholder='e.g. Full Stack Developer' className='w-full' type='text' name='posisi' value={data.posisi} handleChange={handleChange}/>
                                                {errors.posisi && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                    <span>Required.</span>
                                                </div>}
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="durasi">
                                                    Durasi (Bulan/tahun) <span className='text-red-600 font-bold'>*</span>
                                                </label>
                                                <Input placeholder='e.g. 1 bulan / 1 tahun' className='w-full' type='text' name='durasi' value={data.durasi} handleChange={handleChange}/>
                                                {errors.durasi && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                    <span>Required.</span>
                                                </div>}
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="pendapatan">
                                                    Pendapatan <span className='text-red-600 font-bold'>*</span>
                                                </label>
                                                <Input placeholder='e.g. 2.000.000' className='w-full' type='text' name='pendapatan' value={data.pendapatan} handleChange={handleChange}/>
                                                {errors.pendapatan && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                    <span>Required.</span>
                                                </div>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 text-left sm:px-6">
                                        <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2' href={route('riwayatkerja.index')}>Cancel</Link>
                                        <Button>
                                            Update
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
