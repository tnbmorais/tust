const typeOfDaysMap = {
    working_days: [1, 2, 3, 4, 5],
    saturday: [6],
    sunday_and_holidays: [0]
};

function calculateTypeOfDay(date) {
    const dayOfWeek = date.getDay();

    return Object.keys(typeOfDaysMap).find(type =>
        typeOfDaysMap[type].indexOf(dayOfWeek) !== -1
    );
}

function getNextSchedule(schedules, date) {
    const referenceDate = date;
    // To simulate times
    // referenceDate.setHours(17, 0);
    //
    return schedules.find(time => {
        const timeArr = time.split(':');
        const hourDate = new Date(referenceDate);
        hourDate.setHours(timeArr[0], timeArr[1], 0);

        return referenceDate < hourDate;
    }) || schedules[0];
}

export {
    calculateTypeOfDay,
    getNextSchedule
};
