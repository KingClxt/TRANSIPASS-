import PropTypes from 'prop-types';

const Td = ({children}) => {
    return(
        <>
            <td className="sm:px-6 py-4 ">{children}</td>
        </>
    );
}
Td.propTypes = {
    children: PropTypes.node
}
export default Td;