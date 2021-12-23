import { useState } from 'react';

export default function InterfaceSettings() {
    const [language, setLanguage] = useState('');
    const [timezone, setTimezone] = useState('');
    const [theme, setTheme] = useState('');
    const [font_size, setFontSize] = useState('');

    return (
        <>
            <h2 className="inline-block text-2xl font-semibold tracking-tight">
                Interface
            </h2>
            <div className="mt-6 flex flex-col justify-between">
                <h3 className="text-lg font-medium">Region</h3>
                <hr className="mt-2 text-gray-600" />
                <fieldset className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <label className="block w-full sm:w-1/2">
                        <span className="block font-medium text-gray-500 dark:text-gray-200">
                            Language
                        </span>
                        <select
                            className="w-full px-3 py-2 mt-1 bg-gray-300 rounded-md  dark:bg-gray-700"
                            value={language}
                            onChange={(event) =>
                                setLanguage(event.target.value)
                            }
                        >
                            <option value="pt-BR">Portuguese (Brazil)</option>
                            <option value="en-US">English (US)</option>
                            <option value="en-UK">English (UK)</option>
                        </select>
                    </label>
                    <label className="block w-full sm:w-1/2">
                        <span className="block font-medium text-gray-500 dark:text-gray-200">
                            Timezone
                        </span>
                        <select
                            className="w-full px-3 py-2 mt-1 bg-gray-300 rounded-md  dark:bg-gray-700"
                            value={timezone}
                            onChange={(event) =>
                                setTimezone(event.target.value)
                            }
                        >
                            <option value="pt-BR">America/Sao_Paulo</option>
                            <option value="en-US">America/Buenos_Aires</option>
                            <option value="en-UK">Europe/London</option>
                        </select>
                    </label>
                </fieldset>
                <h3 className="mt-8 text-lg font-medium">Display</h3>
                <hr className="mt-2 text-gray-600" />
                <fieldset className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <label className="block w-full sm:w-1/2">
                        <span className="block font-medium text-gray-500 dark:text-gray-200">
                            Theme
                        </span>
                        <select
                            className="w-full px-3 py-2 mt-1 bg-gray-300 rounded-md  dark:bg-gray-700"
                            value={theme}
                            onChange={(event) => setTheme(event.target.value)}
                        >
                            <option value="dark">Dark</option>
                            <option value="light">Light</option>
                            <option value="default">OS Default</option>
                        </select>
                    </label>
                    <label className="block w-full sm:w-1/2">
                        <span className="block font-medium text-gray-500 dark:text-gray-200">
                            Font size
                        </span>
                        <select
                            className="w-full px-3 py-2 mt-1 bg-gray-300 rounded-md  dark:bg-gray-700"
                            value={font_size}
                            onChange={(event) =>
                                setFontSize(event.target.value)
                            }
                        >
                            <option value="small">Small</option>
                            <option value="normal">Normal</option>
                            <option value="big">Big</option>
                        </select>
                    </label>
                </fieldset>
            </div>
        </>
    );
}
