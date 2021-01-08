import React from 'react'
import styled from 'styled-components'
import staticdata from '../../../staticdata.json'
import Cell from './Cell'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const CellSection = () => {
    return (
        <>
           <SectionCaption>12 sections - 6 hours</SectionCaption>
           <SectionCellGroup>
                {staticdata.cells.map(cell => (
                <Cell title={cell.title} image={cell.image} />
                 ))}
           </SectionCellGroup>
            
        </>
    )
}

export default CellSection
