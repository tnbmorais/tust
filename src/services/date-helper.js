const typeOfDaysMap = {
    working_days: [1, 2, 3, 4, 5],
    saturday: [6],
    sunday_and_holidays: [0]
};

function calculateTypeOfDay() {
    const today = new Date();
    const dayOfWeek = today.getDay();

    return Object.keys(typeOfDaysMap).find(type =>
        typeOfDaysMap[type].indexOf(dayOfWeek) !== -1
    );
}

function getNextSchedule(schedules) {
    const todayDate = new Date();
    // To simulate times
    // todayDate.setHours(17, 0);
    //

    return schedules.find(time => {
        const timeArr = time.split(':');
        const referenceDate = new Date();
        referenceDate.setHours(timeArr[0], timeArr[1], 0);

        return todayDate < referenceDate;
    }) || schedules[0];
}

export {
    calculateTypeOfDay,
    getNextSchedule
};
