import React from "react";

import {Wrapper, Content, Articles} from "./PopularArticles.style";

// Images
import ViewsLogo from "../../images/carbon_view-filled.png";
import LikesLogo from "../../images/bxs_like.png";

const PopularArticles = ({header, articles}) => (
    <Wrapper>
        <p className='header'>{header}</p>
        <Content>
            <Articles>
                <div>{articles.data.map(article => (
                    <div key={article.id} className={'article'}>
                        <p className={'articleTitle'}><a href="#">{article.title}</a></p>
                        <div className={'bottom'}>
                            <p>
                                <img src={ViewsLogo} alt="views"/>
                                <span>{article.views}</span>
                            </p>
                            <p>
                                <img src={LikesLogo} alt="views"/>
                                <span>{article.likes}</span>
                            </p>
                        </div>
                    </div>
                ))}</div>
            </Articles>
        </Content>
    </Wrapper>
);

export default PopularArticles;
