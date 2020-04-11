import React from 'react';
// import './App.css';

const WorkItem = (props) =>  {
console.log(props)
  // props = {
  //   text:'text',
  //   title:'title',
  //   techText: 'tech text', 
  //   imgUrl:"./images/work/Anthem-DAC.png"
  // }

  const {text, title, tools, imgUrl, onMouseOver, onMouseLeave, onClick, link} = props;

  return (
    
        <div className="item" onMouseOver={onMouseOver} onClick={link ? (e) => {onClick({link})} : null} >
          <img className="img-btn"  src={imgUrl} alt="" />
          <div className="slider" onMouseLeave={onMouseLeave}>
            <h3>{title}</h3>
            <p className='hover-text'>{text}</p>
            <p className="hover-text">
            {tools}</p>
            {link ? <a className='hover-text' target='_blank' >View</a> : null}
            {/* href={link} */}
          </div>
        </div>
  

  );
}

export default WorkItem;


