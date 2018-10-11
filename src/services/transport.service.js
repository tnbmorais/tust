import routes from '../mock-data/routes.json';

function getStops() {
    const stopsList = Object.values(routes).reduce((acc, route) => {
        return acc.concat(route.stops);
    }, []);

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

function getAvailableRoutes(from, to) {
    const routesList = Object.values(routes).filter(route => {
        return [from, to].every(stop => route.stops.indexOf(stop) !== -1);
    });

    return routesList;
}

export { getStops, getAvailableStops, getAvailableRoutes };
