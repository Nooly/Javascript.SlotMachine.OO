import events from 'events';

const eventEmitter = new events.EventEmitter(); // this so both sender and reciever use the same instance

export default eventEmitter;
