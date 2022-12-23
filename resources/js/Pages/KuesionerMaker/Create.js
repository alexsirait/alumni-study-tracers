// import React from 'react';
// import Authenticated from '@/Layouts/Authenticated';
// import { Head, Link, useForm } from '@inertiajs/inertia-react';
// import Input from '@/Components/Input';
// import Button from '@/Components/Button';

// export default function Create(props) {
//     const { data, setData, post, errors } = useForm({
//         type: '',
//         body: '',
//         tag: '',
//         option1: '',
//         option2: '',
//         option3: '',
//         option4: '',
//         option5: '',
//         option6: '',
//         option7: '',
//         option8: '',
//         option9: '',
//     })
//     const handleChange = (e) => {
//         setData(e.target.name, e.target.value)
//     }
//     const updateHandler = (e) => {
//         e.preventDefault()
//         post(route('store.kuesioner.maker'))
//     }
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
//                         <div className="p-6 bg-white border-b border-gray-200">

//                             <form onSubmit={updateHandler}>
//                                 <div className="px-4 py-3 bg-white sm:p-6">
//                                     <div className='mb-5'>
//                                         <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="body">
//                                             Question <span className='text-red-600 font-bold'>*</span>
//                                         </label>
//                                         <Input placeholder='Body' className='w-full' type='text' name='body' value={data.body} handleChange={handleChange}/>
//                                         {errors && <div className='text-red-600 mt-1'>{errors.body}</div>}
//                                     </div>
//                                     <div className='mb-5'>
//                                         <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="tag">
//                                             Tag <span className='text-red-600 font-bold'>*</span>
//                                         </label>
//                                         <select className='w-full border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='tag' onChange={handleChange} value={data.tag}>
//                                             <option>-- Pilih Tag --</option>
//                                             <option value='input'>Input</option>
//                                             <option value='select'>Select</option>
//                                             <option value='textarea'>Textarea</option>
//                                         </select>
//                                         {errors && <div className='text-red-600 mt-1'>{errors.tag}</div>}
//                                     </div>
//                                     { data.tag == 'input' && (
//                                         <div className='mb-5'>
//                                             <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="type">
//                                                 Type
//                                             </label>
//                                             <select className='w-full border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='type' onChange={handleChange} value={data.type}>
//                                                 <option>-- Pilih Type --</option>
//                                                 <option value='text'>Text</option>
//                                                 <option value='radio'>Radio</option>
//                                                 <option value='checkbox'>Checkbox</option>
//                                             </select>
//                                             {errors && <div className='text-red-600 mt-1'>{errors.type}</div>}
//                                         </div>
//                                     )}
//                                     { data.tag == 'select' || data.type == 'radio' || data.type == 'checkbox' ? (
//                                         <>
//                                             <div className='mb-5'>
//                                                 <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="option1">
//                                                     Option 1
//                                                 </label>
//                                                 <Input placeholder='Option 1' className='w-full' type='text' name='option1' value={data.option1} handleChange={handleChange}/>
//                                                 {errors && <div className='text-red-600 mt-1'>{errors.option1}</div>}
//                                             </div>
//                                             { data.option1 != '' && (
//                                                 <div className='mb-5'>
//                                                     <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="option2">
//                                                         Option 2
//                                                     </label>
//                                                     <Input placeholder='Option 2' className='w-full' type='text' name='option2' value={data.option2} handleChange={handleChange}/>
//                                                     {errors && <div className='text-red-600 mt-1'>{errors.option2}</div>}
//                                                 </div>
//                                             ) }
//                                             { data.option2 != '' && (
//                                                 <div className='mb-5'>
//                                                     <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="option3">
//                                                         Option 3
//                                                     </label>
//                                                     <Input placeholder='Option 3' className='w-full' type='text' name='option3' value={data.option3} handleChange={handleChange}/>
//                                                     {errors && <div className='text-red-600 mt-1'>{errors.option3}</div>}
//                                                 </div>
//                                             ) }
//                                             { data.option3 != '' && (
//                                                 <div className='mb-5'>
//                                                     <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="option4">
//                                                         Option 4
//                                                     </label>
//                                                     <Input placeholder='Option 4' className='w-full' type='text' name='option4' value={data.option4} handleChange={handleChange}/>
//                                                     {errors && <div className='text-red-600 mt-1'>{errors.option4}</div>}
//                                                 </div>
//                                             ) }
//                                             { data.option4 != '' && (
//                                                 <div className='mb-5'>
//                                                     <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="option5">
//                                                         Option 5
//                                                     </label>
//                                                     <Input placeholder='Option 5' className='w-full' type='text' name='option5' value={data.option5} handleChange={handleChange}/>
//                                                     {errors && <div className='text-red-600 mt-1'>{errors.option5}</div>}
//                                                 </div>
//                                             ) }
//                                             { data.option5 != '' && (
//                                                 <div className='mb-5'>
//                                                     <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="option6">
//                                                         Option 6
//                                                     </label>
//                                                     <Input placeholder='Option 6' className='w-full' type='text' name='option6' value={data.option6} handleChange={handleChange}/>
//                                                     {errors && <div className='text-red-600 mt-1'>{errors.option6}</div>}
//                                                 </div>
//                                             ) }
//                                             { data.option6 != '' && (
//                                                 <div className='mb-5'>
//                                                     <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="option7">
//                                                         Option 7
//                                                     </label>
//                                                     <Input placeholder='Option 7' className='w-full' type='text' name='option7' value={data.option7} handleChange={handleChange}/>
//                                                     {errors && <div className='text-red-600 mt-1'>{errors.option7}</div>}
//                                                 </div>
//                                             ) }
//                                             { data.option7 != '' && (
//                                                 <div className='mb-5'>
//                                                     <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="option8">
//                                                         Option 8
//                                                     </label>
//                                                     <Input placeholder='Option 8' className='w-full' type='text' name='option8' value={data.option8} handleChange={handleChange}/>
//                                                     {errors && <div className='text-red-600 mt-1'>{errors.option8}</div>}
//                                                 </div>
//                                             ) }
//                                             { data.option8 != '' && (
//                                                 <div className='mb-5'>
//                                                     <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="option9">
//                                                         Option 9
//                                                     </label>
//                                                     <Input placeholder='Option 9' className='w-full' type='text' name='option9' value={data.option9} handleChange={handleChange}/>
//                                                     {errors && <div className='text-red-600 mt-1'>{errors.option9}</div>}
//                                                 </div>
//                                             ) }
//                                         </>
//                                     ) : '' }
//                                 </div>
//                                 <div className="px-4 py-3 text-left sm:px-6">
//                                     <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2' href={route('index.kuesioner.maker')}>Show Kuesioner</Link>
//                                     <Button>
//                                         Store
//                                     </Button>
//                                 </div>
//                             </form>

//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </Authenticated>
//     );
// }

