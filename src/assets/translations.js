const dayAbbreviation = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const dayList = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const monthList = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set',
    'Out', 'Nov', 'Dez'];
const monthLongList = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const ptDateFormat = {
    formatDateDisplay(date) {
        return `${dayList[date.getDay()]}, ${monthList[date.getMonth()]} ${date.getDate()}`;
    },
    formatMonth(date) {
        return `${monthLongList[date.getMonth()]} ${date.getFullYear()}`;
    },
    getWeekDayArray(firstDayOfWeek) {
        const daysComputed = dayAbbreviation.reduce((acc, value, index) => {
            if (index < firstDayOfWeek) {
                acc.afterArray.push(value);
                return acc;
            }

            acc.beforeArray.push(value);
            return acc;
        }, {
            beforeArray: [],
            afterArray: []
        });

        return daysComputed.beforeArray.concat(daysComputed.afterArray);
    },
    getMonthList() {
        return monthList;
    }
};

export default ptDateFormat;
