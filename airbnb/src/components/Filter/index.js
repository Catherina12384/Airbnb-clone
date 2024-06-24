import React, { useState, useEffect } from 'react';
import './styles.css';
import { links } from '../../assests/images-links';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [maxVisibleFilters, setMaxVisibleFilters] = useState(11);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1270) {
        setMaxVisibleFilters(11); // desktop
      }else if (window.innerWidth > 1225) {
        setMaxVisibleFilters(10); // desktop
      } else if (window.innerWidth > 1100) {
        setMaxVisibleFilters(9); // tablet
      } else if (window.innerWidth > 982) {
        setMaxVisibleFilters(8); // tablet
      }  else if (window.innerWidth > 875) {
        setMaxVisibleFilters(7); // tablet
      }  else if (window.innerWidth > 790) {
        setMaxVisibleFilters(6); // tablet
      }else if (window.innerWidth > 680) {
        setMaxVisibleFilters(5); // tablet
      }else if (window.innerWidth > 500) {
        setMaxVisibleFilters(4); // mobile
      } else {
        setMaxVisibleFilters(3); // small mobile
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLeftArrowClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (startIndex < links.length - maxVisibleFilters) {
      setStartIndex(startIndex + 1);
    }
  };

  return (

    <>
      <div className="filter-div">
        <button
          className="arrow-button"
          onClick={handleLeftArrowClick}
          disabled={startIndex === 0}
        >
          <ArrowBackIosIcon className="arrow-icon"/>
        </button>

        {links.slice(startIndex, startIndex + maxVisibleFilters).map((item, i) => (
          <div
            key={i}
            className={`links-box ${startIndex + i === selectedFilter && "selected-box"}`}
            onClick={() => {
              console.log("selecting key", i);
              setSelectedFilter(startIndex + i);
            }}
          >
            <img src={item.imgSrc} className="links-img" />
            <p
              className={`links-label ${startIndex + i === selectedFilter && "selected-label"}`}
            >
              {item.label}
            </p>
          </div>
        ))}

        <button
          className="arrow-button"
          onClick={handleRightArrowClick}
          disabled={startIndex >= links.length - maxVisibleFilters}
        >
          <ArrowForwardIosIcon className="arrow-icon"/>
        </button>
      </div>
      <div className='bottom-line'></div>
    </>
  );
};

export default Filter;