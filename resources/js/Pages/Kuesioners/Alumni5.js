import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni5(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        e1: dataKuesioner.e1 || '',
        e2: dataKuesioner.e2 || '',
        e3: dataKuesioner.e3 || '',
        e4: dataKuesioner.e4 || '',
        e5: dataKuesioner.e5 || '',
        e6: dataKuesioner.e6 || '',
        e7: dataKuesioner.e7 || '',
        e8: dataKuesioner.e8 || '',
        e9: dataKuesioner.e9 || '',
        e10: dataKuesioner.e10 || '',
        e11: dataKuesioner.e11 || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update5', dataKuesioner.id))
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
                                    <h1 className='block text-2xl mb-3 text-gray-700 tracking-tight font-bold'>Lulusan yang Berwirausaha</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e1">
                                        Bila berwirausaha, apa posisi/jawaban Anda saat ini?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='e1' onChange={handleChange} value={data.e1}>
                                        <option>-- Pilih Posisi/Jabatan --</option>
                                        <option>Founder</option> <option>Co-Founder</option> <option>Staff</option> <option>Freelance/Kerja Lepas</option> 
                                    </select>
                                    {errors.e1 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e2">
                                        Status/kedudukan dalam berusaha/wirausaha?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.e2}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="berusaha/berwirausaha sendiri tanpa dibantu orang lain" name="e2" id='e210' defaultChecked={data.e2 === 'berusaha/berwirausaha sendiri tanpa dibantu orang lain' && true} /> <label htmlFor='e210' className='text-sm text-gray-700'>Berusaha/berwirausaha sendiri tanpa dibantu orang lain</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="berusaha/berwirausaha dengan dibantu pekerja tak dibayar" name="e2" id='e220' defaultChecked={data.e2 === 'berusaha/berwirausaha dengan dibantu pekerja tak dibayar' && true} /> <label htmlFor='e220' className='text-sm text-gray-700'>Berusaha/berwirausaha dengan dibantu pekerja tak dibayar</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="berusaha/berwirausaha dengan dibantu buruh/pekerja dibayar" name="e2" id='e230' defaultChecked={data.e2 === 'berusaha/berwirausaha dengan dibantu buruh/pekerja dibayar' && true} /> <label htmlFor='e230' className='text-sm text-gray-700'>Berusaha/berwirausaha dengan dibantu buruh/pekerja dibayar</label></div>
                                    </div>
                                    {errors.e2 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e3">
                                        Apa alasan anda berwirausaha?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.e3}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Menyalurkan minat dan kompetensi berwirausaha" name="e3" id='e310' defaultChecked={data.e3 === 'Menyalurkan minat dan kompetensi berwirausaha' && true} /> <label htmlFor='e310' className='text-sm text-gray-700'>Menyalurkan minat dan kompetensi berwirausaha</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ingin memperoleh penghasilan yang tidak terbatas" name="e3" id='e320' defaultChecked={data.e3 === 'Ingin memperoleh penghasilan yang tidak terbatas' && true} /> <label htmlFor='e320' className='text-sm text-gray-700'>Ingin memperoleh penghasilan yang tidak terbatas</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Memiliki kebebasan waktu dalam mengatur diri sendiri" name="e3" id='e330' defaultChecked={data.e3 === 'Memiliki kebebasan waktu dalam mengatur diri sendiri' && true} /> <label htmlFor='e330' className='text-sm text-gray-700'>Memiliki kebebasan waktu dalam mengatur diri sendiri</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak mau menjadi karyawan" name="e3" id='e340' defaultChecked={data.e3 === 'Tidak mau menjadi karyawan' && true} /> <label htmlFor='e340' className='text-sm text-gray-700'>Tidak mau menjadi karyawan</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Melanjutkan usaha orang tua/keluarga" name="e3" id='e350' defaultChecked={data.e3 === 'Melanjutkan usaha orang tua/keluarga' && true} /> <label htmlFor='e350' className='text-sm text-gray-700'>Melanjutkan usaha orang tua/keluarga</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Terpaksa karena tidak mendapatkan pekerjaan" name="e3" id='e360' defaultChecked={data.e3 === 'Terpaksa karena tidak mendapatkan pekerjaan' && true} /> <label htmlFor='e360' className='text-sm text-gray-700'>Terpaksa karena tidak mendapatkan pekerjaan</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya" name="e3" id='e370' defaultChecked={data.e3 === 'Lainnya' && true} onClick={(e)=>setShow(true)}/> <label htmlFor='e370' className='text-sm text-gray-700'>Lainnya</label></div>
                                    </div>
                                    {errors.e3 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                    {show && data.e3 == "Lainnya" || data.e3 == 'Lainnya' ? (
                                        <div>
                                            <Input placeholder={`lainnya . . .`} className='w-full lg:w-96' type='text' name='e4' value={data.e4} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.e4}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e5">
                                        Bidang usaha/kegiatan inti
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='e5' onChange={handleChange} value={data.e5}>
                                        <option>-- Pilih Bidang --</option>
                                        <option>Pertanian Tanaman Padi & Palawija</option> <option>Konstruksi/Bangunan</option> <option>Perdagangan</option> <option>Hotel dan Rumah Makan</option> 
                                        <option>Transportasi dan Pergudangan</option> <option>Informasi dan Komunikasi</option> <option>Keuangan dan Asuransi</option>
                                    </select>
                                    {errors.e5 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e6">
                                        Apa status kewirausahaan Anda?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='e6' onChange={handleChange} value={data.e6}>
                                        <option>-- Pilih Status --</option>
                                        <option>Berusaha dengan modal sendiri</option>
                                        <option>Berusaha dengan modal bersama</option>
                                        <option>Berusaha dengan modal hibah</option>
                                    </select>
                                    {errors.e6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e7">
                                        Bagaimana Anda melakukan pembukuan keuangan?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='e7' onChange={handleChange} value={data.e7}>
                                        <option>-- Pilih Pembukuan --</option>
                                        <option>Pembukuan lengkap (laba rugi dan neraca)</option>
                                        <option>Ada pembukuan sederhana untuk keperlua pribadi/pembayaran iuran/retribusi</option>
                                        <option>Tidak ada pembukuan tertulis</option>
                                        <option>Tidak tahu</option>
                                    </select>
                                    {errors.e7 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e8">
                                        Kapan Anda mulai berwirausaha? (Bulan, Tahun)
                                    </label>
                                    <Input placeholder={`e.g. Maret 2020`} className='w-full lg:w-96' type='text' name='e8' value={data.e8} handleChange={handleChange}/>
                                    {errors.e8 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e9">
                                        Berapa rata-rata omset Anda dalam berwirausaha per bulan?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.e9}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="diatas 20.000.000" name="e9" id='e910' defaultChecked={data.e9 === 'diatas 20.000.000' && true} /> <label htmlFor='e910' className='text-sm text-gray-700'>diatas 20.000.000</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="10.000.000 - 19.999.999" name="e9" id='e920' defaultChecked={data.e9 === '10.000.000 - 19.999.999' && true} /> <label htmlFor='e920' className='text-sm text-gray-700'>10.000.000 - 19.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="9.000.000 - 9.999.999" name="e9" id='e930' defaultChecked={data.e9 === '9.000.000 - 9.999.999' && true} /> <label htmlFor='e930' className='text-sm text-gray-700'>9.000.000 - 9.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="8.000.000 - 8.999.999" name="e9" id='e940' defaultChecked={data.e9 === '8.000.000 - 8.999.999' && true} /> <label htmlFor='e940' className='text-sm text-gray-700'>8.000.000 - 8.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="7.000.000 - 7.999.999" name="e9" id='e950' defaultChecked={data.e9 === '7.000.000 - 7.999.999' && true} /> <label htmlFor='e950' className='text-sm text-gray-700'>7.000.000 - 7.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="6.000.000 - 6.999.999" name="e9" id='e960' defaultChecked={data.e9 === '6.000.000 - 6.999.999' && true} /> <label htmlFor='e960' className='text-sm text-gray-700'>6.000.000 - 6.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5.000.000 - 5.999.999" name="e9" id='e970' defaultChecked={data.e9 === '5.000.000 - 5.999.999' && true} /> <label htmlFor='e970' className='text-sm text-gray-700'>5.000.000 - 5.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4.000.000 - 4.999.999" name="e9" id='e980' defaultChecked={data.e9 === '4.000.000 - 4.999.999' && true} /> <label htmlFor='e980' className='text-sm text-gray-700'>4.000.000 - 4.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3.000.000 - 3.999.999" name="e9" id='e990' defaultChecked={data.e9 === '3.000.000 - 3.999.999' && true} /> <label htmlFor='e990' className='text-sm text-gray-700'>3.000.000 - 3.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2.000.000 - 2.999.999" name="e9" id='e9100' defaultChecked={data.e9 === '2.000.000 - 2.999.999' && true} /> <label htmlFor='e9100' className='text-sm text-gray-700'>2.000.000 - 2.999.999</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1.000.000 - 1.999.999" name="e9" id='e9110' defaultChecked={data.e9 === '1.000.000 - 1.999.999' && true} /> <label htmlFor='e9110' className='text-sm text-gray-700'>1.000.000 - 1.999.999</label></div>
                                    </div>
                                    {errors.e9 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e10">
                                        Dimana lokasi wirausaha anda?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.e10}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Dalam Negeri" name="e10" id='e1010' defaultChecked={data.e10 === 'Dalam Negeri' && true} /> <label htmlFor='e1010' className='text-sm text-gray-700'>Dalam Negeri</label>
                                        <input  className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Luar Negeri" name="e10" id='e1020' defaultChecked={data.e10 === 'Luar Negeri' && true} /> <label htmlFor='e1020' className='text-sm text-gray-700'>Luar Negeri</label>
                                    </div>
                                    {errors.e10 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e11">
                                        Berapa kali Anda pernah berwirausaha (termasuk usaha sekarang) sejak Anda lulus dari satuan pendidikan?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.e11}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Satu kali" name="e11" id='e1110' defaultChecked={data.e11 === 'Satu kali' && true} /> <label htmlFor='e1110' className='text-sm text-gray-700'>Satu kali</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Dua kali" name="e11" id='e1120' defaultChecked={data.e11 === 'Dua kali' && true} /> <label htmlFor='e1120' className='text-sm text-gray-700'>Dua kali</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tiga kali" name="e11" id='e1130' defaultChecked={data.e11 === 'Tiga kali' && true} /> <label htmlFor='e1130' className='text-sm text-gray-700'>Tiga kali</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lebih dari 3 kali" name="e11" id='e1140' defaultChecked={data.e11 === 'Lebih dari 3 kali' && true} /> <label htmlFor='e1140' className='text-sm text-gray-700'>Lebih dari 3 kali</label></div>
                                    </div>
                                    {errors.e11 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
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
