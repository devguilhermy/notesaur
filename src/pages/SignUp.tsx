import { Icons } from '../assets/icons';
import { Input } from '../components/Input';
import { StartBanner } from '../components/StartBanner';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
// import { api } from '../services/api';
// import { date, object, string } from 'yup';

// const userSchema = object({
//     firstName: string().required(),
//     lastName: string().required(),
//     birthday: date().required(),
//     email: string().required(),
//     password: string().required(),
//     username: string().required(),
// });

interface SignUpProps {}

export default function SignUp(props: SignUpProps) {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');

    const [stage, setStage] = useState(1);

    let navigate = useNavigate();

    // async function handleSignUp() {
    //     try {
    //         const newUser = {
    //             firstName: first_name,
    //             lastName: last_name,
    //             birthday: String(new Date(birthday)),
    //             email,
    //             password,
    //             username: 'aasaasdasda',
    //         };

    //         if (await userSchema.validate(newUser)) {
    //             const response = await api.post('/user', newUser);
    //             if (response.status === 200) {
    //                 toast('User signed up successfully!');
    //                 navigate('/home');
    //             } else {
    //                 console.debug('HANDLE_SIGNUP_RESPONSE', response.data);
    //                 // throw new Error(response.data.error[0]);
    //             }
    //         } else {
    //             console.log(await userSchema.validate(newUser));
    //         }
    //     } catch (error: any) {
    //         console.debug('HANDLE_SIGNUP_CATCH', error);
    //     }
    // }

    function handleNextStage() {
        if (stage === 1) {
            if (first_name === '' || last_name === '' || birthday === '') {
                toast.dark('Please fill all fields!');
            } else {
                setStage(2);
            }
        }
        if (stage === 2) {
            if (
                email === '' ||
                password === '' ||
                password_confirmation === ''
            ) {
                toast.dark('Please fill all fields!');
            } else if (password !== password_confirmation) {
                toast.error("Passwords don't match!");
            } else {
                // handleSignUp();
                navigate('/home');
            }
        }
    }

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
                                    onClick={() => handleNextStage()}
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
                                type="password"
                                value={password}
                                setValue={setPassword}
                                label={'Password'}
                                className="mt-8"
                            />
                            <Input
                                type="password"
                                value={password_confirmation}
                                setValue={setPasswordConfirmation}
                                label={'Password confirmation'}
                                className="mt-8"
                            />
                            <div className="flex justify-between mt-8">
                                <button
                                    className="block p-3 bg-gray-700 rounded-full shadow"
                                    onClick={() => setStage(1)}
                                >
                                    <Icons.ArrowLeft className="w-5 h-5 text-gray-200" />
                                </button>
                                <button
                                    className="block p-3 bg-gray-700 rounded-full shadow"
                                    onClick={() => handleNextStage()}
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
