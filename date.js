// or  module.exports.getDate = getDate;
// function getDate() {...}

exports.getDate = () => {

    const currentDay = new Date();

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    return currentDay.toLocaleString('en-US', options);
}


exports.getDay = getDay = () => {
    const currentDay = new Date();

    const options = {
        weekday: 'long',
    };

    return  currentDay.toLocaleString('en-US', options);
}