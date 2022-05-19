import React from "react";

import {Wrapper, Content, Articles} from "./PopularArticles.style";

const PopularArticles = ({header, children}) => (
    <Wrapper>
        <p className='header'>{header}</p>
        <Content>
            <Articles>
                {children}
            </Articles>
        </Content>
    </Wrapper>
);

export default PopularArticles;
