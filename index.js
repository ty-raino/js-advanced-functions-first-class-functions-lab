const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
    return function (int) {
        return multiplier * int
    };
};

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arr, drivers) {
    return drivers(arr)
};