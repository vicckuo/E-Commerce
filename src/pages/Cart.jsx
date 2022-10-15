import { Add, Remove } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile, SurfaceDuo, GalaxyFold } from "../responsive";
import StripeCheckout from "react-stripe-checkout"
import { userRequest } from "../requestMethod"
import { useNavigate } from "react-router-dom";



const Key = process.env.REACT_APP_STRIPE

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
    ${SurfaceDuo({ padding: "10px" })}
    ${GalaxyFold({ padding: "10px" })}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
    ${SurfaceDuo({ display: "none" })}
    ${GalaxyFold({ display: "none" })}
`
const TopText = styled.span`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
    ${SurfaceDuo({ flexDirection: "column" })}
    ${GalaxyFold({ flexDirection: "column" })}
`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
    ${mobile({ width: "40%", objectFit: "cover" })}
    ${SurfaceDuo({ width: "30%", objectFit: "contain" })}
    ${GalaxyFold({ width: "30%", objectFit: "contain" })}
`

const Details = styled.span`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
    ${SurfaceDuo({ margin: "5px 15px" })}
    ${GalaxyFold({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
    ${SurfaceDuo({ marginBottom: "20px" })}
    ${GalaxyFold({ marginBottom: "20px" })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                })
                navigate("/success", {
                    stripeData: res.data,
                    products: cart,
                });
            } catch { }
        }
        stripeToken && makeRequest()
    }, [stripeToken, cart.total, navigate])

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>您的購物車</Title>
                <Top>
                    <TopButton>
                        繼續購物
                    </TopButton>
                    <TopTexts>
                        <TopText>購物車(2)</TopText>
                        <TopText>待購清單(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">
                        立即結帳
                    </TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product => (

                            <Product key={product._id}>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName><b>商品：</b> {product.title}</ProductName>
                                        <ProductId><b>編號：</b> {product._id}</ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize><b>尺寸：</b> {product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                                </PriceDetail>
                            </Product>
                        ))}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>訂單總結</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>小計</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>運費</SummaryItemText>
                            <SummaryItemPrice>$ 100</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>折扣</SummaryItemText>
                            <SummaryItemPrice>$ -100</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >總結</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="胡老師愛團購"
                            image="https://avatars.githubusercontent.com/u/59826234?v=4"
                            billingAddress
                            shippingAddress
                            description={`總計： $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={Key}
                        >
                            <Button>立即結帳</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
