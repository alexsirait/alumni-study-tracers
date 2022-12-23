import React, { useEffect, useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import DialogModal from '@/Components/DialogModal';
import aos from 'aos';
import '../../../node_modules/aos/dist/aos.css'
import Button from '@/Components/Button';

export default function ExportKuesioner(props) {
    const [showExportAlumni, setShowExportAlumni] = useState(false)
    const [showExportAlumniIF, setShowExportAlumniIF] = useState(false)
    const [showExportAlumniGE, setShowExportAlumniGE] = useState(false)
    const [showExportAlumniAN, setShowExportAlumniAN] = useState(false)
    const [showExportAlumniMJ, setShowExportAlumniMJ] = useState(false)
    const [showExportAlumniRKS, setShowExportAlumniRKS] = useState(false)
    const [showExportAlumniRPL, setShowExportAlumniRPL] = useState(false)
    const [showExportAlumniAK, setShowExportAlumniAK] = useState(false)
    const [showExportAlumniAKM, setShowExportAlumniAKM] = useState(false)
    const [showExportAlumniABT, setShowExportAlumniABT] = useState(false)
    const [showExportAlumniLPI, setShowExportAlumniLPI] = useState(false)
    const [showExportAlumniEM, setShowExportAlumniEM] = useState(false)
    const [showExportAlumniEL, setShowExportAlumniEL] = useState(false)
    const [showExportAlumniIN, setShowExportAlumniIN] = useState(false)
    const [showExportAlumniMK, setShowExportAlumniMK] = useState(false)
    const [showExportAlumniRPE, setShowExportAlumniRPE] = useState(false)
    const [showExportAlumniRB, setShowExportAlumniRB] = useState(false)
    const [showExportAlumniME, setShowExportAlumniME] = useState(false)
    const [showExportAlumniPPU, setShowExportAlumniPPU] = useState(false)
    const [showExportAlumniPKK, setShowExportAlumniPKK] = useState(false)


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
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                        <span>Export Kuesioner</span>
                    </h2>}
        >
            <Head title="Export Kuesioner" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <div className="gap-x-4 justify-between p-6 bg-white border-b border-gray-200">
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-gray-300 rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumni(true)}>Export All</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniIF(true)}>Export Teknik Informatika</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniGE(true)}>Export Teknik Geomatika</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniAN(true)}>Export Animasi</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniMJ(true)}>Export Multimedia dan Jaringan</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniRKS(true)}>Export Rekayasa Keamanan Siber</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniRPL(true)}>Export Rekayasa Perangkat Lunak</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniAK(true)}>Export Akuntansi</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniAKM(true)}>Export Akuntansi Manajerial</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniABT(true)}>Export Administrasi Bisnis Terapan</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniLPI(true)}>Export Logistik Perdagangan Internasional</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniEM(true)}>Export Teknik Elektronika Manufaktur</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniEL(true)}>Export Teknik Elektronika</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniIN(true)}>Export Teknik Instrumentasi</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniMK(true)}>Export Teknik Mekatronika</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniRPE(true)}>Export Teknologi Rekayasa Pembangkit Energi</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniRB(true)}>Export Teknik Robotika</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniME(true)}>Export Teknik Mesin</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniPPU(true)}>Export Teknik Perawatan Pesawat Udara</button>
                            <button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2 mb-3' onClick={() => setShowExportAlumniPKK(true)}>Export Teknik Perencanaan dan Konstruksi Kapal</button>
                            <div className='mt-5 p-5 mb-8'>
                                <Link className='float-right inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2' href={route('export.kuesioner')}>Cancel</Link>
                            </div>
                            {showExportAlumni && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export All Alumni Kuesioner ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumni(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumni(false)} href={route('kuesioner.alumni.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniIF && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Teknik Informatika ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniIF(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniIF(false)} href={route('kuesioner.alumniIF.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniGE && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Teknik Geomatika ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniGE(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniGE(false)} href={route('kuesioner.alumniGE.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniAN && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Animasi ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniAN(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniAN(false)} href={route('kuesioner.alumniAN.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniMJ && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Multimedia dan Jaringan ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniMJ(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniMJ(false)} href={route('kuesioner.alumniMJ.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniRKS && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Rekayasa Keamanan Siber ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniRKS(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniRKS(false)} href={route('kuesioner.alumniRKS.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniRPL && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Rekayasa Perangkat Lunak ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniRPL(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniRPL(false)} href={route('kuesioner.alumniRPL.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniAK && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Akuntansi ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniAK(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniAK(false)} href={route('kuesioner.alumniAK.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniAKM && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Akuntansi Manajerial ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniAKM(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniAKM(false)} href={route('kuesioner.alumniAKM.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniABT && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Administrasi Bisnis Terapan ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniABT(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniABT(false)} href={route('kuesioner.alumniABT.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniLPI && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Logistik Perdagangan Internasional ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniLPI(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniLPI(false)} href={route('kuesioner.alumniLPI.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniEM && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Teknik Elektronika Manufaktur ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniEM(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniEM(false)} href={route('kuesioner.alumniEM.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniEL && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Teknik Elektronika ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniEL(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniEL(false)} href={route('kuesioner.alumniEL.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniIN && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Teknik Instrumentasi ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniIN(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniIN(false)} href={route('kuesioner.alumniIN.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniMK && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Teknik Mekatronika ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniMK(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniMK(false)} href={route('kuesioner.alumniMK.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniRPE && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Teknologi Rekayasa Pembangkit Energi ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniRPE(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniRPE(false)} href={route('kuesioner.alumniRPE.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniRB && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Teknik Robotika ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniRB(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniRB(false)} href={route('kuesioner.alumniRB.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniME && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Teknik Mesin ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniME(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniME(false)} href={route('kuesioner.alumniME.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniPPU && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Teknik Perawatan Pesawat Udara ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniPPU(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniPPU(false)} href={route('kuesioner.alumniPPU.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                            {showExportAlumniPKK && 
                                <DialogModal
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>}
                                    content='Want to export Alumni Kuesioner Teknik Perencanaan dan Konstruksi Kapal ?'
                                >
                                    <button onClick={(e)=>setShowExportAlumniPKK(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    <a onClick={(e)=>setShowExportAlumniPKK(false)} href={route('kuesioner.alumniPKK.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                </DialogModal>
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </Authenticated>
    );
}








