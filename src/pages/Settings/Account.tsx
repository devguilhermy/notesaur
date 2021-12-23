import AppleIcon from '../../assets/icons/apple.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import GoogleIcon from '../../assets/icons/google.svg';
import { Icons } from '../../assets/icons';
import MicrosoftIcon from '../../assets/icons/microsoft.svg';
import { useState } from 'react';

export default function AccountSettings() {
    const [first_name, setFirstName] = useState('Guilherme');
    const [last_name, setLastName] = useState('Martins');
    const [birthday, setBirthday] = useState('1988-10-14');
    const [email, setEmail] = useState('guilherme@gmail.com');
    const [created_at, setCreatedAt] = useState('Dec 21, 2021');
    const [new_password, setNewPassword] = useState('');
    const [new_password_confirmation, setNewPasswordConfirmation] =
        useState('');

    return (
        <>
            <h2 className="inline-block text-2xl font-semibold tracking-tight">
                Account
            </h2>
            <div className="mt-6 flex flex-col xl:flex-row xl:gap-6 justify-between">
                <div className="flex flex-col sm:flex-row w-full xl:w-1/3 items-center justify-center gap-2 sm:gap-4 p-5 bg-gray-100 dark:bg-gray-700 rounded-xl xl:self-start">
                    <img
                        src="https://avatars.githubusercontent.com/u/55157846"
                        alt="Avatar"
                        className="object-cover object-center w-24 h-24 mx-auto sm:mx-0 border-4 border-gray-800 rounded-full dark:border-white"
                    />
                    <div className="text-center sm:text-left">
                        <span className="block text-lg font-medium">
                            {first_name} {last_name}
                        </span>
                        <span className="block font-medium text-gray-500 text-md leading-tight">
                            User since {created_at}
                        </span>
                        <button className="px-2 mt-2 text-white rounded-full bg-sky-700">
                            Change avatar
                        </button>
                    </div>
                </div>
                <div className="mt-6 xl:w-2/3 xl:mt-0 xl:bg-gray-100 xl:dark:bg-gray-700 xl:px-5 xl:py-3 xl:rounded-xl">
                    <h3 className="text-lg font-medium">Edit data</h3>
                    <hr className="mt-2 text-gray-600" />
                    <div className="flex flex-col lg:flex-row justify-between gap-2 mt-4">
                        <label className="block w-full lg:w-1/2">
                            <span className="block font-medium text-gray-500 dark:text-gray-200">
                                First name
                            </span>
                            <input
                                type="text"
                                placeholder="Your name..."
                                className="w-full px-3 py-2 mt-1 bg-gray-300 rounded-md dark:bg-gray-800"
                                value={first_name}
                                onChange={(event) =>
                                    setFirstName(event.target.value)
                                }
                            />
                        </label>
                        <label className="block w-full lg:w-1/2">
                            <span className="block font-medium text-gray-500 dark:text-gray-200">
                                Last name
                            </span>
                            <input
                                type="text"
                                placeholder="Your name..."
                                className="w-full px-3 py-2 mt-1 bg-gray-300 rounded-md dark:bg-gray-800"
                                value={last_name}
                                onChange={(event) =>
                                    setLastName(event.target.value)
                                }
                            />
                        </label>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-2 mt-2">
                        <label className="block w-full lg:w-1/2">
                            <span className="block font-medium text-gray-500 dark:text-gray-200">
                                Birthday
                            </span>
                            <input
                                type="date"
                                className="w-full px-3 py-2 mt-1 bg-gray-300 rounded-md dark:bg-gray-800"
                                value={birthday}
                                onChange={(event) =>
                                    setBirthday(event.target.value)
                                }
                            />
                        </label>
                        <label className="block w-full lg:w-1/2">
                            <span className="block font-medium text-gray-500 dark:text-gray-200">
                                Email
                            </span>
                            <input
                                type="email"
                                placeholder="me@mail.com"
                                className="w-full px-3 py-2 mt-1 bg-gray-300 rounded-md dark:bg-gray-800"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </label>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-2 mt-2">
                        <label className="block w-full lg:w-1/2">
                            <span className="block font-medium text-gray-500 dark:text-gray-200">
                                New password
                            </span>
                            <input
                                type="password"
                                placeholder="*******"
                                className="w-full px-3 py-2 mt-1 bg-gray-300 rounded-md dark:bg-gray-800"
                                value={new_password}
                                onChange={(event) =>
                                    setNewPassword(event.target.value)
                                }
                            />
                        </label>
                        <label className="block w-full lg:w-1/2">
                            <span className="block font-medium text-gray-500 dark:text-gray-200">
                                Password confirmation
                            </span>
                            <input
                                type="password"
                                placeholder="*******"
                                className="w-full px-3 py-2 mt-1 bg-gray-300 rounded-md dark:bg-gray-800"
                                value={new_password_confirmation}
                                onChange={(event) =>
                                    setNewPasswordConfirmation(
                                        event.target.value
                                    )
                                }
                            />
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <button className="block p-3 mt-5 bg-gray-500 rounded-full shadow">
                            <Icons.ArrowRight className="w-5 h-5 text-gray-200" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h3 className="text-lg font-medium">Social Login</h3>
                <hr className="mt-2 text-gray-600" />
                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <li className="border-2 py-6 flex flex-col items-center border-1 rounded-lg">
                        <img
                            src={GoogleIcon}
                            className="w-8 h-8"
                            alt="Google Icon"
                        />
                        <span className="mt-1 text-lg">Google</span>
                        <button className="mt-2 px-4 py-1 border-1 rounded-lg focus-outline font-medium bg-gray-300 dark:bg-gray-600">
                            Unlink
                        </button>
                    </li>
                    <li className="border-2 py-6 flex flex-col items-center border-1 rounded-lg">
                        <img
                            src={FacebookIcon}
                            className="w-8 h-8"
                            alt="Facebook Icon"
                        />
                        <span className="mt-1 text-lg">Facebook</span>
                        <button className="mt-2 px-4 py-1 border-1 bg-gray-100 rounded-lg focus-outline font-medium dark:bg-gray-700">
                            Link
                        </button>
                    </li>
                    <li className="border-2 py-6 flex flex-col items-center border-1 rounded-lg">
                        <img
                            src={MicrosoftIcon}
                            className="w-8 h-8"
                            alt="Microsoft Icon"
                        />
                        <span className="mt-1 text-lg">Microsoft</span>
                        <button className="mt-2 px-4 py-1 bg-gray-100 border-1 rounded-lg focus-outline font-medium dark:bg-gray-700">
                            Link
                        </button>
                    </li>
                    <li className="border-2 py-6 flex flex-col items-center border-1 rounded-lg">
                        <img
                            src={AppleIcon}
                            className="w-8 h-8"
                            alt="Apple Icon"
                        />
                        <span className="mt-1 text-lg">Apple</span>
                        <button className="mt-2 px-4 py-1 bg-gray-100 border-1 rounded-lg focus-outline font-medium dark:bg-gray-700">
                            Link
                        </button>
                    </li>
                </ul>
            </div>
            <div className="mt-10">
                <h3 className="text-lg font-medium">Options</h3>
                <hr className="mt-2 text-gray-600" />
                <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
                    <button className="flex-shrink-0 px-3 py-2 text-red-500 border-2 border-red-500 rounded-xl leading-tight">
                        Transfer data
                    </button>
                    <p className="flex items-center justify-between gap-2 leading-tight p-2 text-gray-600 border-2 border-gray-300 dark:border-transparent dark:text-gray-100 dark:bg-gray-600 rounded-xl">
                        <Icons.Info className="w-5 h-5 flex-shrink-0" />
                        Select user to inherit all of your notes and associated
                        information
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 mt-8">
                    <button className="flex-shrink-0 px-3 py-2 text-red-500 border-2 border-red-500 rounded-xl leading-tight">
                        Delete account
                    </button>
                    <p className="flex items-center justify-between gap-2 leading-tight p-2 text-gray-600 border-2 border-gray-300 dark:border-transparent dark:text-gray-100 dark:bg-gray-600 rounded-xl">
                        <Icons.Info className="w-5 h-5 flex-shrink-0" />
                        This option will delete all of your notes and your
                        account permanently
                    </p>
                </div>
            </div>
        </>
    );
}
