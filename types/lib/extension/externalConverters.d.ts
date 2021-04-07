export = ExternalConverters;
declare class ExternalConverters extends Extension {
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: any, eventBus: any);
}
import Extension = require("./extension");
