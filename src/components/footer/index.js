import styledComponents from "styled-components"
import Facebook from "../../images/icon/facebook-icon.svg"
import Instagram from "../../images/icon/instagram-icon.svg"
import Twitter from "../../images/icon/twitter-icon.svg"
import Widget from "./widget/widget"

const Footer = () => {
    return (
        <FooterStyle className="footer">
            <div className="container">
                <div className="row footer__row">
                    <div className="logo">
                        JelongTour
                    </div>
                    {/*  */}
                    <Widget />
                    {/*  */}
                    <div className="footer__contact">
                        <div className="footer__social">
                            <a href="#!" className="social__link">
                                <img src={Facebook} alt="Image Error" />
                            </a>
                            <a href="#!" className="social__link">
                                <img src={Instagram} alt="Image Error" />
                            </a>
                            <a href="#!" className="social__link">
                                <img src={Twitter} alt="Image Error" />
                            </a>
                        </div>
                        <a href="#!" className="footer__link">JelongTour.info@email.com</a>
                        <a href="#!" className="footer__link phone-number">(704) 555-0127</a>
                    </div>
                </div>

            </div>
            <div className="copyright">
                <div className="container">
                    <p className="copyright__text">
                        All right reseved JelongTour
                    </p>
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer;

const FooterStyle = styledComponents.footer`
    .footer{
        &__row{
            column-gap: 100px;
            padding-bottom: 68px;
        }
        &__social {
            display: flex;
            column-gap: 16px;
        }
        &__link {
            margin-top: 24px;
            display: block;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
        
            &:hover {
                color: #FFFFFF;
            }
        }
        
    }

    .copyright{
        &__text {
            text-align: center;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #FFFFFF;
        }
    }
`