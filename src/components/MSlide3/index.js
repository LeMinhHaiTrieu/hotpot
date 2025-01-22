import Image1 from '../../asset/images/hadilao1.png'
import Image2 from '../../asset/images/hadilao2.png'
import Image3 from '../../asset/images/hadilao3.png'
import {
    BrandSection,
    BoxMainContent,
    ItemBrand,
    FeatureName
} from './styled'
export default function MSlide2() {
    return (
        <BrandSection>
            <BoxMainContent>
                <ItemBrand>
                    <a href="/">
                        <img src={Image1} alt="" />
                    </a>
                    <FeatureName>Brand</FeatureName>
                </ItemBrand>
                <ItemBrand>
                    <a href="/">
                        <img src={Image2} alt="" />
                    </a>
                    <FeatureName>Cuisine</FeatureName>
                </ItemBrand>
                <ItemBrand>
                    <a href="/">
                        <img src={Image3} alt="" />
                    </a>
                    <FeatureName>Membership</FeatureName>
                </ItemBrand>
            </BoxMainContent>
        </BrandSection>
    );
} 