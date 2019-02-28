const buildEventObject = (nameParam, dateParam, locationParam) => {
    return {
        event: nameParam,
        date: dateParam,
        location: locationParam,
        userId: sessionStorage.getItem("userId")
    };
}

export default buildEventObject