import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newIdeaSubmit } from '../../actions'
import { reduxForm, Field } from 'redux-form'
import { Link, withRouter } from 'react-router-dom'
import FormField from './FormField'
import ideaFields from './ideaFields'

class NewIdea extends Component {
  renderFields = () =>
    _.map(ideaFields, ({ label, name }) => (
      <Field
        key={name}
        component={FormField}
        type="text"
        label={label}
        name={name}
      />
    ))

  onSubmit = values => this.props.newIdeaSubmit(values, this.props.history)

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          {this.renderFields()}

          <Link to="/" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
          </button>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}

  const validateEmail = () => {}

  _.each(ideaFields, ({ name, type }) => {
    if (!values[name]) {
      errors[name] = 'You need to write something'
    }

    if (type === 'email') {
      errors[name] = validateEmail(values[name] || '')
    }
  })

  return errors
}

export default reduxForm({
  validate,
  form: 'ideasForm'
})(connect(null, { newIdeaSubmit })(withRouter(NewIdea)))