import { FiFilter, FiSearch } from 'react-icons/fi';

import { Icons } from '../assets/icons';
import { useState } from 'react';

interface SidebarProps {
    className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
    const [labels, setLabels] = useState([
        { name: 'Receitas' },
        { name: 'Programação' },
        { name: 'TODO' },
        { name: 'Viagens' },
        { name: 'Receitas' },
        { name: 'Programação' },
        { name: 'TODO' },
        { name: 'Viagens' },
        { name: 'Receitas' },
        { name: 'Programação' },
        { name: 'TODO' },
        { name: 'Receitas' },
        { name: 'Programação' },
        { name: 'TODO' },
        { name: 'Viagens' },
        { name: 'Viagens' },
    ]);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {isSidebarOpen && <div className="w-21"> </div>}
            <section
                className={`bg-gray-200 dark:bg-gray-800 ${className} ${
                    isSidebarOpen && 'fixed z-20 w-72 lg:block'
                }`}
            >
                <div
                    className={`
                 flex flex-col justify-between`}
                    style={{ height: 'calc(100vh - 68px)' }}
                >
                    <div className="border-gray-900 flex flex-col h-1/2 gap-2  p-5">
                        {/* <h2 className="text-sm uppercase ml-3 text-gray-600 font-medium">
                        Labels
                    </h2> */}

                        <button
                            className="flex items-center px-3 py-2 bg-white rounded-xl"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <Icons.Label
                                className={`text-gray-700 w-5 h-5 ${
                                    isSidebarOpen ? 'hidden' : 'inline'
                                }`}
                            />
                            <Icons.Close
                                className={`text-gray-700 w-5 h-5 ${
                                    isSidebarOpen ? 'inline' : 'hidden '
                                }`}
                            />
                            <span
                                className={`ml-2 font-medium text-gray-600 ${
                                    isSidebarOpen ? 'inline' : 'hidden '
                                }`}
                            >
                                Labels
                            </span>
                        </button>
                        <div className="mt-6 flex flex-col gap-2 overflow-y-auto">
                            {isSidebarOpen &&
                                labels.map((label) => {
                                    return (
                                        <a
                                            href={`/${label.name}`}
                                            className="flex items-center px-3 py-2 bg-gray-300 rounded-xl"
                                        >
                                            <Icons.Label className="text-gray-400 w-5 h-5 " />{' '}
                                            <span
                                                className={`ml-2 font-medium text-gray-600 ${
                                                    isSidebarOpen
                                                        ? 'inline'
                                                        : 'hidden '
                                                }`}
                                            >
                                                {label.name}
                                            </span>
                                        </a>
                                    );
                                })}
                        </div>
                    </div>
                    <div className="p-5 flex h-1/2 flex-col gap-2 justify-end">
                        <a
                            href={`/shared`}
                            className="flex items-center px-3 py-2 bg-white rounded-xl"
                        >
                            <Icons.Star className="text-gray-700 w-5 h-5 " />{' '}
                            <span
                                className={`ml-2 font-medium text-gray-600 ${
                                    isSidebarOpen ? 'inline' : 'hidden '
                                }`}
                            >
                                Favorites
                            </span>
                        </a>
                        <a
                            href={`/shared`}
                            className="flex items-center px-3 py-2 bg-white rounded-xl"
                        >
                            <Icons.People className="text-gray-700 w-5 h-5 " />{' '}
                            <span
                                className={`ml-2 font-medium text-gray-600 ${
                                    isSidebarOpen ? 'inline' : 'hidden '
                                }`}
                            >
                                Shared
                            </span>
                        </a>
                        <a
                            href={`/shared`}
                            className="flex items-center px-3 py-2 bg-white rounded-xl"
                        >
                            <Icons.Newspaper className="text-gray-700 w-5 h-5 " />{' '}
                            <span
                                className={`ml-2 font-medium text-gray-600 ${
                                    isSidebarOpen ? 'inline' : 'hidden '
                                }`}
                            >
                                Posts
                            </span>
                        </a>
                        <a
                            href={`/shared`}
                            className="flex items-center px-3 py-2 bg-white rounded-xl"
                        >
                            <Icons.Trash className="text-gray-700 w-5 h-5 " />{' '}
                            <span
                                className={`ml-2 font-medium text-gray-600 ${
                                    isSidebarOpen ? 'inline' : 'hidden '
                                }`}
                            >
                                Trash
                            </span>
                        </a>
                        <a
                            href={`/shared`}
                            className="flex items-center px-3 py-2 bg-white rounded-xl"
                        >
                            <Icons.Archive className="text-gray-700 w-5 h-5 " />{' '}
                            <span
                                className={`ml-2 font-medium text-gray-600 ${
                                    isSidebarOpen ? 'inline' : 'hidden '
                                }`}
                            >
                                Arquive
                            </span>
                        </a>
                        <a
                            href={`/shared`}
                            className="flex items-center px-3 py-2 bg-white rounded-xl"
                        >
                            <Icons.Settings className="text-gray-700 w-5 h-5 " />{' '}
                            <span
                                className={`ml-2 font-medium text-gray-600 ${
                                    isSidebarOpen ? 'inline' : 'hidden '
                                }`}
                            >
                                Settings
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
