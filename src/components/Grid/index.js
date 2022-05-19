import React from "react";

// styles
import {Wrapper, Content} from "./Grid.styles";

const Grid = ({children}) => (
    <Wrapper>
        <Content>{children}</Content>
    </Wrapper>
);

export default Grid;