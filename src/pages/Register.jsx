import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ), 
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
`

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    width: 40%;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>註冊一個帳戶</Title>
                <Form>
                    <Input placeholder="名字" />
                    <Input placeholder="姓氏" />
                    <Input placeholder="使用者帳號" />
                    <Input placeholder="Email" />
                    <Input placeholder="密碼" />
                    <Input placeholder="確認密碼" />
                    <Agreement>
                        點擊註冊，即表示您已閱讀並同意本網站的 <b>隱私權政策</b>
                    </Agreement>
                    <Button>註冊</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
