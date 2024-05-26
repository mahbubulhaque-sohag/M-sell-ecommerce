import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const LatestProductCart = ({ product  }) => {
  const { id, title, image, description } = product;
 
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-[100%] h-[250px] border-2 border-inherit"
          src={image}
          alt="product"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LatestProductCart;
