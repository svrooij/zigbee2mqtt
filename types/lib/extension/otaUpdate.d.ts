export = OTAUpdate;
declare class OTAUpdate extends Extension {
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: any, eventBus: any);
    inProgress: Set<any>;
    lastChecked: {};
    legacyApi: any;
    onMQTTConnected(): void;
    removeProgressAndRemainingFromState(device: any): void;
    onZigbeeEvent(type: any, data: any, resolvedEntity: any): Promise<void>;
    readSoftwareBuildIDAndDateCode(device: any, update: any): Promise<{
        softwareBuildID: any;
        dateCode: any;
    } | null>;
    getEntityPublishPayload(state: any, progress?: any, remaining?: any): {
        update: {
            state: any;
        };
    };
    onMQTTMessage(topic: any, message: any): Promise<null | undefined>;
}
import Extension = require("./extension");
