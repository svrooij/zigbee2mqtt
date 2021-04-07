export = Report;
declare class Report extends Extension {
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: any, eventBus: any);
    queue: Set<any>;
    failed: Set<any>;
    enabled: any;
    shouldIgnoreClusterForDevice(cluster: any, definition: any): boolean;
    setupReporting(resolvedEntity: any): Promise<void>;
    shouldSetupReporting(resolvedEntity: any, messageType: any): boolean;
    onZigbeeStarted(): Promise<void>;
    coordinatorEndpoint: any;
    onZigbeeEvent(type: any, data: any, resolvedEntity: any): Promise<void>;
}
import Extension = require("../extension");
