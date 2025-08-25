
const Footer = () => {  
    return (
        <footer className="border-t-1 bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18] dark:text-[#EDEDEC] p-4 text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Lorem Ipsum Technologies. All rights reserved.
            </p>
            <p className="text-xs mt-2">
                Built with love and dedication.
            </p>
        </footer>
    );
}
export default Footer;