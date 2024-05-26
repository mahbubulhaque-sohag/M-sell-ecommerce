import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Product = ({ product, products, setProducts }) => {
  const { id, title, image, description } = product;
  const handleDelete = async () => {
    const proceed = window.confirm(
      "Do you really want to delete this product?"
    );
    if (!proceed) {
      return;
    }
    await axios.delete(`http://localhost:3000/products/${id}`);
    toast("Product deleted successfully!");
    setProducts(products.filter(p => products.id !== p.id))
  };
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
        <div className="flex gap-5">
          <Link
            to={`/dashboard/editProduct/${id}`}
            className="btn btn-sm btn-accent"
          >
            Edit
          </Link>
          <Link onClick={handleDelete} className="btn btn-sm btn-error">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
