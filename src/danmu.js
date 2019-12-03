import React from 'react';

const SPEED = 2;
const DELAY = 0.2 * SPEED;
const HEIGHT = 300;
const WIDTH = 400;
const FONT_SIZE = 16;

const childGen = (child, index) => {
    const text = child.props.children;
    const style = {
        top: (20 + FONT_SIZE * 2 * index) % HEIGHT,
        animationDelay: index * DELAY + 's',
animationDuration: WIDTH / SPEED / text.length  + 's'
    };

    return <div className="danmu" key={index} style={style}>{text}</div>
}
const Danmu = ({children = null}) => {
    return <div className="danmuWrapper" style={{width: WIDTH, height: HEIGHT}}>

 
     {
       children.map(childGen)
    }
   </div>
}
export default Danmu