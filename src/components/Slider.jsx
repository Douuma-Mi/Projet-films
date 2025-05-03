import React, { useState } from 'react';
import './Slider.css';
import { Link, useNavigate } from 'react-router-dom';

const Slider = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([
    {
      name: 'Land Shark',
      image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=4000x3000:format=jpg/path/s68421b54b389216c/image/ib550498b757ee91c/version/1724008607/land-shark-le-requin-mutant-2020.jpg',
      link: '/film1',
    },
    {
      name: 'Kaizen',
      image: 'https://actu.autun.com/wp-content/uploads/sites/2/2024/09/format-a4-scaled.jpg',
      link: '/film2',
    },
    {
      name: 'Air Bud',
      image: 'https://m.media-amazon.com/images/M/MV5BMzQxODE4MzEyNF5BMl5BanBnXkFtZTgwNjk2OTY4ODE@._V1_.jpg',
      link: '/film3',
    },
    {
      name: 'Night of Christmas',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3u7kAclLeQ-eXiI1X9I2tL71ho7SMkrZAdlmHQH8E2ZKBwhRotoIiSFdyN1HRh0gTAs&usqp=CAU',
      link: '/film4',
    },
    {
      name: 'Le Sang du Cartel',
      image: 'https://fr.web.img3.acsta.net/pictures/19/11/21/12/30/2162195.jpg',
      link: '/film5',
    },
    {
      name: 'Scream',
      image: 'https://fr.web.img3.acsta.net/pictures/21/12/13/16/48/5601453.jpg',
      link: '/film6',
    },
  ]);

  const handleNext = () => {
    const newItems = [...items];
    const first = newItems.shift();
    newItems.push(first);
    setItems(newItems);
  };

  const handlePrev = () => {
    const newItems = [...items];
    const last = newItems.pop();
    newItems.unshift(last);
    setItems(newItems);
  };

  const handleWatch = (link) => {
    navigate(link);
  };

  return (
    <div className="container">
      <div className="slide">
        {items.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">
              Welcome to Afleem
              </div>
              <Link className='btn1' to="/Login" onClick={() => handleWatch(item.link)}>
                Watch
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" onClick={handlePrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
