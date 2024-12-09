

export const Button = ({children, onClick, classname})=>{
    return (
        <button 
                className={`${classname} py-3 transition-all rounded font-bold text-white`} 
                onClick={onClick}>
            {children}
        </button>
    )
}