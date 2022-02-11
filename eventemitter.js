//EventEmitter, para usa-lo devemos importar do node.js

// MODO antigo de importar: 
const EventEmitter = require('events');
// modo novo, mas precisa baixar o packege import EventEmitter from 'events';

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout( () => {
            this.emit('User logged', data);
        }, 2000);            
    }
}

const users = new Users();

/* PAra uma vez só:
users.once('User logged', data => {
    console.log(data);
}); */

users.on('User logged', data => {
    console.log(data);
});
users.userLogged({ user: 'Leonardo Braga' });
users.userLogged({ user: 'Vegildo BiGVV' });
/*
const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', { user: "Leonardo Braga "});*/