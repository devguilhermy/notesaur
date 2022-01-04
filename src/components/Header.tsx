import { Icons } from '../assets/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
    className: string;
}

export default function Header({ className }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

    const { toggleTheme } = useTheme();

    return (
        <header
            className={`relative flex flex-col sm:justify-between sm:items-center sm:flex-row p-5 bg-white dark:bg-gray-800 ${className} ${
                isMobileMenuOpen ? 'h-screen sm:h-auto' : ''
            } 'sm:flex'}`}
        >
            <div className="flex justify-between">
                <div>
                    <Link
                        to="/home"
                        className="flex items-center"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        <span>
                            <Icons.Note className="w-8 h-8" />
                        </span>
                        <span className="ml-1 text-3xl font-black dark:text-white">
                            NOTE
                        </span>
                        <span className="text-3xl font-light dark:text-white">
                            SAUR
                        </span>
                    </Link>
                </div>
                <button
                    className="p-1 rounded-full sm:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Icons.Menu className="w-8 h-8" />
                </button>
            </div>
            <div
                className={`my-6 sm:my-0 flex-col gap-2 sm:flex-row sm:items-center ${
                    isMobileMenuOpen ? 'flex' : 'hidden sm:flex'
                }`}
            >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center justify-between">
                    <button className="flex gap-2 items-center justify-center p-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 shadow rounded-full">
                        <Icons.Plus className="w-4 h-4" />
                        <span className="sm:hidden text-lg tracking-tight font-semibold">
                            New note
                        </span>
                    </button>
                    <button
                        className="flex gap-2 items-center justify-center p-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 shadow rounded-full"
                        onClick={() => toggleTheme()}
                    >
                        <Icons.DarkMode className="w-4 h-4" />
                        <span className="sm:hidden text-lg tracking-tight font-semibold">
                            Toggle theme
                        </span>
                    </button>
                    <button className="flex gap-2 items-center justify-center p-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 shadow rounded-full">
                        <Icons.Grid className="w-4 h-4" />
                        <span className="sm:hidden text-lg tracking-tight font-semibold">
                            Toggle grid
                        </span>
                    </button>
                    <button
                        className="hidden sm:flex gap-2 items-center justify-center border-4 border-gray-600 dark:border-gray-100 rounded-full"
                        onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/55157846?v=4"
                            alt="Avatar"
                            className="w-10 rounded-full"
                        />
                    </button>
                </div>
                <div className="mt-8 flex flex-col items-center">
                    <div className="flex items-center gap-3 sm:hidden">
                        <img
                            src="https://avatars.githubusercontent.com/u/55157846?v=4"
                            alt="Avatar"
                            className="w-20 rounded-full border-4 border-gray-600 dark:border-gray-100"
                        />
                        <p className="flex flex-col">
                            <span className="text-xl font-bold">Guilherme</span>
                            <span className="text-lg text-gray-500">
                                gui@gmail.com
                            </span>
                        </p>
                    </div>
                    <div
                        className={`mt-4 w-full flex flex-col gap-2 justify-center ${
                            isAccountMenuOpen
                                ? 'sm:w-56 sm:absolute sm:z-20 sm:top-full sm:right-4 sm:bg-white sm:shadow sm:p-5 sm:rounded-xl'
                                : 'sm:hidden'
                        }`}
                    >
                        <a
                            href="/"
                            className="flex gap-2 items-center justify-center p-2 bg-gray-500 dark:bg-gray-100 text-white dark:text-gray-600 shadow rounded-full"
                        >
                            <Icons.User className="w-6 h-6" />
                            <span className="text-lg tracking-tight font-medium">
                                Account
                            </span>
                        </a>
                        <a
                            href="/"
                            className="flex gap-2 items-center justify-center p-2 bg-gray-500 dark:bg-gray-100 text-white dark:text-gray-600 shadow rounded-full"
                        >
                            <Icons.Settings className="w-6 h-6" />
                            <span className="text-lg tracking-tight font-medium">
                                Settings
                            </span>
                        </a>
                        <a
                            href="/"
                            className="flex gap-2 items-center justify-center p-2 bg-gray-500 dark:bg-gray-100 text-white dark:text-gray-600 shadow rounded-full"
                        >
                            <Icons.Support className="w-6 h-6" />
                            <span className="text-lg tracking-tight font-medium">
                                Support
                            </span>
                        </a>
                        <a
                            href="/"
                            className="flex gap-2 items-center justify-center p-2 bg-gray-500 dark:bg-gray-100 text-white dark:text-gray-600 shadow rounded-full"
                        >
                            <Icons.Logout className="w-6 h-6" />
                            <span className="text-lg tracking-tight font-medium">
                                Log out
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
