import React from 'react'

export default function Input(props) {
  return (
    <>
                <div className="form-floating">
            <input
              style = {props.style}
              type={props.type}
              className={`form-control ${props.class}`}
              name={props.name}
              value = {props.value}
              onChange={props.onchange}

            />
            <label htmlFor="floatingInput"><strong>{props.place}</strong></label>
          </div>
    </>
  )
}
