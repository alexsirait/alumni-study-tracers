import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni7(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        g1: dataKuesioner.g1 || '',
        g2: dataKuesioner.g2 || '',
        g3: dataKuesioner.g3 || '',
        g4: dataKuesioner.g4 || '',
        g5: dataKuesioner.g5 || '',
        g6: dataKuesioner.g6 || '',
        g7: dataKuesioner.g7 || '',
        g8: dataKuesioner.g8 || '',
        g9: dataKuesioner.g9 || '',
        g10: dataKuesioner.g10 || '',
        g11: dataKuesioner.g11 || '',
        g12: dataKuesioner.g12 || '',
        g13: dataKuesioner.g13 || '',
        g14: dataKuesioner.g14 || '',
        g15: dataKuesioner.g15 || '',
        g16: dataKuesioner.g16 || '',
        g17: dataKuesioner.g17 || '',
        g18: dataKuesioner.g18 || '',
        g19: dataKuesioner.g19 || '',
        g20: dataKuesioner.g20 || '',
        g21: dataKuesioner.g21 || '',
        g22: dataKuesioner.g22 || '',
        g23: dataKuesioner.g23 || '',
        g24: dataKuesioner.g24 || '',
        g25: dataKuesioner.g25 || '',
        g26: dataKuesioner.g26 || '',
        g27: dataKuesioner.g27 || '',
        g28: dataKuesioner.g28 || '',
        g29: dataKuesioner.g29 || '',
        g30: dataKuesioner.g30 || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update7', dataKuesioner.id))
    }
    const [show, setShow] = useState(false)
    const handleChange = (e) => setData(e.target.name, e.target.value)
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
                                    <h1 className='text-2xl mb-3 font-semibold'>Umpan balik dari lulusan</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="g1">
                                        Sebutkan sumber dana dalam pembiayaan kuiah?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.g1}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Biaya sendiri/Keluarga" name="g1" id='g110' defaultChecked={data.g1 === 'Biaya sendiri/Keluarga' && true} /> <label htmlFor='g110' className='text-sm text-gray-700'>Biaya sendiri/Keluarga</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Beasiswa ADIK" name="g1" id='g120' defaultChecked={data.g1 === 'Beasiswa ADIK' && true} /> <label htmlFor='g120' className='text-sm text-gray-700'>Beasiswa ADIK</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Biasiswa BIDIKMISI" name="g1" id='g130' defaultChecked={data.g1 === 'Biasiswa BIDIKMISI' && true} /> <label htmlFor='g130' className='text-sm text-gray-700'>Biasiswa BIDIKMISI</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Beasiswa PPA" name="g1" id='g140' defaultChecked={data.g1 === 'Beasiswa PPA' && true} /> <label htmlFor='g140' className='text-sm text-gray-700'>Beasiswa PPA</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Beasiswa Perusahaan/Swasta" name="g1" id='g150' defaultChecked={data.g1 === 'Beasiswa Perusahaan/Swasta' && true} /> <label htmlFor='g150' className='text-sm text-gray-700'>Beasiswa Perusahaan/Swasta</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya, tuliskan" name="g1" id='g170' defaultChecked={data.g1 === 'Lainnya, tuliskan' && true} /> <label htmlFor='g170' className='text-sm text-gray-700'>Lainnya, tuliskan</label></div>
                                    </div>
                                    {errors.g1 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                    {show && data.g1 == "Lainnya, tuliskan" || data.g1 == 'Lainnya, tuliskan' ? (
                                        <div>
                                            <Input placeholder={`lainnya . . .`} className='w-full lg:w-96' type='text' name='g2' value={data.g2} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.g2}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="g3">
                                        Apa alasan Anda memilih pendidikan Vokasi? (boleh lebih dari satu jawaban)
                                    </label>
                                    <label className="block text-gray-500 text-sm mb-2">
                                        (Pendidikan vokasi mencakup SMK, pendidikan tinggi vokasi/politeknik, kursus dan pelatihan)
                                    </label>
                                    <div className='block items-center gap-x-4'>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="g3" id='g310' onChange={e => setData('g3', e.target.checked)} defaultChecked={data.g3 == '1' && true}/> <label htmlFor='g310' className='text-sm text-gray-700'>Ingin cepat mendapatkan pekerjaan</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="g4" id='g410' onChange={e => setData('g4', e.target.checked)} defaultChecked={data.g4 == '1' && true}/> <label htmlFor='g410' className='text-sm text-gray-700'>Keterbatasan ekonomi</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="g5" id='g510' onChange={e => setData('g5', e.target.checked)} defaultChecked={data.g5 == '1' && true}/> <label htmlFor='g510' className='text-sm text-gray-700'>Biaya lebih terjangkau</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="g6" id='g610' onChange={e => setData('g6', e.target.checked)} defaultChecked={data.g6 == '1' && true}/> <label htmlFor='g610' className='text-sm text-gray-700'>Pilihan sendiri</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="g7" id='g710' onChange={e => setData('g7', e.target.checked)} defaultChecked={data.g7 == '1' && true}/> <label htmlFor='g710' className='text-sm text-gray-700'>Diajak teman</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="g8" id='g810' onChange={e => setData('g8', e.target.checked)} defaultChecked={data.g8 == '1' && true}/> <label htmlFor='g810' className='text-sm text-gray-700'>Keinginan orang tua</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="g9" id='g910' onChange={e => setData('g9', e.target.checked)} defaultChecked={data.g9 == '1' && true}/> <label htmlFor='g910' className='text-sm text-gray-700'>Tidak diterima di sekolah lain</label></div>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Pada saat lulus, pada tingkat mana kompetensi di bawah ini anda: kuasai?
                                    </label>
                                    <div className="ml-4 md:ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="g10">
                                            Etika
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.g10}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="g10" id='g1010' defaultChecked={data.g10 === '1' && true} /> <label htmlFor='g1010' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="g10" id='g1020' defaultChecked={data.g10 === '2' && true} /> <label htmlFor='g1020' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="g10" id='g1030' defaultChecked={data.g10 === '3' && true} /> <label htmlFor='g1030' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="g10" id='g1040' defaultChecked={data.g10 === '4' && true} /> <label htmlFor='g1040' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="g10" id='g1050' defaultChecked={data.g10 === '5' && true} /> <label htmlFor='g1050' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.g10 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="g11">
                                            Keahlian berdasarkan bidang ilmu
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.g11}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="g11" id='g1110' defaultChecked={data.g11 === '1' && true} /> <label htmlFor='g1110' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="g11" id='g1120' defaultChecked={data.g11 === '2' && true} /> <label htmlFor='g1120' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="g11" id='g1130' defaultChecked={data.g11 === '3' && true} /> <label htmlFor='g1130' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="g11" id='g1140' defaultChecked={data.g11 === '4' && true} /> <label htmlFor='g1140' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="g11" id='g1150' defaultChecked={data.g11 === '5' && true} /> <label htmlFor='g1150' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.g11 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="g12">
                                            Bahasa Inggris
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.g12}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="g12" id='g1210' defaultChecked={data.g12 === '1' && true} /> <label htmlFor='g1210' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="g12" id='g1220' defaultChecked={data.g12 === '2' && true} /> <label htmlFor='g1220' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="g12" id='g1230' defaultChecked={data.g12 === '3' && true} /> <label htmlFor='g1230' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="g12" id='g1240' defaultChecked={data.g12 === '4' && true} /> <label htmlFor='g1240' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="g12" id='g1250' defaultChecked={data.g12 === '5' && true} /> <label htmlFor='g1250' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.g12 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="g13">
                                            Penggunaan Teknologi Informasi
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.g13}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="g13" id='g1310' defaultChecked={data.g13 === '1' && true} /> <label htmlFor='g1310' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="g13" id='g1320' defaultChecked={data.g13 === '2' && true} /> <label htmlFor='g1320' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="g13" id='g1330' defaultChecked={data.g13 === '3' && true} /> <label htmlFor='g1330' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="g13" id='g1340' defaultChecked={data.g13 === '4' && true} /> <label htmlFor='g1340' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="g13" id='g1350' defaultChecked={data.g13 === '5' && true} /> <label htmlFor='g1350' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.g13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="g14">
                                            Komunikasi
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.g14}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="g14" id='g1410' defaultChecked={data.g14 === '1' && true} /> <label htmlFor='g1410' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="g14" id='g1420' defaultChecked={data.g14 === '2' && true} /> <label htmlFor='g1420' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="g14" id='g1430' defaultChecked={data.g14 === '3' && true} /> <label htmlFor='g1430' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="g14" id='g1440' defaultChecked={data.g14 === '4' && true} /> <label htmlFor='g1440' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="g14" id='g1450' defaultChecked={data.g14 === '5' && true} /> <label htmlFor='g1450' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.g14 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="g15">
                                            Kerja sama tim
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.g15}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="g15" id='g1510' defaultChecked={data.g15 === '1' && true} /> <label htmlFor='g1510' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="g15" id='g1520' defaultChecked={data.g15 === '2' && true} /> <label htmlFor='g1520' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="g15" id='g1530' defaultChecked={data.g15 === '3' && true} /> <label htmlFor='g1530' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="g15" id='g1540' defaultChecked={data.g15 === '4' && true} /> <label htmlFor='g1540' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="g15" id='g1550' defaultChecked={data.g15 === '5' && true} /> <label htmlFor='g1550' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.g15 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="g16">
                                            Pengembangan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.g16}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="g16" id='g1610' defaultChecked={data.g16 === '1' && true} /> <label htmlFor='g1610' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="g16" id='g1620' defaultChecked={data.g16 === '2' && true} /> <label htmlFor='g1620' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="g16" id='g1630' defaultChecked={data.g16 === '3' && true} /> <label htmlFor='g1630' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="g16" id='g1640' defaultChecked={data.g16 === '4' && true} /> <label htmlFor='g1640' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="g16" id='g1650' defaultChecked={data.g16 === '5' && true} /> <label htmlFor='g1650' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.g16 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Pada saat ini, padatingkat mana kompetensi di bawah ini diperlukan dalam pekerjaan?
                                    </label>
                                    <div className="ml-4 md:ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="g17">
                                            Etika
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.g17}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="g17" id='g1710' defaultChecked={data.g17 === '1' && true} /> <label htmlFor='g1710' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="g17" id='g1720' defaultChecked={data.g17 === '2' && true} /> <label htmlFor='g1720' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="g17" id='g1730' defaultChecked={data.g17 === '3' && true} /> <label htmlFor='g1730' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="g17" id='g1740' defaultChecked={data.g17 === '4' && true} /> <label htmlFor='g1740' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="g17" id='g1750' defaultChecked={data.g17 === '5' && true} /> <label htmlFor='g1750' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.g17 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="g18">
                                            Keahlian berdasarkan bidang ilmu
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.g18}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="g18" id='g1810' defaultChecked={data.g18 === '1' && true} /> <label htmlFor='g1810' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="g18" id='g1820' defaultChecked={data.g18 === '2' && true} /> <label htmlFor='g1820' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="g18" id='g1830' defaultChecked={data.g18 === '3' && true} /> <label htmlFor='g1830' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="g18" id='g1840' defaultChecked={data.g18 === '4' && true} /> <label htmlFor='g1840' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="g18" id='g1850' defaultChecked={data.g18 === '5' && true} /> <label htmlFor='g1850' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.g18 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="g19">
                                            Bahasa Inggris
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.g19}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="g19" id='g1910' defaultChecked={data.g19 === '1' && true} /> <label htmlFor='g1910' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="g19" id='g1920' defaultChecked={data.g19 === '2' && true} /> <label htmlFor='g1920' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="g19" id='g1930' defaultChecked={data.g19 === '3' && true} /> <label htmlFor='g1930' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="g19" id='g1940' defaultChecked={data.g19 === '4' && true} /> <label htmlFor='g1940' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="g19" id='g1950' defaultChecked={data.g19 === '5' && true} /> <label htmlFor='g1950' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.g19 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="g20">
                                            Penggunaan Teknologi Informasi
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.g20}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="g20" id='g2010' defaultChecked={data.g20 === '1' && true} /> <label htmlFor='g2010' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="g20" id='g2020' defaultChecked={data.g20 === '2' && true} /> <label htmlFor='g2020' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="g20" id='g2030' defaultChecked={data.g20 === '3' && true} /> <label htmlFor='g2030' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="g20" id='g2040' defaultChecked={data.g20 === '4' && true} /> <label htmlFor='g2040' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="g20" id='g2050' defaultChecked={data.g20 === '5' && true} /> <label htmlFor='g2050' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.g20 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="g21">
                                            Komunikasi
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.g21}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="g21" id='g2110' defaultChecked={data.g21 === '1' && true} /> <label htmlFor='g2110' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="g21" id='g2120' defaultChecked={data.g21 === '2' && true} /> <label htmlFor='g2120' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="g21" id='g2130' defaultChecked={data.g21 === '3' && true} /> <label htmlFor='g2130' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="g21" id='g2140' defaultChecked={data.g21 === '4' && true} /> <label htmlFor='g2140' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="g21" id='g2150' defaultChecked={data.g21 === '5' && true} /> <label htmlFor='g2150' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.g21 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="g22">
                                            Kerja sama tim
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.g22}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="g22" id='g2210' defaultChecked={data.g22 === '1' && true} /> <label htmlFor='g2210' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="g22" id='g2220' defaultChecked={data.g22 === '2' && true} /> <label htmlFor='g2220' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="g22" id='g2230' defaultChecked={data.g22 === '3' && true} /> <label htmlFor='g2230' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="g22" id='g2240' defaultChecked={data.g22 === '4' && true} /> <label htmlFor='g2240' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="g22" id='g2250' defaultChecked={data.g22 === '5' && true} /> <label htmlFor='g2250' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.g22 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="g23">
                                            Pengembangan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.g23}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="g23" id='g2310' defaultChecked={data.g23 === '1' && true} /> <label htmlFor='g2310' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="g23" id='g2320' defaultChecked={data.g23 === '2' && true} /> <label htmlFor='g2320' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="g23" id='g2330' defaultChecked={data.g23 === '3' && true} /> <label htmlFor='g2330' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="g23" id='g2340' defaultChecked={data.g23 === '4' && true} /> <label htmlFor='g2340' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="g23" id='g2350' defaultChecked={data.g23 === '5' && true} /> <label htmlFor='g2350' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.g23 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Menurut anda seberapa besar penekanan pada metode pembelajaran dibawah ini dilaksanakan di program studi anda?
                                    </label>
                                    <div className="ml-4 md:ml-6">
                                        <div className="md:grid grid-cols-4 gap-4">
                                            <div>
                                                <label className="text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="g24">
                                                    Perkuliahan
                                                </label>
                                                <div className='block items-center gap-x-4' onChange={handleChange} value={data.g24}>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sangat Besar" name="g24" id='g2410' defaultChecked={data.g24 === 'Sangat Besar' && true} /> <label htmlFor='g2410' className='text-sm text-gray-700'>Sangat Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Besar" name="g24" id='g2420' defaultChecked={data.g24 === 'Besar' && true} /> <label htmlFor='g2420' className='text-sm text-gray-700'>Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup Besar" name="g24" id='g2430' defaultChecked={data.g24 === 'Cukup Besar' && true} /> <label htmlFor='g2430' className='text-sm text-gray-700'>Cukup Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Kurang Besar" name="g24" id='g2440' defaultChecked={data.g24 === 'Kurang Besar' && true} /> <label htmlFor='g2440' className='text-sm text-gray-700'>Kurang Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak Sama Sekali" name="g24" id='g2450' defaultChecked={data.g24 === 'Tidak Sama Sekali' && true} /> <label htmlFor='g2450' className='text-sm text-gray-700'>Tidak Sama Sekali</label></div>
                                                </div>
                                                {errors.g24 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                    <span>Required.</span>
                                                </div>}
                                            </div>
                                            <div>
                                                <label className="text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans mt-4" htmlFor="g25">
                                                    Demonstrasi
                                                </label>
                                                <div className='block items-center gap-x-4' onChange={handleChange} value={data.g25}>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sangat Besar" name="g25" id='g2510' defaultChecked={data.g25 === 'Sangat Besar' && true} /> <label htmlFor='g2510' className='text-sm text-gray-700'>Sangat Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Besar" name="g25" id='g2520' defaultChecked={data.g25 === 'Besar' && true} /> <label htmlFor='g2520' className='text-sm text-gray-700'>Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup Besar" name="g25" id='g2530' defaultChecked={data.g25 === 'Cukup Besar' && true} /> <label htmlFor='g2530' className='text-sm text-gray-700'>Cukup Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Kurang Besar" name="g25" id='g2540' defaultChecked={data.g25 === 'Kurang Besar' && true} /> <label htmlFor='g2540' className='text-sm text-gray-700'>Kurang Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak Sama Sekali" name="g25" id='g2550' defaultChecked={data.g25 === 'Tidak Sama Sekali' && true} /> <label htmlFor='g2550' className='text-sm text-gray-700'>Tidak Sama Sekali</label></div>
                                                </div>
                                                {errors.g25 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                    <span>Required.</span>
                                                </div>}
                                            </div>
                                            <div>
                                                <label className="text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans mt-4" htmlFor="g26">
                                                    Partisipasi dalam proyek riset
                                                </label>
                                                <div className='block items-center gap-x-4' onChange={handleChange} value={data.g26}>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sangat Besar" name="g26" id='g2610' defaultChecked={data.g26 === 'Sangat Besar' && true} /> <label htmlFor='g2610' className='text-sm text-gray-700'>Sangat Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Besar" name="g26" id='g2620' defaultChecked={data.g26 === 'Besar' && true} /> <label htmlFor='g2620' className='text-sm text-gray-700'>Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup Besar" name="g26" id='g2630' defaultChecked={data.g26 === 'Cukup Besar' && true} /> <label htmlFor='g2630' className='text-sm text-gray-700'>Cukup Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Kurang Besar" name="g26" id='g2640' defaultChecked={data.g26 === 'Kurang Besar' && true} /> <label htmlFor='g2640' className='text-sm text-gray-700'>Kurang Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak Sama Sekali" name="g26" id='g2650' defaultChecked={data.g26 === 'Tidak Sama Sekali' && true} /> <label htmlFor='g2650' className='text-sm text-gray-700'>Tidak Sama Sekali</label></div>
                                                </div>
                                                {errors.g26 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                    <span>Required.</span>
                                                </div>}
                                            </div>
                                        </div>
                                        <div className="md:grid grid-cols-4 gap-4">
                                            <div>
                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans mt-4" htmlFor="g27">
                                                    Magang
                                                </label>
                                                <div className='block items-center gap-x-4' onChange={handleChange} value={data.g27}>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sangat Besar" name="g27" id='g2710' defaultChecked={data.g27 === 'Sangat Besar' && true} /> <label htmlFor='g2710' className='text-sm text-gray-700'>Sangat Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Besar" name="g27" id='g2720' defaultChecked={data.g27 === 'Besar' && true} /> <label htmlFor='g2720' className='text-sm text-gray-700'>Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup Besar" name="g27" id='g2730' defaultChecked={data.g27 === 'Cukup Besar' && true} /> <label htmlFor='g2730' className='text-sm text-gray-700'>Cukup Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Kurang Besar" name="g27" id='g2740' defaultChecked={data.g27 === 'Kurang Besar' && true} /> <label htmlFor='g2740' className='text-sm text-gray-700'>Kurang Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak Sama Sekali" name="g27" id='g2750' defaultChecked={data.g27 === 'Tidak Sama Sekali' && true} /> <label htmlFor='g2750' className='text-sm text-gray-700'>Tidak Sama Sekali</label></div>
                                                </div>
                                                {errors.g27 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                    <span>Required.</span>
                                                </div>}
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans mt-4" htmlFor="g28">
                                                    Praktikum
                                                </label>
                                                <div className='block items-center gap-x-4' onChange={handleChange} value={data.g28}>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sangat Besar" name="g28" id='g2810' defaultChecked={data.g28 === 'Sangat Besar' && true} /> <label htmlFor='g2810' className='text-sm text-gray-700'>Sangat Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Besar" name="g28" id='g2820' defaultChecked={data.g28 === 'Besar' && true} /> <label htmlFor='g2820' className='text-sm text-gray-700'>Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup Besar" name="g28" id='g2830' defaultChecked={data.g28 === 'Cukup Besar' && true} /> <label htmlFor='g2830' className='text-sm text-gray-700'>Cukup Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Kurang Besar" name="g28" id='g2840' defaultChecked={data.g28 === 'Kurang Besar' && true} /> <label htmlFor='g2840' className='text-sm text-gray-700'>Kurang Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak Sama Sekali" name="g28" id='g2850' defaultChecked={data.g28 === 'Tidak Sama Sekali' && true} /> <label htmlFor='g2850' className='text-sm text-gray-700'>Tidak Sama Sekali</label></div>
                                                </div>
                                                {errors.g28 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                    <span>Required.</span>
                                                </div>}
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans mt-4" htmlFor="g29">
                                                    Kerja Lapangan
                                                </label>
                                                <div className='block items-center gap-x-4' onChange={handleChange} value={data.g29}>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sangat Besar" name="g29" id='g2910' defaultChecked={data.g29 === 'Sangat Besar' && true} /> <label htmlFor='g2910' className='text-sm text-gray-700'>Sangat Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Besar" name="g29" id='g2920' defaultChecked={data.g29 === 'Besar' && true} /> <label htmlFor='g2920' className='text-sm text-gray-700'>Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup Besar" name="g29" id='g2930' defaultChecked={data.g29 === 'Cukup Besar' && true} /> <label htmlFor='g2930' className='text-sm text-gray-700'>Cukup Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Kurang Besar" name="g29" id='g2940' defaultChecked={data.g29 === 'Kurang Besar' && true} /> <label htmlFor='g2940' className='text-sm text-gray-700'>Kurang Besar</label></div>
                                                    <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak Sama Sekali" name="g29" id='g2950' defaultChecked={data.g29 === 'Tidak Sama Sekali' && true} /> <label htmlFor='g2950' className='text-sm text-gray-700'>Tidak Sama Sekali</label></div>
                                                </div>
                                                {errors.g29 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                    <span>Required.</span>
                                                </div>}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1">
                                            <label className="text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans mt-4" htmlFor="g30">
                                                Diskusi
                                            </label>
                                            <div className='block items-center gap-x-4' onChange={handleChange} value={data.g30}>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sangat Besar" name="g30" id='g3010' defaultChecked={data.g30 === 'Sangat Besar' && true} /> <label htmlFor='g3010' className='text-sm text-gray-700'>Sangat Besar</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Besar" name="g30" id='g3020' defaultChecked={data.g30 === 'Besar' && true} /> <label htmlFor='g3020' className='text-sm text-gray-700'>Besar</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup Besar" name="g30" id='g3030' defaultChecked={data.g30 === 'Cukup Besar' && true} /> <label htmlFor='g3030' className='text-sm text-gray-700'>Cukup Besar</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Kurang Besar" name="g30" id='g3040' defaultChecked={data.g30 === 'Kurang Besar' && true} /> <label htmlFor='g3040' className='text-sm text-gray-700'>Kurang Besar</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak Sama Sekali" name="g30" id='g3050' defaultChecked={data.g30 === 'Tidak Sama Sekali' && true} /> <label htmlFor='g3050' className='text-sm text-gray-700'>Tidak Sama Sekali</label></div>
                                            </div>
                                            {errors.g30 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                </svg>
                                                <span>Required.</span>
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex items-center gap-x-4 mt-5'>
                                    <div className='w-1/2'>
                                        {dataKuesioner.b1 === 'Belum memungkinkan bekerja' && <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit2', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>}
                                        {dataKuesioner.c1 !== null && <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit3', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>}
                                        {dataKuesioner.d1 !== null && <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit4', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>}
                                        {dataKuesioner.e1 !== null && <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit5', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>}
                                        {dataKuesioner.f1 !== null && <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit6', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>}
                                    </div>
                                    <div className='w-1/2'>
                                        <div className="grid justify-end">
                                            <Button>
                                                Store
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
