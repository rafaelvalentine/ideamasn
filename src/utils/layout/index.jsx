import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer'

export default props => {
  return (
    <>
      {/* this component handles setting the title and dynamically injecting head specific tags */}
      <Helmet>
        {/** BEGIN PAGE LEVEL PLUGINS/CUSTOM STYLES */}
      
        {/** END PAGE LEVEL PLUGINS/CUSTOM STYLES */}
    
      </Helmet>
      {/** * <!--  BEGIN NAVBAR  --> */}

      <Navbar />

      {/** * <!--  END NAVBAR  --> */}
      <div className='main-container' id='container'>

        <div className='overlay' />
        <div className='search-overlay' />
        {/** * <!--  BEGIN SIDEBAR  --> */}
        <Sidebar />
        {/** * <!--  END SIDEBAR  --> */}
        {/** * <!--  BEGIN CONTENT PART  --> */}

        <div id='content' className='main-content'>
        
          <div className='layout-px-spacing'>

            <div className='row layout-top-spacing'>
              {props.children}
            </div>

          </div>
          {/** * <!--  BEGIN FOOTER  --> */}
          <Footer />
          {/** * <!--  END FOOTER  --> */}
        </div>
      </div>
      {/** * <!--  END CONTENT PART  --> */}
    </>
  )
}
