import { useNavigate } from "react-router-dom";
import { Button } from "../reusableComponents/Buttons/Button";
import { Container, ContentWrapper, HeroImgWrapper, HomeTitle } from "./HomeContent.styled";
import { useApp } from "../../appContext";


export const HomeContent = () => {
    const navigate = useNavigate();
    const {isLoggedIn, language} = useApp();

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
            <HomeTitle>{language === 'EN' ? 'Welcome!' : 'Вітаємо!'}</HomeTitle>
            {isLoggedIn ? 
                <Button $bgColor='green' $color='mainFont' text={language === 'EN' ? 'Go to Tests' : 'До Тестів'} type='button' onClick={handleGoToTestsClick}></Button> :
                <Button $bgColor='green' $color='mainFont' text={language === 'EN' ? 'Get Started' : 'Розпочати'} type='button' onClick={handleAuthBtnClick}></Button>
            }
            </ContentWrapper>
        </Container>
    )
}
