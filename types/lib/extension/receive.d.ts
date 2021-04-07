export = Receive;
declare class Receive extends Extension {
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: any, eventBus: any);
    elapsed: {};
    debouncers: {};
    onZigbeeStarted(): Promise<void>;
    coordinator: any;
    onPublishEntityState(data: any): Promise<void>;
    publishDebounce(ieeeAddr: any, payload: any, time: any, debounceIgnore: any): void;
    isPayloadConflicted(newPayload: any, oldPayload: any, debounceIgnore: any): boolean;
    shouldProcess(type: any, data: any, resolvedEntity: any): boolean;
    onZigbeeEvent(type: any, data: any, resolvedEntity: any): void;
}
import Extension = require("./extension");
