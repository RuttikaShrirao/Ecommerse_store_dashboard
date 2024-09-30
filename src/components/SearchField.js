import React from 'react'

export default function SearchField () {
  return (
    <div className="input-group">
       <div className="input-group-append">
      <span
        className="input-group-text"
      >
      <i class="bi bi-search"></i>
      </span>
    </div>
    <input
      type="text"
      className="form-control"
      placeholder="Select Product"
    />
 
  </div>
  )
}
