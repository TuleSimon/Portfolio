import styled from 'styled-components';

export const Img = styled.img `
  width:100%;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
  overflow: hidden;
`

export const GridContainer = styled.section `
display: flex;
/* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
padding-top: 3rem;
padding-bottom: 3rem;
justify-items: center;
justify-content: center;
/* place-items: center; */
flex-wrap: wrap;
gap:40px;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 1.5rem;
}
`
export const BlogCard = styled.div `
  border-radius: 10px;
  flex: 0 0 30%;
  box-shadow: 3px 3px 20px rgba(266, 27, 122, 0.1);
  text-align: center;
  width: 50%;
  overflow: hidden;
  position:relative;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  &:hover >ul {
    display:flex;
}
`;
export const TitleContent = styled.div `
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 0.7em;
  color: #9cc9e3;
  font-size: 1.8rem;

`;


export const HeaderThree = styled.h3 `
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  margin-top: 1rem;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr `
  width: 50px;
  height: 3px;
  margin: 8px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div `
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p `
  width: 100%;
  padding: 0 20px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: start;
  margin-bottom: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul `
  list-style-type: none;
  padding: 0;
  position:absolute;
  width:100%;
  height:100%;
  justify-content: center;
  align-content: center;
  justify-items: center;
  place-items: center;
  top:-25px;
  overflow: hidden;
  left:0;
  backdrop-filter: Blur(10px);
  background-color: rgba(0,0,0,0.3);
  display: none;
  flex-wrap: wrap;
  gap:10px;
  justify-content: space-around;
  margin: 2.5rem 0;
  
`;

export const ExternalLinks = styled.a `
color:#d4c0c0;
font-size: 1.6rem;
display: flex;
height: fit-content;
justify-content: center;
align-content: center;
align-items: center;
gap: 5px;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul `
display: flex;
gap:10px;
width: max-content;
justify-content: center;
justify-items: center;
align-items:center;
width:100%;
align-content:center;
padding: 2rem;
`
export const Tag = styled.li `
color: black;
font-size: 1.5rem;
border-radius: 10px;
background:#9cc9e3;
padding:10px;
`