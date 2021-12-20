import { Icons } from '../assets/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface SignUpProps {
    toggleTheme: () => void;
}

export default function SignUp({ toggleTheme }: SignUpProps) {
    const [stage, setStage] = useState(1);

    let navigate = useNavigate();

    if (stage === 3) {
        navigate('/home');
    }

    return (
        <div className="flex flex-col justify-between h-screen bg-gray-200 lg:flex-row dark:bg-gray-900">
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
            </div>
            {stage === 1 && (
                <div className="px-5 py-8 bg-gray-800 rounded-t-xl lg:w-1/2 lg:rounded-l-xl lg:rounded-tr-none">
                    <div className="max-w-sm mx-auto lg:flex lg:flex-col lg:justify-center lg:h-full">
                        <div>
                            <h2 className="text-2xl font-semibold ">Sign Up</h2>
                            <a
                                href="/login"
                                className="flex items-center mt-1 text-sm text-gray-400"
                            >
                                Already have an account?
                                <Icons.ArrowUpRight className="w-4 h-4" />
                            </a>
                            <label className="block mt-2">
                                <span className="block font-medium text-gray-200 dark:text-gray-500">
                                    First name
                                </span>
                                <input
                                    type="text"
                                    placeholder="Your name..."
                                    className="w-full px-3 py-2 mt-1 bg-gray-100 rounded-md dark:bg-gray-700"
                                />
                            </label>
                            <label className="block mt-2">
                                <span className="block font-medium text-gray-200 dark:text-gray-500">
                                    Last name
                                </span>
                                <input
                                    type="text"
                                    placeholder="Your name..."
                                    className="w-full px-3 py-2 mt-1 bg-gray-100 rounded-md dark:bg-gray-700"
                                />
                            </label>
                            <label className="block mt-2">
                                <span className="block font-medium text-gray-200 dark:text-gray-500">
                                    Birthday
                                </span>
                                <input
                                    type="date"
                                    className="w-full px-3 py-2 mt-1 bg-gray-100 rounded-md dark:bg-gray-700"
                                />
                            </label>
                            <div className="flex justify-center">
                                <button
                                    className="block p-3 mt-5 bg-gray-700 rounded-full shadow"
                                    onClick={() => setStage(2)}
                                >
                                    <Icons.ArrowRight className="w-5 h-5 text-gray-200" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {stage === 2 && (
                <div className="px-5 py-8 bg-gray-800 rounded-t-xl lg:w-1/2 lg:rounded-l-xl lg:rounded-tr-none">
                    <div className="max-w-sm mx-auto lg:flex lg:flex-col lg:justify-center lg:h-full">
                        <div>
                            <h2 className="text-2xl font-semibold ">Sign Up</h2>
                            <div className="mt-1">
                                <a
                                    href="/login"
                                    className="flex items-center text-sm text-gray-400"
                                >
                                    Already have an account?
                                    <Icons.ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                            <label className="block mt-2">
                                <span className="block font-medium text-gray-200 dark:text-gray-500">
                                    E-mail
                                </span>
                                <input
                                    type="text"
                                    placeholder="me@mail.com"
                                    className="w-full px-3 py-2 mt-1 bg-gray-100 rounded-md dark:bg-gray-700"
                                />
                            </label>
                            <label className="block mt-2">
                                <span className="block font-medium text-gray-200 dark:text-gray-500">
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
                                    href="/"
                                    className="flex items-center text-sm text-gray-400"
                                >
                                    Forgot password?
                                    <Icons.ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                            <p className="px-3 py-1 mt-2 text-center text-gray-300 bg-red-500 rounded-md shadow bg-opacity-80">
                                E-mail is in use!
                            </p>
                            <div className="flex justify-between">
                                <button
                                    className="block p-3 mt-5 bg-gray-700 rounded-full shadow"
                                    onClick={() => setStage(1)}
                                >
                                    <Icons.ArrowLeft className="w-5 h-5 text-gray-200" />
                                </button>
                                <button
                                    className="block p-3 mt-5 bg-gray-700 rounded-full shadow"
                                    onClick={() => setStage(3)}
                                >
                                    <Icons.ArrowRight className="w-5 h-5 text-gray-200" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
