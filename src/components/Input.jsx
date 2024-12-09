export const Input = ({name, placeholder, type, classname})=>{
    return (
        <div className="w-full">
            
            {
                // Formatage du name
                name &&<label htmlFor={name} className="block text-black">
                {name[0].toUpperCase()+name.slice(1)}
            </label>
            }
            <input 
                    placeholder={placeholder} 
                    type={type?type:'text'} 
                    id={name && name.split(' ').join('-')} //remplacer les espaces par - si le name en contient
                    required 
                    className={`w-full px-4 py-2 border transition-all rounded-lg ring-[#5D5FEF] focus:outline-none focus:ring-2 ${classname}`}/>
        </div>
    )
}