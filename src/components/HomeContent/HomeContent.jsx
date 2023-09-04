import { Button } from "../reusableComponents/Buttons/Button";
import { Container, HomeTitle } from "./HomeContent.styled";


export const HomeContent = () => {
    return (
        <Container>
            <HomeTitle>Welcome!</HomeTitle>
            <Button text='Create an Account' type='button'></Button>
        </Container>
    )
}
