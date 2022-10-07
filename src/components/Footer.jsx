import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>胡老師愛團購</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, at inventore tempora amet numquam eos dicta perferendis, accusamus labore aperiam aspernatur sunt autem laborum, quibusdam necessitatibus quidem eum non architecto?
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>網站地圖</Title>
                <List>
                    <ListItem>首頁</ListItem>
                    <ListItem>購物車</ListItem>
                    <ListItem>男裝</ListItem>
                    <ListItem>女裝</ListItem>
                    <ListItem>配件</ListItem>
                    <ListItem>我的帳號</ListItem>
                    <ListItem>查詢訂單</ListItem>
                    <ListItem>待購清單</ListItem>
                    <ListItem>服務條款</ListItem>
                </List>
            </Center>
            <Right>
                <Title>聯絡我們</Title>
                <ContactItem>
                    <Room styled={{ marginRight: "10px" }} /> 嘉義市xxxxxxxxx
                </ContactItem>
                <ContactItem>
                    <Phone styled={{ marginRight: "10px" }} /> 0912-xxx-xxx
                </ContactItem>
                <ContactItem>
                    <MailOutline styled={{ marginRight: "10px" }} /> services@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
