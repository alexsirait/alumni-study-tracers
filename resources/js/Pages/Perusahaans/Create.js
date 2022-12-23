import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/inertia-react'
import FormPerusahaan from '@/Components/FormPerusahaan';

export default function Create(props) {
    const { data, setData, post, errors } = useForm({
        identifier: '',
        name: '',
        email: '',
        telp: '',
        address: '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        post(route('perusahaan.store'))
    }
    const handleChange = (e) => setData(e.target.name, e.target.value)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create User Perusahaan</h2>}
        >
            <Head title="Create User Perusahaan" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <div>
                            <FormPerusahaan {...{ updateHandler, handleChange, data, errors, href: route('perusahaan.index') }} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
