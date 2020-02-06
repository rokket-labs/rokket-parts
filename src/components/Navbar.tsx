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
  }

  const gridStyle = {
    maxWidth: 1440,
    width: '100%'

  }

  const rowStyle = {
    ...(height ? { height } : { height: 50 })

  }

  return (
    <div style={mainStyle}>
      <Grid fluid style={gridStyle}>
        <Row style={rowStyle} middle="xs">
          <Col xs={3}>
            {logoContent}
          </Col>
          <Col xs={6}>
            section
            {sectionContent}
          </Col>
          <Col xs={3}>
            menu
            {menuContent}
          </Col>
        </Row>
      </Grid>
    </div>
  )
}




