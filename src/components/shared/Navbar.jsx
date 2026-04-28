
import Link from 'next/link';
import userImage from '@/assets/user.png'
import Image from 'next/image';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 w-11/12 md:w-10/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Navlink href={"/"}>Home</Navlink></li>
                        <li><Navlink href={"/about"}>About</Navlink></li>
                        <li><Navlink href={"/career"}>Career</Navlink></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Navlink href={"/"}>Home</Navlink></li>
                    <li><Navlink href={"/about"}>About</Navlink></li>
                    <li><Navlink href={"/career"}>Career</Navlink></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Image
                    src={userImage}
                    width={35}
                    height={35}
                    alt="user image"
                />
                <Link href="/signin" className="btn bg-gray-700 text-lg text-white font-medium">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;