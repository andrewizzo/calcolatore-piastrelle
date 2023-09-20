import { useState } from 'react'
import './index.css'
import { Calculator } from './components/Calculator'
import { Title } from './components/Title'

function App() {

  return (
    <div className='custom-bg flex flex-col items-center gap-5 py-10'>
      <Title />
      <Calculator />
    </div>
  )
}

export default App
