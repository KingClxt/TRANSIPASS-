

export const Button = ({children, onClick, classname, button})=>{
    return (
        <button 
                type={button?'button':'submit'}
                className={`${classname} py-1 sm:py-3 transition-all px-5 rounded font-bold text-white`} 
                onClick={onClick}>
            {children}
        </button>
    )
}