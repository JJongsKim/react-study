import React, {useState} from 'react';
import styled from 'styled-components';

const Box1 = styled.div`
    margin: 100px auto;
    margin-bottom: 0;
    width: 300px;
    height: 300px;
    border: 1px solid;
    background-color: ${props=>props.color};
`;

const ColorList = styled.ul`
    display: flex;
    list-style: none;
    margin-left: 220px;

    .PinkBtn {
        background-color: pink;
        cursor: pointer;
    }

    .OrangeBtn {
        background-color: orange;
        cursor: pointer;
    }
`;

function ColorChange() {
    const [color, setColor] = useState('');

    return (
        <>
            <Box1 color={color} />
            <ColorList>
                <li><button className="PinkBtn" onClick={()=>setColor('pink')}>핑크색</button></li>
                <li><button className="OrangeBtn" onClick={()=>setColor('orange')}>주황색</button></li>
            </ColorList>
        </>
    );
}

export default ColorChange;