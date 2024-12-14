import PropTypes from 'prop-types';

const Etape = ({ children }) => {
    return(
        <>
            <div className='bg-white shadow-lg shadow-violet-400 p-6 md:p-8 rounded-lg flex flex-col items-start space-y-4 w-full max-w-sm md:max-w-md'>
                {children}
            </div>
        </>
    );
}
Etape.propTypes = {
    children: PropTypes.node
}
export default Etape;