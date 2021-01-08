import React from 'react';
import {FooterGroup, Text, Button, LinkGroup, Copyright} from './FooterElements'

const Footer = ({data, children}) => {
    return ( 
        <FooterGroup>
           <Text>Made with ReactJS / GatsbyJS / React-Styled-Components</Text>
           <Button>Tweet</Button>
           <LinkGroup>
                {data.allContentfulLink.edges.map(edge => (
                <a href={edge.node.url}>{edge.node.title}</a>
                ))}
           </LinkGroup>
           <Copyright>{children}</Copyright>
        </FooterGroup>
    )
}

export default Footer
