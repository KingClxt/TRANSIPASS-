import PropTypes from 'prop-types';

const Th = ({children}) => {
    return(
            <>
                <th className="sm:px-6 px-0 py-2 sm:py-4 font-bold text-center">{children}</th>
            </>
    );
}
Th.propTypes = {
    children: PropTypes.node
}
export default Th;