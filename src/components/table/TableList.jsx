import React from 'react'
import { CarOwnerRow } from './TableRow'

export const CarOwnersList = ({ data }) => data.map(info => {
  if (info.jobInfo === null) {
    return null
  }
  
  return <CarOwnerRow key={Math.random()} {...info} />
})

// export const JobList = ({ data }) => data.map(data => (
//   <JobRow key={`${data.jobInfo._id}${Math.random()}` || Math.random()} {...data} />
// ))

// export const CategoryList = ({ data, handleShowEditCategory, handleShowDeleteCategory }) => data.map(data => (
//   <CategoryRow key={data._id}
//     handleShowEditCategory={() => handleShowEditCategory(data._id, data.category)} handleShowDeleteCategory={() => handleShowDeleteCategory(data._id, data.category)} {...data} />
// ))
