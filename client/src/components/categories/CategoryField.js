import React from 'react';

export default ({ input, type, label, meta: { error, touched } }) => {
  if (type === 'text' || type === 'number') {
    return (
      <div>
        <label>{label}</label>
        <input {...input} style={{ marginBottom: '5px' }} type={type} />
        <div className="red-text" style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <label>{label}</label>
        <p>
          <input {...input} name="isActive" type="radio" id="yes" value="1" />
          <label htmlFor="yes">Yes</label>
        </p>
        <p>
          <input {...input} name="isActive" type="radio" id="no" value="0" />
          <label htmlFor="no">No</label>
        </p>
        <div className="red-text" style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    );
  }
};
