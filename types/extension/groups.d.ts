export = Groups;
declare class Groups extends Extension {
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: any, eventBus: any);
    onStateChange(data: any): Promise<void>;
    legacyApi: any;
    lastOptimisticState: {};
    onZigbeeStarted(): Promise<void>;
    syncGroupsWithSettings(): Promise<void>;
    areAllMembersOff(zigbeeGroup: any): boolean;
    parseMQTTMessage(topic: any, message: any): {
        resolvedEntityGroup?: undefined;
        resolvedEntityDevice?: undefined;
        type?: undefined;
        hasEndpointName?: undefined;
        error?: undefined;
        groupKey?: undefined;
        deviceKey?: undefined;
        triggeredViaLegacyApi?: undefined;
    } | {
        resolvedEntityGroup: any;
        resolvedEntityDevice: any;
        type: any;
        hasEndpointName: string | null | undefined;
        error: string | null;
        groupKey: any;
        deviceKey: any;
        triggeredViaLegacyApi: boolean;
    };
    onMQTTMessage(topic: any, message: any): Promise<void>;
}
import Extension = require("./extension");
