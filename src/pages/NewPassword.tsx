import { Icons } from '../assets/icons';
import { Input } from '../components/Input';
import { StartBanner } from '../components/StartBanner';
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
            <StartBanner />
            {stage === 1 && (
                <div className="px-5 py-8 bg-gray-800 rounded-t-xl lg:w-1/2 lg:rounded-l-xl lg:rounded-tr-none">
                    <div className="max-w-sm mx-auto lg:flex lg:flex-col lg:justify-center lg:h-full">
                        <div>
                            <h2 className="text-2xl font-semibold ">
                                Forgot your password?
                            </h2>
                            <h3 className="text-xl font-medium">
                                No problem, let's reset it
                            </h3>
                            <a
                                href="/login"
                                className="flex items-center mt-2 text-sm text-gray-400"
                            >
                                Back to login
                                <Icons.ArrowUpRight className="w-4 h-4" />
                            </a>
                            <Input
                                value={email}
                                setValue={setEmail}
                                label={"What's your email?"}
                                className="mt-8"
                            />
                            {/* <p className="px-3 py-2 mt-2 text-center text-gray-300 bg-red-500 rounded-md shadow">
                                Wrong password!
                            </p> */}
                            <div className="flex justify-center mt-8">
                                <button
                                    className="block p-3 bg-gray-700 rounded-full shadow"
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
                                Forgot your password?
                            </h2>
                            <h3 className="text-xl font-medium">
                                No problem, let's reset it
                            </h3>
                            <a
                                href="/login"
                                className="flex items-center mt-2 text-sm text-gray-400"
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
                            <div className="flex justify-between mt-8">
                                <button
                                    className="block p-3 bg-gray-700 rounded-full shadow"
                                    onClick={() => setStage(1)}
                                >
                                    <Icons.ArrowLeft className="w-5 h-5 text-gray-200" />
                                </button>
                                <button
                                    className="block p-3 bg-gray-700 rounded-full shadow"
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
                                Forgot your password?
                            </h2>
                            <h3 className="text-xl font-medium">
                                No problem, let's reset it
                            </h3>
                            <a
                                href="/login"
                                className="flex items-center mt-2 text-sm text-gray-400"
                            >
                                Back to login
                                <Icons.ArrowUpRight className="w-4 h-4" />
                            </a>
                            <p className="p-3 mt-4 text-lg font-medium text-center text-gray-700 bg-gray-200 rounded-md shadow dark:text-gray-100 dark:bg-gray-700">
                                We sent you an e-mail to confirm this change!
                                You can close this tab now.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
