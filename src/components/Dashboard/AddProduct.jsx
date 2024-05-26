import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const handleAddProduct=async(e)=>{
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const price = form.price.value;
        const title = form.title.value;
        const image = form.image.value;
        const description = form.description.value;
        const newProduct = {id, price, title, image, description};
        console.log(newProduct);

        const proceed = window.confirm("Do you want to proceed ?");
        if (!proceed) {
            return;
        }

        await axios.post("http://localhost:3000/products", newProduct);
        toast("Product added successfully!")

    }
  return (
      <div className="w-3/4">
        <form onSubmit={handleAddProduct}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Add Id</span>
            </label>
            <input
              type="text"
              name="id"
              placeholder="ID"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Add Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Add Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Add Image</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Image url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Add Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="mb-4">
          <input
            type="submit"
            value={"ADD PRODUCT"}
            className="w-full my-5 btn py-3 px-5 border btn-neutral"
          />
        </div>
        </form>
      </div>
  );
};

export default AddProduct;
