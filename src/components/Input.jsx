export const Input = ({name,label, placeholder, type, classname})=>{
    return (
        <div className="w-full">
            
            {
                // Formatage du name
                label &&<label htmlFor={label} className="block text-black">
                {label[0].toUpperCase()+label.slice(1)}
            </label>
            }
            <input 
                    placeholder={placeholder} 
                    type={type?type:'text'} 
                    id={label && label.split(' ').join('-')} //remplacer les espaces par - si le name en contient
                    required 
                    name={name}
                    className={`w-full px-4 py-2 border transition-all rounded-lg ring-[#5D5FEF] focus:outline-none focus:ring-2 ${classname}`}/>
        </div>
    )
}