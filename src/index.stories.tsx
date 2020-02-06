import * as React from 'react'
import { Navbar } from './components/Navbar'

export default { title: 'Navbar' }

const Logo: React.FunctionComponent = () => {
  return (<img src="https://avatars1.githubusercontent.com/u/50220511?s=200&v=4" />)
}

export const simple: React.FunctionComponent = () => {
  return <Navbar bgColor='#e2e2e2' logoContent={<Logo />} />
}