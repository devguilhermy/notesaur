import AccountSettings from './Settings/Account';
import Header from '../components/Header';
import { Icons } from '../assets/icons';
import InterfaceSettings from './Settings/Interface';
import NoteSettings from './Settings/Note';
import SecuritySettings from './Settings/Security';
import { useState } from 'react';

interface SettingsProps {}

export default function Settings(props: SettingsProps) {
    const [option, setOption] = useState('account');

    return (
        <div className="flex flex-col h-full antialiased bg-gray-200 dark:bg-gray-900">
            <Header className="flex-shrink-0" />
            {/* PAGE CONTENT */}
            <div className="h-full px-5 py-8">
                <div className="flex flex-col h-full lg:flex-row">
                    {/* OPTIONS NAVBAR  */}
                    <nav className="grid justify-start w-full grid-cols-2 gap-4 lg:flex lg:flex-col lg:px-5 lg:w-72">
                        <button
                            className={`tab-button ${
                                option === 'account'
                                    ? 'bg-gray-300 text-gray-800 dark:bg-gray-600'
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
                                    ? 'bg-gray-300 text-gray-800 dark:bg-gray-600'
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
                                    ? 'bg-gray-300 text-gray-800 dark:bg-gray-600'
                                    : ''
                            }`}
                            onClick={() => setOption('interface')}
                        >
                            <Icons.Interface className="block w-5 h-5" />
                            <span>Interface</span>
                        </button>
                        <button
                            className={`tab-button ${
                                option === 'note'
                                    ? 'bg-gray-300 text-gray-800 dark:bg-gray-600'
                                    : ''
                            }`}
                            onClick={() => setOption('note')}
                        >
                            <Icons.Note className="block w-5 h-5" />
                            <span>Notes</span>
                        </button>
                    </nav>
                    {/* SELECTED SETTINGS */}
                    <div className="w-full p-8 mt-6 bg-white dark:bg-gray-800 lg:mt-0 rounded-xl">
                        {option === 'account' && <AccountSettings />}
                        {option === 'interface' && <InterfaceSettings />}
                        {option === 'security' && <SecuritySettings />}
                        {option === 'note' && <NoteSettings />}
                    </div>
                </div>
            </div>
        </div>
    );
}
