import React, { Fragment, useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/inertia-react';
import toast, { Toaster } from 'react-hot-toast';
import successIMG from '../../../public/images/givsuccess2.gif'
import successIMG2 from '../../../public/images/giconfit.gif'
import { Menu, Transition } from '@headlessui/react';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { flash, can } = usePage().props;

    {
        flash.type && toast[flash.type](flash.message)
    }

    {
        flash.type2 && toast((t) => (
            <span>
                <div className="overflow-hidden bg-[url('https://cliply.co/wp-content/uploads/2019/08/371908020_CONFETTI_400px.gif')]">
                <div className='-mt-72'>
                    <img src={successIMG2} alt="bg-confit" />
                </div>
                <div className='flex items-center justify-center -mb-5 '>
                    <img className='w-52' src={successIMG} alt="Success . . ." />
                </div>
                <div className='flex items-center justify-center mb-5 mt-2 text-3xl'>🎉🎉🎉</div>
              <div className='text-sm md:text-base leading-relaxed font-sans text-center tracking-tight'>🙏 Terima kasih <span className='font-bold'>{auth.user.name} {auth.user.identifier}</span> atas partisipasinya. Semoga sehat selalu dan sukses terus ya . . . 😉</div>
              <div className='flex items-center justify-end mt-3'>
                <button className='flex items-center text-sm tracking-tighter bg-gray-200 p-1 rounded-md font-thin' onClick={() => toast.dismiss(t.id)}>
                    Dismiss
                </button>
              </div>
              </div>
            </span>
        ));
    }
    
    const DropdownLink = ({ as = 'a', method = 'get', className = '', href, children  }) => {
        return (
          <Menu.Item>
            <Link className={`${className} w-full text-left px-2 py-2 block text-sm hover:bg-gray-100`} as={as} method={method} href={href} >{children}</Link>
          </Menu.Item>
        )
      }

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="w-14 h-14 flex items-center" />
                                </Link>
                            </div>

                            <Toaster position="top-center"/>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard') | route().current('perusahaanMe.edit') | route().current('alumniMe.edit')}>
                                    Home
                                </NavLink>
                                {can.admin && 
                                    <NavLink href={route('alumni.index')} active={route().current('alumni.index') | route().current('alumni.create') | route().current('alumni.show') | route().current('alumni.edit')}>
                                        Users Alumni
                                    </NavLink>
                                }
                                {can.admin && 
                                    <NavLink href={route('perusahaan.index')} active={route().current('perusahaan.index') | route().current('perusahaan.create') | route().current('perusahaan.show') | route().current('perusahaan.edit')}>
                                        Users Perusahaan
                                    </NavLink>
                                }
                                {/* {can.admin && 
                                    <NavLink href={route('create.kuesioner.maker')} active={route().current('create.kuesioner.maker')}>
                                        Make Kuesioner
                                    </NavLink>
                                } */}
                                {can.alumni && 
                                    <NavLink href={route('kuesioner.alumni.index')} active={route().current('kuesioner.alumni.index') | route().current('kuesioner.alumni.edit') | route().current('kuesioner.alumni.edit2') | route().current('kuesioner.alumni.edit3') | route().current('kuesioner.alumni.edit4') | route().current('kuesioner.alumni.edit5') | route().current('kuesioner.alumni.edit6') | route().current('kuesioner.alumni.edit7')}>
                                        Kuesioner
                                    </NavLink>
                                }
                                {can.perusahaan && 
                                    <NavLink href={route('kuesioner.perusahaan.index')} active={route().current('kuesioner.perusahaan.index') | route().current('kuesioner.perusahaan.edit') | route().current('kuesioner.perusahaan.edit2')}>
                                        Kuesioner
                                    </NavLink>
                                }
                                {can.admin && 
                                    <NavLink href={route('export.kuesioner')} active={route().current('export.kuesioner') | route().current('kuesioner.alumni.export.select')}>
                                        Export Kuesioner
                                    </NavLink>
                                }
                                {can.admin && 
                                    <NavLink href={route('export.riwayatkerja')} active={route().current('export.riwayatkerja')}>
                                        Export Riwayat Kerja
                                    </NavLink>
                                }
                                {can.alumni && 
                                    <NavLink href={route('riwayatkerja.index')} active={route().current('riwayatkerja.index') | route().current('riwayatkerja.create') | route().current('riwayatkerja.show') | route().current('riwayatkerja.edit')}>
                                        Riwayat Kerja
                                    </NavLink>
                                }
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            <div className='flex items-center gap-x-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                <span>Log Out</span>
                                            </div>
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                        <Menu as='div' className='flex lg:hidden items-center' >
                            <Menu.Button>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items as={`div`} className='divide-y bg-white py-0.5 w-52 right-12 top-4 rounded-lg z-50 absolute shadow-sm border'>
                                    <div className='py-0.5'>
                                        <DropdownLink href={`/`}>Tracer Study</DropdownLink>
                                    </div>
                                    <>
                                        <div className='py-0.5'>
                                            <DropdownLink href={`#`} className="flex items-center gap-x-2 bg-gray-200/50" >{auth.user.name}</DropdownLink>
                                            { !can.admin && (
                                                <>
                                                    { can.alumni && 
                                                        <DropdownLink href={route('alumniMe.edit', auth.user.identifier)}>Edit Data Pribadi</DropdownLink>
                                                    }
                                                    { can.perusahaan && 
                                                        <DropdownLink href={route('perusahaanMe.edit', auth.user.identifier)}>Edit Data Perusahaan</DropdownLink>
                                                    }
                                                    <DropdownLink href={`/home`}>Home</DropdownLink> 
                                                </>
                                            )}
                                        </div>
                                        { !can.admin && (
                                            <>
                                                <div className='py-0.5'>
                                                    { can.alumni && 
                                                        <DropdownLink href='/kuesioneralumni-start'>Kuesioner</DropdownLink>
                                                    }
                                                    { can.perusahaan && 
                                                        <DropdownLink href='/kuesionerperusahaan-start'>Kuesioner</DropdownLink>
                                                    }
                                                </div>
                                            </>
                                        ) }
                                        <DropdownLink href={`/logout`} as='button' method='post'>Logout</DropdownLink>
                                    </>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
