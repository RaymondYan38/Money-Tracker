import React from "react";
import ArticleCards from "./ArticleCards";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { IconContext } from "react-icons";

export default function ReviewedArticles({ dummyData }) {
  const reviewedArticles = dummyData.articles;

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div className="reviewed-articles-section">
      <div className="slider-holder">
        <IconContext.Provider
          value={{ className: "slider-clickers slider-clicker-left" }}
        >
          <MdChevronLeft onClick={slideLeft} size={40} />
        </IconContext.Provider>
        <div id="slider" className="article-cards">
          {reviewedArticles.length > 0 &&
            reviewedArticles.map((article) => (
              <ArticleCards article={article} />
            ))}
        </div>
        <IconContext.Provider
          value={{ className: "slider-clickers slider-clicker-right" }}
        >
          <MdChevronRight onClick={slideRight} size={40} />
        </IconContext.Provider>
      </div>
    </div>
  );
}
