import ReginImage from "../../images/regin.svg"
import SkyTravelImage from "../../images/sky-travel.svg"
import TopnetImage from "../../images/topnet.svg"
import TravelImage from "../../images/travel.svg"
import TulipImage from "../../images/tulip.svg"

const Partnership = () => {
    return (
        <section className="partnership">
            <div className="container">
                <div className="partnership__titles">
                    <h2 className="title-2 partnership__title">
                        Our Partnership
                    </h2>
                    <p className="subtitle partnership--subtitle">
                        Some our best partnership travel service worldwide
                    </p>
                </div>
                <div className="row partnership__row">
                    <div className="partnership__imageholder">
                        <img src={TopnetImage} alt="Error upload" />
                    </div>
                    <div className="partnership__imageholder">
                        <img src={TulipImage} alt="Error upload" />

                    </div>
                    <div className="partnership__imageholder">
                        <img src={ReginImage} alt="Error upload" />

                    </div>
                    <div className="partnership__imageholder">
                        <img src={SkyTravelImage} alt="Error upload" />

                    </div>
                    <div className="partnership__imageholder">
                        <img src={TravelImage} alt="Error upload" />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partnership;