import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../pages/Home.css';

function CCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdcx7F7LKcKiRxTE9vssegTjFUG1SU7lK3Q&s"
        alt="Cafe vibe"
        className="home-img"
      />
       
      </Carousel.Item>
      <Carousel.Item>
       <img
        src="https://media.istockphoto.com/id/1400194993/photo/cappuccino-art.jpg?s=612x612&w=0&k=20&c=_nYOcyQ15cYEeUYgUzkC5qG946nkCwU06NiWKt1s8SE="
        alt="Cafe vibe"
        className="home-img"
      />
      </Carousel.Item>
      <Carousel.Item>
        <img
        src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?cs=srgb&dl=pexels-igor-starkov-233202-1307698.jpg&fm=jpg"
        alt="Cafe vibe"
        className="home-img"
      />
      </Carousel.Item>
    </Carousel>
  );
}

export default CCarousel;