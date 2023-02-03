import styledComponents from "styled-components";

const Article = () => {
    return (
        <ArticleStyle className="articles">
            <div className="container">
                <div className="articles__titles">
                    <p className="subtitle articles--subtitle">
                        ARTICLES
                    </p>
                    <h2 className="title-2 articles--title">
                        The Best Choice Of Place Just For You
                    </h2>
                </div>
                <div className="articles__slider">
                    <div className="slide__item">
                        <div className="slide__number">01</div>
                        <hr className="line" />
                        <div className="slide__content">
                            <h3 className="slide__title">
                                Indonesia
                            </h3>

                            <div className="slide__text">
                                <p>
                                    A country in Southeast Asia that crosses the equator and is between mainland Asia and Australia, and between the Pacific Ocean and the Indian Ocean. Indonesia is the largest archipelagic country in the world
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="articles__buttons">
                        <button className="articles__arrow arrow-button arrow-button--left">&#62;</button>
                        <button className="articles__arrow arrow-button arrow-button--right">&#60;</button>
                    </div>
                </div>
                <div className="row article__row">
                    <div className="article__block"></div>
                    <div className="article__block"></div>
                    <div className="article__block"></div>
                    <div className="article__block"></div>
                    <div className="article__block"></div>
                    <div className="article__block"></div>
                </div>
            </div>
        </ArticleStyle>
    )
}

export default Article;

const ArticleStyle = styledComponents.article`

    .article{
        &s{
            &__titles{
                & >*+* {
                    margin-top: 16px;
                }
            }
            &__titles {
                width: 501px;
            }
            &__slider {
                padding: 52px 0 48px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-left: 80px;
            }
            .title-2.articles--title {
                font-weight: 700;
            }
            .subtitle.articles--subtitle {
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                text-transform: uppercase;
            }
            
        }
    }

`