import React from 'react'
import { Field, reduxForm } from 'redux-form'

const CommentForm = () => {
  const field = ({ input, type, label, meta: { error, touched } }) => (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} type={type} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  )
  return (
    <Field
      key="commentLine"
      type="text"
      label="Comment"
      name="commentLine"
      component={field}
    />
  )
}

export default reduxForm({
  form: 'commentForm'
})(CommentForm)
