import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

type NavbarProps = {
  bgColor?: string,
  logoContent?: JSX.Element[] | JSX.Element,
  sectionContent?: JSX.Element[] | JSX.Element,
  menuContent?: JSX.Element[] | JSX.Element,
}


export const Navbar: React.FunctionComponent<NavbarProps> = ({ bgColor, logoContent, sectionContent, menuContent }) => {
  const mainStyle = {
    ...(bgColor && { backgroundColor: bgColor })
  }

  return (
    <div style={mainStyle}>
      <Grid fluid>
        <Row>
          <Col xs={3}>
            {logoContent}
          </Col>
          <Col xs={6}>
            {sectionContent}
          </Col>
          <Col xs={3}>
            {menuContent}
          </Col>
        </Row>
      </Grid>
    </div>
  )
}




