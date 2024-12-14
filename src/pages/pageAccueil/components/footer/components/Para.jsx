import PropTypes from 'prop-types';

const Para = ({children}) => {
    return(
        <>
            <h3 className='bg-white rounded-xl'>
                {children}
            </h3>
        </>
    );
}
Para.propTypes = {
    children: PropTypes.node
}
export default Para;