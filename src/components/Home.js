// API
import API from "../API";

// Config

// Components
import Grid from "./Grid";
import PopularArticles from "./PopularArticles";
import HomeFilter from "./HomeFilter";

// Hook
import {useHomeFetch} from "../hooks/useHomeFetch";

// Images
import ViewsLogo from "../images/carbon_view-filled.png";
import LikesLogo from "../images/bxs_like.png";

const Home = () => {
    const {state, error} = useHomeFetch();

    return (
        <>
            <Grid>
                <div style={{width:'68%'}}>
                    <HomeFilter></HomeFilter>
                </div>
                <PopularArticles header='Popular Articles'>
                    <div>{state.data.map(article => (
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
                </PopularArticles>
            </Grid>
        </>
    );
}

export default Home;