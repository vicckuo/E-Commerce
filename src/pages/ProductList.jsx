import { useState } from "react";
import { useLocation } from "react-router-dom";
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
    ${SurfaceDuo({ width: "0px 20px", display: "flex", flexDirection: "column" })}
    ${GalaxyFold({ width: "0px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" })}
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
    ${GalaxyFold({ flexDirection: "column", alignItems: "center", justifyContent: "center" })}
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
    const location = useLocation()
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>過濾商品：</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>
                            選擇顏色
                        </Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>
                            選擇尺寸
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>排序商品：</FilterText>
                    <Select onChange={e => setSort(e.target.value)}>
                        <Option value="newest">
                            最新
                        </Option>
                        <Option value="asc">價格(小至大)</Option>
                        <Option value="desc">價格(大至小)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    );
};
export default ProductList;