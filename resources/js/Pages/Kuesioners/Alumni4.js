import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni4(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        d1: dataKuesioner.d1 || '',
        d2: dataKuesioner.d2 || '',
        d3: dataKuesioner.d3 || '',
        d4: dataKuesioner.d4 || '',
        d5: dataKuesioner.d5 || '',
        d6: dataKuesioner.d6 || '',
        d7: dataKuesioner.d7 || '',
        d8: dataKuesioner.d8 || '',
        d9: dataKuesioner.d9 || '',
        d10: dataKuesioner.d10 || '',
        d11: dataKuesioner.d11 || '',
        d12: dataKuesioner.d12 || '',
        d13: dataKuesioner.d13 || '',
        d14: dataKuesioner.d14 || '',
        d15: dataKuesioner.d15 || '',
        d16: dataKuesioner.d16 || '',
        d17: dataKuesioner.d17 || '',
        d18: dataKuesioner.d18 || '',
        d19: dataKuesioner.d19 || '',
        d20: dataKuesioner.d20 || '',
        d21: dataKuesioner.d21 || '',
        d22: dataKuesioner.d22 || '',
        d23: dataKuesioner.d23 || '',
        d24: dataKuesioner.d24 || '',
        d25: dataKuesioner.d25 || '',
        d26: dataKuesioner.d26 || '',
        d27: dataKuesioner.d27 || '',
        d28: dataKuesioner.d28 || '',
        d29: dataKuesioner.d29 || '',
        d30: dataKuesioner.d30 || '',
        d31: dataKuesioner.d31 || '',
        d32: dataKuesioner.d32 || '',
        d33: dataKuesioner.d33 || '',
        d34: dataKuesioner.d34 || '',
        d35: dataKuesioner.d35 || '',
        d36: dataKuesioner.d36 || '',
        d37: dataKuesioner.d37 || '',
        d38: dataKuesioner.d38 || '',
        d39: dataKuesioner.d39 || '',
        d40: dataKuesioner.d40 || '',
        d41: dataKuesioner.d41 || '',
        d42: dataKuesioner.d42 || '',
        d43: dataKuesioner.d43 || '',
        d44: dataKuesioner.d44 || '',
        d45: dataKuesioner.d45 || '',
        d46: dataKuesioner.d46 || '',
        d47: dataKuesioner.d47 || '',
        d48: dataKuesioner.d48 || '',
        d49: dataKuesioner.d49 || '',
        d50: dataKuesioner.d50 || '',
        d51: dataKuesioner.d51 || '',
        d52: dataKuesioner.d52 || '',
        d53: dataKuesioner.d53 || '',
        d54: dataKuesioner.d54 || '',
        d55: dataKuesioner.d55 || '',
        d56: dataKuesioner.d56 || '',
        d57: dataKuesioner.d57 || '',
        d58: dataKuesioner.d58 || '',
        d59: dataKuesioner.d59 || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update4', dataKuesioner.id))
    }
    const handleChange = (e) => setData(e.target.name, e.target.value)
    const [show, setShow] = useState(false)
    const [showLainnya, setShowLainnya] = useState(false)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                        <span>Kuesioner</span>
                    </h2>}
        >
            <Head title="Kuesioner" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <div>
                            <form onSubmit={updateHandler}>
                                <div className="mb-6">
                                    <h1 className='block text-2xl mb-3 text-gray-700 tracking-tight font-bold'>Lulusan yang bekerja</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d1">
                                        Apakah Anda telah mendapatkan pekerjaan kurang dari 6 bulan / termasuk bekerja sebelum lulus?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.d1}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="d1" id='d110' defaultChecked={data.d1 === 'Ya' && true} /> <label htmlFor='d110' className='text-sm text-gray-700'>Ya</label>
                                        <input  className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="d1" id='d120' defaultChecked={data.d1 === 'Tidak' && true} /> <label htmlFor='d120' className='text-sm text-gray-700'>Tidak</label>
                                    </div>
                                    {errors.d1 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d2">
                                        Dalam berapa bulan Anda mendapatkan pekerjaan setelah lulus? (bulan) 
                                    </label>
                                    <Input placeholder={`e.g. 4`} className='w-full lg:w-96' type='text' name='d2' value={data.d2} handleChange={handleChange}/>
                                    {errors.d2 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Status/kedudukan dalam bekerja?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d3}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="buruh/karyawan/pegawai" name="d3" id='d310' defaultChecked={data.d3 === 'buruh/karyawan/pegawai' && true} /> <label htmlFor='d310' className='text-sm text-gray-700'>Buruh/karyawan/pegawai</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="pekerja bebas (tidak punya majikan tetap)" name="d3" id='d320' defaultChecked={data.d3 === 'pekerja bebas (tidak punya majikan tetap)' && true} /> <label htmlFor='d320' className='text-sm text-gray-700'>Pekerja bebas (tidak punya majikan tetap)</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="pekerja keluarga/pekerja tidak dibayar" name="d3" id='d330' defaultChecked={data.d3 === 'pekerja keluarga/pekerja tidak dibayar' && true} /> <label htmlFor='d330' className='text-sm text-gray-700'>Pekerja keluarga/pekerja tidak dibayar</label></div>
                                    </div>
                                    {errors.d3 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d4">
                                        Nama perusahaan tempat Anda bekerja? 
                                    </label>
                                    <Input placeholder={`e.g. PT Sirait Sejahtera`} className='w-full lg:w-96' type='text' name='d4' value={data.d4} handleChange={handleChange}/>
                                    {errors.d4 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d5">
                                        Dimana provinsi perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d5' onChange={handleChange} value={data.d5}>
                                        <option>-- Pilih Provinsi --</option>
                                        <option onClick={(e)=>setShow(true)}>Aceh</option> <option onClick={(e)=>setShow(true)}>Sumatera Utara</option> <option onClick={(e)=>setShow(true)}>Sumatera Barat</option> <option onClick={(e)=>setShow(true)}>Riau</option> <option onClick={(e)=>setShow(true)}>Jambi</option> <option onClick={(e)=>setShow(true)}>Sumatera Selatan</option> <option onClick={(e)=>setShow(true)}>Bengkulu</option> <option onClick={(e)=>setShow(true)}>Lampung</option> <option onClick={(e)=>setShow(true)}>Bangka Belitung</option>
                                        <option onClick={(e)=>setShow(true)}>Kepulauan Riau</option> <option onClick={(e)=>setShow(true)}>DKI Jakarta</option> <option onClick={(e)=>setShow(true)}>Jawa Barat</option> <option onClick={(e)=>setShow(true)}>Jawa Tengah</option> <option onClick={(e)=>setShow(true)}>DI Yogyakarta</option> <option onClick={(e)=>setShow(true)}>Jawa Timur</option> <option onClick={(e)=>setShow(true)}>Banten</option> <option onClick={(e)=>setShow(true)}>Bali</option> <option onClick={(e)=>setShow(true)}>Nusa Tenggara Barat</option> <option onClick={(e)=>setShow(true)}>Nusa Tenggara Timur</option>
                                        <option onClick={(e)=>setShow(true)}>Kalimantan Barat</option> <option onClick={(e)=>setShow(true)}>Kalimantan Tengah</option> <option onClick={(e)=>setShow(true)}>Kalimantan Selatan</option> <option onClick={(e)=>setShow(true)}>Kalimantan Timur</option> <option onClick={(e)=>setShow(true)}>Kalimantan Utara</option> <option onClick={(e)=>setShow(true)}>Sulawesi Utara</option> <option onClick={(e)=>setShow(true)}>Sulawesi Tengah</option> <option onClick={(e)=>setShow(true)}>Sulawesi Selatan</option> <option onClick={(e)=>setShow(true)}>Sulawesi Tenggara</option>
                                        <option onClick={(e)=>setShow(true)}>Gorontalo</option> <option onClick={(e)=>setShow(true)}>Sulawesi Barat</option> <option onClick={(e)=>setShow(true)}>Maluku</option> <option onClick={(e)=>setShow(true)}>Maluku Utara</option> <option onClick={(e)=>setShow(true)}>Papua</option> <option onClick={(e)=>setShow(true)}>Papua Barat</option>
                                    </select>
                                    {errors.d5 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                {show && data.d5 == 'Aceh' || data.d5 == 'Aceh' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Banda Aceh</option>
                                        <option>Langsa</option>
                                        <option>Sabang</option>
                                        <option>Subulussalam</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Sumatera Utara' || data.d5 == 'Sumatera Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Binjai</option>
                                        <option>Gunungsitoli</option>
                                        <option>Medan</option>
                                        <option>Padang Sidempuan</option>
                                        <option>Pematangsiantar</option>
                                        <option>Sibolga</option>
                                        <option>Tanjungbalai</option>
                                        <option>Tebing Tinggi</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Sumatera Barat' || data.d5 == 'Sumatera Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bukittinggi</option>
                                        <option>Padang</option>
                                        <option>Padang Panjang</option>
                                        <option>Pariaman</option>
                                        <option>Payakumbuh</option>
                                        <option>Sawahlunto</option>
                                        <option>Solok</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Riau' || data.d5 == 'Riau' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Dumai</option>
                                        <option>Pekanbaru</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Jambi' || data.d5 == 'Jambi' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Sungai Penuh</option>
                                        <option>Jambi</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Sumatera Selatan' || data.d5 == 'Sumatera Selatan' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Lubuklinggau</option>
                                        <option>Pagar Alam</option>
                                        <option>Palembang</option>
                                        <option>Prabumulih</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''} 
                                {show && data.d5 == 'Bengkulu' || data.d5 == 'Bengkulu' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bengkulu</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Lampung' || data.d5 == 'Lampung' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bandar Lampung</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Bangka Belitung' || data.d5 == 'Bangka Belitung' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Pangkalpinang</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Kepulauan Riau' || data.d5 == 'Kepulauan Riau' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Batam</option>
                                        <option>Tanjungpinang</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'DKI Jakarta' || data.d5 == 'DKI Jakarta' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Jakarta Barat</option>
                                        <option>Jakarta Pusat</option>
                                        <option>Jakarta Selatan</option>
                                        <option>Jakarta Timur</option>
                                        <option>Jakarta Utara</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Jawa Barat' || data.d5 == 'Jawa Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bandung</option>
                                        <option>Bekasi</option>
                                        <option>Bogor</option>
                                        <option>Cimahi</option>
                                        <option>Cirebon</option>
                                        <option>Sukabumi</option>
                                        <option>Tasikmalaya</option>
                                        <option>Banjar</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Jawa Tengah' || data.d5 == 'Jawa Tengah' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Magelang</option>
                                        <option>Pekalongan</option>
                                        <option>Salatiga</option>
                                        <option>Semarang</option>
                                        <option>Surakarta</option>
                                        <option>Tegal</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'DI Yogyakarta' || data.d5 == 'DI Yogyakarta' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Yogyakarta</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Jawa Timur' || data.d5 == 'Jawa Timur' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Batu</option>
                                        <option>Blitar</option>
                                        <option>Kediri</option>
                                        <option>Madiun</option>
                                        <option>Malang</option>
                                        <option>Mojokerto</option>
                                        <option>Pasuruan</option>
                                        <option>Probolinggo</option>
                                        <option>Surabaya</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Banten' || data.d5 == 'Banten' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Cilegon</option>
                                        <option>Serang</option>
                                        <option>Tangerang Selatan</option>
                                        <option>Tangerang</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Bali' || data.d5 == 'Bali' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Denpasar</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Nusa Tenggara Barat' || data.d5 == 'Nusa Tenggara Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bima</option>
                                        <option>Mataram</option>
                                        <option>Kupang</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Nusa Tenggara Timur' || data.d5 == 'Nusa Tenggara Timur' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Kupang</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Kalimantan Barat' || data.d5 == 'Kalimantan Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Pontianak</option>
                                        <option>Singkawang</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Kalimantan Selatan' || data.d5 == 'Kalimantan Selatan' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Banjarbaru</option>
                                        <option>Banjarmasin</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Kalimantan Timur' || data.d5 == 'Kalimantan Timur' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Balikpapan</option>
                                        <option>Bontang</option>
                                        <option>Samarinda</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Kalimantan Utara' || data.d5 == 'Kalimantan Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Tarakan</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Sulawesi Utara' || data.d5 == 'Sulawesi Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bitung</option>
                                        <option>Kotamobagu</option>
                                        <option>Manado</option>
                                        <option>Tomohon</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Sulawesi Tengah' || data.d5 == 'Sulawesi Tengah' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Palu</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Sulawesi Selatan' || data.d5 == 'Sulawesi Selatan' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Makassar</option>
                                        <option>Palopo</option>
                                        <option>Parepare</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Sulawesi Tenggara' || data.d5 == 'Sulawesi Tenggara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Baubau</option>
                                        <option>Kendari</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Gorontalo' || data.d5 == 'Gorontalo' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Gorontalo</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Sulawesi Barat' || data.d5 == 'Sulawesi Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Mamuju</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Maluku' || data.d5 == 'Maluku' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Ambon</option>
                                        <option>Tual</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Maluku Utara' || data.d5 == 'Maluku Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Ternate</option>
                                        <option>Tidore Kepulauan</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Papua' || data.d5 == 'Papua' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Jayapura</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.d5 == 'Papua Barat' || data.d5 == 'Papua Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Sorong</option>
                                    </select>
                                    {errors.d6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d7">
                                        Alamat perusahaan tempat anda bekerja?
                                    </label>
                                    <textarea placeholder='e.g. Kav. Sei Tering Blok B2 No.27' className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-gray-400/50' type='text' name='d7' value={data.d7} onChange={handleChange}/>
                                    {errors.d7 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d8">
                                        Email perusahaan tempat Anda bekerja?
                                    </label>
                                    <Input placeholder={`e.g. maju@siraitsejahtera.com`} className='w-full lg:w-96' type='text' name='d8' value={data.d8} handleChange={handleChange}/>
                                    {errors.d8 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d9">
                                        Apa lapangan usaha/bidang pekerjaan di tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d9' onChange={handleChange} value={data.d9}>
                                        <option>-- Pilih KBLI --</option>
                                        <option>Agrikultur</option> <option>Pertambangan dan Penggalian</option> <option>Manufaktur</option> <option>Konstruksi</option> 
                                        <option>Perdagangan</option> <option>Restoran</option> <option>Perhotelan</option> <option>Transportasi</option> <option>Logistik</option> <option>Komunikasi</option>
                                        <option>Keuangan dan Asuransi</option> <option>Jasa</option> <option>Pendidikan</option> <option>Pariwisata</option> <option onClick={(e)=>setShow(true)}>Lainnya</option>
                                    </select>
                                    {errors.d9 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                    {show && data.d9 == "Lainnya" || data.d9 == 'Lainnya' ? (
                                        <div>
                                            <Input placeholder={`lainnya . . .`} className='w-full lg:w-96' type='text' name='d10' value={data.d10} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.d10}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d11">
                                        Apa jenis/bidang pekerjaan saat ini?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d11' onChange={handleChange} value={data.d11}>
                                        <option>-- Pilih Jenis/Bidang --</option>
                                        <option>Teknik Informatika</option> <option>Teknik Geomatika</option> <option>Animasi</option> <option>Teknik Multimedia dan Jaringan</option> <option>Rekayasa Keamanan Siber</option> <option>Rekayasa Perangkat Lunak</option>
                                        <option>Akuntansi</option> <option>Akuntansi Manajerial</option> <option>Administrasi Bisnis Terapan</option> <option>Logistik Perdagangan Internasional</option> <option>Teknik Elektronika Manufaktur</option> <option>Teknik Elektronika</option>
                                        <option>Teknik Instrumentasi</option> <option>Teknik Mekatronika</option> <option>Teknologi Rekayasa Pembangkit Energi</option> <option>Teknik Robotika</option> <option>Teknik Mesin</option> <option>Teknik Perawatan Pesawat Udara</option>
                                        <option>Teknik Perencanaan dan Konstruksi Kapal</option>
                                    </select>
                                    {errors.d11 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d12">
                                        Berapa jumlah karyawan/buruh yang dibayar di instansi/lembaga/perusahaan/tempat Anda bekerja?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d12}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Kurang dari 20 orang" name="d12" id='d1210' defaultChecked={data.d12 === 'Kurang dari 20 orang' && true} /> <label htmlFor='d1210' className='text-sm text-gray-700'>Kurang dari 20 orang</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="20 s.d 99 orang" name="d12" id='d1220' defaultChecked={data.d12 === '20 s.d 99 orang' && true} /> <label htmlFor='d1220' className='text-sm text-gray-700'>20 s.d 99 orang</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lebih dari 100 orang" name="d12" id='d1230' defaultChecked={data.d12 === 'Lebih dari 100 orang' && true} /> <label htmlFor='d1230' className='text-sm text-gray-700'>Lebih dari 100 orang</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak tahu" name="d12" id='d1240' defaultChecked={data.d12 === 'Tidak tahu' && true} /> <label htmlFor='d1240' className='text-sm text-gray-700'>Tidak tahu</label></div>
                                    </div>
                                    {errors.d12 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d13">
                                        Apa jenis perusahaan/instansi/institusi tempat anda bekerja sekarang?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d13}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Instansi pemerintah" name="d13" id='d1310' defaultChecked={data.d13 === 'Instansi pemerintah' && true} /> <label htmlFor='d1310' className='text-sm text-gray-700'>Instansi pemerintah</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="BUMN/BUMD" name="d13" id='d1320' defaultChecked={data.d13 === 'BUMN/BUMD' && true} /> <label htmlFor='d1320' className='text-sm text-gray-700'>BUMN/BUMD</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Institusi/Organisasi Multilateral" name="d13" id='d1330' defaultChecked={data.d13 === 'Institusi/Organisasi Multilateral' && true} /> <label htmlFor='d1330' className='text-sm text-gray-700'>Institusi/Organisasi Multilateral</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Organisasi non-profit/Lembaga Swadaya Masyarakat" name="d13" id='d1340' defaultChecked={data.d13 === 'Organisasi non-profit/Lembaga Swadaya Masyarakat' && true} /> <label htmlFor='d1340' className='text-sm text-gray-700'>Organisasi non-profit/Lembaga Swadaya Masyarakat</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Perusahaan swasta" name="d13" id='d1350' defaultChecked={data.d13 === 'Perusahaan swasta' && true} /> <label htmlFor='d1350' className='text-sm text-gray-700'>Perusahaan swasta</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Wiraswasta/perusahaan sendiri" name="d13" id='d1360' defaultChecked={data.d13 === 'Wiraswasta/perusahaan sendiri' && true} /> <label htmlFor='d1360' className='text-sm text-gray-700'>Wiraswasta/perusahaan sendiri</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya, tuliskan" name="d13" id='d1370' defaultChecked={data.d13 === 'Lainnya, tuliskan' && true} /> <label htmlFor='d1370' className='text-sm text-gray-700'>Lainnya, tuliskan</label></div>
                                    </div>
                                    {errors.d13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                    {show && data.d13 == "Lainnya, tuliskan" || data.d13 == 'Lainnya, tuliskan' ? (
                                        <div>
                                            <Input placeholder={`lainnya . . .`} className='w-full lg:w-96' type='text' name='d14' value={data.d14} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.d14}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d15">
                                        Apa tingkat tempat kerja Anda?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d15' onChange={handleChange} value={data.d15}>
                                        <option>-- Pilih Tingkat Tempat Kerja --</option>
                                        <option>Lokal/Wilayah/Wiraswasta tidak berbadan hukum</option>
                                        <option>Nasional/Wiraswasta berbadan hukum</option>
                                        <option>Multinasional/Internasional</option>
                                    </select>
                                    {errors.d15 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d16">
                                        Kapan anda mulai bekerja di pekerjaan sekarang?
                                    </label>
                                    <Input placeholder={`e.g. Maret 2020`} className='w-full lg:w-96' type='text' name='d16' value={data.d16} handleChange={handleChange}/>
                                    {errors.d16 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d17">
                                        Level pekerjaan?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d17}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Owner" name="d17" id='d1710' defaultChecked={data.d17 === 'Owner' && true} /> <label htmlFor='d1710' className='text-sm text-gray-700'>Owner</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Direktur" name="d17" id='d1720' defaultChecked={data.d17 === 'Direktur' && true} /> <label htmlFor='d1720' className='text-sm text-gray-700'>Direktur</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Manager" name="d17" id='d1730' defaultChecked={data.d17 === 'Manager' && true} /> <label htmlFor='d1730' className='text-sm text-gray-700'>Manager</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Supervisor" name="d17" id='d1740' defaultChecked={data.d17 === 'Supervisor' && true} /> <label htmlFor='d1740' className='text-sm text-gray-700'>Supervisor</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Staf (Teknisi/Officer)" name="d17" id='d1750' defaultChecked={data.d17 === 'Staf (Teknisi/Officer)' && true} /> <label htmlFor='d1750' className='text-sm text-gray-700'>Staf (Teknisi/Officer)</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Entry" name="d17" id='d1760' defaultChecked={data.d17 === 'Entry' && true} /> <label htmlFor='d1760' className='text-sm text-gray-700'>Entry</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya" name="d17" id='d1770' defaultChecked={data.d17 === 'Lainnya' && true} onClick={(e)=>setShow(true)}/> <label htmlFor='d1770' className='text-sm text-gray-700'>Lainnya</label></div>
                                    </div>
                                    {errors.d17 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                    {show && data.d17 == "Lainnya" || data.d17 == 'Lainnya' ? (
                                        <div>
                                            <Input placeholder={`lainnya . . .`} className='w-full lg:w-96' type='text' name='d18' value={data.d18} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.d18}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d19">
                                        Seberapa erat hubungan bidang studi dengan pekerjaan Anda?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d19}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sangat Erat" name="d19" id='d1910' defaultChecked={data.d19 === 'Sangat Erat' && true} /> <label htmlFor='d1910' className='text-sm text-gray-700'>Sangat Erat</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Erat" name="d19" id='d1920' defaultChecked={data.d19 === 'Erat' && true} /> <label htmlFor='d1920' className='text-sm text-gray-700'>Erat</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup Erat" name="d19" id='d1930' defaultChecked={data.d19 === 'Cukup Erat' && true} /> <label htmlFor='d1930' className='text-sm text-gray-700'>Cukup Erat</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Kurang Erat" name="d19" id='d1940' defaultChecked={data.d19 === 'Kurang Erat' && true} /> <label htmlFor='d1940' className='text-sm text-gray-700'>Kurang Erat</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak Sama Sekali" name="d19" id='d1950' defaultChecked={data.d19 === 'Tidak Sama Sekali' && true} /> <label htmlFor='d1950' className='text-sm text-gray-700'>Tidak Sama Sekali</label></div>
                                    </div>
                                    {errors.d19 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d20">
                                        Kapan anda mulai mencari pekerjaan? Mohon pekerjaan sambilan tidak dimasukkan
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d20}>
                                        <div className='flex items-center'><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Kira kira sebelum lulus" name="d20" id='d2010' defaultChecked={data.d20 === 'Kira kira sebelum lulus' && true} /> <label htmlFor='d2010' className='ml-1 text-sm text-gray-700'> Kira kira</label><Input placeholder={`e.g 3`} className='lg:w-24 ml-2' type='text' name='d21' value={data.d21} handleChange={handleChange}/> <label htmlFor='d2010' className='ml-1 text-sm text-gray-700'> bulan sebelum lulus</label></div>
                                        <div className='flex items-center'><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Kira kira sesubah lulus" name="d20" id='d2020' defaultChecked={data.d20 === 'Kira kira sesubah lulus' && true} /> <label htmlFor='d2020' className='ml-1 text-sm text-gray-700'> Kira kira</label><Input placeholder={`e.g 5`} className='lg:w-24 ml-2' type='text' name='d22' value={data.d22} handleChange={handleChange}/> <label htmlFor='d2010' className='ml-1 text-sm text-gray-700'> bulan sesudah lulus</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Saya tidak mencari kerja" name="d20" id='d2030' defaultChecked={data.d20 === 'Saya tidak mencari kerja' && true} /> <label htmlFor='d2030' className='text-sm text-gray-700'> Saya tidak mencari kerja</label></div>
                                    </div>
                                    {errors.d20 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d23">
                                        Tingkat pendidikan yang paling tepat/sesuai untuk pekerjaan Anda
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d23}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Setingkat Lebih Tinggi" name="d23" id='d2310' defaultChecked={data.d23 === 'Setingkat Lebih Tinggi' && true} /> <label htmlFor='d2310' className='text-sm text-gray-700'>Setingkat Lebih Tinggi</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tingkat yang Sama" name="d23" id='d2320' defaultChecked={data.d23 === 'Tingkat yang Sama' && true} /> <label htmlFor='d2320' className='text-sm text-gray-700'>Tingkat yang Sama</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Setingkat Lebih Rendah" name="d23" id='d2330' defaultChecked={data.d23 === 'Setingkat Lebih Rendah' && true} /> <label htmlFor='d2330' className='text-sm text-gray-700'>Setingkat Lebih Rendah</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak Perlu Pendidikan Tinggi" name="d23" id='d2340' defaultChecked={data.d23 === 'Tidak Perlu Pendidikan Tinggi' && true} /> <label htmlFor='d2340' className='text-sm text-gray-700'>Tidak Perlu Pendidikan Tinggi</label></div>
                                    </div>
                                    {errors.d23 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d24">
                                        Berapa gaji/upah Anda dalam sebulan?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d24}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="diatas 20.000.000" name="d24" id='d2410' defaultChecked={data.d24 === 'diatas 20.000.000' && true} /> <label htmlFor='d2410' className='text-sm text-gray-700'>diatas 20.000.000</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="10.000.000 - 19.999.999" name="d24" id='d2420' defaultChecked={data.d24 === '10.000.000 - 19.999.999' && true} /> <label htmlFor='d2420' className='text-sm text-gray-700'>10.000.000 - 19.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="9.000.000 - 9.999.999" name="d24" id='d2430' defaultChecked={data.d24 === '9.000.000 - 9.999.999' && true} /> <label htmlFor='d2430' className='text-sm text-gray-700'>9.000.000 - 9.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="8.000.000 - 8.999.999" name="d24" id='d2440' defaultChecked={data.d24 === '8.000.000 - 8.999.999' && true} /> <label htmlFor='d2440' className='text-sm text-gray-700'>8.000.000 - 8.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="7.000.000 - 7.999.999" name="d24" id='d2450' defaultChecked={data.d24 === '7.000.000 - 7.999.999' && true} /> <label htmlFor='d2450' className='text-sm text-gray-700'>7.000.000 - 7.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="6.000.000 - 6.999.999" name="d24" id='d2460' defaultChecked={data.d24 === '6.000.000 - 6.999.999' && true} /> <label htmlFor='d2460' className='text-sm text-gray-700'>6.000.000 - 6.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5.000.000 - 5.999.999" name="d24" id='d2470' defaultChecked={data.d24 === '5.000.000 - 5.999.999' && true} /> <label htmlFor='d2470' className='text-sm text-gray-700'>5.000.000 - 5.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4.000.000 - 4.999.999" name="d24" id='d2480' defaultChecked={data.d24 === '4.000.000 - 4.999.999' && true} /> <label htmlFor='d2480' className='text-sm text-gray-700'>4.000.000 - 4.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3.000.000 - 3.999.999" name="d24" id='d2490' defaultChecked={data.d24 === '3.000.000 - 3.999.999' && true} /> <label htmlFor='d2490' className='text-sm text-gray-700'>3.000.000 - 3.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2.000.000 - 2.999.999" name="d24" id='d24100' defaultChecked={data.d24 === '2.000.000 - 2.999.999' && true} /> <label htmlFor='d24100' className='text-sm text-gray-700'>2.000.000 - 2.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1.000.000 - 1.999.999" name="d24" id='d24110' defaultChecked={data.d24 === '1.000.000 - 1.999.999' && true} /> <label htmlFor='d24110' className='text-sm text-gray-700'>1.000.000 - 1.999.999</label></div>
                                    </div>
                                    {errors.d24 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d25">
                                        Dimana lokasi instansi/lembaga/perusahaan/tempat Anda bekerja?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d25}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Dalam Negeri" name="d25" id='d2510' defaultChecked={data.d25 === 'Dalam Negeri' && true} /> <label htmlFor='d2510' className='text-sm text-gray-700'>Dalam Negeri</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Luar Negeri" name="d25" id='d2520' defaultChecked={data.d25 === 'Luar Negeri' && true} /> <label htmlFor='d2520' className='text-sm text-gray-700'>Luar Negeri</label></div>
                                    </div>
                                    {errors.d25 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d26">
                                        Berapa kali Anda pernah bekerja (termasuk pekerjaan sekarang) sejak Anda lulus dari satuan pendidikan?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d26}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Satu kali" name="d26" id='d2610' defaultChecked={data.d26 === 'Satu kali' && true} /> <label htmlFor='d2610' className='text-sm text-gray-700'>Satu kali</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Dua kali" name="d26" id='d2620' defaultChecked={data.d26 === 'Dua kali' && true} /> <label htmlFor='d2620' className='text-sm text-gray-700'>Dua kali</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tiga kali" name="d26" id='d2630' defaultChecked={data.d26 === 'Tiga kali' && true} /> <label htmlFor='d2630' className='text-sm text-gray-700'>Tiga kali</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lebih dari 3 kali" name="d26" id='d2640' defaultChecked={data.d26 === 'Lebih dari 3 kali' && true} /> <label htmlFor='d2640' className='text-sm text-gray-700'>Lebih dari 3 kali</label></div>
                                    </div>
                                    {errors.d26 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="d27">
                                        Bagaimana anda mencari pekerjaan tersebut? Jawaban bisa lebih dari satu
                                    </label>
                                    <div className='block items-center gap-x-4'>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d27" id='d2710' onChange={e => setData('d27', e.target.checked)} defaultChecked={data.d27 == '1' && true}/> <label htmlFor='d2710' className='text-sm text-gray-700'>Melalui iklan di koran/majalah, brosur</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d28" id='d2810' onChange={e => setData('d28', e.target.checked)} defaultChecked={data.d28 == '1' && true}/> <label htmlFor='d2810' className='text-sm text-gray-700'>Melamar ke perusahaan tanpa mengetahui lowongan yang ada</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d29" id='d2910' onChange={e => setData('d29', e.target.checked)} defaultChecked={data.d29 == '1' && true}/> <label htmlFor='d2910' className='text-sm text-gray-700'>Pergi kebursa/Pameran kerja</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d30" id='d3010' onChange={e => setData('d30', e.target.checked)} defaultChecked={data.d30 == '1' && true}/> <label htmlFor='d3010' className='text-sm text-gray-700'>Mencari lewat internet/iklanonline/milis</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d31" id='d3110' onChange={e => setData('d31', e.target.checked)} defaultChecked={data.d31 == '1' && true}/> <label htmlFor='d3110' className='text-sm text-gray-700'>Dihubungi oleh perusahaan</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d32" id='d3210' onChange={e => setData('d32', e.target.checked)} defaultChecked={data.d32 == '1' && true}/> <label htmlFor='d3210' className='text-sm text-gray-700'>Menghubungi Kemenakertrans</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d33" id='d3310' onChange={e => setData('d33', e.target.checked)} defaultChecked={data.d33 == '1' && true}/> <label htmlFor='d3310' className='text-sm text-gray-700'>Menghubungi agen tenaga kerja komersial/swasta</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d34" id='d3410' onChange={e => setData('d34', e.target.checked)} defaultChecked={data.d34 == '1' && true}/> <label htmlFor='d3410' className='text-sm text-gray-700'>Memperoleh informasi dari pusat/kantor pengembangan karir fakultas/universitas</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d35" id='d3510' onChange={e => setData('d35', e.target.checked)} defaultChecked={data.d35 == '1' && true}/> <label htmlFor='d3510' className='text-sm text-gray-700'>Menghubungi kantor kemahasiswaan/hubungan alumni</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d36" id='d3610' onChange={e => setData('d36', e.target.checked)} defaultChecked={data.d36 == '1' && true}/> <label htmlFor='d3610' className='text-sm text-gray-700'>Membangun jejaring(network) sejak masih kuliah</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d37" id='d3710' onChange={e => setData('d37', e.target.checked)} defaultChecked={data.d37 == '1' && true}/> <label htmlFor='d3710' className='text-sm text-gray-700'>Melalui relasi (misalnya dosen, orang tua, saudara, teman, dll.)</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d38" id='d3810' onChange={e => setData('d38', e.target.checked)} defaultChecked={data.d38 == '1' && true}/> <label htmlFor='d3810' className='text-sm text-gray-700'>Membangun bisnis sendiri</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d39" id='d3910' onChange={e => setData('d39', e.target.checked)} defaultChecked={data.d39 == '1' && true}/> <label htmlFor='d3910' className='text-sm text-gray-700'>Melalui penempatan kerja atau magang</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d40" id='d4010' onChange={e => setData('d40', e.target.checked)} defaultChecked={data.d40 == '1' && true}/> <label htmlFor='d4010' className='text-sm text-gray-700'>Bekerja di tempat yang sama dengan tempat kerja semasa kuliah</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d41" id='d4110' onChange={e => setData('d41', e.target.checked)} defaultChecked={data.d41 == '1' && true} onClick={() => setS41wLainnya(true)} /> <label htmlFor='d4110' className='text-sm text-gray-700'>Lainnya</label></div>
                                    </div>
                                    {showLainnya && data.d41 == "1" || data.d41 == '1' ? (
                                        <Input placeholder={`lainnya . . .`} className='w-full lg:w-96' type='text' name='d42' value={data.d42} handleChange={handleChange}/>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Berapa perusahan/instansi/institusi yang sudah Anda lamar (lewat surat atau e-mail) sebelum anda memperoleh pekerjaan pertama? 
                                    </label>
                                    <div className='flex items-center'>
                                        <Input placeholder={`e.g. 8`} className='w-full lg:w-24' type='text' name='d43' value={data.d43} handleChange={handleChange}/>
                                        <label className="flex items-center text-gray-700 text-sm font-bold mb-2 ml-2 text-md tracking-tight font-sans"> perusahaan/instansi/institusi</label>
                                    </div>
                                    {errors.d43 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Berapa banyak perusahaan/instansi/institusi yang meespons lamaran anda? 
                                    </label>
                                    <div className='flex items-center'>
                                        <Input placeholder={`e.g. 4`} className='w-full lg:w-24' type='text' name='d44' value={data.d44} handleChange={handleChange}/>
                                        <label className="flex items-center text-gray-700 text-sm font-bold mb-2 ml-2 text-md tracking-tight font-sans"> perusahaan/instansi/institusi</label>
                                    </div>
                                    {errors.d44 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Berapa banyak perusahaan/instansi/institusi yang mengundang anda untuk wawancara? 
                                    </label>
                                    <div className='flex items-center'>
                                        <Input placeholder={`e.g. 2`} className='w-full lg:w-24' type='text' name='d45' value={data.d45} handleChange={handleChange}/>
                                        <label className="flex items-center text-gray-700 text-sm font-bold mb-2 ml-2 text-md tracking-tight font-sans"> perusahaan/instansi/institusi</label>
                                    </div>
                                    {errors.d45 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-1">
                                        Jika menurut Anda pekerjaan anda saat ini tidak sesuai dengan : pendidikan anda, mengapa anda mengambilnya? jawaban bisa lebih dari satu
                                    </label>
                                    <div className='block items-center gap-x-4'>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d46" id='d4610' onChange={e => setData('d46', e.target.checked)} defaultChecked={data.d46 == '1' && true}/> <label htmlFor='d4610' className='text-sm text-gray-700'>Pertanyaan tidak sesuai; pekerjaan saya sekarang sudah sesuai dengan pendidikan saya.</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d47" id='d4710' onChange={e => setData('d47', e.target.checked)} defaultChecked={data.d47 == '1' && true}/> <label htmlFor='d4710' className='text-sm text-gray-700'>Saya belum mendapatkan pekerjaan yang lebih sesuai.</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d48" id='d4810' onChange={e => setData('d48', e.target.checked)} defaultChecked={data.d48 == '1' && true}/> <label htmlFor='d4810' className='text-sm text-gray-700'>Di pekerjaan ini saya memperoleh prospek karir yang baik.</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d49" id='d4910' onChange={e => setData('d49', e.target.checked)} defaultChecked={data.d49 == '1' && true}/> <label htmlFor='d4910' className='text-sm text-gray-700'>Saya lebih suka bekerja di area pekerjaan yang tidak ada hubungannya dengan pendidikan saya.</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d50" id='d5010' onChange={e => setData('d50', e.target.checked)} defaultChecked={data.d50 == '1' && true}/> <label htmlFor='d5010' className='text-sm text-gray-700'>Saya dipromosikan ke posisi yang kurang berhubungan dengan pendidikan saya dibanding posisi sebelumnya.</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d51" id='d5110' onChange={e => setData('d51', e.target.checked)} defaultChecked={data.d51 == '1' && true}/> <label htmlFor='d5110' className='text-sm text-gray-700'>Saya dapat memperoleh pendapatan yang lebih tinggi di pekerjaan ini.</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d52" id='d5210' onChange={e => setData('d52', e.target.checked)} defaultChecked={data.d52 == '1' && true}/> <label htmlFor='d5210' className='text-sm text-gray-700'>Pekerjaan saya saat ini lebih aman/terjamin/secure</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d53" id='d5310' onChange={e => setData('d53', e.target.checked)} defaultChecked={data.d53 == '1' && true}/> <label htmlFor='d5310' className='text-sm text-gray-700'>Pekerjaan saya saat ini lebih menarik</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d54" id='d5410' onChange={e => setData('d54', e.target.checked)} defaultChecked={data.d54 == '1' && true}/> <label htmlFor='d5410' className='text-sm text-gray-700'>Pekerjaan saya saat ini lebih memungkinkan saya mengambil pekerjaan tambahan/jadwal yang flexsibel, dll</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d55" id='d5510' onChange={e => setData('d55', e.target.checked)} defaultChecked={data.d55 == '1' && true}/> <label htmlFor='d5510' className='text-sm text-gray-700'>Pekerjaan saya saat ini lokasinya lebih dekat dari rumah saya.</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d56" id='d5610' onChange={e => setData('d56', e.target.checked)} defaultChecked={data.d56 == '1' && true}/> <label htmlFor='d5610' className='text-sm text-gray-700'>Pekerjaan saya saat ini dapat lebih menjamin kebutuhan keluarga saya.</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d57" id='d5710' onChange={e => setData('d57', e.target.checked)} defaultChecked={data.d57 == '1' && true}/> <label htmlFor='d5710' className='text-sm text-gray-700'>Pada awal meniti karir ini, saya harus menerima pekerjaan yang tidak berhubungan dengan pendidikan saya</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="d58" id='d5810' onChange={e => setData('d58', e.target.checked)} defaultChecked={data.d58 == '1' && true} onClick={() => setShowLainnya(true)} /> <label htmlFor='d5810' className='text-sm text-gray-700'>Lainnya</label></div>
                                    </div>
                                    {showLainnya && data.d58 == "1" || data.d58 == '1' ? (
                                        <Input placeholder={`lainnya . . .`} className='w-full lg:w-96' type='text' name='d59' value={data.d59} handleChange={handleChange}/>)
                                    : ''}
                                </div>
                                <hr />
                                <div className='flex items-center gap-x-4 mt-5'>
                                    <div className='w-1/2'>
                                        <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit2', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className='w-1/2'>
                                        <div className="grid justify-end">
                                            <Button>
                                                <span>Save</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </Button>
                                        </div>
                                    </div>
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
