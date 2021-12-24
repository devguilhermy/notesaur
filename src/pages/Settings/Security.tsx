import { Icons } from '../../assets/icons';
import { useState } from 'react';

export default function SecuritySettings() {
    const [authSettings, setAuthSettings] = useState({
        sms: true,
        app: false,
    });

    return (
        <>
            <h2 className="inline-block text-2xl font-semibold tracking-tight">
                Security
            </h2>
            <div className="mt-6">
                <h3 className="text-lg font-medium">2FA Authentication</h3>
                <hr className="mt-2 text-gray-600" />
                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4 gap-6">
                    <li className="p-5 border-2 text-gray-700 dark:text-gray-100 border-1 rounded-lg flex shadow hover:shadow-md shadow-transition flex-col">
                        <div className="flex items-center">
                            <Icons.Phone
                                aria-hidden="true"
                                className="w-5 h-5 mr-1"
                            />
                            <span className="text-lg font-bold leading-none">
                                SMS
                            </span>
                            <button className="ml-auto">
                                <Icons.Info
                                    className="w-5 h-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="mt-2 flex items-center">
                            <div className="relative inline-block w-10 mr-2 transition duration-200 ease-in">
                                <input
                                    type="checkbox"
                                    id="toggle-sms"
                                    className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer focus-outline}`}
                                    checked={authSettings.sms}
                                />
                                <label
                                    htmlFor="toggle-sms"
                                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                                    // onClick={() => {
                                    //     setAuthSettings({
                                    //         ...authSettings,
                                    //         sms: !authSettings.sms,
                                    //     });
                                    // }}
                                ></label>
                            </div>

                            <label htmlFor="toggle-sms" className="font-medium">
                                Activate
                            </label>
                        </div>
                        <div className="mt-4">
                            <p className="font-semibold flex items-center">
                                +556270707070
                            </p>
                            <a
                                className="mt-1 inline-flex items-center px-3 py-1 bg-blue-600 text-gray-100 rounded-full"
                                href="/"
                            >
                                Change number
                                <Icons.ArrowUpRight
                                    aria-hidden="true"
                                    className="ml-2 w-5 h-5"
                                />
                            </a>
                        </div>
                    </li>
                    <li className="p-5 border-2 text-gray-700 dark:text-gray-100 border-1 rounded-lg flex shadow hover:shadow-md shadow-transition flex-col">
                        <div className="flex items-center">
                            <Icons.Smartphone
                                aria-hidden="true"
                                className="w-5 h-5 mr-1"
                            />
                            <span className="text-lg font-bold leading-none">
                                Code generator app
                            </span>
                            <button className="ml-auto">
                                <Icons.Info
                                    className="w-5 h-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="mt-2 flex items-center">
                            <div className="relative inline-block w-10 mr-2 transition duration-200 ease-in">
                                <input
                                    type="checkbox"
                                    id="toggle-app"
                                    className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer focus-outline}`}
                                    checked={authSettings.app}
                                />
                                <label
                                    htmlFor="toggle-app"
                                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                                    // onClick={() => {
                                    //     setAuthSettings({
                                    //         ...authSettings,
                                    //         sms: !authSettings.sms,
                                    //     });
                                    // }}
                                ></label>
                            </div>

                            <label htmlFor="toggle-app" className="font-medium">
                                Activate
                            </label>
                        </div>
                        <div className="mt-4">
                            <a
                                className="inline-flex px-3 py-1 bg-blue-600 text-gray-100 rounded-full"
                                href="/"
                            >
                                Set up
                                <Icons.ArrowUpRight
                                    aria-hidden="true"
                                    className="ml-2 w-5 h-5"
                                />
                            </a>
                        </div>
                    </li>

                    <li className="p-5 border-2 text-gray-700 dark:text-gray-100 border-1 rounded-lg flex shadow hover:shadow-md shadow-transition flex-col">
                        <div className="flex items-center">
                            <Icons.Mail
                                aria-hidden="true"
                                className="w-5 h-5 mr-2"
                            />
                            <span className="text-lg font-bold leading-none">
                                E-mail
                            </span>
                            <button className="ml-auto">
                                <Icons.Info
                                    className="w-5 h-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="mt-2 flex items-center">
                            <div className="relative inline-block w-10 mr-2 transition duration-200 ease-in">
                                <input
                                    type="checkbox"
                                    id="toggle-sms"
                                    className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer focus-outline}`}
                                    checked={authSettings.sms}
                                />
                                <label
                                    htmlFor="toggle-sms"
                                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                                    // onClick={() => {
                                    //     setAuthSettings({
                                    //         ...authSettings,
                                    //         sms: !authSettings.sms,
                                    //     });
                                    // }}
                                ></label>
                            </div>

                            <label htmlFor="toggle-sms" className="font-medium">
                                Activate
                            </label>
                        </div>
                        <div className="mt-4">
                            <p className="font-semibold flex items-center">
                                gui@gmail.com
                            </p>
                            <a
                                className="mt-1 inline-flex items-center px-3 py-1 bg-blue-600 text-gray-100 rounded-full"
                                href="/"
                            >
                                Change e-mail
                                <Icons.ArrowUpRight
                                    aria-hidden="true"
                                    className="ml-2 w-5 h-5"
                                />
                            </a>
                        </div>
                    </li>
                    <li className="p-5 border-2 text-gray-700 dark:text-gray-100 border-1 rounded-lg flex shadow hover:shadow-md shadow-transition flex-col">
                        <div className="flex items-center">
                            <Icons.Privacy
                                aria-hidden="true"
                                className="w-5 h-5 mr-1"
                            />
                            <span className="text-lg font-bold leading-none">
                                Recovery codes
                            </span>
                            <button className="ml-auto">
                                <Icons.Info
                                    className="w-5 h-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <p className="mt-2 font-semibold">
                            <span className="font-black mr-1">8</span>
                            remaining codes
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <a
                                className="inline-flex items-center px-3 py-1 bg-gray-600 text-gray-100 rounded-full"
                                href="/"
                            >
                                Show codes
                                <Icons.ArrowUpRight
                                    aria-hidden="true"
                                    className="ml-2 w-5 h-5"
                                />
                            </a>
                            <a
                                className="inline-flex items-center px-3 py-1 bg-blue-600 text-gray-100 rounded-full"
                                href="/"
                            >
                                Generate new codes
                                <Icons.Plus
                                    aria-hidden="true"
                                    className="ml-2 w-5 h-5"
                                />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mt-20">
                <h3 className="text-lg font-medium">Connected devices</h3>
                <hr className="mt-2 text-gray-600" />
                <div className="mt-8"></div>
            </div>
            <div className="mt-20">
                <h3 className="text-lg font-medium">Login history</h3>
                <hr className="mt-2 text-gray-600" />
                <div className="mt-8"></div>
            </div>
        </>
    );
}
