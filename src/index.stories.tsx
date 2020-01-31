import * as React from 'react'
import { Navbar } from './components/Navbar'


export default { title: 'Navbar' }

export const simple: React.FunctionComponent = () => {
  return <Navbar bgColor='black' logoContent={<span>gola</span>} />
}