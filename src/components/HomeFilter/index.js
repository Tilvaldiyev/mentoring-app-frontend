import React, {useState, useEffect, useRef} from "react";

// Styles
import {Wrapper, Content, Header, SearchWrapper, Search, Select, Option, SelectWrapper} from "./HomeFilter.style";

// Image
import searchIcon from '../../images/ant-design_search-outlined.png'

const searchTermInitialState = {
    term: '',
    level: '',
    expertises: ''
}

const HomeFilter = ({setSearchTerm, expertises, levels, setShowArticle}) => {
    const [state, setState] = useState(searchTermInitialState);
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 1000)

        return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <Header>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button onClick={()=>setShowArticle(true)} className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home"
                                type="button" role="tab" aria-controls="nav-home" aria-selected="true">Articles
                        </button>
                        <button onClick={() => setShowArticle(false)} className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-profile"
                                type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Posts
                        </button>
                    </div>
                </Header>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                         aria-labelledby="nav-home-tab">
                        <div className='d-flex justify-content-between filter-wrapper'>
                            <SearchWrapper cla>
                                <img src={searchIcon} alt="searchIcon"/>
                                <Search type='text' placeholder='Search...'
                                        onChange={event => setState({term: event.currentTarget.value, expertises: state.expertises, level: state.level})}
                                />
                            </SearchWrapper>
                            <SelectWrapper>
                                <Select onChange={event => setState({expertises: event.currentTarget.value, term: state.term, level: state.level})}>
                                    <Option value=''>Expertise</Option>
                                    {expertises.data.map(expertise => (
                                        <Option key={expertise.id} value={expertise.id}>{expertise.name}</Option>
                                    ))}
                                </Select>
                            </SelectWrapper>
                            <SelectWrapper>
                                <Select onChange={event => setState({level: event.currentTarget.value, expertises: state.expertises, term: state.term})}>
                                    <Option value=''>Level</Option>
                                    {levels.data.map(level => (
                                        <Option key={level.id} value={level.id}>{level.name}</Option>
                                    ))}
                                </Select>
                            </SelectWrapper>
                        </div>
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
};

export default HomeFilter;
