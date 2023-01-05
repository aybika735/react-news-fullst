import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);
  const items = useSelector((state) => state.todos.items);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {items.map((item) => (
        <div key={item._id}>
          <div className="block-one">
            <div className="image-radius">
              <img src={item.image} alt="" />
              <div className="title-news">{item.title}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
