import React from 'react'
import { Table } from 'react-bootstrap'
import * as PageTable from './styles'
import { TableHead } from './TableParts'
import { CarOwnersList} from './TableList'
import { CardHeader as Header } from '../../themes/style/typeface'
import Pagination from '../../tools/Pagination'
// import { SortInput } from '../Input'
// import { TransactionDropDown } from '../DropDown'

export const DashboardTable = ({ 
  title,
  data,
  pageInfo,
  setPagination,
  allUsers,
  pageUsers,
  newindexOfFirstUser,
  handlePagnationUp,
  handlePagnationDown,
  handleDataRange,
  pageNumbers,
  selectedPage
 }) => {
  let header
  if (title) {
    header = (
      <Header>
        <p>{title}</p>
      </Header>
    )
  }
  // const newData = data.slice(0, 10)
  return (
    <PageTable.Wrapper>
      <PageTable.Container>
        {header}
        <Table id='myTable'>
          <TableHead>
            <th>id</th>
            <th>first name</th>
            <th>last name</th>
            <th>email</th>
            <th>country</th>
            <th>car model</th>
            <th>car model year</th>
            <th>car colour</th>
            <th>gender</th>
            <th>job title</th>
            <th>bio</th>
          </TableHead>
          <tbody>
            <CarOwnersList data={data} />
          </tbody>

        </Table>
        { setPagination ? <Pagination
          data={pageInfo}
          allUsers={allUsers}
          pageUsers={pageUsers}
          newindexOfFirstUser={newindexOfFirstUser}
          handlePagnationUp={handlePagnationUp}
          handlePagnationDown={handlePagnationDown}
          handleDataRange={handleDataRange}
          pageNumbers={pageNumbers}
          selectedPage={selectedPage}
          pageLimit={pageInfo.pageLimit}
          upperPageBound={pageInfo.upperPageBound}
          lowerPageBound={pageInfo.lowerPageBound}
        /> : null }
      </PageTable.Container>
    </PageTable.Wrapper>
  )
}

export default DashboardTable 
