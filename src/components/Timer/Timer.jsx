import { useEffect, useState } from "react";
import { getTime } from "../helpers/helpers";
import { Container } from "./Timer.styled";
import { notify } from "../../utils/notify";

export const Timer = ({start, limit, timeIsUp}) => {
    const end = start + limit * 60 * 1000;
    const [countDown, setCountDown] = useState(end - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => setCountDown(end - new Date().getTime()), 1000);

        return () => clearInterval(interval);
    }, [end]);

    useEffect(() => {
        if (countDown <= 0) {
            notify('warning', 'Sorry, time is up! Your progress was sent.')
            timeIsUp();
        };
    }, [countDown, timeIsUp]);

    return (
        <Container>
            {getTime(countDown)}
        </Container>
        
    );
};