import {
    WrapFooter,
    MainFooter,
    ColFooter,
    Title,
    List,
    ListItem,
} from './styled'

function Footer(props) {
    return (
        <WrapFooter>
            <MainFooter>
                <ColFooter>
                    <Title>
                        <a href="#">About Haidilao</a>
                    </Title>
                    <List>
                        <ListItem>
                            <a href="#">Hot Pot Culture</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Brand story</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Mission Statement</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Social Responsibility</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Media Center</a>
                        </ListItem>
                    </List>
                </ColFooter>
                <ColFooter>
                    <Title>
                        <a href="#">Haidilao Cuisine</a>
                    </Title>
                    <List>
                        <ListItem>
                            <a href="#">Soup Bases</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Dishes</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Dipping Sauces</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Snacks and Desserts</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Beverage</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Food Safety</a>
                        </ListItem>
                    </List>
                </ColFooter>
                <ColFooter>
                    <Title>
                        <a href="#">Service Center</a>
                    </Title>
                    <List>
                        <ListItem>
                            <a href="#">Store Locator</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Contact Us</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Hi Card</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Make Reservation</a>
                        </ListItem>
                    </List>
                </ColFooter>
                <ColFooter>
                    <Title>
                        <a href="#">Haidilao Membership</a>
                    </Title>
                    <List>
                        <ListItem>
                            <a href="#">About Membership</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Membership Benefits</a>
                        </ListItem>
                    </List>
                </ColFooter>
            </MainFooter>
        </WrapFooter>
    )
}

export default Footer;