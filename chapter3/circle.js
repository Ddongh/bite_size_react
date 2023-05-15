const PI = 3.141592;

const getArea = radius => {
    return PI * radius ** 2;
}

const getCircumference = radius => {
    return 2 * PI * radius;
}

export { 
    PI,
    getArea,
    getCircumference
};