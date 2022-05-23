import React from "react";

import {Wrapper, Content, AuthorWrapper, ArticleText } from "./Posts.styles";

// profile img
import ProfileImgDefault from '../../images/profile-default.png'

export const Post = ({firstName, lastName, createdAt, description}) => (
    <Wrapper>
        <Content>
            <AuthorWrapper>
                <img src={ProfileImgDefault} alt="profile img" width='35px' height='35px'/>
                <div>
                    <p className='author'>{firstName} {lastName}</p>
                    <p className='date'>{createdAt}</p>
                </div>
            </AuthorWrapper>
            <ArticleText>
                {description}
            </ArticleText>
        </Content>
    </Wrapper>
);

export default Post;
