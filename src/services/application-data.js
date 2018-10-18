const appData = {};

function setData(key, value) {
    appData[key] = value;
}

function getData(key) {
    return appData[key];
}

export {
    setData,
    getData
};
