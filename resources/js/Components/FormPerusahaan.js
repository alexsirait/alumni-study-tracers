import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import Button from './Button'
import Input from './Input'

export default function FormPerusahaan({ updateHandler, handleChange, data, errors, submit = 'Store', perusahaan = false, href }) {
  return (
    <div>
        <form onSubmit={updateHandler}>
            <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="identifier">
                            ID Perusahaan <span className='text-red-600 font-bold'>*</span>
                        </label>
                        { perusahaan ? (
                            <input placeholder='ID Perusahaan' disabled className='w-full bg-gray-100/50 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' type='text' name='identifier' value={data.identifier}/>
                        ) : (
                            <Input placeholder='e.g. 1234567890' className='w-full' type='text' name='identifier' value={data.identifier} handleChange={handleChange}/>
                        ) }
                        {errors && <div className='text-red-600 mt-1'>{errors.identifier}</div>}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="name">
                            Name Perusahaan <span className='text-red-600 font-bold'>*</span>
                        </label>
                        <Input placeholder='e.g. PT Jaya Selalu' className='w-full' type='text' name='name' value={data.name} handleChange={handleChange}/>
                        {errors && <div className='text-red-600 mt-1'>{errors.name}</div>}
                    </div>
                    <div className="col-span-6 sm:col-span-3 block items-center">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                            Email <span className='text-red-600 font-bold'>*</span>
                        </label>
                        <Input placeholder='e.g. ptjaya@jayaselalu.com' className="w-full" type='text' name='email' value={data.email} handleChange={handleChange}/>
                        {errors && <div className='text-red-600 mt-1'>{errors.email}</div>}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="telp">
                            Telp <span className='text-red-600 font-bold'>*</span>
                        </label>
                        <Input placeholder='e.g. (0770) 611178' className='w-full' type='text' name='telp' value={data.telp} handleChange={handleChange}/>
                        {errors && <div className='text-red-600 mt-1'>{errors.telp}</div>}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="address">
                            Address <span className='text-red-600 font-bold'>*</span>
                        </label>
                        <Input placeholder='e.g. Kav. Sei Tering Blok B2 No.27' className='w-full' type='text' name='address' value={data.address} handleChange={handleChange}/>
                        {errors && <div className='text-red-600 mt-1'>{errors.address}</div>}
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
