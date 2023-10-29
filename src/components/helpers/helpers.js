const questionNumber = (i) => {
    return i + 1;
};

const answerLetter = (i) => {
    return String.fromCharCode('A'.charCodeAt() + i);
};

const getTime = (ms) => {
    const nMs = Number(ms);
    const seconds = parseInt((nMs / 1000));
    const minutes = parseInt((seconds / 60));
    const hours = parseInt((minutes / 60));

    const retSeconds = (seconds.toString().length > 1 && seconds % 60 !== 0 && seconds - minutes * 60 >= 10) ? seconds - minutes * 60 :
                        seconds % 60 === 0 ? '00' : 
                        `0${seconds - minutes * 60}`;
    const retMinutes = (minutes.toString().length > 1 && minutes % 60 !== 0 && minutes - hours * 60 >= 10) ? minutes - hours * 60 :
                        minutes % 60 === 0 ? '00' : 
                        `0${minutes - hours * 60}`;
    const retHours = `${hours.toString().length > 1 ? hours : `0${hours}`}`;

    return `${retHours}:${retMinutes}:${retSeconds}`;
};

const getStatus = (score, testScore) => {
    if (!testScore) {
        return 'complited'
    } else if (score >= testScore) {
        return 'success';
    } else {
        return 'fail'
    };
};

const getCategoryName = (language, categories, id) => {
    if (language === 'EN') {
        return categories?.find(c => c.id === id).en;
    } else {
        return categories?.find(c => c.id === id).ua;
    };
};

export {
    questionNumber,
    answerLetter,
    getTime,
    getStatus,
    getCategoryName
};