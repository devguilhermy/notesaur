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
    ]);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {isSidebarOpen && <div className="w-21"> </div>}
            <section
                className={`bg-gray-200 dark:bg-gray-800 h-full ${className} ${
                    isSidebarOpen && 'fixed z-20 w-72 lg:block'
                }`}
            >
                <div
                    className={`
                 flex flex-col justify-between h-full`}
                    style={{ height: 'calc(100vh - 74px)' }}
                >
                    <button
                        className="flex items-center px-3 py-2 mx-5 mt-5 bg-white dark:bg-gray-700 rounded-xl"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <Icons.Label
                            className={`w-5 h-5 ${
                                isSidebarOpen ? 'hidden' : 'inline'
                            }`}
                        />
                        <Icons.Close
                            className={`w-5 h-5 ${
                                isSidebarOpen ? 'inline' : 'hidden '
                            }`}
                        />
                        <span
                            className={`ml-2 font-semibold ${
                                isSidebarOpen ? 'inline' : 'hidden '
                            }`}
                        >
                            Close
                        </span>
                    </button>
                    <div className="flex flex-col gap-2 p-5 overflow-y-auto border-gray-900">
                        {/* <h2 className="ml-3 text-sm font-medium text-gray-600 uppercase">
                        Labels
                    </h2> */}

                        {isSidebarOpen &&
                            labels.map((label) => {
                                return (
                                    <a
                                        href={`/${label.name}`}
                                        className="flex items-center px-3 py-2 bg-gray-300 dark:bg-gray-700 rounded-xl"
                                    >
                                        <Icons.Label className="w-5 h-5 text-gray-400 dark:text-gray-200 " />{' '}
                                        <span
                                            className={`ml-2 font-medium text-gray-600 dark:text-gray-100 ${
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
                    <div className="flex flex-col justify-end flex-1 gap-2 p-5">
                        <a
                            href={'/favorites'}
                            className="flex items-center px-3 py-2 bg-white dark:bg-gray-700 rounded-xl"
                        >
                            <Icons.Star className="w-5 h-5 text-gray-700 dark:text-gray-200 " />{' '}
                            <span
                                className={`ml-2 font-medium text-gray-600 dark:text-gray-100 ${
                                    isSidebarOpen ? 'inline' : 'hidden '
                                }`}
                            >
                                Favorites
                            </span>
                        </a>
                        <a
                            href={`/shared`}
                            className="flex items-center px-3 py-2 bg-white dark:bg-gray-700 rounded-xl"
                        >
                            <Icons.People className="w-5 h-5 text-gray-700 dark:text-gray-200" />{' '}
                            <span
                                className={`ml-2 font-medium text-gray-600 dark:text-gray-100 ${
                                    isSidebarOpen ? 'inline' : 'hidden '
                                }`}
                            >
                                Shared
                            </span>
                        </a>
                        <a
                            href={`/posts`}
                            className="flex items-center px-3 py-2 bg-white rounded-xl dark:bg-gray-700 "
                        >
                            <Icons.Newspaper className="w-5 h-5 text-gray-700 dark:text-gray-200 " />{' '}
                            <span
                                className={`ml-2 font-medium text-gray-600 dark:text-gray-100 ${
                                    isSidebarOpen ? 'inline' : 'hidden '
                                }`}
                            >
                                Posts
                            </span>
                        </a>
                        <a
                            href={`/trash`}
                            className="flex items-center px-3 py-2 bg-white rounded-xl dark:bg-gray-700"
                        >
                            <Icons.Trash className="w-5 h-5 text-gray-700 dark:text-gray-200 " />{' '}
                            <span
                                className={`ml-2 font-medium text-gray-600 dark:text-gray-100 ${
                                    isSidebarOpen ? 'inline' : 'hidden '
                                }`}
                            >
                                Trash
                            </span>
                        </a>
                        <a
                            href={'/archive'}
                            className="flex items-center px-3 py-2 bg-white rounded-xl dark:bg-gray-700"
                        >
                            <Icons.Archive className="w-5 h-5 text-gray-700 dark:text-gray-200 " />{' '}
                            <span
                                className={`ml-2 font-medium text-gray-600 dark:text-gray-100 ${
                                    isSidebarOpen ? 'inline' : 'hidden '
                                }`}
                            >
                                Archive
                            </span>
                        </a>
                        <a
                            href={`/settings`}
                            className="flex items-center px-3 py-2 bg-white rounded-xl dark:bg-gray-700"
                        >
                            <Icons.Settings className="w-5 h-5 text-gray-700 dark:text-gray-200 " />{' '}
                            <span
                                className={`ml-2 font-medium text-gray-600 dark:text-gray-100 ${
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
