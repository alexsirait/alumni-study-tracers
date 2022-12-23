import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni6(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        f1: dataKuesioner.f1 || '',
        f2: dataKuesioner.f2 || '',
        f3: dataKuesioner.f3 || '',
        f4: dataKuesioner.f4 || '',
        f5: dataKuesioner.f5 || '',
        f6: dataKuesioner.f6 || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update6', dataKuesioner.id))
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
                                    <h1 className='block text-2xl mb-3 text-gray-700 tracking-tight font-bold'>Lulusan yang sedang mencari pekerjaan</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f1">
                                        Apakah anda sedang mempersiapkan suatu usaha/wirausaha?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.f1}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="f1" id='f110' defaultChecked={data.f1 === 'Ya' && true} /> <label htmlFor='f110' className='text-sm text-gray-700'>Ya</label>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="f1" id='f120' defaultChecked={data.f1 === 'Tidak' && true} /> <label htmlFor='f120' className='text-sm text-gray-700'>Tidak</label>
                                    </div>
                                    {errors.f1 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f2">
                                        Sudah berapa lama (hitungan bulan) Anda mencari pekerjaan atau mempersiapkan suatu usaha/wirausaha?
                                    </label>
                                    <Input placeholder={`e.g. 3 bulan setelah lulus`} className='w-full lg:w-96' type='text' name='f2' value={data.f2} handleChange={handleChange}/>
                                    {errors.f2 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f3">
                                        Apa alasan utama mencari pekerjaan atau mempersiapkan suatu usaha/wirausaha?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.f3}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tamat sekolah/tidak bersekolah lagi" name="f3" id='f310' defaultChecked={data.f3 === 'Tamat sekolah/tidak bersekolah lagi' && true} /> <label htmlFor='f310' className='text-sm text-gray-700'>Tamat sekolah/tidak bersekolah lagi</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tanggung jawab mencari nafkah" name="f3" id='f320' defaultChecked={data.f3 === 'Tanggung jawab mencari nafkah' && true} /> <label htmlFor='f320' className='text-sm text-gray-700'>Tanggung jawab mencari nafkah</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Menambah penghasilan" name="f3" id='f330' defaultChecked={data.f3 === 'Menambah penghasilan' && true} /> <label htmlFor='f330' className='text-sm text-gray-700'>Menambah penghasilan</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Pekerjaan yang ada kurang sesuai dengan pendidikan (bidang keahlian)" name="f3" id='f340' defaultChecked={data.f3 === 'Pekerjaan yang ada kurang sesuai dengan pendidikan (bidang keahlian)' && true} /> <label htmlFor='f340' className='text-sm text-gray-700'>Pekerjaan yang ada kurang sesuai dengan pendidikan (bidang keahlian)</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Pekerjaan yang ada kurang sesuai dengan upah gaji dan lingkungan kerja" name="f3" id='f350' defaultChecked={data.f3 === 'Pekerjaan yang ada kurang sesuai dengan upah gaji dan lingkungan kerja' && true} /> <label htmlFor='f350' className='text-sm text-gray-700'>Pekerjaan yang ada kurang sesuai dengan upah gaji dan lingkungan kerja</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Putus Hubungan Kerja (PHK)" name="f3" id='f360' defaultChecked={data.f3 === 'Putus Hubungan Kerja (PHK)' && true} /> <label htmlFor='f360' className='text-sm text-gray-700'>Putus Hubungan Kerja (PHK)</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Usaha bangkrut (gulung tikar)" name="f3" id='f370' defaultChecked={data.f3 === 'Usaha bangkrut (gulung tikar)' && true} /> <label htmlFor='f370' className='text-sm text-gray-700'>Usaha bangkrut (gulung tikar)</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Masa kontrak habis" name="f3" id='f380' defaultChecked={data.f3 === 'Masa kontrak habis' && true} /> <label htmlFor='f380' className='text-sm text-gray-700'>Masa kontrak habis</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya" name="f3" id='f390' defaultChecked={data.f3 === 'Lainnya' && true} onClick={(e)=>setShow(true)} /> <label htmlFor='f390' className='text-sm text-gray-700'>Lainnya</label></div>
                                    </div>
                                    {errors.f3 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                    {show && data.f3 == "Lainnya" || data.f3 == 'Lainnya' ? (
                                        <div>
                                            <Input placeholder={`lainnya . . .`} className='w-full lg:w-96' type='text' name='f4' value={data.f4} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.f4}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f5">
                                        Apakah anda aktif mencari pekerjaan dalam 4 minggu terakhir? Pilihlah satu jawaban
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.f5}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="f5" id='f510' defaultChecked={data.f5 === 'Tidak' && true} /> <label htmlFor='f510' className='text-sm text-gray-700'>Tidak</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak, tapi saya sedang menunggu hasil lamaran kerja" name="f5" id='f520' defaultChecked={data.f5 === 'Tidak, tapi saya sedang menunggu hasil lamaran kerja' && true} /> <label htmlFor='f520' className='text-sm text-gray-700'>Tidak, tapi saya sedang menunggu hasil lamaran kerja</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya, saya akan mulai bekerja dalam 2 minggu ke depan" name="f5" id='f530' defaultChecked={data.f5 === 'Ya, saya akan mulai bekerja dalam 2 minggu ke depan' && true} /> <label htmlFor='f530' className='text-sm text-gray-700'>Ya, saya akan mulai bekerja dalam 2 minggu ke depan</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya, tapi saya belum pasti akan bekerja dalam 2 minggu ke depan" name="f5" id='f540' defaultChecked={data.f5 === 'Ya, tapi saya belum pasti akan bekerja dalam 2 minggu ke depan' && true} /> <label htmlFor='f540' className='text-sm text-gray-700'>Ya, tapi saya belum pasti akan bekerja dalam 2 minggu ke depan</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya" name="f5" id='f550' defaultChecked={data.f5 === 'Lainnya' && true} onClick={(e)=>setShow(true)}/> <label htmlFor='f550' className='text-sm text-gray-700'>Lainnya</label></div>
                                    </div>
                                    {errors.f5 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                    {show && data.f5 == "Lainnya" || data.f5 == 'Lainnya' ? (
                                        <div>
                                            <Input placeholder={`lainnya . . .`} className='w-full lg:w-96' type='text' name='f6' value={data.f6} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.f6}</div>}
                                        </div>)
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
