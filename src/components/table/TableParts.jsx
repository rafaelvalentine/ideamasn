import React from 'react'
// import { Admin } from '../Picture'
import * as Table from './styles'
// import { formatAmount } from '../Tools/Formatter'
// import { MilestonesDropDown } from '../DropDown'

export const TableHead = ({ children }) => (
  <Table.Thead className='jobtable'>
    <tr>
      {children}
    </tr>
  </Table.Thead>
)

export const TableBody = ({ children }) => (
  <Table.Tbody className='jobtable'>
    {children}
  </Table.Tbody>
)

// export const DuoText = ({ text, subtext, ...props }) => {
//   let amount
//   if (props.altText) {
//     amount = `₦ ${formatAmount(text)}`
//   }
//   return (
//     <Table.Stacked>
//       <Table.Text {...props}>
//         {props.altText ? amount : text }
//       </Table.Text>
//       <Table.SubText {...props}>
//         {subtext}
//       </Table.SubText>
//     </Table.Stacked>
//   )
// }

// export const DuoTextAlt = ({ text, subtext, ...props }) => {
//   return (
//     <Table.Stacked>
//       <Table.TextAlt {...props}>
//         { text }
//       </Table.TextAlt>
//     </Table.Stacked>
//   )
// }

export const Text = ({ text }) => (
  <Table.Text>
    {text}
  </Table.Text>
)
export const TextArea = ({ text }) => (
  <Table.TextArea value={text} />
)
// export const ProfileAndText = ({ img, text, subtext }) => (
//   <Table.SideBy>
//     <Admin
//       src={img || require('../../assets/images/default_user.jpg')}
//       height='32px'
//       width='32px'
//       borderRadius='50%'
//     />
//     <Table.Stacked>
//       <Table.Text >
//         {text}
//       </Table.Text>
//       <Table.SubText>
//         {subtext}
//       </Table.SubText>
//     </Table.Stacked>
//   </Table.SideBy>
// )

// export const Status = ({ accepted, compeleted }) => {
//   let statusMessage
//   if (!accepted) {
//     statusMessage = (
//       <Table.Accepted
//         alt>
//         <span>Pending</span>
//       </Table.Accepted>
//     )
//   }

//   if (accepted) {
//     statusMessage = (
//       <Table.Accepted>
//         <span>In Progress</span>
//       </Table.Accepted>
//     )
//   }
//   if (compeleted) {
//     statusMessage = (
//       <Table.Completed>
//         <span>Completed</span>
//       </Table.Completed>
//     )
//   }
//   return (
//     <Table.Stacked>
//       {statusMessage}
//     </Table.Stacked>
//   )
// }
// export const EditText = ({ accepted, unaccepted, compeleted }) => {
//   return (
//     <Table.Stacked>
//       <Table.Edit>
//         <span>EDIT CATEGORY</span>
//       </Table.Edit>
//     </Table.Stacked>
//   )
// }
// export const DeleteText = ({ accepted, unaccepted, compeleted }) => {
//   return (
//     <Table.Stacked>
//       <Table.Delete>
//         <span>DELETE CATEGORY</span>
//       </Table.Delete>
//     </Table.Stacked>
//   )
// }

// export const MileStoneList = ({ milestones, showDropDown }) => {
//   /**
//    * here i am using useState to toggle the dropdown
//    */
//   const [dropDown, setDropDown] = useState({})

//   const toggleDropDown = () => {
//     if (dropDown.show) {
//       return setDropDown({ show: false })
//     }
//     return setDropDown({ show: true })
//   }
//   let dropdown
//   if (dropDown.show) {
//     dropdown = <MilestonesDropDown milestones={milestones} /> 
//   }
//   /**
//  * Hook that alerts clicks outside of the passed ref
//  */
//   function useOutsideAlerter (ref) {
//   /**
//    * Alert if clicked on outside of element
//    */
//     function handleClickOutside (event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         return setDropDown({ show: false })
//       }
//     }

//     useEffect(() => {
//     // Bind the event listener
//       document.addEventListener('mouseover', handleClickOutside)
//       return () => {
//       // Unbind the event listener on clean up
//         document.removeEventListener('mouseover', handleClickOutside)
//       }
//     })
//   }
//   const wrapperRef = useRef(null)
//   useOutsideAlerter(wrapperRef)
//   return (
//     <Table.Stacked style={{ position: 'relative', cursor: 'pointer' }} ref={wrapperRef} onMouseEnter={toggleDropDown}>
//       <Text text={milestones[0].milestone} />
//       ...
//       {dropdown}
//     </Table.Stacked>

//   )
// }
