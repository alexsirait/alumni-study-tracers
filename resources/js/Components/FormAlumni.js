import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import Button from './Button'
import Input from './Input'

export default function FormAlumni({ updateHandler, handleChange, data, errors, submit = 'Store', href, alumni = false }) {
  return (
    <div>
        <form onSubmit={updateHandler}>
            <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="identifier">
                            NIM <span className='text-red-600 font-bold'>*</span>
                        </label>
                        { alumni ? (
                            <input placeholder='NIM' disabled className='w-full bg-gray-100/50 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' type='text' name='identifier' value={data.identifier}/>
                        ) : (
                            <Input placeholder='e.g. 1234567890' className='w-full' type='text' name='identifier' value={data.identifier} handleChange={handleChange}/>
                        ) }
                        {errors && <div className='text-red-600 mt-1'>{errors.identifier}</div>}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="name">
                            Name <span className='text-red-600 font-bold'>*</span>
                        </label>
                        <Input placeholder='e.g. Alex Sirait' className='w-full' type='text' name='name' value={data.name} handleChange={handleChange}/>
                        {errors && <div className='text-red-600 mt-1'>{errors.name}</div>}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="prodi">
                            Prodi <span className='text-red-600 font-bold'>*</span>
                        </label>
                        <select className='w-full border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='prodi' onChange={handleChange} value={data.prodi}>
                            <option>-- Pilih Prodi --</option>
                            <option>Teknik Informatika</option> <option>Teknik Geomatika</option> <option>Animasi</option> <option>Teknik Multimedia dan Jaringan</option> <option>Rekayasa Keamanan Siber</option> <option>Rekayasa Perangkat Lunak</option>
                            <option>Akuntansi</option> <option>Akuntansi Manajerial</option> <option>Administrasi Bisnis Terapan</option> <option>Logistik Perdagangan Internasional</option> <option>Teknik Elektronika Manufaktur</option> <option>Teknik Elektronika</option>
                            <option>Teknik Instrumentasi</option> <option>Teknik Mekatronika</option> <option>Teknologi Rekayasa Pembangkit Energi</option> <option>Teknik Robotika</option> <option>Teknik Mesin</option> <option>Teknik Perawatan Pesawat Udara</option>
                            <option>Teknik Perencanaan dan Konstruksi Kapal</option>
                        </select>
                        {errors && <div className='text-red-600 mt-1'>{errors.prodi}</div>}
                    </div>
                    <div className="col-span-6 sm:col-span-3 block items-center">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                            Email <span className='text-red-600 font-bold'>*</span>
                        </label>
                        <Input placeholder='e.g. alexsirait1001@gmail.com' className="w-full" type='text' name='email' value={data.email} handleChange={handleChange}/>
                        {errors && <div className='text-red-600 mt-1'>{errors.email}</div>}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="ipk">
                            IPK <span className='text-red-600 font-bold'>*</span>
                        </label>
                        { alumni ? (
                            <input placeholder='IPK' disabled className='w-full bg-gray-100/50 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' type='text' name='ipk' value={data.ipk}/>
                        ) : (
                            <Input placeholder='e.g. 3.89' className='w-full' type='text' name='ipk' value={data.ipk} handleChange={handleChange}/>
                        ) }
                        {errors && <div className='text-red-600 mt-1'>{errors.ipk}</div>}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="telp">
                            Telp <span className='text-red-600 font-bold'>*</span>
                        </label>
                        <Input placeholder='e.g. 082172433434' className='w-full' type='text' name='telp' value={data.telp} handleChange={handleChange}/>
                        {errors && <div className='text-red-600 mt-1'>{errors.telp}</div>}
                    </div>
                    <div className="col-span-6 sm:col-span-8 lg:col-span-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="kelamin">
                            Jenis kelamin <span className='text-red-600 font-bold'>*</span>
                        </label>
                        <div className='flex items-center gap-x-4' onChange={handleChange} value={data.kelamin}>
                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Laki-laki" name="kelamin" id='kelamin1' defaultChecked={data.kelamin === 'Laki-laki' && true} /> <label htmlFor='kelamin1' className='block text-gray-700 text-sm text-md tracking-tight font-sans'>Laki-Laki</label>
                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Perempuan" name="kelamin" id='kelamin2' defaultChecked={data.kelamin === 'Perempuan' && true} /> <label htmlFor='kelamin2' className='block text-gray-700 text-sm text-md tracking-tight font-sans'>Perempuan</label>
                        </div>
                        {errors && <div className='text-red-600 mt-1'>{errors.kelamin}</div>}
                    </div>
                </div>
            </div>
            <div className="px-4 py-3 text-left sm:px-6">
                <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2' href={href}>Cancel</Link>
                <Button>
                    {submit}
                </Button>
            </div>
        </form>
    </div>
  )
}
