const buildMessObj = (messParam) => {
    return {
        message: messParam,
        userId: sessionStorage.getItem("userId")
    };
};

export default buildMessObj;