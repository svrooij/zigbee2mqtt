export = Bridge;
declare class Bridge extends Extension {
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: any, eventBus: any, enableDisableExtension: any, restartCallback: any);
    enableDisableExtension: any;
    restartCallback: any;
    lastJoinedDeviceIeeeAddr: any;
    restartRequired: boolean;
    requestLookup: {
        'device/options': (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        'device/configure_reporting': (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        'device/remove': (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        'device/rename': (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        'group/add': (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        'group/options': (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        'group/remove': (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        'group/rename': (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        permit_join: (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        restart: (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        'touchlink/factory_reset': (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        'touchlink/identify': (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        'touchlink/scan': (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        health_check: (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        options: (message: any) => Promise<{
            data: any;
            status: string;
        }>;
        'config/last_seen': (message: any) => {
            data: any;
            status: string;
        };
        'config/homeassistant': (message: any) => {
            data: any;
            status: string;
        };
        'config/elapsed': (message: any) => {
            data: any;
            status: string;
        };
        'config/log_level': (message: any) => {
            data: any;
            status: string;
        };
    };
    onMQTTConnected(): Promise<void>;
    zigbee2mqttVersion: any;
    coordinatorVersion: any;
    setupMQTTLogging(): void;
    permitJoinChanged(data: any): void;
    onMQTTMessage(topic: any, message: any): Promise<void>;
    onZigbeeEvent(type: any, data: any, resolvedEntity: any): Promise<void>;
    /**
     * Requests
     */
    deviceOptions(message: any): Promise<{
        data: any;
        status: string;
    }>;
    groupOptions(message: any): Promise<{
        data: any;
        status: string;
    }>;
    bridgeOptions(message: any): Promise<{
        data: any;
        status: string;
    }>;
    deviceRemove(message: any): Promise<{
        data: any;
        status: string;
    }>;
    groupRemove(message: any): Promise<{
        data: any;
        status: string;
    }>;
    healthCheck(message: any): Promise<{
        data: any;
        status: string;
    }>;
    groupAdd(message: any): Promise<{
        data: any;
        status: string;
    }>;
    deviceRename(message: any): Promise<{
        data: any;
        status: string;
    }>;
    groupRename(message: any): Promise<{
        data: any;
        status: string;
    }>;
    restart(message: any): Promise<{
        data: any;
        status: string;
    }>;
    permitJoin(message: any): Promise<{
        data: any;
        status: string;
    }>;
    configLastSeen(message: any): {
        data: any;
        status: string;
    };
    configHomeAssistant(message: any): {
        data: any;
        status: string;
    };
    configElapsed(message: any): {
        data: any;
        status: string;
    };
    configLogLevel(message: any): {
        data: any;
        status: string;
    };
    touchlinkIdentify(message: any): Promise<{
        data: any;
        status: string;
    }>;
    touchlinkFactoryReset(message: any): Promise<{
        data: any;
        status: string;
    }>;
    touchlinkScan(message: any): Promise<{
        data: any;
        status: string;
    }>;
    /**
     * Utils
     */
    getValue(message: any): any;
    changeEntityOptions(entityType: any, message: any): Promise<{
        data: any;
        status: string;
    }>;
    deviceConfigureReporting(message: any): Promise<{
        data: any;
        status: string;
    }>;
    renameEntity(entityType: any, message: any): {
        data: any;
        status: string;
    };
    removeEntity(entityType: any, message: any): Promise<{
        data: any;
        status: string;
    }>;
    getEntity(type: any, ID: any): any;
    publishInfo(): Promise<void>;
    publishDevices(): Promise<void>;
    publishGroups(): Promise<void>;
    getDefinitionPayload(definition: any): {
        model: any;
        vendor: any;
        description: any;
        exposes: any;
        supports_ota: boolean;
    } | null;
}
import Extension = require("./extension");
