/// <reference types="node" />
export = Frontend;
/**
 * This extension servers the frontend
 */
declare class Frontend extends Extension {
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: any, eventBus: any);
    onRequest(request: any, response: any): void;
    onUpgrade(request: any, socket: any, head: any): void;
    mqttBaseTopic: any;
    onMQTTPublishedMessage(data: any): void;
    onWebSocketConnection(ws: any): void;
    server: http.Server;
    host: any;
    port: any;
    authToken: any;
    retainedMessages: Map<any, any>;
    fileServer: any;
    wss: any;
    onZigbeeStarted(): void;
    authenticate(request: any, cb: any): void;
}
import Extension = require("./extension");
import http = require("http");
