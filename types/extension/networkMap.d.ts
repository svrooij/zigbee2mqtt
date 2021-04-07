export = NetworkMap;
/**
 * This extension creates a network map
 */
declare class NetworkMap extends Extension {
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: any, eventBus: any);
    legacyApi: any;
    legacyTopic: string;
    legacyTopicRoutes: string;
    topic: string;
    raw(topology: any): any;
    graphviz(topology: any): string;
    plantuml(topology: any): string;
    supportedFormats: {
        raw: (topology: any) => any;
        graphviz: (topology: any) => string;
        plantuml: (topology: any) => string;
    };
    onMQTTMessage(topic: any, message: any): Promise<void>;
    networkScan(includeRoutes: any): Promise<{
        nodes: never[];
        links: never[];
    }>;
}
import Extension = require("./extension");
