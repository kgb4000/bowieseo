import styled from 'styled-components'
import Link from 'next/link'

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  min-height: calc(100vh - 80px);
  position: relative;
  z-index: 1;
  padding-bottom: 2rem;
  color: #fff;
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1385px;
  padding: 8px 0;
  margin: 0 auto;

  h1 {
    color: #fff;
    font-size: 32px;
    margin-bottom: 2rem;
    text-align: left;

    @media screen and (min-width: 480px) {
      font-size: 35px;
    }

    @media screen and (min-width: 768px) {
      font-size: 55px;
    }
  }

  p {
    color: #fff;
    font-size: 30px;

    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 2rem;
  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`
export const HeroBtn1Link = styled(Link)``
export const HeroBtn2Link = styled(Link)``

export const HeroBtn1LinkA = styled.div`
  margin-bottom: 1rem;
  text-transform: uppercase;

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    width: auto;
    margin-right: 1rem;
  }
`

export const HeroBtn2LinkA = styled(HeroBtn1LinkA)`
  margin: 0;
`

// export default function HeroBox({
//   backgroundHeight,
//   heroText,
//   subText,
//   backgroundImage,
//   buttonText,
//   buttonLink,
//   headerImgText,
//   headerImg,
//   altText,
//   backgroundPosition,
// }) {
//   return (
//     <Hero
//       backgroundImage={backgroundImage}
//       backgroundPosition={backgroundPosition}
//       backgroundHeight={backgroundHeight}
//       headerImg={headerImg}
//       headerImgText={headerImgText}
//     >
//       <span role="img" aria-label={altText}></span>
//       <div className="content">
//         <div>
//           <h1>{heroText}</h1>
//           {subText && <p>{subText}</p>}
//           {buttonText && (
//             <Link href={buttonLink}>
//               <a>
//                 <Button>{buttonText}</Button>
//               </a>
//             </Link>
//           )}
//         </div>
//         {headerImgText && <img src={headerImg} />}
//       </div>
//     </Hero>
//   )
// }

// const Hero = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-image: linear-gradient(
//       to bottom,
//       rgba(0, 0, 0, 0.42),
//       rgba(255, 82, 0, 0.7)
//     ),
//     url(${(props) => props.backgroundImage});
//   background-size: cover;
//   height: ${(props) => props.backgroundHeight};
//   margin-bottom: 2rem;
//   background-position: ${(props) => props.backgroundPosition};
