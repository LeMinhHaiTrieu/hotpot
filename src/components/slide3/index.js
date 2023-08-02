import { useEffect, useState } from 'react'
import Image1 from '../../asset/images/hadilao1.png'
import Image2 from '../../asset/images/hadilao2.png'
import Image3 from '../../asset/images/hadilao3.png'
import {
    BrandSection,
    CircleContent,
    CircleLine,
    BoxMainContent,
    ItemBrand
} from './styled'

function Slide3(props) {
    const [isShowCircle, setShowCircle] = useState(true)
    useEffect(() => {
        if (props.activeSlide !== 2) setShowCircle(true)
        const timer = setTimeout(() => {
            if(props.activeSlide === 2) setShowCircle(false)
        }, 2000);
        return () => clearTimeout(timer);
    }, [props.activeSlide]);
    return (
        <BrandSection>
            {props.activeSlide === 2 && isShowCircle &&
                <CircleContent>
                    <CircleLine className="sp1"></CircleLine>
                    <CircleLine className="sp2"></CircleLine>
                    <CircleLine className="sp3"></CircleLine>
                </CircleContent>
            }
            <BoxMainContent>
                <ItemBrand>
                    <a href="/">
                        <img src={Image1} alt="" />
                    </a>
                </ItemBrand>
                <ItemBrand>
                    <a href="/">
                        <img src={Image2} alt="" />
                    </a>
                </ItemBrand>
                <ItemBrand>
                    <a href="/">
                        <img src={Image3} alt="" />
                    </a>
                </ItemBrand>
            </BoxMainContent>
        </BrandSection>
    );
  }
  
  export default Slide3;