// import React from 'react';
// import Authenticated from '@/Layouts/Authenticated';
// import { Head, Link } from '@inertiajs/inertia-react';
// import Input from '@/Components/Input';

// export default function Index(props) {
//     const { kuesioners, options } = props
//     return (
//         <Authenticated
//             auth={props.auth}
//             errors={props.errors}
//             header={<h2 className="font-semibold text-xl text-gray-800 leading-tight flex items-center gap-x-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
//                         </svg>
//                         <span>Make Kuesioner</span>
//                     </h2>}
//         >
//             <Head title="Make Kuesioner" />

//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div className="block gap-x-4 justify-start p-6 bg-white border-b border-gray-200">

//                             <form>
//                                 { kuesioners.map((kuesioner) => (
//                                     <div>
//                                         <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
//                                             {kuesioner.body}
//                                             <Link as='a' href={route('edit.kuesioner.maker', kuesioner.id)} className='ml-5 text-yellow-500'>Edit</Link>
//                                             <Link href={route('delete.kuesioner.maker', kuesioner.id)} method='delete' as="button" className='ml-2 text-red-500'>Delete</Link>
//                                         </label>

//                                         { kuesioner.tag == 'input' && kuesioner.type == 'text' && (
//                                             <div className="mb-5">
//                                                 <Input className='w-full lg:w-96' type='text'/>
//                                             </div>
//                                         ) }
                                        
//                                         { kuesioner.tag == 'input' && kuesioner.type == 'radio' && (
//                                             <div className="mb-5">
//                                                 <div className='flex items-center gap-x-4'>
//                                                     {options.map(option => (
//                                                         <>
//                                                         {kuesioner.id == option.kuesioner_id && option.option != null ?
//                                                             <>
//                                                                 <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" name='asd' value={option.option} /> <span className='block text-gray-700 text-sm text-md tracking-tight font-sans'>{option.option}</span>
//                                                             </> : ''
//                                                         }
//                                                         </>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         ) }
//                                         { kuesioner.tag == 'textarea' && (
//                                             <div className="mb-5">
//                                                 <textarea />
//                                             </div>
//                                         ) }
//                                         { kuesioner.tag == 'select' && (
//                                             <div className="mb-5">
//                                                 <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' >
//                                                     {options.map(option => (
//                                                         <>
//                                                             {kuesioner.id == option.kuesioner_id && option.option != null ? (
//                                                                 <option>{option.option}</option>
//                                                                 ) : ''
//                                                             }
//                                                         </>
//                                                     ))}
//                                                 </select>
//                                             </div>
//                                         ) }
//                                         { kuesioner.tag == 'input' && kuesioner.type == 'checkbox' && (
//                                             <div className="mb-5">
//                                                 <div className='flex items-center gap-x-4'>
//                                                     {options.map(option => (
//                                                         <>
//                                                         {kuesioner.id == option.kuesioner_id && option.option != null ?
//                                                             <>
//                                                                 <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" value={option.option} /> <span className='block text-gray-700 text-sm text-md tracking-tight font-sans'>{option.option}</span>
//                                                             </> : ''
//                                                         }
//                                                         </>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         ) }
//                                     </div>
//                                 )) }
//                             </form>

//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </Authenticated>
//     );
// }

