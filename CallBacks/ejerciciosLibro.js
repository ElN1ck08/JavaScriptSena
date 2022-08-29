let promise = new Promise(function (resolve, reject) { // do something that might take a while
    // let's just set x instead for this example
    let x = 20;
    if (x > 10) {
    resolve(x); // on success
    } else {
    reject("Too low"); // on error }
    });
    promise.then(
        function (value) {
            console.log("Success:", value);
        },
        function (error) {
            console.log("Error:", error);
        }
    );
    const si = new Promise((resolve, reject) => {
        resolve("success!");
    })
    .then(value => {
        console.log(value);
        return "we";
    })
    .then(value => {
        console.log(value);
        return "can";
    })
    .then(value => {
        console.log(value);
        return "chain";
    })
    .then(value => {
        console.log(value);
        return "promises";
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })
    const no = new Promise((resolve, reject) => {
        reject("oops... ");
    })
        .then(value => {
            console.log(value);
            return "we";
        })
        .then(value => {
            console.log(value);
            return "can";
        })
        .then(value => {
            console.log(value);
            return "chain";
        })
        .then(value => {
            console.log(value);
            return "promises";
        })
        .then(value => {
            console.log(value);
        })
        .catch(value => {
            console.log(value);
        })