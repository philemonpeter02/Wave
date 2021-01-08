import React from 'react'
import Wave from './Wave';
import {SectionGroup, SectionLogo, SectionTitleGroup, SectionTitle, SectionText, WaveBottom, WaveTop} from './WaveSectionElements';

const WaveSection = (props) => {
    return (
        <SectionGroup image={props.image}>
            <WaveBottom><Wave /></WaveBottom>
            <WaveTop><Wave /></WaveTop>
            <SectionLogo src={props.logo} />
                <SectionTitleGroup>
                  <SectionTitle>{props.title}</SectionTitle>
                  <SectionText>{props.text}</SectionText>
                </SectionTitleGroup>
       </SectionGroup>
    )
}

export default WaveSection
