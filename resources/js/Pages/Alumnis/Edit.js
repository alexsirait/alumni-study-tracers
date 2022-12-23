import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/inertia-react'
import FormAlumni from '@/Components/FormAlumni';

export default function Edit(props) {
    const { user } = props
    const { data, setData, put, errors } = useForm({
        identifier: user.identifier || '',
        name: user.name || '',
        prodi: user.prodi || '',
        email: user.email || '',
        telp: user.telp || '',
        kelamin: user.kelamin || '',
        ipk: user.ipk || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('alumni.update', user.id))
    }
    const handleChange = (e) => setData(e.target.name, e.target.value)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{`Edit - ${user.name}`} </h2>}
        >
            <Head title={`${user.name}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <div>
                            <FormAlumni {...{ updateHandler, handleChange, data, errors, submit: 'Update', href: route('alumni.index') }} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
