import PropTypes from 'prop-types';

const Rond = ({children}) => {
    return(
        <>
            <div className='bg-white rounded-full w-14 h-14 flex items-center justify-center'>
                {children}
            </div>
        </>
    );
}
Rond.propTypes = {
    children: PropTypes.node
}
export default Rond;