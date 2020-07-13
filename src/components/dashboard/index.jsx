import React from 'react'
import { Helmet } from 'react-helmet'

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        {/* <!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM STYLES --> */}
        <link href='plugins/apex/apexcharts.css' rel='stylesheet' type='text/css' />
        <link href='assets/css/dashboard/dash_1.css' rel='stylesheet' type='text/css' />
        {/* <!-- END PAGE LEVEL PLUGINS/CUSTOM STYLES --> */}
        {/***
         */}
        <script src='plugins/apex/apexcharts.min.js' />
        <script src='assets/js/dashboard/dash_1.js' />
      </Helmet>
    
    </>
  )
}
