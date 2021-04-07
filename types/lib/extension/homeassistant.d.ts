export = HomeAssistant;
/**
 * This extensions handles integration with HomeAssistant
 */
declare class HomeAssistant extends Extension {
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: any, eventBus: any);
    discovered: {};
    mapping: {};
    discoveredTriggers: {};
    legacyApi: any;
    discoveryTopic: any;
    statusTopic: any;
    populateMapping(): void;
    onDeviceRemoved(resolvedEntity: any): void;
    onPublishEntityState(data: any): Promise<void>;
    onDeviceRenamed(device: any, homeAssisantRename: any): void;
    onMQTTConnected(): Promise<void>;
    getConfigs(resolvedEntity: any): any;
    discover(resolvedEntity: any, force?: boolean): void;
    onMQTTMessage(topic: any, message: any): void;
    onZigbeeEvent(type: any, data: any, resolvedEntity: any): void;
    getDevicePayload(resolvedEntity: any): {
        identifiers: string[];
        name: any;
        sw_version: string;
        model: string;
        manufacturer: any;
    };
    getDiscoveryTopic(config: any, device: any): string;
    publishDeviceTriggerDiscover(entity: any, key: any, value: any, force?: boolean): Promise<void>;
    _getMapping(): {};
    _clearDiscoveredTrigger(): void;
}
import Extension = require("./extension");
