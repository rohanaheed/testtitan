import Modal from '../common/Modal'
import Input from '../common/Input'

const ConnectWalletModal = ({isOpen, setIsOpen}) => {

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h2 className="text-center text-24 text-gray-800 mt-58"> Connect Wallet </h2>
            <p className="text-gray-600 mb-34 text-center px-72"> Connect with one of our wallet providers or create new one</p>
            <div class="text-sm text-gray-500 px-28 border-gray-200 mb-79">
            <ul class="rounded-8 card-shadow bg-gray-50 w-full mx-auto my-60 border">
            <li class="wallet-item flex items-center justify-between px-26 py-20 border-b cursor-pointer"><div class=" flex justify-between text-gray-700 items-center gap-5 font-normal text-16 cursor-pointer transition-all"><img class="w-24" src="/assets/metamask.webp" alt="" />MetaMask</div><div class="bg-red-500 text-white px-16 py-3 rounded-20">Popular</div></li>
            <li class="wallet-item flex items-center justify-between px-26 py-22 border-b cursor-pointer"><div class=" flex justify-between text-gray-700 items-center gap-5 font-normal text-16 cursor-pointer transition-all"><img class="w-24" src="/assets/coinbase.svg" alt="" />Coinbase</div></li>
            <li class="wallet-item flex items-center justify-between px-26 py-22 border-b cursor-pointer"><div class=" flex justify-between text-gray-700 items-center gap-5 font-normal text-16 cursor-pointer transition-all"><img class="w-24" src="/assets/phantom.webp" alt="" />Phantom</div></li>
            </ul>
            </div>
        <div className="bg-gray-900 py-18 px-28 mt-44 cursor-pointer">
            <p className="text-gray-200 font-medium text-center"> Connect Wallet </p>
        </div>
    </Modal>
    )
}

export default ConnectWalletModal;