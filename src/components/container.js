import React from "react"
import styled from 'styled-components'

const Box = styled.div`
width: 80%;
max-width:1100px;
margin-left: auto;
margin-right: auto;


`

class Container extends React.Component{
    render(){
        return(
        <Box>
          {this.props.children}
        </Box>
        )
    }
}
  
export default Container