import React from 'react'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      Test font Awesome: <FontAwesomeIcon color="#1366E2" icon={faTag} />
    </div>
  )
}

export default Home
