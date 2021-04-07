export = Availability;
/**
 * This extensions pings devices to check if they are online.
 */
declare class Availability extends Extension {
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: any, eventBus: any);
    availability_timeout: any;
    timers: {};
    blocklist: any;
    passlist: any;
    onDeviceRenamed(data: any): void;
    onDeviceRemoved(resolvedEntity: any): void;
    inPasslistOrNotInBlocklist(device: any): any;
    isPingable(device: any): boolean;
    onMQTTConnected(): void;
    onMQTTMessage(topic: any, message: any): Promise<void>;
    handleIntervalPingable(device: any): Promise<void>;
    handleIntervalNotPingable(device: any): Promise<void>;
    setTimerPingable(device: any): void;
    onReconnect(device: any): Promise<void>;
    publishAvailability(device: any, available: any, force?: boolean): void;
    onZigbeeEvent(type: any, data: any, resolvedEntity: any): void;
}
import Extension = require("./extension");
