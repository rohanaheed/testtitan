import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
    const history = useHistory()
    return (
        <footer style={{ zindex: '90'}} className="bg-black w-full fixed bottom-0 z-20">
            <section className="mt-40 container mx-auto px-24 lg:px-99 pb-42 md:flex md:items-center text-center md:justify-between">
                <span className="text-sm text-gray-300 sm:text-center ml-8">© 2022 TITAN Marketplace™ All Rights Reserved.</span>
                <div className="flex mt-4 space-x-6 justify-center md:mt-0">
                    <span onClick={() => history.push('/privacy')} className="cursor-pointer text-gray-400 text-14 hover:underline transition-all">Privacy Policy</span>
                    <span onClick={() => history.push('/term')} className="cursor-pointer text-gray-400 text-14 hover:underline transition-all">Terms of Service</span>
                </div>
            </section>
        </footer>
    )
}

export default Footer;