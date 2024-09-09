import React, { Fragment } from 'react'

const CustomList = ({listItem}) => {
  return (
    <div>
    <ol>
        {
            listItem.map((eachData,index) => {
                return(
                  <li key={index}>{eachData}</li>
                )
            }
       ) }
    </ol>
    </div>
  )
}

export default CustomList
