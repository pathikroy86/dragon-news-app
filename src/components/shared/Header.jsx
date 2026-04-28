import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format, compareAsc } from "date-fns";


const Header = () => {
    return (
        <div className='text-center py-5 space-y-3'>
            <Image className='mx-auto'
                src={logo}
                alt='Logo'
            />
            <p className='text-[#706F6F] text-lg'>Journalism Without Fear or Favor</p>
            <p className='text-[#706F6F] text-xl font-medium'>{format(new Date(), "EEEE, MMMM dd,yyyy")}</p>
        </div>
    );
};

export default Header;