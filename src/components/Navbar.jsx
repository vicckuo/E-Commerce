import { Badge } from "@material-ui/core";
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile, SurfaceDuo, GalaxyFold } from "../responsive"

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
    ${SurfaceDuo({ height: "50px" })}
    ${GalaxyFold({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
    ${SurfaceDuo({ padding: "10px 0px" })}
    ${GalaxyFold({ padding: "10px 0px" })}

`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
    ${SurfaceDuo({ display: "none" })}
    ${GalaxyFold({ display: "none" })}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
    ${SurfaceDuo({ width: "50px" })}
    ${GalaxyFold({ width: "50px" })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "20px" })}
    ${SurfaceDuo({ fontSize: "20px" })}
    ${GalaxyFold({ display: "none" })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "left" })}
    ${SurfaceDuo({ justifyContent: "center" })}
    ${GalaxyFold({ justifyContent: "center", flex: 2 })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    ${SurfaceDuo({ fontSize: "12px", marginLeft: "10px" })}
    ${GalaxyFold({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>中文</Language>
                    <SearchContainer>
                        <Input placeholder="搜尋" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center><Logo>胡老師愛團購</Logo></Center>
                <Right>
                    <MenuItem>註冊</MenuItem>
                    <MenuItem>登入</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingBasketOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
