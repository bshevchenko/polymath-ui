// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { formValueSelector } from 'redux-form'

import SignUpForm, { formName } from './SignUpForm'
import { signUp } from './actions'
import { bull } from '../../'

const formValue = formValueSelector(formName)

type StateProps = {|
  enableSubmit: boolean,
|}

const mapStateToProps = (state) => ({
  enableSubmit: !!formValue(state, 'acceptPrivacy') &&
    !!formValue(state, 'acceptTerms'),
})

type DispatchProps = {|
  signUp: () => any,
|}

const mapDispatchToProps: DispatchProps = {
  signUp,
}

type Props = StateProps & DispatchProps

class SignUpPage extends Component<Props> {
  handleSubmit = () => {
    this.props.signUp()
  }

  render () {
    return (
      <DocumentTitle title='Sign Up – Polymath'>
        <div className='pui-single-box'>
          <div className='pui-single-box-header'>
            <div className='pui-single-box-bull'>
              <img src={bull} alt='Bull' />
            </div>
            <h1 className='pui-h1'>Sign up</h1>
            <h3 className='pui-h3'>Create your account by entering your name and email below.</h3>
            <div className='pui-clearfix' />
          </div>
          <SignUpForm onSubmit={this.handleSubmit} enableSubmit={this.props.enableSubmit} />
        </div>
      </DocumentTitle>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
