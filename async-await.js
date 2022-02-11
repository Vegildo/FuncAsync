
/* async com await */
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1245)
    }, 1000);
});

const simpleFunc = async () => {
    const info = await asyncTimer();
    console.log(info);
    return info;
    /*const dataJSON = await fetch('/data.json').then(resStream =>
        resStream.json()
        );
    
    return dataJSON;*/
};

/* Async
const simpleFunc = async () => {
    //throw new Error('ERRADO COMÉDIA...');
    
    return 12345;
};*/

console.log(simpleFunc);
console.log(simpleFunc());

simpleFunc().then(data => {    
    console.log(data)
}).catch(err =>{
    console.log(err)
});
  
/* 
function normal:
const simpleFunc = async function() {
};
*/