import PropTypes from 'prop-types';

const DivChamp = ({label, type}) => {
    return(
        <>
            <div className="w-5/5 m-2 flex flex-col gap-2 p-3">
                <label htmlFor="" className='text-xl font-bold text-[#5D5FEF]'>{label}</label>
                <input type={type} className='w-full px-4 py-2 border rounded-lg focus:ring-[#5D5FEF] focus:outline-none focus:ring-2' />
            </div>
        </>
    );
}
DivChamp.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}
export default DivChamp;