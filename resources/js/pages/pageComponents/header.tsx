import { Link } from '@inertiajs/react';

interface HeaderProps {
    authenticated?: boolean;
    showNav?:boolean;
    }
const Header = ({authenticated = false, showNav = true} : HeaderProps) => {
    return (
        <>
        {authenticated ? (
            <header className=" text-white p-4">
                <h1 className="text-3xl">RepairRoute</h1>
                {showNav && 
                    <nav className="flex items-center justify-end gap-4">              
                        <ul className="flex space-x-4">
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/about" className="hover:underline">About</a></li>
                            <li><a href="/contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </nav>
                }
            </header>
        ) : (
            <header className=" text-white p-4">
                <h1 className="text-3xl">RepairRoute</h1>
                {showNav && 
                    <nav className="flex items-center justify-end gap-4">          
                        <ul className="flex space-x-4">
                            <li>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                > Log In </Link></li>
                            <li><Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                > Register </Link></li>
                        </ul>
                    </nav>
                }
            </header>
        )}
        
        </>
    );
}

export default Header;



