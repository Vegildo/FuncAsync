//Promises

const doSomethingPromise = () => new Promise((resolve, reject) => {
    //throw new Error('Something wrong here');
    setTimeout(function() {
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    //throw new Error('Something wrong here');
    setTimeout(function() {
        //did something
        resolve('Second data');
    }, 1000);
});

doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops...', error));

    //é possivel executar promises em paralelo, usando all:
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then (data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err)
});

    //é possivel executar a primeira promise resolvida, usando race:
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then (data => {
    console.log(data);    
}).catch(err => {
    console.log(err)
});

//callbacks
function doSomething(callback) {
    setTimeout(function() {
        //did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        //did other thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function(data) {
            let processeData = data.split('');
            try {
                doOtherThing(function(data2) {
                    let processeData2 = data2.split('');
                    try {
                        setTimeout(function() {
                            console.log(processeData, processeData2);
                        }, 1000);
                    } catch (err) {
                        //handle error
                    }
                });
            } catch (err) {
                //handle error
            }
        });
    } catch (err) {
        //handle error
    }
}

doAll()