

export const RecentPaymentItem = ({titre, price, date})=>{
    // let myDate = date.getDay()
    
    return (
        <div className="border-b last:border-b-0 bg-white rounded-b flex justify-between items-center px-3">
            <div className="py-3 flex items-center gap-2">
                        <img className="w-5 h-5 lg:w-9 lg:h-9 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyG7P_ElGLq8IRKmG8cFSWBMkAeSZFxafnyg&s" alt="" />
                        <p className="flex font-semibold flex-col">
                            <span>{titre}</span>
                            <span>{price} FCFA</span>
                        </p>
            </div>
            <div>
                <p className="font-poppins font-bold">
                     {/* {myDate} */}
                </p>
                
            </div>
        </div>
    )
}