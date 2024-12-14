import PropTypes from 'prop-types';

const GridDiv = ({ className, children }) => {
    return(
        <>
            <div className={className}>
                {children}
            </div>
        </>
    );
}
GridDiv.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}
export default GridDiv;