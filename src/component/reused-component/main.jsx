import React from 'react'



export default function Main(props) {
  if (!Array.isArray(props.data)) {
    return <div>No complaints available.</div>;
  }
  return (
    <div className='container'>
      <table className="table ">
       <thead>
        <tr>
          <td><strong>Id No</strong></td>
          <td><strong>Name</strong></td>
          <td><strong>Department</strong></td>
          <td><strong>Complant</strong></td>
          <td><strong>Delete</strong></td>
        </tr>
       </thead>
       <tbody>

       {props.data.map((data, index)=>{
        return(
          <tr key={index}>
          <td>{index +1}</td>
          <td>{data.option}</td>
          <td>{data.department}</td>
          <td>{data.message}</td>
          <td>
            <button type='button' className='btn btn-danger' onClick={()=>{
              props.deldata(data._id)
            }} >Delete</button>
          </td>
        </tr>
        )
       })}
       </tbody>
</table>
    </div>
  )
}
