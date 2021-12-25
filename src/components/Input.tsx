import { ReactNode } from 'react';

interface InputProps {
    value: string;
    setValue: (inputValue: string) => void;
    label: ReactNode;
    className?: string;
}

export function Input({
    value,
    setValue,
    label,
    className,
    ...props
}: InputProps) {
    return (
        <label className={`relative block ${className}`} {...props}>
            <input
                type="text"
                className="w-full py-1 border-b-4 border-gray-500 bg-transparent focus:outline-none focus:border-blue-600 transition peer text-gray-400"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <span
                className={`absolute left-0 font-medium peer-focus:-top-4 transition ${
                    value === ''
                        ? 'top-1 text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-gray-200'
                        : '-top-4 text-sm text-gray-200'
                }`}
            >
                {label}
            </span>
        </label>
    );
}
