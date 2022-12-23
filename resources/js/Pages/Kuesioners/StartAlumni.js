import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function StartAlumni(props) {
    const { auth, can } = usePage().props;
    const { kuesionerAlumni } = props
    const { data, setData, post } = useForm({
        name: '',
    })
    const storeHandler = (e) => {
        e.preventDefault()
        post(route('kuesioner.alumni.store'))
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
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className='text-xs md:text-sm leading-relaxed font-sans'>Para alumni yang terhormat, saat ini kami sedang mengadakan Tracer Study kepada alumni Polibatam. Studi ini dilakukan dalam rangka mengidentifikasi keberadaan alumni setelah lulus kuliah. Tujuan studi ini untuk mengevaluasi proses dan hasil perkuliahan, penyempurnaan serta penjaminan kualitas pembelajaran di Polibatam.</p>
                                    <p className='text-xs md:text-sm mt-3 leading-relaxed font-sans'>Berkaitan dengan hal tersebut kami mohon partisipasi saudara meluangkan waktu untuk menjawab pertanyaan dalam kuisioner ini, data yang telah disampaikan akan dijaga kerahasiaannya. Atas perhatian dan kerjasama yang baik serta bantuannya, kami mengucapkan terima kasih.</p>
                                    <p className='block mt-3 text-xl leading-relaxed font-sans'>🙏</p>
                                </div>
                            </div>
                            <div className='w-full items-center grid justify-items-center'>
                                {kuesionerAlumni == null ? (
                                    <form onSubmit={storeHandler}>
                                        <Button>
                                            Start 🚀
                                        </Button>
                                    </form>
                                ) : (
                                    <div>
                                        <div className='flex items-center justify-center text-sm md:text-base mt-2 mb-4 font-bold text-gray-700 tracking-tight font-sans'>Pastikan kuesioner anda lengkap . . . 😀</div>
                                        <div className='flex items-center justify-center'>
                                            <Link href={route('kuesioner.alumni.edit', kuesionerAlumni.id)} className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none'>
                                                Continue 🚀
                                            </Link>
                                        </div>
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
