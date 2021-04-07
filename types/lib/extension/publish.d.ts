export = EntityPublish;
declare class EntityPublish extends Extension {
    parseTopic(topic: any): {
        ID: any;
        endpointName: any;
        type: any;
        attribute: any;
    } | null;
    onMQTTMessage(topic: any, message: any): Promise<boolean | undefined>;
}
import Extension = require("./extension");
