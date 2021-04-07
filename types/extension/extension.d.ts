export = Extension;
declare class Extension {
    /**
     * Besides intializing variables, the constructor should do nothing!
     *
     * @param {Zigbee} zigbee Zigbee controller
     * @param {MQTT} mqtt MQTT controller
     * @param {State} state State controller
     * @param {Function} publishEntityState Method to publish device state to MQTT.
     * @param {EventBus} eventBus The event bus
     */
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: Function, eventBus: any);
    zigbee: any;
    mqtt: any;
    state: any;
    publishEntityState: Function;
    eventBus: any;
    /**
     * This method is called by the controller once Zigbee has been started.
     */
    /**
     * This method is called by the controller once connected to the MQTT server.
     */
    /**
     * Is called when a Zigbee message from a device is received.
     * @param {string} type Type of the message
     * @param {Object} data Data of the message
     * @param {Object?} resolvedEntity Resolved entity returned from this.zigbee.resolveEntity()
     * @param {Object?} settingsDevice Device settings
     */
    /**
     * Is called when a MQTT message is received
     * @param {string} topic Topic on which the message was received
     * @param {Object} message The received message
     * @return {boolean} if the message was handled
     */
    /**
     * Is called once the extension has to stop
     */
    stop(): void;
}
