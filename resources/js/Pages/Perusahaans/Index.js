import React, { useCallback, useEffect, useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import { debounce, pickBy } from 'lodash';
import { Inertia } from '@inertiajs/inertia';
import aos from 'aos';
import '../../../../node_modules/aos/dist/aos.css'
import { Menu } from '@headlessui/react';
import DialogModal from '@/Components/DialogModal';

export default function Users(props) {
    const { data: people, meta, filtered, attributes } = props.users;
    const [params, setParams] = useState(filtered);
    const [ pageNumber, setPageNumber] = useState([]);

    const reload = useCallback(
        debounce((query) => {
            Inertia.get(
                route('perusahaan.index'),
                {...pickBy(query), page: query.page, load: query.load},
                {
                    preserveState: true,
                    preserveScroll: true,
                }
            )
        }, 150)
        ,
        []
    )

        useEffect(() => reload(params), [params]);
        useEffect(()=>{
            let number = [];
            for(let i = attributes.per_page; i <= attributes.total/attributes.per_page ; i = i + attributes.per_page){
                number.push(i);
            }
            setPageNumber(number);
        }, [])

        const onChange = (e) => setParams({...params, [e.target.name]: e.target.value})
        const sort = (item) => {
            setParams({
                ...params,
                field: item,
                direction: params.direction == 'asc' ? 'desc' : 'asc'
            })
        }
        const [showDelete, setShowDelete] = useState(false)
        const [showDeleteAll, setShowDeleteAll] = useState(false)
        const [showExport, setShowExport] = useState(false)
        const [showDataUser, setShowDataUser] = useState(false)
        const [dataUser, setDataUser] = useState([])

        const deleteUser = (person) => {
            setDataUser(person)
            setShowDelete(true)
        }

        const showUser = (person) => {
            setDataUser(person)
            setShowDataUser(true)
        }

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
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                        </svg>
                        <span>Users Perusahaan</span>
                    </h2>}
        >
            <Head title="Users Perusahaan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end">
                        <div className='w-1/2'>
                            <div className="flex item-center justify-start gap-x-2 mb-6">
                                <Link href={route('perusahaan.create')} className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                </Link>
                                <Menu as='div' className='relative'>
                                    <Menu.Button className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </Menu.Button>
                                    <Menu.Items as='div' className='absolute left-20 bg-white w-52 border shadow-sm rounded-lg py-0.5 top-0'>
                                        <Menu.Item>
                                            <button className='w-full text-left py-2.5 px-4 block hover:bg-gray-50' onClick={(e)=>setShowExport(true)}>
                                                <div className='flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                                                    </svg>
                                                    <span>Export</span>
                                                </div>
                                            </button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <a className='py-2.5 px-4 block hover:bg-gray-50' href={route('import.perusahaan.create')}>
                                                <div className='flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span>Import</span>
                                                </div>
                                            </a>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button className='w-full text-left py-2.5 px-4 block hover:bg-gray-50' onClick={(e)=>setShowDeleteAll(true)}>
                                                <div className='flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    <span>Delete All</span>
                                                </div>
                                            </button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <a className='py-2.5 px-4 block hover:bg-gray-50' href="https://docs.google.com/spreadsheets/d/1CCGwEFqqhKdkS6cxGUvwISex5WH5rF3v/export?formatxlsx&#gid=192893783" target="_blank">
                                                <div className='flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                                    </svg>
                                                    <span>Template Import</span>
                                                </div>
                                            </a>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>

                                {/* Modal */}
                                {showExport && 
                                    <DialogModal
                                        svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                            </svg>}
                                        content='Are you sure you want to export all Perusahaan data ?'
                                    >
                                        <button onClick={(e)=>setShowExport(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                        <a href={route('perusahaan.export')} className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none' onClick={(e)=>setShowExport(false)}>
                                            Export
                                        </a>
                                    </DialogModal>
                                }
                                
                                {showDeleteAll && 
                                    <DialogModal 
                                        svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>}
                                        content='Are you sure you want to delete all Perusahaan users ?'
                                    >
                                        <button onClick={(e)=>setShowDeleteAll(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                        <Link method='delete' as="button" href={route('perusahaan.alldelete')} className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none' onClick={(e)=>setShowDeleteAll(false)}>
                                            Delete
                                        </Link>
                                    </DialogModal>
                                }
                                {showDelete && 
                                    <DialogModal
                                        svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>}
                                        content='Are you sure you want to delete users ?'    
                                    >
                                        <span className='block font-bold mb-3 text-md tracking-tight font-sans p-2 border rounded-md'>{dataUser.identifier} - {dataUser.name}</span>
                                        <button onClick={(e)=>setShowDelete(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                        <Link onClick={(e)=>setShowDelete(false)} className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none' href={route('perusahaan.destroy', dataUser.id)} method='delete' as="button">
                                            Delete
                                        </Link>
                                    </DialogModal>
                                }
                                {showDataUser && 
                                    <DialogModal 
                                        svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                        </svg>}
                                    >
                                        <h1 className='block mb-3 text-md tracking-tight font-sans font-semibold'>Show - {dataUser.name}</h1>
                                        <div className='flex items-start text-left mb-4 border rounded-md p-2'>
                                            <table className="flex items-center px-4">
                                                <tbody>
                                                    <tr>
                                                        <td className='text-gray-700 text-md font-semibold' width={`130px`}>ID Perusahaan</td>
                                                        <td>:</td>    
                                                        <td className='px-2 py-1 text-gray-800 text-md font-bold'>{dataUser.identifier}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-gray-700 text-md font-semibold'>Nama</td>
                                                        <td>:</td>    
                                                        <td className='px-2 py-1 text-gray-800 text-md font-bold'>{dataUser.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-gray-700 text-md font-semibold'>Email</td>
                                                        <td>:</td>    
                                                        <td className='px-2 py-1 text-gray-800 text-md font-bold'>{dataUser.email}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table className="flex items-center">
                                                <tbody>
                                                    <tr>
                                                        <td className='text-gray-700 text-md font-semibold' width={`130px`}>Telp</td>
                                                        <td>:</td>    
                                                        <td className='px-2 py-1 text-gray-800 text-md font-bold'>{dataUser.telp}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-gray-700 text-md font-semibold'>Address</td>
                                                        <td>:</td>    
                                                        <td className='px-2 py-1 text-gray-800 text-md font-bold'>{dataUser.address}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <button onClick={(e)=>setShowDataUser(false)} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</button>
                                    </DialogModal>
                                }
                                {/* Modal */}
                                
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex item-center justify-end gap-x-2 mb-6">
                                <select name="load" onChange={onChange} value={params.load} className='w-24 h-10 pl-3 pr-6 text-base text-gray-800 border-0 rounded-md shadow-md appearance-none focus:shadow-outline' >
                                    {attributes.total < 100 && 
                                        (<option>10</option>)
                                    }
                                    {pageNumber.map((item,index) => <option value={item} key={index}>{item}</option>)}
                                </select>
                                <div className='flex items-center gap-x-2 rounded-lg shadow-md bg-white px-2 focus-within:ring-0 transition duration-150 ease-in '>
                                    <svg className="w-5 h-5 inline text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    <input placeholder='Search . . .' type="text" name="search" id="search" onChange={(e) => setParams({...params, search: e.target.value, page: 1})} value={params.search} className="border-0 focus:ring-0 form-text w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="-my-2 sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    #
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    <div className='cursor-pointer flex items-center gap-x-2' onClick={() => sort('identifier')}>
                                                        ID Perusahaan

                                                        { 
                                                            params.direction == 'asc' 
                                                            ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg> 
                                                            : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                        }
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    <div className='cursor-pointer flex items-center gap-x-2' onClick={() => sort('name')}>
                                                        Name

                                                        { 
                                                            params.direction == 'asc' 
                                                            ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg> 
                                                            : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                        }
                                                    </div>
                                                </th>
                                                <th scope="col" className='relative px-6 py-3'>
                                                    <span className='sr-only'>Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {people.map((person, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {meta.from + index}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {person.identifier}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {person.name}
                                                    </td>
                                                    <td>
                                                        <Menu>
                                                            <Menu.Button as='button' className='' >
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                                </svg>
                                                            </Menu.Button>
                                                            <div className='relative'>
                                                                <Menu.Items as='div' className='absolute right-32 bg-white w-52 border shadow-sm rounded-lg py-0.5 top-0'>
                                                                    <Menu.Item>
                                                                        <button onClick={() => showUser(person)} className='w-full text-left py-2.5 px-4 block hover:bg-gray-50'>
                                                                            <div className='flex items-center gap-x-2'>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                                                </svg>
                                                                                <span>Show</span>
                                                                            </div>
                                                                        </button>
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        <Link as='a' className='py-2.5 px-4 block hover:bg-gray-50' href={route('perusahaan.edit', person.id)}>
                                                                            <div className='flex items-center gap-x-2'>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                                                </svg>
                                                                                <span>Edit</span>
                                                                            </div>
                                                                        </Link>
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        <button onClick={() => deleteUser(person)} className='w-full text-left py-2.5 px-4 block hover:bg-gray-50'>
                                                                            <div className='flex items-center gap-x-2'>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                                                </svg>
                                                                                <span>Delete</span>
                                                                            </div>
                                                                        </button>
                                                                    </Menu.Item>
                                                                </Menu.Items>
                                                            </div>
                                                        </Menu>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className='flex items-center gap-x-1 mt-10'>
                        {
                            meta.links.map((item, index) => (
                                <button key={index} disabled={item.url == null ? true : false} className={`${item.url == null ? 'text-gray-700 cursor-default mx-2 font-sans' : 'w-12 h-9 text-gray-800 rounded-lg flex items-center justify-center shadow-md font-sans bg-white'} ${item.active && 'bg-gray-50/50 text-gray-800 cursor-default font-sans'}`} href={item.url || ''} onClick={() => setParams({...params, page: new URL(item.url).searchParams.get('page')})}>{item.label}</button>    
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Authenticated>
    );
}
