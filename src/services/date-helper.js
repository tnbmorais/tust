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

function getNextSchedule() {

}

export {
    calculateTypeOfDay,
    getNextSchedule
};
