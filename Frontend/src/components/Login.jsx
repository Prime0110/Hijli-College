import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button className="btn btn-sm btn-square btn-ghost absolute right-2 top-2 bg-red-600 hover:text-red-500 duration-200" style={{ color: 'inherit' }}>✕</button>
            <h3 className="text-center font-bold text-2xl mb-4">Student <span className='text-orange-600'>Login!</span></h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Student ID</span>
                <input type="text" placeholder="Student ID" className="input input-bordered" {...register("ID", { required: true })}/>
              </label>
              {errors.ID && <span className='text-red-600'>*required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
                <input type="password" placeholder="Enter password" className="input input-bordered" {...register("password", { required: true })} />
              </label>
              {errors.password && <span className='text-red-600'>*required</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-center text-secondary" style={{ color: '#4D68FF' }}>Don't have an ID ? <Link to="/Find" className="link link-secondary text-blue-700">Find ID</Link></p>
            <p className="py-4"><span className='text-amber-600 text-l'>NOTE: </span> Enter your correct Student ID and Password</p>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
