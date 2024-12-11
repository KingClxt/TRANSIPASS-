import PropTypes from 'prop-types';
import { useState } from 'react';

const DivChamp = ({label, reset, value='', name, type, select=null, options=null}) => {
    const [input, setInput] = useState(value)
    if(select){
        return (
            <div className=' flex flex-col gap-2 p-3'>
                <label htmlFor="" className='text-xl font-bold text-[#5D5FEF]'>{label}</label>
                <select required name={name} className='w-full text-center px-4 py-2 border rounded-lg bg-white focus:ring-[#5D5FEF] focus:outline-none focus:ring-2'>
                        <option >---selectionner une entreprise---</option>
                        {
                            options.map(item=><option value="674f5a415c8401b60cf75cc8" key={item}>{item}</option>)
                        }
                </select>
            </div>
        )
    }
    return(
        <>
        
            <div className="flex flex-col gap-2 p-3">
                <label htmlFor="" className='text-xl font-bold text-[#5D5FEF]'>{label}</label>
                <input name={name} value={!reset?input:''} onChange={(e)=>setInput(e.target.value)} type={type} className='w-full px-4 py-2 border rounded-lg focus:ring-[#5D5FEF] focus:outline-none focus:ring-2' />
            </div>
        </>
    );
}
    // DivChamp.propTypes = {
    //     label: PropTypes.string.isRequired,
    //     type: PropTypes.string.isRequired,
    // }
export default DivChamp;