import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni2(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        c1: dataKuesioner.c1 || '',
        c2: dataKuesioner.c2 || '',
        c3: dataKuesioner.c3 || '',
        c4: dataKuesioner.c4 || '',
        c5: dataKuesioner.c5 || '',
        c6: dataKuesioner.c6 || '',
        c7: dataKuesioner.c7 || '',
        c8: dataKuesioner.c8 || '',
        c9: dataKuesioner.c9 || '',
        c10: dataKuesioner.c10 || '',
        c11: dataKuesioner.c11 || '',
        c12: dataKuesioner.c12 || '',
        c13: dataKuesioner.c13 || '',
        c14: dataKuesioner.c14 || '',
        c15: dataKuesioner.c15 || '',
        c16: dataKuesioner.c16 || '',
        c17: dataKuesioner.c17 || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update3', dataKuesioner.id))
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
                                    <h1 className='block text-2xl mb-3 text-gray-700 tracking-tight font-bold'>Lulusan yang melanjutkan pendidikan</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="c1">
                                        Apakah saat ini Anda sedang bersekolah/kuliah?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.c1}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="c1" id="c110" defaultChecked={data.c1 === 'Ya' && true} onClick={(e)=>setShow(true)} /> <label htmlFor="c110" className='text-sm text-gray-700'>Ya</label>
                                        <input  className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="c1" id="c120" defaultChecked={data.c1 === 'Tidak' && true} onClick={(e)=>setShow(false)}/> <label htmlFor="c120" className='text-sm text-gray-700'>Tidak</label>
                                    </div>
                                    {errors.c1 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                {show && data.c1 == "Ya" || data.c1 == 'Ya' ? (
                                    <div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="c2">
                                                Jenjang pendidikan apa yang sedang ditempuh?
                                            </label>
                                            <div className='block items-center gap-x-4' onChange={handleChange} value={data.c2}>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="D1" name="c2" id='c210' defaultChecked={data.c2 === 'D1' && true} /> <label htmlFor='c210' className='text-sm text-gray-700'>D1</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="D2" name="c2" id='c220' defaultChecked={data.c2 === 'D2' && true} /> <label htmlFor='c220' className='text-sm text-gray-700'>D2</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="D3" name="c2" id='c230' defaultChecked={data.c2 === 'D3' && true} /> <label htmlFor='c230' className='text-sm text-gray-700'>D3</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="D4/Sarjana Terapan" name="c2" id='c240' defaultChecked={data.c2 === 'D4/Sarjana Terapan' && true} /> <label htmlFor='c240' className='text-sm text-gray-700'>D4/Sarjana Terapan</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="S1" name="c2" id='c250' defaultChecked={data.c2 === 'S1' && true} /> <label htmlFor='c250' className='text-sm text-gray-700'>S1</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="S2" name="c2" id='c260' defaultChecked={data.c2 === 'S2' && true} /> <label htmlFor='c260' className='text-sm text-gray-700'>S2</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="S2 Terapan" name="c2" id='c270' defaultChecked={data.c2 === 'S2 Terapan' && true} /> <label htmlFor='c270' className='text-sm text-gray-700'>S2 Terapan</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="S3" name="c2" id='c280' defaultChecked={data.c2 === 'S3' && true} /> <label htmlFor='c280' className='text-sm text-gray-700'>S3</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="S3 Terapan" name="c2" id='c290' defaultChecked={data.c2 === 'S3 Terapan' && true} /> <label htmlFor='c290' className='text-sm text-gray-700'>S3 Terapan</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak Selaras" name="c2" id='c2100' defaultChecked={data.c2 === 'Tidak Selaras' && true} /> <label htmlFor='c2100' className='text-sm text-gray-700'>Tidak Selaras</label></div>
                                            </div>
                                            {errors && <div className='text-red-600 mt-1'>{errors.c2}</div>}
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="c3">
                                                Tanggal masuk studi lanjut?
                                            </label>
                                            <Input className='w-full lg:w-96' type='date' name='c3' value={data.c3} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.c3}</div>}
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="c4">
                                               Sumber biaya
                                            </label>
                                            <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='c4' onChange={handleChange} value={data.c4}>
                                                <option>-- Pilih Sumber Biaya --</option>
                                                <option>Biaya Sendiri</option>
                                                <option>Beasiswa</option>
                                            </select>
                                            {errors.c4 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                </svg>
                                                <span>Required.</span>
                                            </div>}
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="c5">
                                                Apa prodi anda dalam studi tersebut?
                                            </label>
                                            <Input placeholder={`e.g. Teknik Informatika`} className='w-full lg:w-96' type='text' name='c5' value={data.c5} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.c5}</div>}
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="c6">
                                                Apa alasan Anda melanjutkan pendidikan? (boleh lebih dari satu jawaban)
                                            </label>
                                            <div className='block items-center gap-x-4'>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="c6" id='c610' onChange={e => setData('c6', e.target.checked)} defaultChecked={data.c6 == '1' && true}/> <label htmlFor='c610' className='text-sm text-gray-700'>Meningkatkan kompetensi</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="c7" id='c710' onChange={e => setData('c7', e.target.checked)} defaultChecked={data.c7 == '1' && true}/> <label htmlFor='c710' className='text-sm text-gray-700'>Mengembangkan karir</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="c8" id='c810' onChange={e => setData('c8', e.target.checked)} defaultChecked={data.c8 == '1' && true}/> <label htmlFor='c810' className='text-sm text-gray-700'>Meningkatkan status sosial</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="c9" id='c910' onChange={e => setData('c9', e.target.checked)} defaultChecked={data.c9 == '1' && true}/> <label htmlFor='c910' className='text-sm text-gray-700'>Memperoleh beasiswa</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="c10" id='c1010' onChange={e => setData('c10', e.target.checked)} defaultChecked={data.c10 == '1' && true}/> <label htmlFor='c1010' className='text-sm text-gray-700'>Diminta orang tua</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="c11" id='c1110' onChange={e => setData('c11', e.target.checked)} defaultChecked={data.c11 == '1' && true}/> <label htmlFor='c1110' className='text-sm text-gray-700'>Diminta oleh instansi tempat bekerja</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="c12" id='c1210' onChange={e => setData('c12', e.target.checked)} defaultChecked={data.c12 == '1' && true}/> <label htmlFor='c1210' className='text-sm text-gray-700'>Belum menemukan pekerjaan yang tepat</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="c13" id='c1310' onChange={e => setData('c13', e.target.checked)} defaultChecked={data.c13 == '1' && true} onClick={() => setShowLainnya(true)} /> <label htmlFor='c1310' className='text-sm text-gray-700'>Lainnya</label></div>
                                            </div>
                                            {showLainnya && data.c13 == "1" || data.c13 == '1' ? (
                                                <Input placeholder={`lainnya . . .`} className='w-full lg:w-96' type='text' name='c14' value={data.c14} handleChange={handleChange}/>)
                                            : ''}
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="c15">
                                                Nama instansi pendidikan lanjut
                                            </label>
                                            <Input placeholder={`e.g. Universitas Jaya Selalu`} className='w-full lg:w-96' type='text' name='c15' value={data.c15} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.c15}</div>}
                                        </div>
                                    </div> )
                                : ''}
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="c16">
                                        Apakah anda sedang atau pernah mengikuti pelatihan atau sertifikasi?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.c16}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="c16" id='c1610' defaultChecked={data.c16 === 'Ya' && true} onClick={(e)=>setShow(true)} /> <label htmlFor='c1610' className='text-sm text-gray-700'>Ya</label>
                                        <input  className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="c16" id='c1620' defaultChecked={data.c16 === 'Tidak' && true} onClick={(e)=>setShow(false)} /> <label htmlFor='c1620' className='text-sm text-gray-700'>Tidak</label>
                                    </div>
                                    {errors.c16 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                {show && data.c16 == "Ya" || data.c16 == 'Ya' ? (
                                    <div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="c17">
                                                Apa jenis pelatihan atau sertifikasi yang sedang atau pernah diikuti?
                                            </label>
                                            <Input placeholder={`e.g. Laravel Certification`} className='w-full lg:w-96' type='text' name='c17' value={data.c17} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.c17}</div>}
                                        </div>
                                    </div> )
                                : ''}
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
