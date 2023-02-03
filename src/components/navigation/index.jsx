import styledComponents from "styled-components";

const Navigation = () => {
    return (
        <NavStyle className="navigation">
            <div className="container">
                <div className="row nav__row">
                    <div className="logo">JelongTour </div>
                    <div className="navigation__wrap">
                        <div className="nav-bar">
                            <a href="#!" className="nav-link">Home</a>
                            <a href="#!" className="nav-link">Explore</a>
                            <a href="#!" className="nav-link">About us</a>
                            <a href="#!" className="nav-link">Booking</a>
                            <a href="#!" className="nav-link">Sign Up</a>
                        </div>
                        <button className="login">Sign Up</button>
                    </div>
                </div>
            </div>
        </NavStyle>
    )
}

export default Navigation;

const NavStyle = styledComponents.nav`
    .nav{
        &igation{
            &__wrap {
                display: flex;
                align-items: center;
                column-gap: 86px;
            }
        }

        &__row {
            justify-content: space-between;
        }
        &-bar>*+* {
            margin-left: 40px;
        }
        &-link {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #FFFFFF;
            /*  */
            text-decoration: none;
          
        }
        
    }
`