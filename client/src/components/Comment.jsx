
import message from "../icons/message.png";


const Comments = ({text, filteredcomments, handleChange,  handleSubmit, deleteTodo}) => {
    

 

    if(!filteredcomments){
        return '...loading'
    }

  
    return (
        <div >
            <div>
        <div className="comments nav-link">
          <img src={message} alt="" />
          <h2>Комментарии:</h2>
        </div>

        <p>
          <textarea
            type="textarea"
            onChange={(e)=>handleChange(e)}
            value={text}
            className="textarea"
            name="comment"
          ></textarea>
        </p>

       
          <div>
            <button
              onClick={(e) => handleSubmit(e)}
              className="button"
              type="button"
            >
              Добавить
            </button>
          </div>
       

        {filteredcomments?.map((item, index) => {
          return (
            <div key={item._id} className="todo">
           
              <div className="todo-text"> {item.text}</div>
              <div className="actions">
                <button onClick={() => deleteTodo(item.userId, item._id)}>x</button>
              </div>
            </div>
          );
        })}
      </div>
        </div>
    );
};

export default Comments;