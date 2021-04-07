export = Zigbee;
declare class Zigbee extends events {
    constructor();
    acceptJoiningDeviceHandler(ieeeAddr: any): boolean;
    start(): Promise<void>;
    herdsman: ZigbeeHerdsman.Controller | undefined;
    getCoordinatorVersion(): Promise<import("zigbee-herdsman/dist/adapter/tstype").CoordinatorVersion>;
    isStopping(): boolean;
    getNetworkParameters(): Promise<import("zigbee-herdsman/dist/adapter/tstype").NetworkParameters>;
    reset(type: any): Promise<void>;
    stop(): Promise<void>;
    permitJoin(permit: any, resolvedEntity: any, time?: any): Promise<void>;
    getPermitJoin(): boolean;
    getPermitJoinTimeout(): number;
    getClients(): import("zigbee-herdsman/dist/controller/model/device").default[];
    getDevices(): import("zigbee-herdsman/dist/controller/model/device").default[];
    getDeviceByIeeeAddr(ieeeAddr: any): import("zigbee-herdsman/dist/controller/model/device").default;
    getDeviceByNetworkAddress(networkAddress: any): import("zigbee-herdsman/dist/controller/model/device").default;
    getDevicesByType(type: any): import("zigbee-herdsman/dist/controller/model/device").default[];
    /**
     * @param {string} key
     * @return {object} {
     *      type: device | coordinator
     *      device|group: zigbee-herdsman entity
     *      endpoint: selected endpoint (only if type === device)
     *      settings: from configuration.yaml
     *      name: name of the entity
     *      definition: zigbee-herdsman-converters definition (only if type === device)
     * }
     */
    resolveEntity(key: string): object;
    getGroupByID(ID: any): import("zigbee-herdsman/dist/controller/model/group").default;
    getGroups(): import("zigbee-herdsman/dist/controller/model/group").default[];
    createGroup(groupID: any): import("zigbee-herdsman/dist/controller/model/group").default;
    touchlinkFactoryResetFirst(): Promise<boolean>;
    touchlinkFactoryReset(ieeeAddr: any, channel: any): Promise<boolean>;
    touchlinkIdentify(ieeeAddr: any, channel: any): Promise<void>;
    touchlinkScan(): Promise<{
        ieeeAddr: string;
        channel: number;
    }[]>;
}
import events = require("events");
import ZigbeeHerdsman = require("zigbee-herdsman");
