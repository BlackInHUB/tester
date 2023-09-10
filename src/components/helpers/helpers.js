const questionNumber = (i) => {
    return i + 1;
};

const answerLetter = (i) => {
    return String.fromCharCode('A'.charCodeAt() + i);
};

const getTime = (ms) => {
    const seconds = parseInt((ms / 1000));
    const minutes = parseInt((seconds / 60));
    const hours = parseInt((minutes / 60));
    if (minutes <= 0 && hours <= 0) {
        return `00:00:${seconds.toString().length > 1 ? seconds : `0${seconds}`}`;
    } else if (minutes && hours <= 0) {
        return `00:${minutes.toString().length > 1 ? minutes : `0${minutes}`}:${seconds.toString().length > 1 ? seconds - minutes * 60 : `0${seconds}`}`;
    } else {
        return `${hours.toString().length > 1 ? hours : `0${hours}`}:${minutes.toString().length > 1 ? minutes : `0${minutes}`}:${seconds.toString().length > 1 ? seconds : `0${seconds}`}`
    };
};

export {
    questionNumber,
    answerLetter,
    getTime
};