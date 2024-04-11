async function myFunc() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done")
        }, 1000);
    })
    let result = await Promise;
    console.log(result);
}
myFunc();