import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProduct = () => {
    const [product, SetProduct] = useState();
    const {id} = useParams();

    useEffect(() => {
        async function load() {
    
          const singleProduct = await axios.get(`http://localhost:3000/products/${id}`);
          if (singleProduct?.status === 200) {
            SetProduct(singleProduct?.data);
          }
        }
        load();
      }, [id]);

      const handleEditProduct=async(e)=>{
        e.preventDefault();
        const form = e.target;
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

        await axios.patch(`http://localhost:3000/products/${id}`, newProduct);
        form.reset();
        toast("Product edited successfully!");
    }
    
      
    return (
        <div className="w-3/4">
        <form onSubmit={handleEditProduct}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Add Id</span>
            </label>
            <input
              type="text"
              name="id"
              defaultValue={id}
              placeholder="ID"
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Add Title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={product?.title}
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
              defaultValue={product?.price}
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
              defaultValue={product?.image}
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
              defaultValue={product?.description}
              placeholder="Description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="mb-4">
          <input
            type="submit"
            value={"EDIT PRODUCT"}
            className="w-full my-5 btn py-3 px-5 border btn-neutral"
          />
        </div>
        </form>
      </div>
    );
};

export default EditProduct;