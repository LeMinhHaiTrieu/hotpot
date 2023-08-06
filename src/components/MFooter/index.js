import { useState, useRef, useEffect } from 'react'
import {
    WrapBlack,
    MainFooter,
    ColFooter,
    Title,
    List,
    ListItem,
    Expand,
    BlockTerms,
} from './styled'
import ArrowRight from '../../asset/svg/arrowRight.svg'
import { animated, useSpring } from "react-spring"
import { ItemsFooter } from '../../constant'

const ItemCol = ({title, link, items}) => {
    const ref = useRef(null);
    const [toggle, setToggle] = useState(false);
    const [style, animate] = useSpring(() => ({ height: "0px" }), []);
    useEffect(() => {
        animate({
          height: (toggle ? ref.current.offsetHeight : 0) + "px"
        });
    }, [animate, ref, toggle]);

    return (
        <ColFooter>
            <Title>
                <a href={link}>{title}</a>
                <Expand onClick={() => setToggle(!toggle)} className={toggle ? 'active' : 'hide'}>
                    <img src={ArrowRight} alt="arrow-right.svg" />
                </Expand>
            </Title>
            <div style={{ height: "0%" }}>
                <animated.div style={{ overflow: 'hidden', ...style }}>
                    <List ref={ref}>
                        {items.map((item, index) => (
                            <ListItem key={index}>
                                <a href={item.link}>{item.title}</a>
                            </ListItem>
                        ))}
                    </List>
                </animated.div>
            </div>
        </ColFooter>
    )
}

function MFooter() {
    return (
        <footer>
            <WrapBlack>
                <MainFooter>
                    {ItemsFooter.map((item, index) =>
                        <ItemCol {...item} key={index} />
                    )}
                </MainFooter>
            </WrapBlack>
            <BlockTerms>
                <div><a href="#">Terms of Use</a></div>
                <div><a href="#">Privacy Policy</a></div>
            </BlockTerms>
        </footer>
    )
}

export default MFooter;