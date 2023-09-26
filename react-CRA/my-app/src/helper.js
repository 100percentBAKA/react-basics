import arr from './fruits'

const randomGen = function () {
    return Math.floor(Math.random() * arr.length)
}

const choice = function () {
    return arr[randomGen()]
}

const remove = function (fruit) {
    return arr.filter((item) => item !== fruit)
}

export { choice, remove }