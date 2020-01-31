import * as React from 'react'
import { Navbar } from './components/Navbar'


export default { title: 'Navbar' }

export const simple: React.FunctionComponent = () => {
  return <Navbar bgColor='purple' logoContent={<span>gola</span>} />
}