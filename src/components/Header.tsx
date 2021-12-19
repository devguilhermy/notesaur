import { Dispatch, SetStateAction, useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';

import { CgClose } from 'react-icons/cg';
import { Icons } from '../assets/icons';
import logoImg from '../assets/images/logo.svg';
import logoImgDark from '../assets/images/logo-dark.svg';

interface HeaderProps {
    className?: string;
    toggleTheme: () => void;
    columns: string;
    setColumns: Dispatch<SetStateAction<string>>;
}

export default function Header({
    className,
    toggleTheme,
    columns,
    setColumns,
}: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header
            className={`bg-white dark:bg-gray-700 xl:bg-white sm:flex sm:items-center sm:justify-between ${className}`}
        >
            <div className="flex items-center justify-between px-4 py-3 sm:py-4 xl:py-5 xl:w-72 xl:justify-center">
                <div
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
                </div>
                <div className="sm:hidden">
                    <button
                        type="button"
                        className="p-1 text-gray-400 transition hover:text-white focus:outline-none focus:text-white "
                        aria-label="Menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <CgClose className="w-8 h-8" />
                        ) : (
                            <FiMenu className="w-8 h-8" />
                        )}
                    </button>
                </div>
            </div>
            <nav
                className={`${
                    isMobileMenuOpen ? 'block' : 'hidden'
                } text-white xl:text-gray-800 sm:flex xl:flex-1 xl:justify-between xl:px-5 xl:items-center`}
            >
                <div className="hidden xl:relative xl:max-w-lg xl:w-full xl:block">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <FiSearch className="w-6 h-6 text-gray-600" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search notes"
                        className="w-full py-2 pl-10 pr-4 text-gray-600 transition bg-gray-200 border-transparent rounded-lg shadow focus:outline-none focus:bg-white focus:text-gray-800"
                    />
                </div>
                <select
                    name=""
                    id=""
                    className="block px-3 py-2 ml-auto bg-white border-2 border-transparent shadow dark:text-white dark:bg-gray-800 rounded-xl"
                    value={columns}
                    onChange={(event) => setColumns(event.target.value)}
                >
                    <option value="">Columns</option>
                    <option value="1" className="inline">
                        1
                    </option>
                    <option value="2" className="inline">
                        2
                    </option>
                    <option value="3" className="hidden md:inline">
                        3
                    </option>
                    <option value="4" className="hidden lg:inline">
                        4
                    </option>
                    <option value="5" className="hidden xl:inline">
                        5
                    </option>
                    <option value="6" className="hidden xl:inline">
                        6
                    </option>
                </select>
                <div className="xl:ml-5">
                    <div className="px-2 pt-2 pb-5 font-medium sm:py-0 sm:flex sm:items-center sm:px-5 sm:text-sm xl:px-0">
                        <button className="block p-2 mt-3 transition bg-gray-200 rounded-full sm:mt-0 sm:ml-3 focus:bg-gray-700">
                            <Icons.Plus className="block" />
                        </button>
                        <button
                            className="block p-2 mt-3 transition bg-gray-200 rounded-full sm:mt-0 sm:ml-3"
                            onClick={() => toggleTheme()}
                        >
                            <Icons.DarkMode className="block dark:hidden" />
                            <Icons.LightMode className="hidden dark:block" />
                        </button>
                        <button className="block p-2 mt-3 transition bg-gray-200 rounded-full sm:mt-0 sm:ml-3 focus:bg-gray-700">
                            <Icons.Grid className="block" />
                            {/* <Icons.Stack className="block" /> */}
                        </button>
                        <div className="relative px-3 py-3 mt-3 border-t border-gray-600 sm:p-0 sm:border-0 sm:mt-0 sm:ml-3">
                            <div className="sm:hidden">
                                <div className="flex items-center ">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/55157846?v=4"
                                        alt="Avatar"
                                        className="h-12 transition border-4 border-gray-600 rounded-full hover:border-white cover-center"
                                    />
                                    <span className="ml-2 font-semibold sm:hidden">
                                        Dev Guilhermy
                                    </span>
                                </div>
                                <div className="py-2 mt-2 text-gray-400 sm:hidden">
                                    <a
                                        href="/"
                                        className="block sm:border-b hover:text-white focus:text-white "
                                    >
                                        Account
                                    </a>
                                    <a
                                        href="/"
                                        className="block mt-2 sm:border-b hover:text-white focus:text-white "
                                    >
                                        My listings
                                    </a>
                                    <a
                                        href="/"
                                        className="block mt-2 hover:text-white focus:text-white"
                                    >
                                        Sign out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
