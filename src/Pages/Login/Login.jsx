import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };



    const [error, setError] = useState('');
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data);
        setError('');

        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser) {
                    Swal.fire(
                        {
                            text: 'Successfully Logged In!',
                            icon: 'success',
                            confirmButtonText: 'Continue',
                            confirmButtonColor: '#D74539'
                        }
                    )
                }
                navigate(from, { replace: true })
            })
            .catch(err => setError(err.message));
    };


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser) {
                    Swal.fire(
                        {
                            text: 'Successfully Logged In with Google!',
                            icon: 'success',
                            confirmButtonText: 'Continue',
                            confirmButtonColor: '#D74539'
                        }
                    )
                }
                // console.log(loggedUser);
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
            <Helmet>
                <title>Login | SpeakUpSummers</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10">
                    <p className="text-2xl font-extrabold leading-6 text-gray-800">
                        Login to your account
                    </p>
                    <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        Dont have account?{" "}
                        <Link to={'/signUp'}><span className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                            {" "}
                            Sign up here
                        </span></Link>
                    </p>
                    <div onClick={handleGoogleSignIn} className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                        <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                            <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                            <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                            <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                        </svg>
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </div>
                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">Email</label>
                        <input {...register("email", { required: true })} type="email" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        {errors.email?.type === 'required' && <p>Email is required</p>}
                    </div>
                    <div className="mt-6  w-full">
                        <label className="text-sm font-medium leading-none text-gray-800">Password</label>
                        <div className="relative flex items-center justify-center">
                            <input
                                {...register("password", { required: true })}
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handlePasswordChange}
                                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                            <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                <div onClick={toggleShowPassword}>
                                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </div>
                            </div>
                        </div>
                        {errors.password?.type === 'required' && <p>Password is required</p>}
                    </div>
                    <div className="mt-8">
                        {error}
                        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                            Login to Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;