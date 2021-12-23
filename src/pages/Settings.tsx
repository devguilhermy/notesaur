import Header from '../components/Header';
import { Icons } from '../assets/icons';
import { dateFormatter } from '../utils/utils';
import { useState } from 'react';

interface SettingsProps {
    toggleTheme: () => void;
}

export default function Settings({ toggleTheme }: SettingsProps) {
    const [option, setOption] = useState('account');

    const [first_name, setFirstName] = useState('Guilherme');
    const [last_name, setLastName] = useState('Martins');
    const [birthday, setBirthday] = useState('1988-10-14');
    const [email, setEmail] = useState('guilherme@gmail.com');
    const [created_at, setCreatedAt] = useState('Dec 21, 2021');
    const [new_password, setNewPassword] = useState('');
    const [new_password_confirmation, setNewPasswordConfirmation] =
        useState('');

    return (
        <div className="flex flex-col h-full antialiased bg-gray-200 dark:bg-gray-900">
            <Header className="flex-shrink-0" toggleTheme={toggleTheme} />
            {/* PAGE CONTENT */}
            <div className="h-full px-5 py-8">
                <div className="flex flex-col h-full lg:flex-row">
                    {/* OPTIONS NAVBAR  */}
                    <nav className="grid justify-start w-full grid-cols-2 gap-4 lg:flex lg:flex-col lg:px-5 lg:w-72">
                        <button
                            className={`tab-button ${
                                option === 'account'
                                    ? 'bg-gray-500 text-white dark:bg-gray-400 dark:text-gray-800'
                                    : ''
                            }`}
                            onClick={() => setOption('account')}
                        >
                            <Icons.User className="block w-5 h-5" />
                            <span>Account</span>
                        </button>
                        <button
                            className={`tab-button ${
                                option === 'security'
                                    ? 'bg-gray-500 text-white dark:bg-gray-400 dark:text-gray-800'
                                    : ''
                            }`}
                            onClick={() => setOption('security')}
                        >
                            <Icons.Security className="block w-5 h-5" />
                            <span>Security</span>
                        </button>
                        <button
                            className={`tab-button ${
                                option === 'interface'
                                    ? 'bg-gray-500 text-white dark:bg-gray-400 dark:text-gray-800'
                                    : ''
                            }`}
                            onClick={() => setOption('interface')}
                        >
                            <Icons.Interface className="block w-5 h-5" />
                            <span>Interface</span>
                        </button>
                        <button
                            className={`tab-button ${
                                option === 'privacy'
                                    ? 'bg-gray-500 text-white dark:bg-gray-400 dark:text-gray-800'
                                    : ''
                            }`}
                            onClick={() => setOption('privacy')}
                        >
                            <Icons.Privacy className="block w-5 h-5" />
                            <span>Privacy</span>
                        </button>
                    </nav>
                    {/* SELECTED SETTINGS */}
                    <div className="w-full p-5 mt-6 bg-white dark:bg-gray-700 lg:mt-0 rounded-xl">
                        {option === 'account' && (
                            <>
                                <h2 className="inline-block text-2xl font-semibold tracking-tight">
                                    Account
                                </h2>
                                <div className="mt-6 flex flex-col xl:flex-row xl:gap-6 justify-between">
                                    <div className="flex flex-col sm:flex-row w-full xl:w-1/3 items-center justify-center gap-2 sm:gap-4 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl xl:self-start">
                                        <img
                                            src="https://avatars.githubusercontent.com/u/55157846"
                                            alt="Avatar"
                                            className="object-cover object-center w-24 h-24 mx-auto sm:mx-0 border-4 border-gray-800 rounded-full dark:border-white"
                                        />
                                        <div className="text-center sm:text-left">
                                            <span className="block text-lg font-medium">
                                                {first_name} {last_name}
                                            </span>
                                            <span className="block font-medium text-gray-500 text-md">
                                                User since {created_at}
                                            </span>
                                            <button className="px-2 mt-2 text-white rounded-full bg-sky-700">
                                                Change avatar
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-6 xl:w-2/3 xl:mt-0 xl:bg-gray-100 xl:px-5 xl:py-3 xl:rounded-xl">
                                        <h3 className="text-lg font-medium">
                                            Edit data
                                        </h3>
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
                                                        setFirstName(
                                                            event.target.value
                                                        )
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
                                                        setLastName(
                                                            event.target.value
                                                        )
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
                                                        setBirthday(
                                                            event.target.value
                                                        )
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
                                                        setEmail(
                                                            event.target.value
                                                        )
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
                                                        setNewPassword(
                                                            event.target.value
                                                        )
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
                                                    value={
                                                        new_password_confirmation
                                                    }
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
                                    <h3 className="text-lg font-medium">
                                        Options
                                    </h3>
                                    <hr className="mt-2 text-gray-600" />
                                    <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
                                        <button className="flex-shrink-0 px-3 py-2 text-red-500 border-2 border-red-500 rounded-xl leading-tight">
                                            Transfer data
                                        </button>
                                        <p className="flex items-center justify-between gap-2 leading-tight p-2 text-gray-600 border-2 border-gray-300 dark:border-transparent dark:text-gray-100 dark:bg-gray-600 rounded-xl">
                                            <Icons.Info className="w-5 h-5 flex-shrink-0" />
                                            Select user to inherit all of your
                                            notes and associated information
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center gap-2 mt-8">
                                        <button className="flex-shrink-0 px-3 py-2 text-red-500 border-2 border-red-500 rounded-xl leading-tight">
                                            Delete account
                                        </button>
                                        <p className="flex items-center justify-between gap-2 leading-tight p-2 text-gray-600 border-2 border-gray-300 dark:border-transparent dark:text-gray-100 dark:bg-gray-600 rounded-xl">
                                            <Icons.Info className="w-5 h-5 flex-shrink-0" />
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
