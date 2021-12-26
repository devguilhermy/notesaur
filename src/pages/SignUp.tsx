import { Icons } from '../assets/icons';
import { Input } from '../components/Input';
import { StartBanner } from '../components/StartBanner';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface SignUpProps {}

export default function SignUp(props: SignUpProps) {
    const [stage, setStage] = useState(1);

    let navigate = useNavigate();

    if (stage === 3) {
        navigate('/home');
    }

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');

    return (
        <div className="flex flex-col justify-between h-screen bg-gray-200 lg:flex-row dark:bg-gray-900">
            <StartBanner />
            {stage === 1 && (
                <div className="px-5 py-8 bg-gray-800 rounded-t-xl lg:w-1/2 lg:rounded-l-xl lg:rounded-tr-none">
                    <div className="max-w-sm mx-auto lg:flex lg:flex-col lg:justify-center lg:h-full">
                        <div>
                            <h2 className="text-2xl font-semibold ">
                                Welcome! Sign up
                            </h2>
                            <a
                                href="/login"
                                className="flex items-center mt-1 text-sm text-gray-400"
                            >
                                Already have an account?
                                <Icons.ArrowUpRight className="w-4 h-4" />
                            </a>
                            <Input
                                value={first_name}
                                setValue={setFirstName}
                                label={'First name'}
                                className="mt-8"
                            />
                            <Input
                                value={last_name}
                                setValue={setLastName}
                                label={'Last name'}
                                className="mt-8"
                            />
                            <Input
                                value={birthday}
                                setValue={setBirthday}
                                label={'Birthday'}
                                className="mt-8 input-date"
                                onFocus={(event) => {
                                    event.target.type = 'date';
                                }}
                                onBlur={(event) => {
                                    email === '' &&
                                        (event.target.type = 'text');
                                }}
                            />
                            <div className="flex justify-center mt-8">
                                <button
                                    className="block p-3 bg-gray-700 rounded-full shadow"
                                    onClick={() => setStage(2)}
                                >
                                    <Icons.ArrowRight className="w-5 h-5 text-gray-200" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {stage === 2 && (
                <div className="px-5 py-8 bg-gray-800 rounded-t-xl lg:w-1/2 lg:rounded-l-xl lg:rounded-tr-none">
                    <div className="max-w-sm mx-auto lg:flex lg:flex-col lg:justify-center lg:h-full">
                        <div>
                            <h2 className="text-2xl font-semibold ">
                                Welcome! Sign up
                            </h2>
                            <div className="mt-1">
                                <a
                                    href="/login"
                                    className="flex items-center text-sm text-gray-400"
                                >
                                    Already have an account?
                                    <Icons.ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                            <Input
                                value={email}
                                setValue={setEmail}
                                label={'Email'}
                                className="mt-8"
                            />
                            <Input
                                value={password}
                                setValue={setPassword}
                                label={'Password'}
                                className="mt-8"
                            />
                            <Input
                                value={password_confirmation}
                                setValue={setPasswordConfirmation}
                                label={'Password confirmation'}
                                className="mt-8"
                            />
                            <p className="px-3 py-1 mt-4 text-center text-gray-300 bg-red-500 rounded-md shadow bg-opacity-80">
                                E-mail is in use!
                            </p>
                            <div className="flex justify-between mt-8">
                                <button
                                    className="block p-3 bg-gray-700 rounded-full shadow"
                                    onClick={() => setStage(1)}
                                >
                                    <Icons.ArrowLeft className="w-5 h-5 text-gray-200" />
                                </button>
                                <button
                                    className="block p-3 bg-gray-700 rounded-full shadow"
                                    onClick={() => setStage(3)}
                                >
                                    <Icons.ArrowRight className="w-5 h-5 text-gray-200" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
