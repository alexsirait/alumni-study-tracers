import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'
import FormPerusahaan from '@/Components/FormPerusahaan';

export default function Edit(props) {
    const { auth } = usePage().props;
    const { data, setData, put, errors } = useForm({
        identifier: auth.user.identifier || '',
        name: auth.user.name || '',
        email: auth.user.email || '',
        telp: auth.user.telp || '',
        address: auth.user.address || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('perusahaanMe.update', auth.user.id))
    }
    const handleChange = (e) => setData(e.target.name, e.target.value)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{`Edit - ${auth.user.name}`} </h2>}
        >
            <Head title={`${auth.user.name}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <div>
                            <FormPerusahaan {...{ updateHandler, handleChange, data, errors, submit: 'Update', perusahaan: true, href: route('dashboard') }} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
