import styled from 'styled-components';

export const SectionGroup = styled.div`
margin: 100px 0 0;
background: url(${props => props.image});
background-size: cover;
height: 720px;
display: grid;
grid-template-rows: 300px auto;
grid-gap: 20px;
position: relative;
box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);

@media (max-width: 640px) {
    height: 820px;
}
`

export const SectionLogo = styled.img`
    width: 128px;
    margin: 0 auto;
    align-self: end;
`

export const SectionTitleGroup = styled.div`
display: grid;
grid-template-columns: 300px auto;
max-width: 800px;
 

margin: 0 auto;
grid-gap: 20px;
justify-content: center space-between;

grid-template-rows: auto 100%;

@media (max-width: 720px) {
    grid-template-columns: 1fr;
    margin: 0 40px;
}
`

export const SectionTitle = styled.h3`
color: white;
font-size: 60px;
margin: 0;
line-height: 1.2;

@media (max-width: 640px) {
    font-size: 40px;
    text-align: center;
}
`

export const SectionText = styled.p`
color: white;
@media (max-width: 640px) {
    text-align: center;
}
`
export const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg)
`
export const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
    `