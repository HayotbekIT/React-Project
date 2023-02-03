const Recommend = () => {
    return (
        <section className="recommend">
            <div className="container">
                <div className="recommend__titles">
                    <p className="subtitle recommend--subtitles">
                        Some our recommended place around the world
                    </p>
                </div>
                <div className="recommend__cards">
                    <div className="row recommend__row">
                        {/* card */}
                        <div className="recommend__card">
                            <div className="recommend__card-imgholder"></div>
                            <div className="recommend__card-desc">
                                <h3 className="recommend__card-title">
                                    Raja Ampat, Indonesia
                                </h3>
                                <p className="recommend__card-subtitle">
                                    Underwater Tourism
                                </p>
                                <div className="recommend__card-price">
                                    <b className="price-bold">$750/</b><span>Pax</span>
                                </div>
                            </div>
                        </div>
                        {/* // card */}

                        {/* card */}
                        <div className="recommend__card">
                            <div className="recommend__card-imgholder"></div>
                            <div className="recommend__card-desc">
                                <h3 className="recommend__card-title">
                                    Raja Ampat, Indonesia
                                </h3>
                                <p className="recommend__card-subtitle">
                                    Underwater Tourism
                                </p>
                                <div className="recommend__card-price">
                                    <b className="price-bold">$750/</b><span>Pax</span>
                                </div>
                            </div>
                        </div>
                        {/* // card */}

                        {/* card */}
                        <div className="recommend__card">
                            <div className="recommend__card-imgholder"></div>
                            <div className="recommend__card-desc">
                                <h3 className="recommend__card-title">
                                    Raja Ampat, Indonesia
                                </h3>
                                <p className="recommend__card-subtitle">
                                    Underwater Tourism
                                </p>
                                <div className="recommend__card-price">
                                    <b className="price-bold">$750/</b><span>Pax</span>
                                </div>
                            </div>
                        </div>
                        {/* // card */}

                        {/* card */}
                        <div className="recommend__card">
                            <div className="recommend__card-imgholder"></div>
                            <div className="recommend__card-desc">
                                <h3 className="recommend__card-title">
                                    Raja Ampat, Indonesia
                                </h3>
                                <p className="recommend__card-subtitle">
                                    Underwater Tourism
                                </p>
                                <div className="recommend__card-price">
                                    <b className="price-bold">$750/</b><span>Pax</span>
                                </div>
                            </div>
                        </div>
                        {/* // card */}
                    </div>
                    <div className="recommend__cards-buttons">
                        <button className="arrow-button arrow-button--left cards-button--left">&#62;</button>
                        <button className="arrow-button arrow-button--right cards-button--right">&#60;</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recommend;