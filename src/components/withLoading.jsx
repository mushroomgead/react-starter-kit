import React, { Component } from 'react'
import Loader from './Loader';

const withLoading = (propName) => (WrappedComponent) => {
  return class ComponentWithLoading extends Component {
    render() {
      return [propName].length === 0
      ? <Loader /> : <WrappedComponent {...this.props} />
    }
  }
}

export default withLoading
