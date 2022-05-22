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

const Home = () => {
    const {popularArticles, articles, expertises, levels, error, setSearchTerm} = useHomeFetch();

    const [showArticle, setShowArticle] = useState(true)

    return (
        <div className='globalWrapper'>
            <div style={{width: "68%"}}>
                <HomeFilter expertises={expertises} levels={levels} setSearchTerm={setSearchTerm} setShowArticle={setShowArticle}/>
                {showArticle && articles.data.map(article => (
                    <Article key={article.id} firstName={article.first_name} lastName={article.last_name} createdAt={article.created_at}
                             title={article.title} description={article.description} comments={article.comment_count}
                             likes={article.likes} views={article.views}/>
                ))}
            </div>
            <PopularArticles header='Popular articles' articles={popularArticles}/>
        </div>
    )
};

export default Home;