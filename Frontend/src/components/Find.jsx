import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

function Find() {
  return (
    <>
      <div className="border border-gray-300 rounded-lg shadow-lg p-20 mx-4 my-4">
        <div className="heading">
          <h3 className="bg-orange-500 text-white py-3 px-6 rounded-t-lg">Find the Student ID</h3>
          <div className="container-body">
            <div className="row flex justify-center items-center">
              <div id="id">
                <h3 className="font-semibold text-zinc-200 text-center px-2 py-3">Find Student ID</h3>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td className='text-slate-100' width="33%" align="center">
                        Select Course
                      </td>
                      <td width="33%" align="center">
                        <select name="dtsub" id="dtsub" className="form-control">
                          <option selected="selected" value="0">All Courses</option>
                          {/* Add other options here */}
                        </select>
                      </td>
                      <td width="33%" align="center"></td>
                    </tr>
                    <tr>
                      <td className='text-slate-100'  width="33%" align="center">
                        Enter Name
                      </td>
                      <td width="33%" align="center">
                        <input name="txtname" type="text" id="txtname" className="form-control" style={{ backgroundColor: '#FFD9B3' }} />
                      </td>
                      <td width="33%" align="center">
                        <input type="submit" name="Button1" value="SHOW" id="Button1" className="btn text-white hover:text-slate-500" />
                      </td>
                    </tr>
                    <tr>
                      <td align="center" colSpan="3" style={{ width: '66%' }}>
                        <div></div>
                      </td>
                    </tr>
                    <tr>
                      <td width="33%" align="center">
                        <a className="text-slate-100 hover:text-slate-500" id="HyperLink1" href="https://cloud.hijlicollege.ac.in/StudentPortal/OnlineFeesStudentList.aspx" target="_blank">Online Payment Schedule</a>
                      </td>
                      <td width="33%" align="center">
                        <a className="text-slate-100 hover:text-slate-500" id="HyperLink2" href="https://cloud.hijlicollege.ac.in/studentregistrationrequest.aspx"target="_blank">New Student Registration Request</a>
                      </td>
                      <td width="33%" align="center">
                        <button className="text-slate-100">
                          Have ID ? <Link to="/" className="link link-secondary text-blue-700" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</Link>
                        </button>
                        <Login />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Find;
