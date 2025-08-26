import React from 'react';

const Footer = () => {  
    return (
        <div style={{borderTop: 'position: fixed; left:0; bottom:0; width:100%; background-color:red; color:white; text-align:center'}}>
            <footer className="border-t-2 border-red-400 text-[#EDEDEC] p-4">
            <div className="text-center w-full">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Lorem Ipsum Technologies. All rights reserved.
                </p>
                <p className="text-xs mt-2">
                    Built with love and dedication.
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="/termsofservices" className="text-sm underline hover:text-blue-500"  target="_blank">
                        Terms of Services
                    </a>
                    <a href="/privpolicy" className="text-sm underline hover:text-blue-500"  target="_blank" >
                        Privacy Policy
                    </a>
                    <a href="/contactus" className="text-sm underline hover:text-blue-500"  target="_blank" >
                        Contact Us
                    </a>
                    <a href="/aboutus" className="text-sm underline hover:text-blue-500"  target="_blank" >
                        About Us
                    </a>
                </div>
            </div>
        </footer>
        </div>
    );
}
export default Footer;