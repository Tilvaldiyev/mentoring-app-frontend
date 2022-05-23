import React, {useState} from "react";

// API
import API from "../API";

// Config

// Components
import Article from "./Articles";
import HomeFilter from "./HomeFilter";
import PopularArticles from "./PopularArticles";

// Hook
import {useHomeFetch} from "../hooks/useHomeFetch";
import Header from "./Header";
import Tab from "./Tab";
import HomePNG from './../images/ant-design_home-filled.png'
import ExplorePNG from './../images/ic_baseline-explore.png'
import LogOutPNG from './../images/ooui_log-out-ltr.png'
import BookmarksPNG from './../images/bi_bookmark-fill.png'
import MessagePNG from './../images/wpf_message.png'
import MeetingsPNG from './../images/healthicons_group-discussion-meetingx3.png'
import ProfilePNG from './../images/eva_person-fill.png'

import {isPersistedState} from "../helpers"
import Posts from "./Posts";

const Home = () => {
    const {popularArticles, articles, expertises, levels, error, posts, setSearchTerm} = useHomeFetch();
    const authState = isPersistedState('auth')

    const [showArticle, setShowArticle] = useState(true)
    const [showPosts, setShowPosts] = useState(false)

    return (
        <>
            <Header username={authState.name}/>
            <Tab homePNG={HomePNG} explorePNG={ExplorePNG} logoutPNG={LogOutPNG} bookmarksPNG={BookmarksPNG} messagesPNG={MessagePNG} meetingsPNG={MeetingsPNG} profilePNG={ProfilePNG}/>
            <div className='globalWrapper'>
                <div style={{width: "68%"}}>
                    <HomeFilter expertises={expertises} levels={levels} setSearchTerm={setSearchTerm}
                                setShowArticle={setShowArticle} setShowPosts={setShowPosts}/>
                    {showArticle && articles.data.map(article => (
                        <Article key={article.id} firstName={article.first_name} lastName={article.last_name}
                                 createdAt={article.created_at}
                                 title={article.title} description={article.description}
                                 comments={article.comment_count}
                                 likes={article.likes} views={article.views}/>
                    ))}
                    {showPosts && posts.data.map(post => (
                        <Posts key={post.id} description={post.description} createdAt={post.created_at} lastName={post.last_name} firstName={post.first_name}/>
                    ))}
                </div>
                <PopularArticles header='Popular articles' articles={popularArticles}/>
            </div>
        </>
    )
};

export default Home;