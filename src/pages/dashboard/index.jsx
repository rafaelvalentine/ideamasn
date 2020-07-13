import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { SelectedTeamResultCard } from '../../components/card'
// import Dashboard from '../../components/dashboard'

export default class index extends Component {

  state = {

  }


componentDidMount(){

}
  render () {
    return (
      <>
        {/* this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet='utf-8' />
          <title> Dashboard </title>
        </Helmet>
        <SelectedTeamResultCard 
          {...this.props.Result}
        />
      </>
    )
  }
}
