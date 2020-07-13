import React from './node_modules/react'
import { SearchInput } from '../Input'
import { SearchButton, FilterButton } from '../Button'
import * as Page from './styles'

const SearchBar = ({ inputs, changed, clicked, filterClicked, loading }) => {
  return (
    <Page.Wrapper>
      <SearchInput
        name='search users'
        value={inputs.query}
        placeholder='Search for users...'
        changed={changed}
      />
      <SearchButton
        content='search'
        clicked={clicked}
        loading={loading}
      />
      <FilterButton
        clicked={filterClicked}
        content='filter'
      />
    </Page.Wrapper>

  )
}

export default SearchBar
