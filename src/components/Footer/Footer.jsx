import { format } from 'date-fns';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(moment());

    useEffect(() => {
        const intervaLinkd = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(intervaLinkd);
    }, []);
    // Example date & year
    const myDate = new Date();
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className='p-9 bg-slate-600 text-white'>
                <div className='max-w-6xl mx-auto p-4  flex flex-col gap-3'>
                    <div className='flex gap-7 justify-between items-center my-6'>
                        <Link to='/' className="flex gap-2 btn btn-ghost text-xl">

                            <div className='w-[30px]'>
                                <img src={Logo} alt="" />
                            </div>
                            <span className='uppercase tracking-tighter font-bold md:inLinkne-flex xl:inLinkne-flex duration-500' >carto</span>
                        </Link>
                        <div className=''>
                            <p>{currentTime.format('hh:mm:ss A')}</p>
                            <p>{format(myDate, 'dd/MM/yyyy')}</p>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4'>
                        <div>
                            <h5 className='uppercase opacity-50 mb-3'>Get Connected</h5>
                            <ul className='tracking-tighter flex flex-col gap-2'>
                                <li><Link to='#' className='hover:text-orange-600'>Docs</Link></li>
                                <li><Link to='#' className='hover:text-orange-600'>Support</Link></li>
                                <li><Link to='#' className='hover:text-orange-600'>Dashboard</Link></li>
                                <li><Link to='#' className='hover:text-orange-600'>Coverage</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='uppercase opacity-50 mb-3'>Company</h5>
                            <ul className='tracking-tighter flex flex-col gap-2'>
                                <li><Link to='#' className='hover:text-orange-600'>About Us</Link></li>
                                <li><Link to='#' className='hover:text-orange-600'>Blog</Link></li>
                                <li><Link to='#' className='hover:text-orange-600'>Partnerships</Link></li>
                                <li><Link to='#' className='hover:text-orange-600'>Careers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='uppercase opacity-50 mb-3'>Social</h5>
                            <ul className='tracking-tighter flex flex-col gap-2'>
                                <li><Link to='#' className='hover:text-orange-600'>Twitter</Link></li>
                                <li><Link to='#' className='hover:text-orange-600'>Facebook</Link></li>
                                <li><Link to='#' className='hover:text-orange-600'>GitHub</Link></li>
                                <li><Link to='#' className='hover:text-orange-600'>Telegram</Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr className='border-1' />
                    <div className='flex gap-4 justify-between'>
                        <p className=''>&copy; {currentYear} all reseved by <span className='uppercase'>Carto</span></p>
                        <div className='gap-6 flex'>
                            <Link>Terms</Link>
                            <Link>Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;