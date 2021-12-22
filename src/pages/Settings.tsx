import Header from '../components/Header';
import { Icons } from '../assets/icons';
import { useState } from 'react';

interface SettingsProps {
    toggleTheme: () => void;
}

export default function Settings({ toggleTheme }: SettingsProps) {
    const [option, setOption] = useState('account');

    return (
        <div className="flex flex-col h-full antialiased bg-gray-200 dark:bg-gray-900">
            <Header className="flex-shrink-0" toggleTheme={toggleTheme} />
            <div className="h-full p-20">
                <div className="flex flex-col h-full lg:flex-row">
                    <nav className="grid justify-start w-full grid-cols-2 gap-4 lg:flex lg:flex-col lg:px-5 lg:w-72">
                        <button
                            className="flex items-center gap-2 px-5 py-3 text-lg font-semibold text-center text-gray-700 uppercase list-none transition bg-gray-100 shadow dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-gray-100 dark:bg-opacity-50 rounded-xl"
                            onClick={() => setOption('account')}
                        >
                            <Icons.User className="w-5 h-5" />
                            <span>Account</span>
                        </button>
                        <button
                            className="flex items-center gap-2 px-5 py-3 text-lg font-semibold text-center text-gray-700 uppercase list-none transition bg-gray-100 shadow dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-gray-100 dark:bg-opacity-50 rounded-xl"
                            onClick={() => setOption('security')}
                        >
                            <Icons.Security className="w-5 h-5" />
                            <span>Security</span>
                        </button>
                        <button
                            className="flex items-center gap-2 px-5 py-3 text-lg font-semibold text-center text-gray-700 uppercase list-none transition bg-gray-100 shadow dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-gray-100 dark:bg-opacity-50 rounded-xl"
                            onClick={() => setOption('interface')}
                        >
                            <Icons.Interface className="w-5 h-5" />
                            <span>Interface</span>
                        </button>
                        <button
                            className="flex items-center gap-2 px-5 py-3 text-lg font-semibold text-center text-gray-700 uppercase list-none transition bg-gray-100 shadow dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-gray-100 dark:bg-opacity-50 rounded-xl"
                            onClick={() => setOption('privacy')}
                        >
                            <Icons.Privacy className="w-5 h-5" />
                            <span>Privacy</span>
                        </button>
                    </nav>
                    <div className="w-full p-5 mt-6 bg-white dark:bg-gray-700 lg:mt-0 rounded-xl">
                        {option === 'account' && (
                            <>
                                <h2 className="inline-block px-3 py-2 text-2xl font-semibold tracking-tight shadow-md dark:bg-gray-800 rounded-xl">
                                    Account
                                </h2>
                                <div className="flex justify-between">
                                    <div className="flex flex-col w-1/2 py-10">
                                        <div className="flex items-center self-center gap-4 px-5 py-3 bg-gray-200 shadow-md dark:bg-gray-800 rounded-xl">
                                            <img
                                                src="https://avatars.githubusercontent.com/u/55157846"
                                                alt="Avatar"
                                                className="object-cover object-center w-24 h-24 mx-auto border-4 border-gray-800 rounded-full dark:border-white"
                                            />
                                            <div>
                                                <span className="block text-lg font-medium">
                                                    Gui Camargo
                                                </span>
                                                <span className="block font-medium text-gray-500 text-md">
                                                    gui@mail.com
                                                </span>
                                                <button className="px-2 mt-2 text-white rounded-full bg-sky-700">
                                                    Change avatar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <h3 className="text-lg font-medium">
                                            Edit data
                                        </h3>
                                        <hr className="mt-2 text-gray-600" />
                                        <div className="flex justify-between gap-2 mt-4">
                                            <label className="block w-1/2">
                                                <span className="block font-medium text-gray-500 dark:text-gray-200">
                                                    First name
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Your name..."
                                                    className="w-full px-3 py-2 mt-1 bg-gray-200 rounded-md dark:bg-gray-800"
                                                />
                                            </label>
                                            <label className="block w-1/2">
                                                <span className="block font-medium text-gray-500 dark:text-gray-200">
                                                    Last name
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Your name..."
                                                    className="w-full px-3 py-2 mt-1 bg-gray-200 rounded-md dark:bg-gray-800"
                                                />
                                            </label>
                                        </div>
                                        <div className="flex justify-between gap-2 mt-2">
                                            <label className="block w-1/2">
                                                <span className="block font-medium text-gray-500 dark:text-gray-200">
                                                    Birthday
                                                </span>
                                                <input
                                                    type="date"
                                                    className="w-full px-3 py-2 mt-1 bg-gray-200 rounded-md dark:bg-gray-800"
                                                />
                                            </label>
                                            <label className="block w-1/2">
                                                <span className="block font-medium text-gray-500 dark:text-gray-200">
                                                    Email
                                                </span>
                                                <input
                                                    type="email"
                                                    placeholder="me@mail.com"
                                                    className="w-full px-3 py-2 mt-1 bg-gray-200 rounded-md dark:bg-gray-800"
                                                />
                                            </label>
                                        </div>
                                        <div className="flex justify-between gap-2 mt-2">
                                            <label className="block w-1/2">
                                                <span className="block font-medium text-gray-500 dark:text-gray-200">
                                                    New password
                                                </span>
                                                <input
                                                    type="password"
                                                    placeholder="*******"
                                                    className="w-full px-3 py-2 mt-1 bg-gray-200 rounded-md dark:bg-gray-800"
                                                />
                                            </label>
                                            <label className="block w-1/2">
                                                <span className="block font-medium text-gray-500 dark:text-gray-200">
                                                    Password confirmation
                                                </span>
                                                <input
                                                    type="password"
                                                    placeholder="*******"
                                                    className="w-full px-3 py-2 mt-1 bg-gray-200 rounded-md dark:bg-gray-800"
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
                                    <h3 className="text-lg font-medium">
                                        Options
                                    </h3>
                                    <hr className="mt-2 text-gray-600" />
                                    <div className="flex items-center gap-2 mt-4">
                                        <button className="px-3 py-2 text-red-500 border-2 border-red-500 rounded-xl">
                                            Transfer data
                                        </button>
                                        <p className="flex items-center gap-1 px-3 py-2 text-gray-600 border-2 border-gray-300 dark:border-transparent dark:text-gray-100 dark:bg-gray-600 rounded-xl">
                                            <Icons.Info />
                                            Select user to inherit all of your
                                            notes and associated information
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-8">
                                        <button className="px-3 py-2 text-red-500 border-2 border-red-500 rounded-xl">
                                            Delete account
                                        </button>
                                        <p className="flex items-center gap-1 px-3 py-2 text-gray-600 border-2 border-gray-300 dark:border-transparent dark:text-gray-100 dark:bg-gray-600 rounded-xl">
                                            <Icons.Info />
                                            This option will delete all of your
                                            notes and your account permanently
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                        {option === 'interface' && (
                            <>
                                <h2>Interface</h2>
                                <div>
                                    <img
                                        src="https://avatars.githubusercontent.com/u/55157846"
                                        alt="Avatar"
                                    />
                                    <span>Gui Camargo</span>
                                </div>
                                <div>
                                    <img
                                        src="https://avatars.githubusercontent.com/u/55157846"
                                        alt="Avatar"
                                    />
                                    <span>Gui Camargo</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
