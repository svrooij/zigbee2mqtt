export = DeviceGroupMembership;
declare class DeviceGroupMembership extends Extension {
    onMQTTMessage(topic: any, message: any): Promise<null | undefined>;
}
import Extension = require("../extension");
