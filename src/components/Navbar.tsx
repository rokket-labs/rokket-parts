import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

type NavbarProps = {
  bgColor?: string,
  height?: number,
  logoContent?: JSX.Element[] | JSX.Element,
  sectionContent?: JSX.Element[] | JSX.Element,
  menuContent?: JSX.Element[] | JSX.Element,

}


export const Navbar: React.FunctionComponent<NavbarProps> = ({ bgColor, logoContent, sectionContent, menuContent, height }) => {
  const mainStyle = {
    display: 'flex',
    ...(bgColor && { backgroundColor: bgColor }),
    ...(height ? { height } : { height: 50 })
  }


  return (
    <div style={mainStyle}>
      <Grid style={{ width: '100%' }}>
        <Row middle="xs">
          <Col xs={3}>
            logo
            {/* {logoContent} */}
          </Col>
          <Col xs={6}>
            sections
            {/* {sectionContent} */}
          </Col>
          <Col xs={3}>
            menu
            {/* {menuContent} */}
          </Col>
        </Row>
      </Grid>
    </div>
  )
}




