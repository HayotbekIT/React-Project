import styledComponents from "styled-components";

const About = () => {
    return (
        <AboutStyle className="about">
            <div className="container">
                <div className="row about__row">
                    <div className="about__imageholder"></div>
                    <div className="about__content">
                        <p className="subtitle about--subtitle">ABOUT US</p>
                        <h2 className="title-2 about--title">
                            The Best And Most trusted service
                        </h2>

                        <div className="about__text">
                            <p>
                                We are the largest holiday service provider in the world with partners and places spread all over the world by prioriti- zing service and customer satisfaction.
                            </p>
                        </div>
                        <div className="about__wrap">
                            <div className="wrap__left">
                                <h3 className="wrap--title">270+</h3>
                                <div className="wrap--desc">Customer and partners</div>
                            </div>
                            <div className="wrap__right">
                                <h3 className="wrap--title">470+</h3>
                                <div className="wrap--desc">Place in the world</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AboutStyle>
    )
}

export default About;

const AboutStyle = styledComponents.section`

    .about{
        

        &__row{
            align-items: center;
            column-gap: 90px;
        }

        &__imageholder{
            width: 480px;
            height: 550px;
            background: #C4C4C4;
            border-radius: 24px;
        }
        &__content{
            width: 400px;
        }
        &__content>*+*:not(:last-child){
            margin-top: 16px;
        }
        &__text{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 32px;
            color: rgba(0, 0, 0, 0.3);
        }
        &__text>*+*{
            margin-top: 15px;
        }
        &__wrap {
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
            & > * > * + *{
                margin-top: 8px;
            }
            & > * {
                max-width: 170px;
            }
        }
    }

`