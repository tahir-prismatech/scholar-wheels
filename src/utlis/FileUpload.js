import React from 'react';

export default function FileUpload({ label = "Upload Document", id = "uploadDoc", required = false }) {
  return (
    <div className="m-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <div className="input-group">
        <input
        style={{width: "100%"}}
          type="file"
          className="form-control"
          id={id}
          required={required}
        />
      </div>
    </div>
  );
}
