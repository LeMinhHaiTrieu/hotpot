import {
    WrapFooter,
    MainFooter,
    ColFooter,
    Title,
    List,
    ListItem,
} from './styled'
import { ItemsFooter } from '../../constant'

function Footer(props) {
    return (
        <WrapFooter>
            <MainFooter>
                {ItemsFooter.map((item, index) =>
                    <ColFooter key={index}>
                        <Title>
                            <a href={item.link}>{item.title}</a>
                        </Title>
                        <List>
                            {item.items.map((route, j) =>
                                <ListItem key={j}>
                                    <a href={route.link}>{route.title}</a>
                                </ListItem>
                            )}
                        </List>
                    </ColFooter>
                )}
            </MainFooter>
        </WrapFooter>
    )
}

export default Footer;