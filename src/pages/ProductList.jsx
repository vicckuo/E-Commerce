import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile, SurfaceDuo, GalaxyFold } from "../responsive";

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
    ${SurfaceDuo({ width: "0px 20px", display: "flex", flexDirection: "column", })}
    ${GalaxyFold({ width: "0px 20px", display: "flex", flexDirection: "column", })}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
    ${SurfaceDuo({ marginRight: "0px", display: "flex" })}
    ${GalaxyFold({ marginRight: "0px", display: "flex", fontSize: "16px" })}
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const Select = styled.select`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px", })}
    ${SurfaceDuo({ margin: "10px 0px" })}
    ${GalaxyFold({ margin: "10px 0px" })}
`

const Option = styled.option`
     
`

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>洋裝</Title>
            <FilterContainer>
                <Filter><FilterText>過濾商品：</FilterText>
                    <Select>
                        <Option disabled selected>
                            選擇顏色
                        </Option>
                        <Option>白色</Option>
                        <Option>黑色</Option>
                        <Option>紅色</Option>
                        <Option>藍色</Option>
                        <Option>黃色</Option>
                        <Option>綠色</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            選擇尺寸
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter><FilterText>排序商品：</FilterText>
                    <Select>
                        <Option selected>
                            最新
                        </Option>
                        <Option>價格(小至大)</Option>
                        <Option>價格(大至小)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    );
};
export default ProductList;