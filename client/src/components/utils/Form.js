import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { Link, withRouter } from 'react-router-dom'
import FormField from './FormField'

class Form extends Component {
  renderFields = () =>
    _.map(this.props.formFields, ({ label, name, type }) => {
      switch (type) {
        case 'text':
          return (
            <Field
              key={name}
              component={FormField}
              type="text"
              label={label}
              name={name}
            />
          )
        case 'radio':
          return (
            <div>
              <label>{label}</label>
              <div>
                <label>
                  <Field
                    name="isReadyForComments"
                    component="input"
                    type="radio"
                    value="1"
                  />
                  Yes
                </label>
                <label>
                  <Field
                    name="isReadyForComments"
                    component="input"
                    type="radio"
                    value="0"
                  />
                  No
                </label>
              </div>
            </div>
          )
        // case 'option':
        //   const options = () =>
        //     data.map(option => {
        //       return <option value={option.id}>{option.title}</option>
        //     })
        //   return (
        //     <div>
        //       <label>{label}</label>
        //       <div>
        //         <Field name={name} component="select">
        //           {options}
        //         </Field>
        //       </div>
        //     </div>
        //   )
        default:
          return
      }
    })

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit()}>
          {this.renderFields()}
          <button type="submit" className="teal btn-flat right white-text">
            Next
          </button>
        </form>
      </div>
    )
  }
}

const validate = (values, props) => {
  const errors = {}

  const validateEmail = () => {}

  _.each(props.formFields, ({ name, type }) => {
    if (!values[name]) {
      errors[name] = 'You need to write something'
    }

    if (type === 'email') {
      errors[name] = validateEmail(values[name] || '')
    }
  })

  return errors
}

const mapStateToProps = (state, ownProps) => ({
  values: state.forms[ownProps.form].values
})
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators({ onSubmit: ownProps.onSubmit }, dispatch)

export default reduxForm({
  validate
})(connect(mapStateToProps, mapDispatchToProps)(withRouter(Form)))
