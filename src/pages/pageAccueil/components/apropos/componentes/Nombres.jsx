import PropTypes from 'prop-types';

const Nombres = ({ nbr, texte }) => {
    return (
        <div className='flex flex-col gap-1 justify-center'>
            <h2 className='font-bold text-5xl text-[#5D5FEF]'>{nbr}</h2>
            <p className='text-xl font-bold'>{texte}</p>
        </div>
    );
};

// Correction : Utiliser `propTypes` avec une minuscule.
Nombres.propTypes = {
    nbr: PropTypes.string.isRequired, // Validation pour `nbr` : chaîne requise
    texte: PropTypes.string.isRequired, // Validation pour `texte` : chaîne requise
};

export default Nombres;
