export = Bind;
declare class Bind extends Extension {
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: any, eventBus: any);
    legacyApi: any;
    pollDebouncers: {};
    parseMQTTMessage(topic: any, message: any): {
        type: any;
        sourceKey: any;
        targetKey: any;
        clusters: any;
    };
    onMQTTMessage(topic: any, message: any): Promise<null | undefined>;
    groupMembersChanged(data: any): Promise<void>;
    getSetupReportingEndpoints(bind: any, coordinatorEp: any): any;
    setupReporting(binds: any): Promise<void>;
    disableUnnecessaryReportings(target: any): Promise<void>;
    onZigbeeEvent(type: any, data: any, resolvedEntity: any): Promise<void>;
    poll(message: any): void;
}
import Extension = require("./extension");
