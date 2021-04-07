export = ExternalExtension;
declare class ExternalExtension extends Extension {
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: any, eventBus: any, addExtension: any, enableDisableExtension: any);
    args: any[];
    addExtension: any;
    enableDisableExtension: any;
    extensionsBaseDir: string;
    loadExtension(ConstructorClass: any): void;
    requestLookup: {
        save: (message: any) => {
            data: any;
            status: string;
        };
        remove: (message: any) => {
            data: any;
            status: string;
        };
    };
    getExtensionsBasePath(): string;
    getListOfUserDefinedExtensions(): {
        name: string;
        code: string;
    }[];
    removeExtension(message: any): {
        data: any;
        status: string;
    };
    saveExtension(message: any): {
        data: any;
        status: string;
    };
    onMQTTMessage(topic: any, message: any): Promise<void>;
    loadUserDefinedExtensions(): void;
    onMQTTConnected(): Promise<void>;
    publishExtensions(): Promise<void>;
}
import Extension = require("./extension");
