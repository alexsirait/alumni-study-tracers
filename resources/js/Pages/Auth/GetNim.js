import React, { useCallback, useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/inertia-react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { debounce, pickBy } from 'lodash';
import { Inertia } from '@inertiajs/inertia';

export default function ForgotPassword(props) {
    const { data: people, meta, filtered, attributes } = props.users;
    const [params, setParams] = useState(filtered);
    const [ pageNumber, setPageNumber] = useState([]);

    const reload = useCallback(
        debounce((query) => {
            Inertia.get(
                route('get.nim'),
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
    useEffect(() => {
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

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <Head title="Get NIM" />
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-24 h-24 mt-3" />
                </Link>
            </div>
            <div className='container mx-auto w-full bg-white shadow-md overflow-hidden sm:rounded-lg mt-6 px-6 py-4 mb-12'>
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
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                <div className='cursor-pointer flex items-center gap-x-2' onClick={() => sort('identifier')}>
                                                    NIM

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
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y text-xs lg:text-base divide-gray-200">
                                        {people.map((person, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {person.identifier}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {person.name}
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
                <div className='grid justify-end mt-5'>
                    <Link href={route('login')} className="font-bold text-blue-500 underline underline-offset-1 tracking-tighter font-sans">
                        Back to Login page.
                    </Link>
                </div>
            </div>
        </div>
    );
}
