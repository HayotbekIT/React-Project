import styledComponents from "styled-components";

const Header = () => {
    return (
        <HeaderStyle className="header">
            <div className="container">
                <div className="row header__row">
                    <div className="header__content">
                        <h1 className="title">Explore The Most Beatiful Place Around The World</h1>
                    </div>
                    <div className="header__elements">
                        <div className="header__progress">

                            <div className="step">1/8</div>
                            <div className="step-line"></div>
                        </div>
                        <a href="#!" className="header__link">See More</a>
                    </div>
                </div>
            </div>
        </HeaderStyle>
    )
}

export default Header;
const HeaderStyle = styledComponents.header`
    .header{
        &__content {
            width: 622px;
            margin-bottom: 304px;
            margin-left: auto;
        }
        &__row {
            flex-direction: column;
        }
        &__elements {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__link {
            display: inline-block;
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(12px);
            text-decoration: none;
            border-radius: 40px;
            /*  */
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.005em;
            color: #FFFFFF;
            padding: 15px 34px 15px calc((30px + 14px + 7px) - 34px);
            position: relative;
            width: 180px;
            &::before {
                content: ">";
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 30px;
              
            }
        }
    } 
`