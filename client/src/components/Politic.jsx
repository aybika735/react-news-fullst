import React from "react";
import { useSelector } from "react-redux";
const Politic = () => {
  const news = useSelector((state) => state.news);

  const filtered = news.filter(
    (item) => item.categoryId === "637e6c8b66aff17b324cfc21"
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
      <h2>Комментарии:</h2>
    </>
  );
};

export default Politic;
