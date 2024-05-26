import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {id, title, image, description } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-[100%] h-[250px] border-2 border-inherit" src={image} alt="product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
        <div className="flex gap-5">
        <Link to={`/dashboard/editProduct/${id}`} className="btn btn-sm btn-accent">Edit</Link>
        <Link className="btn btn-sm btn-error">Delete</Link>
      </div>
      </div>
    </div>
  );
};

export default Product;
