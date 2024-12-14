import PropTypes from 'prop-types';

const SousTitre = ({sousTitre}) => {
    return(
        <>
            <h1 className='text-lg md:text-xl font-bold text-[#5D5FEF] mb-6'>{sousTitre}</h1>
        </>
    );
}
SousTitre.propTypes = {
    sousTitre: PropTypes.string.isRequired,
}

export default SousTitre;