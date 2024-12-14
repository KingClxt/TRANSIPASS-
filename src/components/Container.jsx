import PropTypes from 'prop-types';

const Container = ({ children }) => {
    return (
        <div className="bg-white w-11/12 md:w-4/5 rounded-xl shadow-lg py-10 px-24 max-h-max">
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container;
