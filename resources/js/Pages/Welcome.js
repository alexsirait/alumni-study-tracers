import React, { useEffect } from 'react';
import { Link, Head, usePage } from '@inertiajs/inertia-react';
import toast, { Toaster } from 'react-hot-toast';
import Logo from '../../../public/images/polibatamLogo.png';
import Typical from 'react-typical';
import aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';

export default function Welcome(props) {
    const { flash, auth } = usePage().props;
    {
        flash.type && toast[flash.type](flash.message)
    }
    useEffect(()=>{
        aos.init({
            once: true,
        })
    })
    return (
        <>
            <Head title="Welcome" />
            <Toaster position="top-center"/>
            <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-100 text-gray-600'>
                <div>
                    <img src={Logo} className='mt-2' alt='Logo Image' style={{ width: '80px' }} />
                </div>
                <ul className='hidden md:flex'>
                    <li>
                        {auth.user
                            ? (<Link href={route('login')} className='mr-4 text-lg'>
                                Home
                            </Link>)
                            : (<Link href={route('login')} className='mr-4 text-lg'>
                                Log in
                            </Link>)
                        }
                    </li>
                </ul>
            </div>
            <div name='home' className='w-full h-screen bg-gray-100'>
                <div className='max-w-[1000px] mx-auto px-5 md:px-8 flex flex-col justify-center h-full'>
                    <div className='font-bold tracking-tight font-mono flex items-center text-sm lg:text-lg animate-bounce w-fit text-[#65b7de] mb-2'><span className='text-2xl mr-2'>👋</span>Hi, alumni</div>
                    <div className='text-2xl lg:text-5xl font-bold text-gray-800'>
                        <Typical
                            steps={['Politeknik Negeri Batam', 500]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'>
                        <h2 className='text-4xl lg:text-7xl font-bold text-gray-600' fontFamily={"Jeanne Moderno"}>
                            Tracer Study
                        </h2>
                        <p className='text-gray-600 leading-relaxed py-3 text-sm lg:text-base max-w-[700px]'>
                            Para alumni yang terhormat, saat ini kami sedang mengadakan Tracer Study kepada alumni Polibatam. Studi ini dilakukan dalam rangka mengidentifikasi keberadaan alumni setelah lulus kuliah. Tujuan studi ini untuk mengevaluasi proses dan hasil perkuliahan, penyempurnaan serta penjaminan kualitas pembelajaran di Polibatam.
                        </p>
                        {/* <p className='flex items-center text-blue-600 font-bold tracking-tighter leading-relaxed py-3 text-sm lg:text-base max-w-[700px] hover:underline w-fit'>
                            <a target='_blank' href="https://forms.gle/wsEWgaA5ymJpF1fj7">Kuesioner Calon Wisudawan</a>
                        </p> */}
                        <div>
                            <Link as='button' href={route('login')} className='text-white group px-4 lg:px-6 py-2 lg:py-3 my-1 lg:my-2 flex items-center hover:bg-[#65b7de] hover:border-[#65b7de] relative font-medium group'>
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-100 border-2 border-[#65b7de] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-[#65b7de] border-1 group-hover:bg-[#65b7de]"></span>
                                {auth.user ? <span className='relative text-white group-hover:text-white font-bold'>Home 🏠</span> : <span className='relative text-white group-hover:text-white font-bold'>Log in 🚀</span> }
                                <span className='group-hover:rotate-90 duration-300'></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center fixed inset-x-0 bottom-0 justify-start text-xs md:text-sm ml-5 md:ml-10 text-gray-800 mb-5 md:mb-10"><span className='mr-1'>Made with 💖 by</span><a target='_blank' href='https://alexsiraitnotes.vercel.app/' className='font-bold tracking-tight font-sans hover:underline'>Alex Sirait</a></div>
        </>
    );
}
