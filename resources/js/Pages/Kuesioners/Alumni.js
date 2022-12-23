import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni(props) {
    const { auth } = usePage().props
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        a1: dataKuesioner.a1 || auth.user.name || '',
        a2: dataKuesioner.a2 || '',
        a3: dataKuesioner.a3 || '',
        a4: dataKuesioner.a4 || '',
        a5: dataKuesioner.a5 || '',
        a6: dataKuesioner.a6 || '',
        a7: dataKuesioner.a7 || auth.user.identifier || '',
        a8: dataKuesioner.a8 || '',
        a9: dataKuesioner.a9 || auth.user.prodi || '',
        a10: dataKuesioner.a10 || '',
        a11: dataKuesioner.a11 || auth.user.kelamin || '',
        a12: dataKuesioner.a12 || '',
        a13: dataKuesioner.a13 || '',
        a14: dataKuesioner.a14 || '',
        a15: dataKuesioner.a15 || auth.user.email || '',
        a16: dataKuesioner.a16 || auth.user.telp || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update', dataKuesioner.id))
    }
    const handleChange = (e) => setData(e.target.name, e.target.value)
    const [show, setShow] = useState(false)
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
                                    <h1 className='block text-2xl mb-3 text-gray-700 tracking-tight font-bold'>Data umum responden</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a1">
                                        Nama
                                    </label>
                                    <Input placeholder={`e.g. Alex Sirait`} className='w-full lg:w-96' type='text' name='a1' value={data.a1} handleChange={handleChange}/>
                                    {errors.a1 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a2">
                                        Nomor Induk Kependudukan (NIK)
                                    </label>
                                    <Input placeholder={`e.g. 1234567891011121`} className='w-full lg:w-96' type='text' name='a2' value={data.a2} handleChange={handleChange}/>
                                    {errors.a2 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Numeric.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a3">
                                        NPWP
                                    </label>
                                    <Input placeholder={`e.g. 123456789101112`} className='w-full lg:w-96' type='text' name='a3' value={data.a3} handleChange={handleChange}/>
                                    {errors.a3 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Numeric.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a4">
                                        Nomor Rekening
                                    </label>
                                    <Input placeholder={`e.g. 7632-01-007520-53-0`} className='w-full lg:w-96' type='text' name='a4' value={data.a4} handleChange={handleChange}/>
                                    {errors.a4 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a5">
                                        Nama Pemilik Rekening
                                    </label>
                                    <Input placeholder={`e.g. Bobi Sirait`} className='w-full lg:w-96' type='text' name='a5' value={data.a5} handleChange={handleChange}/>
                                    {errors.a5 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a6">
                                        Nama Bank
                                    </label>
                                    <Input placeholder={`e.g. BNI`} className='w-full lg:w-96' type='text' name='a6' value={data.a6} handleChange={handleChange}/>
                                    {errors.a6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a7">
                                        Nomor Induk Mahasiswa (NIM)
                                    </label>
                                    <input className='w-full lg:w-96 bg-gray-100/50 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' disabled type='text' name='a7' value={data.a7} onChange={handleChange}/>
                                    {errors.a7 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Numeric.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a8">
                                        Tahun lulus
                                    </label>
                                    <Input placeholder={`e.g. 2020`} className='w-full lg:w-96' type='text' name='a8' value={data.a8} handleChange={handleChange}/>
                                    {errors.a8 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Numeric.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Prodi
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Prodi --</option>
                                        <option>Teknik Informatika</option> <option>Teknik Geomatika</option> <option>Animasi</option> <option>Teknik Multimedia dan Jaringan</option> <option>Rekayasa Keamanan Siber</option> <option>Rekayasa Perangkat Lunak</option>
                                        <option>Akuntansi</option> <option>Akuntansi Manajerial</option> <option>Administrasi Bisnis Terapan</option> <option>Logistik Perdagangan Internasional</option> <option>Teknik Elektronika Manufaktur</option> <option>Teknik Elektronika</option>
                                        <option>Teknik Instrumentasi</option> <option>Teknik Mekatronika</option> <option>Teknologi Rekayasa Pembangkit Energi</option> <option>Teknik Robotika</option> <option>Teknik Mesin</option> <option>Teknik Perawatan Pesawat Udara</option>
                                        <option>Teknik Perencanaan dan Konstruksi Kapal</option>
                                    </select>
                                    {errors.a9 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a10">
                                        Usia (tahun)
                                    </label>
                                    <Input placeholder={`e.g. 22`} className='w-full lg:w-96' type='text' name='a10' value={data.a10} handleChange={handleChange}/>
                                    {errors.a10 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Numeric.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a11">
                                        Jenis kelamin
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.a11}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Laki-laki" name="a11" id='a111' defaultChecked={data.a11 === 'Laki-laki' && true} /> <label htmlFor='a111' className='block text-gray-700 text-sm text-md tracking-tight font-sans'>Laki-Laki</label>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Perempuan" name="a11" id='a112' defaultChecked={data.a11 === 'Perempuan' && true} /> <label htmlFor='a112' className='block text-gray-700 text-sm text-md tracking-tight font-sans'>Perempuan</label>
                                    </div>
                                    {errors.a11 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a12">
                                        Provinsi tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a12' onChange={handleChange} value={data.a12}>
                                        <option>-- Pilih Provinsi --</option>
                                        <option onClick={(e)=>setShow(true)}>Aceh</option> <option onClick={(e)=>setShow(true)}>Sumatera Utara</option> <option onClick={(e)=>setShow(true)}>Sumatera Barat</option> <option onClick={(e)=>setShow(true)}>Riau</option> <option onClick={(e)=>setShow(true)}>Jambi</option> <option onClick={(e)=>setShow(true)}>Sumatera Selatan</option> <option onClick={(e)=>setShow(true)}>Bengkulu</option> <option onClick={(e)=>setShow(true)}>Lampung</option> <option onClick={(e)=>setShow(true)}>Bangka Belitung</option>
                                        <option onClick={(e)=>setShow(true)}>Kepulauan Riau</option> <option onClick={(e)=>setShow(true)}>DKI Jakarta</option> <option onClick={(e)=>setShow(true)}>Jawa Barat</option> <option onClick={(e)=>setShow(true)}>Jawa Tengah</option> <option onClick={(e)=>setShow(true)}>DI Yogyakarta</option> <option onClick={(e)=>setShow(true)}>Jawa Timur</option> <option onClick={(e)=>setShow(true)}>Banten</option> <option onClick={(e)=>setShow(true)}>Bali</option> <option onClick={(e)=>setShow(true)}>Nusa Tenggara Barat</option> <option onClick={(e)=>setShow(true)}>Nusa Tenggara Timur</option>
                                        <option onClick={(e)=>setShow(true)}>Kalimantan Barat</option> <option onClick={(e)=>setShow(true)}>Kalimantan Tengah</option> <option onClick={(e)=>setShow(true)}>Kalimantan Selatan</option> <option onClick={(e)=>setShow(true)}>Kalimantan Timur</option> <option onClick={(e)=>setShow(true)}>Kalimantan Utara</option> <option onClick={(e)=>setShow(true)}>Sulawesi Utara</option> <option onClick={(e)=>setShow(true)}>Sulawesi Tengah</option> <option onClick={(e)=>setShow(true)}>Sulawesi Selatan</option> <option onClick={(e)=>setShow(true)}>Sulawesi Tenggara</option>
                                        <option onClick={(e)=>setShow(true)}>Gorontalo</option> <option onClick={(e)=>setShow(true)}>Sulawesi Barat</option> <option onClick={(e)=>setShow(true)}>Maluku</option> <option onClick={(e)=>setShow(true)}>Maluku Utara</option> <option onClick={(e)=>setShow(true)}>Papua</option> <option onClick={(e)=>setShow(true)}>Papua Barat</option>
                                    </select>
                                    {errors.a12 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                {show && data.a12 == 'Aceh' || data.a12 == 'Aceh' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Banda Aceh</option>
                                        <option>Langsa</option>
                                        <option>Sabang</option>
                                        <option>Subulussalam</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Sumatera Utara' || data.a12 == 'Sumatera Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
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
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Sumatera Barat' || data.a12 == 'Sumatera Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bukittinggi</option>
                                        <option>Padang</option>
                                        <option>Padang Panjang</option>
                                        <option>Pariaman</option>
                                        <option>Payakumbuh</option>
                                        <option>Sawahlunto</option>
                                        <option>Solok</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Riau' || data.a12 == 'Riau' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Dumai</option>
                                        <option>Pekanbaru</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Jambi' || data.a12 == 'Jambi' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Sungai Penuh</option>
                                        <option>Jambi</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Sumatera Selatan' || data.a12 == 'Sumatera Selatan' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Lubuklinggau</option>
                                        <option>Pagar Alam</option>
                                        <option>Palembang</option>
                                        <option>Prabumulih</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''} 
                                {show && data.a12 == 'Bengkulu' || data.a12 == 'Bengkulu' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bengkulu</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Lampung' || data.a12 == 'Lampung' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bandar Lampung</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Bangka Belitung' || data.a12 == 'Bangka Belitung' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Pangkalpinang</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Kepulauan Riau' || data.a12 == 'Kepulauan Riau' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Batam</option>
                                        <option>Tanjungpinang</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'DKI Jakarta' || data.a12 == 'DKI Jakarta' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Jakarta Barat</option>
                                        <option>Jakarta Pusat</option>
                                        <option>Jakarta Selatan</option>
                                        <option>Jakarta Timur</option>
                                        <option>Jakarta Utara</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Jawa Barat' || data.a12 == 'Jawa Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
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
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Jawa Tengah' || data.a12 == 'Jawa Tengah' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Magelang</option>
                                        <option>Pekalongan</option>
                                        <option>Salatiga</option>
                                        <option>Semarang</option>
                                        <option>Surakarta</option>
                                        <option>Tegal</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'DI Yogyakarta' || data.a12 == 'DI Yogyakarta' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Yogyakarta</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Jawa Timur' || data.a12 == 'Jawa Timur' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
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
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Banten' || data.a12 == 'Banten' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Cilegon</option>
                                        <option>Serang</option>
                                        <option>Tangerang Selatan</option>
                                        <option>Tangerang</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Bali' || data.a12 == 'Bali' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Denpasar</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Nusa Tenggara Barat' || data.a12 == 'Nusa Tenggara Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bima</option>
                                        <option>Mataram</option>
                                        <option>Kupang</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Nusa Tenggara Timur' || data.a12 == 'Nusa Tenggara Timur' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Kupang</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Kalimantan Barat' || data.a12 == 'Kalimantan Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Pontianak</option>
                                        <option>Singkawang</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Kalimantan Selatan' || data.a12 == 'Kalimantan Selatan' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Banjarbaru</option>
                                        <option>Banjarmasin</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Kalimantan Timur' || data.a12 == 'Kalimantan Timur' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Balikpapan</option>
                                        <option>Bontang</option>
                                        <option>Samarinda</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Kalimantan Utara' || data.a12 == 'Kalimantan Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Tarakan</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Sulawesi Utara' || data.a12 == 'Sulawesi Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bitung</option>
                                        <option>Kotamobagu</option>
                                        <option>Manado</option>
                                        <option>Tomohon</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Sulawesi Tengah' || data.a12 == 'Sulawesi Tengah' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Palu</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Sulawesi Selatan' || data.a12 == 'Sulawesi Selatan' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Makassar</option>
                                        <option>Palopo</option>
                                        <option>Parepare</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Sulawesi Tenggara' || data.a12 == 'Sulawesi Tenggara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Baubau</option>
                                        <option>Kendari</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Gorontalo' || data.a12 == 'Gorontalo' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Gorontalo</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Sulawesi Barat' || data.a12 == 'Sulawesi Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Mamuju</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Maluku' || data.a12 == 'Maluku' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Ambon</option>
                                        <option>Tual</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Maluku Utara' || data.a12 == 'Maluku Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Ternate</option>
                                        <option>Tidore Kepulauan</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Papua' || data.a12 == 'Papua' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Jayapura</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                {show && data.a12 == 'Papua Barat' || data.a12 == 'Papua Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a13">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a13' onChange={handleChange} value={data.a13}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Sorong</option>
                                    </select>
                                    {errors.a13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>) : ''}
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a14">
                                        Alamat
                                    </label>
                                    <textarea placeholder='e.g. Kav. Sei Tering Blok B2 No.27' className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-gray-400/50' type='text' name='a14' value={data.a14} onChange={handleChange}/>
                                    {errors.a14 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a15">
                                        Email
                                    </label>
                                    <Input placeholder={`e.g. alexsirait1001@gmail.com`} className='w-full lg:w-96' type='text' name='a15' value={data.a15} handleChange={handleChange}/>
                                    {errors.a15 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Email.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a16">
                                        No.HP/WA yang aktif
                                    </label>
                                    <Input placeholder={`e.g. 082172433434`} className='w-full lg:w-96' type='text' name='a16' value={data.a16} handleChange={handleChange}/>
                                    {errors.a16 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Numeric.</span>
                                    </div>}
                                </div>
                                <hr />
                                <div className='grid justify-end mt-5'>
                                    <Button>
                                        <span>Save</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
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
