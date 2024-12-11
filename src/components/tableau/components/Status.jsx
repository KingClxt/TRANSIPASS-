import PropTypes from 'prop-types';

const Status = ({children}) => {
    return(
        <>
            <p className='px-7 py-1 bg-green-300 font-bold rounded-xl w-fit'>{children}</p>
        </>
    );
}
Status.propTypes = {
    children: PropTypes.node
}
export default Status;