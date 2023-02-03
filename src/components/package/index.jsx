import styledComponents from "styled-components";

const Packages = () => {
    return (
        <PackagesStyle className="packages">
            <div className="container">
                <div className="row packages__row">
                    <div className="packages__imageholder"></div>
                    <div className="packages__content">
                        <p className="subtitle packages--subtitle">PACKAGES</p>

                        <h2 className="title-2 packages--title">
                            Luxury Holiday Packages For You
                        </h2>

                        <div className="packages__text">
                            <p>
                                Find a luxurious and comfortable workplace at a friendly price so you don't have to worry about costs and the services we provide are very useful for you as a valuable
                            </p>
                        </div>
                        <div className="packages__wrap">
                            <div className="day-price">
                                <b className="price-bold">$1400</b> <span>/day</span>
                            </div>
                            <div className="packages__buttons">
                                <button className="packages__button">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PackagesStyle>
    )
}

export default Packages;

const  PackagesStyle = styledComponents.section`
    .packages{
        &__row {
            align-items: center;
            column-gap: 90px;
        }
        &__imageholder {
            width: 480px;
            height: 550px;
            background: #C4C4C4;
            border-radius: 24px;
          
        }
        
    }
`