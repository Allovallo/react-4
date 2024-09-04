
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Logo>
                    <span role='img' aria-label="computer on">
                        💻
                    </span>
                    GoMerch store
                </Logo>
                <nav>
                    <Link to='/' end>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/products'>Product</Link>
                </nav>
            </Header>
            <Outlet/>
        </Container>
    )
}