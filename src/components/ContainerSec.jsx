import PropTypes from 'prop-types';

const ContainerSec = ({ children }) => {
    return (
        <div className="bg-[#8587ff] py-10 flex justify-center items-center max-h-max">
            {children}
        </div>
    );
}

ContainerSec.propTypes = {
    children: PropTypes.node
}

export default ContainerSec;
