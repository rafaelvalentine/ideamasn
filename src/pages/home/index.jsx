import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// import Navbar from '../../components/navbar'
import {Header, SubHeader} from '../../themes/style/typeface'
import { ResultCard } from '../../components/card'
import '../../themes/sass/pages/Home.sass'

export default class index extends Component {

  state={
    data:[

    ]
  }
handleFilterRequest = url => {
  this.props.handlePageLoader(true)
this.props.handleFilterRequest(url)
.then((result) => {
  this.props.handlePageLoader(false)
  this.props.history.push('/dashboard')
  // console.log(result);
}).catch((err) => {
  console.log(err);
});

}
  componentDidMount (){
    this.props.handlePageLoader(true)
    this.props.handleFetchResults()
    .then(results => {
      this.props.handlePageLoader(false)
      // console.log('results: ', results)
    })
  }
  render () {
    console.log('this.props.Results: ',  this.props.Results);
    return (
      <>
        {/*  this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet='utf-8' />
          <title>Home Page</title>
        </Helmet>
        <div id='_home'>
         
          <Header className='text-center' margin='30px auto 5px'>
            Welcome to the Major League Baseballs Results App
          </Header>
          <SubHeader className='text-center' margin='0 auto'>
            This WebApp details Major League Baseballs Result <br />
            from around the Country
          </SubHeader>


          <SubHeader className='text-center' margin='30px auto 10px'>
            Please select for the list below to see the full result
          </SubHeader>
          <div className='container mt-5'>
              <div className='row justify-content-start align-items-center px-5'>
              { this.props.Results && this.props.Results.length > 0 ? this.props.Results.filter(fav_team => fav_team.home_team_name === 'Blue Jays' || fav_team.away_team_name === 'Blue Jays').map(result =>(
                <ResultCard fav_team='favourite-team' key={result.id} {...result} onClick={()=>this.handleFilterRequest(result.game_data_directory)}/>
              )) : null }
                  { this.props.Results && this.props.Results.length > 0 ? this.props.Results.filter(fav_team => fav_team.home_team_name !== 'Blue Jays' || fav_team.away_team_name !== 'Blue Jays').map(result =>(
                    <ResultCard key={result.id} {...result} onClick={()=>this.handleFilterRequest(result.game_data_directory)}/>
                  )) :  <SubHeader className='text-center' margin='0 auto'>
                        No games today!
                    </SubHeader>}
              </div>
          </div> 
        </div>
      </>
    )
  }
}
