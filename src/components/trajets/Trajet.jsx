// import PropTypes from 'prop-types';
import Titre from '../Titre';
import AjoutTrajet from './components/AjoutTrajet';
import InfosTrajet from './components/InfosTrajet';

const Trajet = () => {
    return(
        <>
            <div className='m-8'>
                <div className='mb-8 flex flex-col gap-5'>
                    <Titre className="uppercase" titre="Ajout Trajet" />

                    <div className='w-full mb-4'>
                        <AjoutTrajet/>
                    </div>
                </div>

                <div className='w-full shadow-lg bg-white px-4 py-8 flex flex-col gap-4 rounded-lg'>
                    <Titre titre="Infos trajet / arrêt" />

                    <div className='w-full'>
                        <InfosTrajet/>
                    </div>
                </div>
            </div>
        </>
    );
}
// Trajet.propTypes = {
// className: PropTypes.string,
//     children: PropTypes.node
// }
export default Trajet;