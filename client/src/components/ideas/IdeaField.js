import React from 'react';

export default ({
  input,
  inputType,
  label,
  options,
  meta: { error, touched }
}) => {
  if (inputType === 'text' || inputType === 'number') {
    return (
      <div>
        <label>{label}</label>
        <input {...input} style={{ marginBottom: '5px' }} type={inputType} />
        <div className="red-text" style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    );
  } else if (inputType === 'radio') {
    return (
      <div>
        <label>{label}</label>
        <p>
          <input
            {...input}
            name="isReadyForComments"
            type={inputType}
            id="yes"
            value="1"
          />
          <label htmlFor="yes">Yes</label>
        </p>
        <p>
          <input
            {...input}
            name="isReadyForComments"
            type={inputType}
            id="no"
            value="0"
          />
          <label htmlFor="no">No</label>
        </p>
        <div className="red-text" style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <label>{label}</label>
        <select {...input} name="categoryId">
          {options}
        </select>
        <div className="red-text" style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    );
  }
};
