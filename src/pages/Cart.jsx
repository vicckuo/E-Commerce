import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile, SurfaceDuo, GalaxyFold } from "../responsive";

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
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details>
                                    <ProductName><b>商品：</b> Newbalance鞋子</ProductName>
                                    <ProductId><b>編號：</b> 93813718293</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>尺寸：</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                                <Details>
                                    <ProductName><b>商品：</b> Nike衣服</ProductName>
                                    <ProductId><b>編號：</b> 93813718292</ProductId>
                                    <ProductColor color="gray" />
                                    <ProductSize><b>尺寸：</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>訂單總結</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>小計</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
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
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>立即結帳</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
