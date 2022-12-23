import React, { useEffect, useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import aos from 'aos';
import '../../../node_modules/aos/dist/aos.css'
import DialogModal from '@/Components/DialogModal';

export default function ExportRiwayatKerja(props) {
    const [showExportAlumni, setShowExportAlumni] = useState(false)

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
                        <span>Export Riwayat Kerja</span>
                    </h2>}
        >
            <Head title="Export Riwayat Kerja" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex gap-x-4 justify-center p-6 bg-white border-b border-gray-200">

                                <div className='w-full md:w-auto bg-gray-50/50 text-center border ml-10 items-center justify-center rounded-xl p-4 mb-5 mt-8 text-sm font-semibold'>
                                    <div className="flex justify-center md:justify-end md:mr-12 -mt-16 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 object-cover rounded-full bg-white border p-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className='text-left px-60'>
                                        <h1 className='text-xl leading-relaxed font-sans tracking-tighter'>Export</h1>
                                        <h1 className='block mt-3 mb-5 text-xl leading-relaxed font-sans tracking-tight'>Riwayat Kerja</h1>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button onClick={() => setShowExportAlumni(true)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</button>
                                        {showExportAlumni &&
                                            <DialogModal
                                                svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                                    </svg>}
                                                content='Want to export alumni work history ?'
                                            >
                                                <button onClick={(e)=>setShowExportAlumni(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                                <a onClick={(e)=>setShowExportAlumni(false)} href={route('exportexcel.riwayatkerja')} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none">Export</a>
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

