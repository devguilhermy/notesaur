import { Icons } from '../assets/icons';
import { Input } from '../components/Input';
import { useState } from 'react';

interface NewPasswordProps {}

export default function NewPassword(props: NewPasswordProps) {
    const [stage, setStage] = useState(1);

    const [email, setEmail] = useState('');
    const [new_password, setNewPassword] = useState('');
    const [new_password_confirmation, setNewPasswordConfirmation] =
        useState('');

    return (
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
            </div>
            {stage === 1 && (
                <div className="px-5 py-8 bg-gray-800 rounded-t-xl lg:w-1/2 lg:rounded-l-xl lg:rounded-tr-none">
                    <div className="max-w-sm mx-auto lg:flex lg:flex-col lg:justify-center lg:h-full">
                        <div>
                            <h2 className="text-2xl font-semibold ">
                                Forgot password
                            </h2>
                            <a
                                href="/login"
                                className="flex items-center mt-1 text-sm text-gray-400"
                            >
                                Back to login
                                <Icons.ArrowUpRight className="w-4 h-4" />
                            </a>
                            <Input
                                value={email}
                                setValue={setEmail}
                                label={'Email'}
                                className="mt-8"
                            />
                            {/* <p className="px-3 py-2 mt-2 text-center text-gray-300 bg-red-500 rounded-md shadow">
                                Wrong password!
                            </p> */}
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
                            <h2 className="text-2xl font-semibold ">
                                Forgot password
                            </h2>
                            <a
                                href="/login"
                                className="flex items-center mt-1 text-sm text-gray-400"
                            >
                                Back to login
                                <Icons.ArrowUpRight className="w-4 h-4" />
                            </a>
                            <Input
                                value={new_password}
                                setValue={setNewPassword}
                                label={'New password'}
                                className="mt-8"
                            />

                            <Input
                                value={new_password_confirmation}
                                setValue={setNewPasswordConfirmation}
                                label={'Password confirmation'}
                                className="mt-8"
                            />
                            {/* <p className="px-3 py-2 mt-2 text-center text-gray-300 bg-red-500 rounded-md shadow">
                                Wrong password!
                            </p> */}
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
            {stage === 3 && (
                <div className="px-5 py-8 bg-gray-800 rounded-t-xl lg:w-1/2 lg:rounded-l-xl lg:rounded-tr-none">
                    <div className="max-w-sm mx-auto lg:flex lg:flex-col lg:justify-center lg:h-full">
                        <div>
                            <h2 className="text-2xl font-semibold ">
                                Forgot password
                            </h2>
                            <a
                                href="/login"
                                className="flex items-center mt-1 text-sm text-gray-400"
                            >
                                Back to login
                                <Icons.ArrowUpRight className="w-4 h-4" />
                            </a>
                            <p className="p-3 mt-4 text-lg font-medium text-center text-gray-700 bg-gray-200 rounded-md shadow dark:text-gray-100 dark:bg-gray-600">
                                We sent you an e-mail to reset you password! You
                                can close this tab now.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
