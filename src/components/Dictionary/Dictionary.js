// data
import * as data from 'data'
// react
import { useState } from 'react'
// components
import FormSelect from 'shared/FormSelect'
import FormInput from 'shared/FormInput'
import DictionaryListDisplay from './DictionaryListDisplay'

function Dictionary() {

  const [currentCategory, setCurrentCategory] = useState('default')
  const currentCategoryData = data[currentCategory]


  const [searchTerm, setSearchTerm] = useState('')
  const filteredData = currentCategoryData?.filter(item => {
    return Object.values(item).find(val => String(val).toLowerCase().includes(searchTerm.toLowerCase().trim()))
  })

  const handleSelectChange = ({target}) => setCurrentCategory(target.value)
  const handleSearchChange = ({target}) => setSearchTerm(target.value)

  return (
    <div>

      <FormSelect
       name='category'
       labelText='Category: '
       onChange={handleSelectChange}
       value={currentCategory}
       defaultText='---'
      >

        <option value='conditionals'>Conditionals</option>
        <option value='effects'>Effects</option>
        <option value='eventTypes'>Event Types</option>
        <option value='keywordReplacements'>Keyword Replacements</option>
        <option value='modifiers'>Location Modifiers</option>
        <option value='personalityTraits'>Personality Traits</option>

      </FormSelect>

      <br/>

      <FormInput
        name="search"
        inputType="text"
        labelText="Search: "
        onChange={handleSearchChange}
        value={searchTerm}
      />

      <DictionaryListDisplay definitions={filteredData} displayCondition={filteredData?.length} />

    </div>
  )

}

export default Dictionary
