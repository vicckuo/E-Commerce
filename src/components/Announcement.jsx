import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            優惠！超過 $50元就免運
        </Container>
    );
};

export default Announcement;
