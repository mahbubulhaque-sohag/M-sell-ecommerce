import { Link, Outlet } from "react-router-dom";

export default function DashBoardLayout(){


return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <Link className="border border-indigo-500 p-2 my-3" to="/dashboard" >Dashboard</Link>
      <Link className="border border-indigo-500 p-2 my-3" to="allProducts" >All Products</Link>
      <Link className="border border-indigo-500 p-2 my-3" to="addProduct" >Add Product</Link>
      <Link className="border border-indigo-500 p-2 my-3" to="/" >Home</Link>
     
    </ul>
  
  </div>
</div>
)
}