import * as React from 'react'
import { Navbar } from './components/Navbar'


export default { title: 'Navbar' }

export const simple: React.FunctionComponent = () => {
  return <Navbar bgColor='red' logoContent={<span>gola</span>} />
}