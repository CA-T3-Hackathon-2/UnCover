import React from 'react';

import Form from './Form'
import CategoryBoxes from './CategoryBoxes'

const Find = ( {location} ) => {

  return(
    <>
      <Form location={location} />
      <CategoryBoxes />
    </>
  )

}

export default Find;