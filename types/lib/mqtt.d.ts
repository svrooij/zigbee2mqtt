export = MQTT;
declare class MQTT extends events {
    constructor();
    onMessage(topic: any, message: any): void;
    publishedTopics: Set<any>;
    connect(): Promise<any>;
    connectionTimer: NodeJS.Timeout | null | undefined;
    client: mqtt.MqttClient | undefined;
    disconnect(): Promise<void>;
    subscribe(topic: any): void;
    isConnected(): boolean | undefined;
    publish(topic: any, payload: any, options: any, base?: any, skipLog?: boolean, skipReceive?: boolean): Promise<any>;
}
import events = require("events");
import mqtt = require("mqtt");
