const shout = (name) => {
    return name.toUpperCase();
}   

const greet = (name) => {
    return `Greetings ${name}`;
}

module.exports = {
    shout,
    greet
}