import React from "react";
import { useSelector } from "react-redux";

const Sport = () => {
  const news = useSelector((state) => state.news);

  const filtered = news.filter(
    (item) => item.categoryId === "637e6c9266aff17b324cfc23"
  );

  return (
    <>
      {filtered.map((item, index) => {
        return (
          <div key={item.id}>
            <div className="block-one">
              <div className="image-radius">
                <img src={item.image} alt="" />
                <div className="title-news">{item.text}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Sport;
