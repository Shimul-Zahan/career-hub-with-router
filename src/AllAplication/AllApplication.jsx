import React, { useEffect, useState } from 'react'
import { searchItem } from '../Utils/LocalStorage/localstorage'
import Application from './Application';
// import { useSearchParams } from 'react-router-dom'

const AllApplication = () => {

  const [applications, setApllication] = useState();

  useEffect(() => {
    const apllications = searchItem();
    setApllication(apllications);
  }, [])

  console.log(applications);

  return (
    <div>
      {/* {
        applications.length
      } */}
    </div>
  )
}

export default AllApplication