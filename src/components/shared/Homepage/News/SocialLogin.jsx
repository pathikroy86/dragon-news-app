import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h3 className="text-[#403F3F] text-xl font-semibold mb-2">Login With</h3>
            <div className='space-y-2'>
                <button className="btn bg-white text-blue-500 border-blue-500">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="btn text-gray-700 border-black">
                    <FaGithub />
                    Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;