import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Footer from '../pages/pageComponents/footer'; 
import Header from '../pages/pageComponents/header'; 


export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="RepairRoute">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    
                        {auth.user ? (
                            <> {/* when logged in, the header will contain Home, About, and Contact navbar links */}
                            <Header 
                                authenticated = {true}
                                showNav = {true}
                            />
                            </>
                        ) : (
                            <>
                                <Header 
                                    authenticated = {false}
                                    showNav = {true}
                                />
                            </>
                        )}
                    
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full  flex-col-reverse lg:max-w-4xl lg:flex-row">
                         {/* first box div*/}
                        <div className='m-5 border-2 rounded-xl border-gray-400 flex w-full flex-col items-center justify-center gap-4 p-6 lg:w-1/2 lg:items-start lg:justify-start lg:p-8'>
                            <span className="text-2xl dark:text-[#9f9f96]"> Lorem Ipsum Technologies </span>
                            <span className="text-6xl font-semibold dark:text-[#EDEDEC]">Repair Route</span>
                            <p className=" text-[#1b1b18] dark:text-[#EDEDEC]">
                                A comprehensive solution for repair task management and task acquisition, leveraging web-based technologies for seamless integration and user experience.
                            </p>
                        </div>

                        <div className='m-5 border-2 rounded-xl border-gray-400 flex w-full flex-col items-center justify-center gap-4 p-6 lg:w-1/2 lg:items-start lg:justify-start lg:p-8'>
                            <span className="text-2xl dark:text-[#9f9f96]"> Debugging Links </span>
                            <ul>    
                                <li className='text-1xl dark:text-[#EDEDEC]'> 
                                    <a
                                        href= {route('login')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    > Login Page </a>
                                </li>
                                <li className='text-1xl dark:text-[#EDEDEC]'> 
                                    <a
                                        href= {route('register')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    > Register Page </a>
                                </li>

                                    <li className='text-1xl dark:text-[#EDEDEC]'> 
                                    <a
                                        href= {route('dashboard')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    > Task Master Homepage </a>
                                </li>

                                    <li className='text-1xl dark:text-[#EDEDEC]'> 
                                    <a
                                        href= "https://www.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >   </a>
                                </li>
                                
                            </ul>
                        </div>
                        {/* second box div*/}
                        <div className='m-2  border-2 rounded-xl border-gray-400 flex w-full flex-col items-center justify-center gap-4 p-6 lg:w-1/2 lg:items-start lg:justify-start lg:p-8'>
                            <ul>    
                                <li className='text-1xl dark:text-[#EDEDEC]'> Centralized Task Dissemination </li>
                                <li className='text-1xl dark:text-[#EDEDEC]'> Task Ticketing System </li>
                            </ul>                        
                        </div>
                    </main>
                </div>
                
            </div>
            <Footer />
        </>
    );
}
