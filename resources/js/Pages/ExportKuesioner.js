import React, { useEffect, useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import DialogModal from '@/Components/DialogModal';
import aos from 'aos';
import '../../../node_modules/aos/dist/aos.css'

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
    const [showExportPerusahaan, setShowExportPerusahaan] = useState(false)


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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex gap-x-4 justify-between p-6 bg-white border-b border-gray-200">

                                <div className='w-full md:w-auto bg-gray-50/50 text-center border ml-10 items-center justify-center rounded-xl p-4 mb-5 mt-8 text-sm font-semibold'>
                                    <div className="flex justify-center md:justify-end md:mr-12 -mt-16 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 object-cover rounded-full bg-white border p-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg>
                                    </div>
                                    <div className='text-left px-44'>
                                        <h1 className='text-xl leading-relaxed font-sans tracking-tighter'>Export Kuesioner</h1>
                                        <h1 className='block mt-3 mb-5 text-xl leading-relaxed font-sans tracking-tight'>Alumni</h1>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <Link href={route('kuesioner.alumni.export.select')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</Link>
                                    </div>
                                </div>


                                <div className='w-full md:w-auto bg-gray-50/50 text-center border items-center justify-center rounded-xl mr-10 p-4 mb-5 mt-8 text-sm font-semibold'>
                                    <div className="flex justify-center md:justify-end md:mr-12 -mt-16 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 object-cover rounded-full bg-white border p-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className='text-left px-44'>
                                        <h1 className='text-xl leading-relaxed font-sans tracking-tighter'>Export Kuesioner</h1>
                                        <h1 className='block mt-3 mb-5 text-xl leading-relaxed font-sans tracking-tight'>Perusahaan</h1>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button onClick={() => setShowExportPerusahaan(true)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</button>
                                        {showExportPerusahaan && 
                                            <DialogModal
                                                svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                                    </svg>}
                                                content='Want to export Perusahaan Kuesioner ?'
                                            >
                                                <button onClick={(e)=>setShowExportPerusahaan(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                                <a onClick={(e)=>setShowExportPerusahaan(false)} href={route('kuesioner.perusahaan.export')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
                                            </DialogModal>
                                        }
                                    </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            
        </Authenticated>
    );
}








