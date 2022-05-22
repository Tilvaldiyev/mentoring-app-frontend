import React from "react";

import {Wrapper, Content, AuthorWrapper, Title, ArticleText, ReadMoreBtn, ArticleBottom} from "./Articles.style";

// profile img
import ProfileImgDefault from '../../images/profile-default.png'
import ArticleImgDefault from '../../images/Rectangle.png'
import LikesImg from '../../images/bxs_like.png'
import CommentsImg from '../../images/bxs_comment.png'
import ViewsImg from '../../images/carbon_view-filled.png'

export const Article = ({firstName, lastName, createdAt, title, description, likes, views, comments}) => (
    <Wrapper>
        <Content>
            <AuthorWrapper>
                <img src={ProfileImgDefault} alt="profile img" width='35px' height='35px'/>
                <div>
                    <p className='author'>{firstName} {lastName}</p>
                    <p className='date'>{createdAt}</p>
                </div>
            </AuthorWrapper>
            <Title>{title}</Title>
            <img src={ArticleImgDefault} alt="Article Img" width="100%"/>
            <ArticleText>
                {description}
            </ArticleText>
            <ReadMoreBtn className='btn'>Read more</ReadMoreBtn>
            <ArticleBottom>
                <div className='d-flex'>
                    <div className='likes'>
                        <img src={LikesImg} alt="likes img"/>
                        <span className='qty'>{likes}</span>
                    </div>
                    <div>
                        <img src={CommentsImg} alt="comments img"/>
                        <span className='qty'>{comments}</span>
                    </div>
                </div>
                <div>
                    <img src={ViewsImg} alt="views img"/>
                    <span className='qty'>{views}</span>
                </div>
            </ArticleBottom>
        </Content>
    </Wrapper>
);

export default Article;
