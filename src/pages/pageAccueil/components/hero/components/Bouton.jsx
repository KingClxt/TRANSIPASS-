import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Bouton = ({ lien, children }) => {
    return (
        <NavLink to={lien} className="inline-block text-[#5D5FEF] border-2 border-[#5D5FEF] rounded-lg px-4 py-2 text-center text-xl font-medium transition-all duration-300 ease-in-out hover:bg-[#5D5FEF] hover:text-white focus:outline-none">
            {children}
        </NavLink>
    );
};

Bouton.propTypes = {
  lien: PropTypes.string.isRequired, // Le lien est obligatoire
  children: PropTypes.node.isRequired, // Contenu interne obligatoire
};

export default Bouton;
