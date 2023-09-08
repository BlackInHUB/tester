import { useNavigate } from "react-router-dom";
import { Button } from "../reusableComponents/Buttons/Button";
import { Container, ContentWrapper, HeroImgWrapper, HomeTitle } from "./HomeContent.styled";
import { useApp } from "../../appContext";


export const HomeContent = () => {
    const navigate = useNavigate();
    const {isLoggedIn} = useApp();

    const handleAuthBtnClick = () => {
        navigate('authentication', {replace: true});
    };

    const handleGoToTestsClick = () => {
        navigate('tests', {replace: true})
    }

    return (
        <Container>
            <HeroImgWrapper />
            <ContentWrapper>
            <HomeTitle>Welcome!</HomeTitle>
            {isLoggedIn ? 
                <Button $bgColor='hover' text='Go to Tests' type='button' onClick={handleGoToTestsClick}></Button> :
                <Button $bgColor='hover' text='Get Started' type='button' onClick={handleAuthBtnClick}></Button>
            }
            </ContentWrapper>
        </Container>
    )
}
