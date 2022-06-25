import { BsAsterisk } from "react-icons/bs";

const Input = ({ label, type, required, value, className, InputclassName, placeholder, startAdorment, handleChange, name, errorMessage }) => {
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    return (
        <section className="w-full">
            {label && (<> <label className="text-gray-800 font-medium flex items-start gap-1 mb-6" htmlFor="#">{label}{required && <BsAsterisk className="text-8 text-red-600 relative top-1" />}</label> </>)}
            <section className="relative">
                <span className="absolute top-2/4 left-2 -translate-y-2/4 text-gray-500">
                    {startAdorment}
                </span>
                <div className={className}>
                    <input name={name} type={type ? type : "text"} min={utc} onChange={handleChange} value={value} className={`w-full py-12 text-14 pr-16 ${startAdorment ? 'pl-32' : 'pl-16'} ${errorMessage && 'input-error'} ${InputclassName}`} placeholder={placeholder} />
                    {errorMessage && <p className="text-red-700 text-10 mt-4 ml-2"> {errorMessage} </p>}
                </div>
            </section>
        </section>
    )
}

export default Input;