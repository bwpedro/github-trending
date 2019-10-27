import React from 'react';
import Summary from './Summary'

const List = ({repositories}) => {
  return (
    <div className='patient-list section'>
      {repositories.id !== "" && repositories.map(repository => {
        return (
          <Summary repository={repository} key={repository.id}/>
        )
      })}
    </div>
  )
}

export default List