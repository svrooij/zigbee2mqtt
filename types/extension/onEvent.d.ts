export = OnEvent;
/**
 * This extension calls the zigbee-herdsman-converters onEvent.
 */
declare class OnEvent extends Extension {
    onZigbeeStarted(): Promise<void>;
    onZigbeeEvent(type: any, data: any, resolvedEntity: any): void;
    callOnEvent(resolvedEntity: any, type: any, data: any): void;
}
import Extension = require("./extension");
