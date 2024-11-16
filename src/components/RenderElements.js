import React from 'react';

const ListRender = () => {
    return [
        <li key="A">First item</li>,
        <li key="B">Second item</li>,
        <li key="C">Third item</li>
    ];
}

const StringRender = () => {
    return 'String Renderer';
}

const NumberRenderer = () => {
    return 23090123;
}

const FragmentElements = () => {
   return (
    <>
        <img src="img/listRender.png" className="imgClass"></img>
        <ListRender />
        <hr/>
        <img src="img/stringRender.png" className="imgClass"></img><br/>
        <StringRender />
        <hr/>
        <img src="img/numberRender.png" className="imgClass"></img><br/>
        <NumberRenderer />
        <hr/>
        <img src="img/fragmentRender.png" className="imgClass"></img><br/>
    </>
   );
}

export default FragmentElements;
