import React, { useState } from "react";
import "./styles.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Card({ card }) {
  const [likedImages, setLikedImages] = useState({});

  const handleLike = (index) => {
    setLikedImages((prevLikedImages) => ({
     ...prevLikedImages,
      [index]:!prevLikedImages[index],
    }));
  };

  return (
    <div className="card-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt="hotel" className="card-img" />
            <div
              className="heart-icon"
              onClick={() => handleLike(i)}
            >
              {likedImages[i]? (
                <FavoriteRoundedIcon style={{ color: "red" }} />
              ) : (
                <FavoriteBorderRoundedIcon />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-info-flex">
        <h3 className="card-title">{card.title}</h3>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <p>{card.rating}</p>
        </div>
      </div>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.desc}</p>
      <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--font-grey)" }}>{card.date}</p>
      <p style={{ margin: "0.2rem", color: "var(--font-grey" }}>
        <strong style={{ color: "var(--black)"}}>₹{card.price}</strong> / night
      </p>
    </div>
  );
}

export default Card;