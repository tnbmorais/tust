const appData = {};
let appDB = {
    setItem: (key, value) => {
        appData[key] = value;
    },
    getItem: key => appData[key]
};

if ('sessionStorage' in window) {
    appDB = window.sessionStorage;
}

function setData(key, value) {
    appDB.setItem(key, JSON.stringify(value));
}

function getData(key) {
    const data = JSON.parse(appDB.getItem(key));

    return data;
}

export {
    setData,
    getData
};
