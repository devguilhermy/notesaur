import { Icons } from '../assets/icons';
import { useState } from 'react';

interface SidebarProps {
    className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
    // const [labels, setLabels] = useState([
    //     { name: 'Receitas' },
    //     { name: 'Programação' },
    //     { name: 'TODO' },
    //     { name: 'Viagens' },
    //     { name: 'Receitas' },
    //     { name: 'Programação' },
    //     { name: 'TODO' },
    // ]);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <section
            className={`bg-gray-100 z-20 fixed dark:bg-gray-700 h-full ${className} ${
                isSidebarOpen && ''
            }`}
            onMouseEnter={() => setIsSidebarOpen(true)}
            onMouseLeave={() => setIsSidebarOpen(false)}
        >
            <div
                className={`
                 flex flex-col justify-center flex-1 gap-3 px-3 py-5`}
                style={{ height: 'calc(100vh - 74px)' }}
            >
                {/* <div className="flex flex-col gap-2 p-5 overflow-y-auto border-gray-900">
                        <h2 className="ml-3 text-sm font-medium text-gray-600 uppercase">
                            Labels
                        </h2>

                        {isSidebarOpen &&
                            labels.map((label) => {
                                return (
                                    <a
                                        href={`/${label.name}`}
                                        className="flex items-center px-3 py-2 bg-gray-300 shadow dark:bg-gray-600 rounded-xl"
                                    >
                                        <Icons.Label className="w-5 h-5 text-gray-400 dark:text-gray-200 " />{' '}
                                        <span
                                            className={`mx-3 font-medium text-gray-600 dark:text-gray-100 ${
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
                    </div> */}
                <button
                    className="flex items-center px-3 py-2 leading-none bg-white shadow dark:bg-gray-600 rounded-xl"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <Icons.Expand
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
                        className={`mx-3 font-medium text-gray-600 dark:text-gray-100 ${
                            isSidebarOpen ? 'inline' : 'hidden '
                        }`}
                    >
                        Close
                    </span>
                </button>
                <a
                    href={'/favorites'}
                    className="flex items-center px-3 py-2 leading-none bg-white shadow dark:bg-gray-600 rounded-xl"
                >
                    <Icons.Star className="w-5 h-5 text-gray-700 dark:text-gray-200 " />{' '}
                    <span
                        className={`mx-3 font-medium text-gray-600 dark:text-gray-100 ${
                            isSidebarOpen ? 'inline' : 'hidden '
                        }`}
                    >
                        Favorites
                    </span>
                </a>
                <a
                    href={`/shared`}
                    className="flex items-center px-3 py-2 leading-none bg-white shadow dark:bg-gray-600 rounded-xl"
                >
                    <Icons.People className="w-5 h-5 text-gray-700 dark:text-gray-200" />{' '}
                    <span
                        className={`mx-3 font-medium text-gray-600 dark:text-gray-100 ${
                            isSidebarOpen ? 'inline' : 'hidden '
                        }`}
                    >
                        Shared
                    </span>
                </a>
                <a
                    href={`/posts`}
                    className="flex items-center px-3 py-2 leading-none bg-white shadow dark:bg-gray-600 rounded-xl"
                >
                    <Icons.Newspaper className="w-5 h-5 text-gray-700 dark:text-gray-200 " />{' '}
                    <span
                        className={`mx-3 font-medium text-gray-600 dark:text-gray-100 ${
                            isSidebarOpen ? 'inline' : 'hidden '
                        }`}
                    >
                        Posts
                    </span>
                </a>
                <a
                    href={`/trash`}
                    className="flex items-center px-3 py-2 leading-none bg-white shadow dark:bg-gray-600 rounded-xl"
                >
                    <Icons.Trash className="w-5 h-5 text-gray-700 dark:text-gray-200 " />{' '}
                    <span
                        className={`mx-3 font-medium text-gray-600 dark:text-gray-100 ${
                            isSidebarOpen ? 'inline' : 'hidden '
                        }`}
                    >
                        Trash
                    </span>
                </a>
                <a
                    href={'/archive'}
                    className="flex items-center px-3 py-2 leading-none bg-white shadow dark:bg-gray-600 rounded-xl"
                >
                    <Icons.Archive className="w-5 h-5 text-gray-700 dark:text-gray-200 " />{' '}
                    <span
                        className={`mx-3 font-medium text-gray-600 dark:text-gray-100 ${
                            isSidebarOpen ? 'inline' : 'hidden '
                        }`}
                    >
                        Archive
                    </span>
                </a>
                <a
                    href={`/settings`}
                    className="flex items-center px-3 py-2 leading-none bg-white shadow dark:bg-gray-600 rounded-xl"
                >
                    <Icons.Settings className="w-5 h-5 text-gray-700 dark:text-gray-200 " />{' '}
                    <span
                        className={`mx-3 font-medium text-gray-600 dark:text-gray-100 ${
                            isSidebarOpen ? 'inline' : 'hidden '
                        }`}
                    >
                        Settings
                    </span>
                </a>
            </div>
        </section>
    );
}
