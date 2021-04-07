export = Configure;
/**
 * This extension calls the zigbee-herdsman-converters definition configure() method
 */
declare class Configure extends Extension {
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: any, eventBus: any);
    configuring: Set<any>;
    onReportingDisabled(data: any): void;
    attempts: {};
    topic: string;
    legacyTopic: string;
    shouldConfigure(resolvedEntity: any): boolean;
    onMQTTMessage(topic: any, message: any): Promise<void>;
    onZigbeeStarted(): Promise<void>;
    coordinatorEndpoint: any;
    onZigbeeEvent(type: any, data: any, resolvedEntity: any): void;
    configure(resolvedEntity: any, force?: boolean, thowError?: boolean): Promise<false | undefined>;
}
import Extension = require("./extension");
