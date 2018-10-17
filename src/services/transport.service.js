import routes from '../mock-data/routes.json';
import schedules from '../mock-data/schedules.json';
import { calculateTypeOfDay, getNextSchedule } from './date-helper';

function getStops() {
    const stopsList = Object.values(routes).reduce((acc, route) => acc.concat(route.stops), []);

    return Array.from(new Set(stopsList)).sort();
}

function getAvailableStops(from) {
    const stopsList = Object.values(routes).reduce((acc, route) => {
        const routeHasFromRoute = route.stops.some(stop => stop === from);

        if (!routeHasFromRoute) {
            return acc;
        }

        return acc.concat(route.stops);
    }, []);

    return Array.from(new Set(stopsList)).sort();
}

function getSchedulesForRoutes(routeFrom, direction) {
    const typeOfDay = calculateTypeOfDay();

    const scheduleIndex = direction === 'begin_to_end' ? 0 : 1;

    return schedules[routeFrom][typeOfDay][scheduleIndex];
}

function getAvailableRoutes(from, to) {
    const routesList = Object.values(routes)
        .filter(route => {
            const routeHasBothDestinations = [from, to].every(stop => route.stops.indexOf(stop) !== -1);

            return routeHasBothDestinations;
        })
        .map(route => {
            const fromIndex = route.stops.findIndex(stop => stop === from);
            const toIndex = route.stops.findIndex(stop => stop === to);
            const direction = fromIndex < toIndex ? 'begin_to_end' : 'end_to_begin';
            const schedulesList = getSchedulesForRoutes(route.id, direction);
            const nextSchedule = getNextSchedule(schedulesList);

            return {
                ...route,
                schedules: schedulesList,
                nextSchedule
            };
        });

    return routesList;
}

export { getStops, getAvailableStops, getAvailableRoutes };
