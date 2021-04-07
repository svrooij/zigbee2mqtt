export = EventBus;
declare class EventBus extends events {
    constructor();
    callbackByExtension: {};
    removeListenersExtension(extension: any): void;
}
import events = require("events");
