import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function StartPerusahaan(props) {
    const { auth, can } = usePage().props;
    const { kuesionerPerusahaan } = props
    const { data, setData, post } = useForm({
        name: '',
    })
    const storeHandler = (e) => {
        e.preventDefault()
        post(route('kuesioner.perusahaan.store'))
    }
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
                            <div className='w-full md:w-auto bg-gray-50/50 text-center border items-center justify-center rounded-xl p-4 mb-5 mt-8 text-sm font-semibold'>
                                <div className="flex justify-center md:justify-end md:mr-12 -mt-16 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 object-cover rounded-full bg-white border p-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className='text-xs md:text-sm leading-relaxed font-sans'>Para perusahaan yang terhormat, saat ini kami sedang mengadakan Tracer Study kepada perusahaan Polibatam. Studi ini dilakukan dalam rangka mengidentifikasi keberadaan alumni setelah lulus kuliah. Tujuan studi ini untuk mengevaluasi proses dan hasil perkuliahan, penyempurnaan serta penjaminan kualitas pembelajaran di Polibatam.</p>
                                    <p className='text-xs md:text-sm mt-3 leading-relaxed font-sans'>Berkaitan dengan hal tersebut kami mohon partisipasi saudara meluangkan waktu untuk menjawab pertanyaan dalam kuisioner ini, data yang telah disampaikan akan dijaga kerahasiaannya. Atas perhatian dan kerjasama yang baik serta bantuannya, kami mengucapkan terima kasih.</p>
                                    <p className='block mt-3 text-xl leading-relaxed font-sans'>🙏</p>
                                </div>
                            </div>
                            <div className='w-full items-center grid justify-items-center'>
                                {kuesionerPerusahaan == null ? (
                                    <form onSubmit={storeHandler}>
                                        <Button>
                                            Start 🚀
                                        </Button>
                                    </form>
                                ) : (
                                    <div>
                                        {kuesionerPerusahaan.b28 == null ? (
                                            <div>
                                                <div className='flex items-center justify-center text-sm md:text-base mt-2 mb-4 font-bold text-gray-700 tracking-tight font-sans'>Kuesioner Anda belum selesai . . . 🥺</div>
                                                <div className='flex items-center justify-center'>
                                                    <Link href={route('kuesioner.perusahaan.edit', kuesionerPerusahaan.id)} className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none'>
                                                    Continue 🚀
                                                    </Link>
                                                </div>
                                            </div>
                                        ) : (
                                            <form onSubmit={storeHandler}>
                                                <Button>
                                                    Start 🚀
                                                </Button>
                                            </form>
                                        ) }
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
