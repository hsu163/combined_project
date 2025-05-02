import React, { useContext } from 'react'
import { CartContext } from '../App'

export default function CheckOutViewComponent() {
    const {cartItems,checkOut,remove,msg} = useContext(CartContext);

  return (
    <div className="container mt-5">
        {
            msg && (
                <div className="alert alert-success" role="alert">
                    {msg}
                </div>
            )
        }
        {
            cartItems && cartItems.length > 0 && cartItems.map((course) => (
                <div className="row mb-3" key={course.courseId}>
                    <div className="col-md-6">
                    <img
                    src={`data:image/jpeg;base64,${course.imageBase64}`} // Decoding base64 image
                    alt={course.title} className='img-fluid rounded shadow '
                    style={{ height: "200px",width: "400px", objectFit: "cover" }}
                    />
                </div>
                    <div className="col-md-6">
                        <h5>{course.title}</h5>
                        <p>{course.description}</p>
                        <p>Price: ${course.fees}</p>
                        <button className="btn btn-outline-danger me-2" onClick={() => remove(course.courseId)}>Remove</button>
                        <button className="btn btn-primary" onClick={() => checkOut(course)}>CheckOut</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
