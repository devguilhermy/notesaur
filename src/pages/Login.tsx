import { useEffect, useState } from 'react';

import { Icons } from '../assets/icons';
import { Input } from '../components/Input';
import { StartBanner } from '../components/StartBanner';
import { useNavigate } from 'react-router-dom';

interface LoginProps {}

export default function Login(props: LoginProps) {
    const [stage, setStage] = useState(1);
    let navigate = useNavigate();

    if (stage === 2) {
        navigate('/home');
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div className="flex flex-col justify-between h-screen max-h-screen bg-gray-200 lg:flex-row dark:bg-gray-900">
                <StartBanner />
                {stage === 1 && (
                    <div className="px-5 py-8 bg-white shadow-lg dark:bg-gray-800 rounded-t-xl lg:w-1/2 lg:rounded-l-xl lg:rounded-tr-none">
                        <div className="max-w-sm mx-auto lg:flex lg:flex-col lg:justify-center lg:h-full">
                            <div>
                                <h2 className="text-2xl font-semibold ">
                                    Welcome back! Sign in
                                </h2>
                                <a
                                    href="/sign-up"
                                    className="flex items-center text-sm text-gray-400 hover:text-gray-100 transition"
                                >
                                    Don't have an account?
                                    <Icons.ArrowUpRight className="w-4 h-4" />
                                </a>
                                <Input
                                    value={email}
                                    setValue={setEmail}
                                    label="Email"
                                    className="mt-8"
                                />
                                <Input
                                    value={password}
                                    setValue={setPassword}
                                    label={'Password'}
                                    className="mt-8"
                                />
                                <a
                                    href="/new-password"
                                    className="mt-2 block text-sm text-gray-400 hover:text-gray-100 transition"
                                >
                                    Forgot password?
                                </a>
                                <p className="px-3 py-2 mt-4 text-center text-gray-600 bg-red-400 rounded-md shadow dark:bg-red-500 dark:text-gray-300">
                                    Wrong password!
                                </p>
                                <div className="flex justify-center mt-8">
                                    <button
                                        className="block p-3 bg-gray-200 rounded-full shadow dark:bg-gray-700"
                                        onClick={() => setStage(2)}
                                    >
                                        <Icons.ArrowRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
