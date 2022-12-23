import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/inertia-react'
import FormAlumni from '@/Components/FormAlumni';

export default function Edit(props) {
    const { auth } = usePage().props;
    const { data, setData, put, errors } = useForm({
        identifier: auth.user.identifier || '',
        name: auth.user.name || '',
        prodi: auth.user.prodi || '',
        email: auth.user.email || '',
        telp: auth.user.telp || '',
        kelamin: auth.user.kelamin || '',
        ipk: auth.user.ipk || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('alumniMe.update', auth.user.identifier))
    }
    const handleChange = (e) => setData(e.target.name, e.target.value)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                        <span>{`Edit - ${auth.user.name}`}</span> 
                    </h2>}
        >
            <Head title={`${auth.user.name}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <div>
                            <FormAlumni {...{ updateHandler, handleChange, data, errors, submit: 'Update', href: route('dashboard'), alumni: true }} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
