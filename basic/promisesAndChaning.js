const { error } = require("console");

const fetchUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ username: 'Humura', age: '30' })
        }, 1000);
    })
}

fetchUserData().then((user) => {
    console.log('User data: ', user);
    return 'Additional user: ';
}).then((additionalData) => {
    console.log('Additional data', additionalData);
}).catch((error) => {
    console.error('ERoor', error);
}).finally(() => {
    console.log('finally blocked');
})