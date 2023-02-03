const Widget = () => {
    return (
        <div className="widgets">
            <div className="widget">
                <h3 className="widget__title">Information</h3>
                <ul className="widget__list">
                    <li className="widget__item">
                        <a href="#!" className="widget__link">About us</a>
                    </li>
                    <li className="widget__item">
                        <a href="#!" className="widget__link">More search</a>
                    </li>
                    <li className="widget__item">
                        <a href="#!" className="widget__link">Blogs</a>
                    </li>
                    <li className="widget__item">
                        <a href="#!" className="widget__link">Testimonial</a>
                    </li>
                    <li className="widget__item">
                        <a href="#!" className="widget__link">Event</a>
                    </li>
                </ul>
            </div>

            {/*  */}

            <div className="widget">
                <h3 className="widget__title">Help Full Link</h3>
                <ul className="widget__list">
                    <li className="widget__item">
                        <a href="#!" className="widget__link">Services</a>
                    </li>
                    <li className="widget__item">
                        <a href="#!" className="widget__link">Support</a>
                    </li>
                    <li className="widget__item">
                        <a href="#!" className="widget__link">Tearm & Condition</a>
                    </li>
                    <li className="widget__item">
                        <a href="#!" className="widget__link">Privacy</a>
                    </li>
                    <li className="widget__item">
                        <a href="#!" className="widget__link">FAQ</a>
                    </li>
                </ul>
            </div>

            {/*  */}

            <div className="widget">
                <h3 className="widget__title">Our Services</h3>
                <ul className="widget__list">
                    <li className="widget__item">
                        <a href="#!" className="widget__link">Travel</a>
                    </li>
                    <li className="widget__item">
                        <a href="#!" className="widget__link">Guide Travel</a>
                    </li>
                    <li className="widget__item">
                        <a href="#!" className="widget__link">Study Tour</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Widget;