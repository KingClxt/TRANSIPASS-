import PropTypes from 'prop-types';

const Titre = ({ titre , className}) => {
    return(
        <>
            <h1 className={"text-[#5D5FEF] font-poppins font-bold text-2xl md:text-4xl " + className}>{titre}</h1>
        </>
    );
}
// Correction : Utiliser `propTypes` avec une minuscule.
// Titre.propTypes = {
//     titre: PropTypes.string.isRequired, // Validation pour `titre` : chaîne requise
//     className: PropTypes.string.isRequired,
// };
export default Titre;