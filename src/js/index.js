import printer from './printer';
import EventEmitter from 'events';

const message = 'Hello World!!!';


class MyEmitter extends EventEmitter {

  print(printer, msg) {
    printer(msg);
  }
}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
  myEmitter.print(printer, message);
});
myEmitter.emit('event');
