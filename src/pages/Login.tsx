import { useEffect, useState } from 'react';

import { Icons } from '../assets/icons';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
    toggleTheme: () => void;
}

export default function Login({ toggleTheme }: LoginProps) {
    const [stage, setStage] = useState(1);
    let navigate = useNavigate();

    if (stage === 2) {
        navigate('/home');
    }

    return (
        <>
            <div className="flex flex-col justify-between h-screen max-h-screen bg-gray-200 lg:flex-row dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center flex-1 lg:w-1/2">
                    <div className="flex items-center">
                        <span>
                            <Icons.Note className="w-8 h-8" />
                        </span>
                        <span className="ml-1 text-3xl font-black dark:text-white">
                            NOTE
                        </span>
                        <span className="text-3xl font-light dark:text-white">
                            SAUR
                        </span>
                    </div>
                    <p className="text-xl">
                        Note-taking has never been so easy!
                    </p>
                </div>
                {stage === 1 && (
                    <div className="px-5 py-8 bg-white shadow-lg dark:bg-gray-800 rounded-t-xl lg:w-1/2 lg:rounded-l-xl lg:rounded-tr-none">
                        <div className="max-w-sm mx-auto lg:flex lg:flex-col lg:justify-center lg:h-full">
                            <div>
                                <h2 className="text-2xl font-semibold ">
                                    Login
                                </h2>
                                <a
                                    href="/sign-up"
                                    className="flex items-center mt-1 text-sm text-gray-400"
                                >
                                    Don't have an account?
                                    <Icons.ArrowUpRight className="w-4 h-4" />
                                </a>
                                <label className="block mt-2">
                                    <span className="block font-medium text-gray-600 dark:text-gray-200">
                                        E-mail
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="me@mail.com"
                                        className="w-full px-3 py-2 mt-1 bg-gray-100 rounded-md dark:bg-gray-700"
                                    />
                                </label>
                                <label className="block mt-2">
                                    <span className="block font-medium text-gray-600 dark:text-gray-200">
                                        Password
                                    </span>
                                    <input
                                        type="password"
                                        placeholder="*******"
                                        className="w-full px-3 py-2 mt-1 bg-gray-100 rounded-md dark:bg-gray-700"
                                    />
                                </label>
                                <div className="mt-2">
                                    <a
                                        href="/new-password"
                                        className="block text-sm text-gray-400"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <p className="px-3 py-2 mt-2 text-center text-gray-600 bg-red-400 rounded-md shadow dark:bg-red-500 dark:text-gray-300">
                                    Wrong password!
                                </p>
                                <div className="flex justify-center">
                                    <button
                                        className="block p-3 mt-5 bg-gray-200 rounded-full shadow dark:bg-gray-700"
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
