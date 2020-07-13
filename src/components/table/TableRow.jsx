import React from 'react'
import { TableBody, Text, TextArea } from './TableParts'
// import moment from 'moment'

export const CarOwnerRow = ({ id, first_name: firstName, last_name:lastName, email, country, car_model:carModel, car_model_year:carModelYear, car_color: carColor, gender, job_title:jobTitle, bio }) => {
  return (
    <TableBody>
      <td>
        <Text
          text={id}
        />
      </td>
      <td>
        <Text
          text={firstName}
        />
      </td>
      <td>
        <Text
          text={lastName}
        />
      </td>
      <td>
        <Text
          text={email}
        />
      </td>
      <td>
        <Text
          text={country}
        />
      </td>
      <td>
        <Text
          text={carModel}
        />
      </td>
      <td>
        <Text
          text={carModelYear}
        />
      </td>
      <td>
        <Text
          text={carColor}
        />
      </td>
      <td>
        <Text
          text={gender}
        />
      </td> <td>
        <Text
          text={jobTitle}
        />
      </td> <td>
        <TextArea
          text={bio}
        />
      </td>
    </TableBody>
  )
}

// export const JobRow = ({ jobInfo, creator, freelancer, milestones, assigned, completed, budget, ...props }) => (
//   <TableBody>
//     <td>
//       <ProfileAndText
//         text={creator.organization.organizationName || 'Damilola Sasha'}
//         subtext={creator.type || 'Frontend Developer'}
//         img={creator.organization.organizationLogoUrl || require('../../assets/images/primework_purple.png')}
//       />
//     </td>
//     <td>
//       <DuoText
//         text={jobInfo.jobTitle || 'Job Title Goes Here'}
//         subtext={jobInfo.jobCategory || 'Job Category Goes Here'}
//       />
//     </td>
//     <td>
//       <DuoText
//         text={moment(new Date(jobInfo.deadLine)).format('DD/MM/YYYY') || '10-06-2019'}
//         subtext={moment(new Date(jobInfo.deadLine), 'MMDDYYYY').fromNow() || 'In 6 Days'}
//       />
//     </td>
//     <td>
//       <MileStoneList milestones={milestones} />
//       {/* <DuoTextAlt
//         text={milestones[0].milestone || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '}
//       /> */}
//     </td>
//     <td>
//       <Status
//         compeleted={completed}
//         accepted={assigned}
//       />
//     </td>
//     <td>
//       <ProfileAndText
//         text={`${freelancer.freelancer.firstName || 'jon'} ${freelancer.freelancer.lastName || 'snow'}` || 'Damilola Sasha'}
//         subtext={freelancer.type || 'Frontend Developer'}
//         img={freelancer.freelancer.profileImageUrl}
//       />
//     </td>
//     <td>
//       <DuoText
//         altText='true'
//         altSubText
//         text={budget || '0'}
//         subtext={completed ? 'Complete' : 'In Progress'}
//       />
//     </td>
//   </TableBody>
// )
// export const CategoryRow = ({ category, handleShowEditCategory, handleShowDeleteCategory }) => (
//   <TableBody>
//     <td>
//       <Text
//         text={category}
//       />
//     </td>
//     <td
//       onClick={handleShowEditCategory}
//     >
//       <EditText
//         text='Job Title Goes Here'
//       />
//     </td>
//     <td onClick={handleShowDeleteCategory}>
//       <DeleteText
//         text='10-06-2019'
//       />
//     </td>
//   </TableBody>
// )
