import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="identifier" value="Identifier" />

                    <Input
                        placeholder='Identifier'
                        type="text"
                        name="identifier"
                        value={data.identifier}
                        className="mt-1 block w-full"
                        autoComplete="identifier"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        placeholder='Password'
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center mt-4 justify-between">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <Link href={route('get.nim')} className="font-bold text-blue-500 underline underline-offset-1 tracking-tighter font-sans">
                        Forgot your NIM?
                    </Link>
                </div>

                <div className="flex items-center justify-start mt-4">
                    {/* {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Forgot your password?
                        </Link>
                    )} */}

                    <Button className="" processing={processing}>
                        Log in
                    </Button>
                </div>
            </form>
            <div className="flex items-center fixed inset-x-0 bottom-0 justify-start text-xs md:text-sm ml-5 md:ml-10 text-gray-800 mb-5 md:mb-10"><span className='mr-1'>Made with 💖 by</span><a target='_blank' href='https://alexsiraitnotes.vercel.app/' className='font-bold tracking-tight font-sans hover:underline'>Alex Sirait</a></div>
        </Guest>
    );
}
