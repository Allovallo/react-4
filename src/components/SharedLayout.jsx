
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
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Product</Link>
                </nav>
            </Header>
            <Outlet/>
        </Container>
    )
}