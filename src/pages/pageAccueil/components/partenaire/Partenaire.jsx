import moov from '../../../../assets/moov.png';
import mtn from '../../../../assets/mtn.jpg';
import orange from '../../../../assets/orange.webp';
import wave from '../../../../assets/wave.png';
import sotra from '../../../../assets/SOTRA.jpg';

import Titre from '../../../../components/Titre';

const Partenaire = () => {
    return (
        <>
            <div className="text-[#F5F6FA] text-center py-10">
                <Titre titre="NOS PARTENAIRES" />


                <div className="overflow-hidden relative bg-[#5D5FEF] py-5 w-11/12 mx-auto rounded-xl">

                    <div className="flex animate-marquee space-x-10 md:space-x-20 lg:space-x-32">

                        <img src={moov} alt="Moov" className="h-12 md:h-16 lg:h-20"/>

                        <img src={mtn} alt="MTN" className="h-12 md:h-16 lg:h-20"/>

                        <img src={orange} alt="Orange" className="h-12 md:h-16 lg:h-20"/>

                        <img src={wave} alt="Wave" className="h-12 md:h-16 lg:h-20"/>

                        <img src={sotra} alt="Sotra" className="h-12 md:h-16 lg:h-20"/>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Partenaire;
