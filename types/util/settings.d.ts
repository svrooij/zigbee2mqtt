export function validate(): any[];
declare function getWithDefaults(): any;
export function set(path: any, value: any): void;
export function apply(newSettings: any): boolean | null | undefined;
export function getDevice(IDorName: any): any;
export function getGroup(IDorName: any): any;
export function getGroups(): any[];
export function getEntity(IDorName: any): any;
export function whitelistDevice(ID: any): void;
export function banDevice(ID: any): void;
export function blockDevice(ID: any): void;
export function addDevice(ID: any): any;
export function removeDevice(IDorName: any): void;
export function addGroup(name: any, ID?: any): any;
export function removeGroup(groupIDorName: any): void;
export function addDeviceToGroup(groupIDorName: any, keys: any): void;
export function removeDeviceFromGroup(groupIDorName: any, keys: any): void;
export function changeEntityOptions(IDorName: any, newOptions: any): void;
export function changeFriendlyName(IDorName: any, newName: any): void;
declare function write(): void;
export declare function reRead(): void;
export declare function _clear(): void;
export declare function _getDefaults(): {
    passlist: never[];
    blocklist: never[];
    whitelist: never[];
    ban: never[];
    permit_join: boolean;
    mqtt: {
        include_device_information: boolean;
        /**
         * Configurable force disable retain flag on mqtt publish.
         * https://github.com/Koenkk/zigbee2mqtt/pull/4948
         */
        force_disable_retain: boolean;
    };
    serial: {
        disable_led: boolean;
    };
    device_options: {};
    map_options: {
        graphviz: {
            colors: {
                fill: {
                    enddevice: string;
                    coordinator: string;
                    router: string;
                };
                font: {
                    coordinator: string;
                    router: string;
                    enddevice: string;
                };
                line: {
                    active: string;
                    inactive: string;
                };
            };
        };
    };
    experimental: {
        output: string;
    };
    advanced: {
        legacy_api: boolean;
        log_rotation: boolean;
        log_output: string[];
        log_directory: string;
        log_file: string;
        log_level: string;
        log_syslog: {};
        soft_reset_timeout: number;
        pan_id: number;
        ext_pan_id: number[];
        channel: number;
        adapter_concurrent: null;
        adapter_delay: null;
        availability_timeout: number;
        availability_blocklist: never[];
        availability_passlist: never[];
        availability_blacklist: never[];
        availability_whitelist: never[];
        /**
         * Home Assistant requires ALL attributes to be present in ALL MQTT messages send by the device.
         * https://community.home-assistant.io/t/missing-value-with-mqtt-only-last-data-set-is-shown/47070/9
         *
         * Therefore Zigbee2MQTT BY DEFAULT caches all values and resend it with every message.
         * advanced.cache_state in configuration.yaml allows to configure this.
         * https://www.zigbee2mqtt.io/configuration/configuration.html
         */
        cache_state: boolean;
        cache_state_persistent: boolean;
        cache_state_send_on_startup: boolean;
        /**
         * Add a last_seen attribute to mqtt messages, contains date/time of zigbee message arrival
         * "ISO_8601": ISO 8601 format
         * "ISO_8601_local": Local ISO 8601 format (instead of UTC-based)
         * "epoch": milliseconds elapsed since the UNIX epoch
         * "disable": no last_seen attribute (default)
         */
        last_seen: string;
        elapsed: boolean;
        /**
         * https://github.com/Koenkk/zigbee2mqtt/issues/685#issuecomment-449112250
         *
         * Network key will serve as the encryption key of your network.
         * Changing this will require you to repair your devices.
         */
        network_key: number[];
        /**
         * Enables reporting feature
         */
        report: boolean;
        /**
         * Home Assistant discovery topic
         */
        homeassistant_discovery_topic: string;
        /**
         * Home Assistant status topic
         */
        homeassistant_status_topic: string;
        /**
         * Home Assistant legacy triggers, when enabled:
         * - Zigbee2mqt will send an empty 'action' or 'click' after one has been send
         * - A 'sensor_action' and 'sensor_click' will be discoverd
         */
        homeassistant_legacy_triggers: boolean;
        /**
         * Configurable timestampFormat
         * https://github.com/Koenkk/zigbee2mqtt/commit/44db557a0c83f419d66755d14e460cd78bd6204e
         */
        timestamp_format: string;
    };
    ota: {
        /**
         * Minimal time delta in minutes between polling third party server for potential firmware updates
         */
        update_check_interval: number;
        /**
         * Completely disallow Zigbee devices to initiate a search for a potential firmware update.
         * If set to true, only a user-initiated update search will be possible.
         */
        disable_automatic_update_check: boolean;
    };
    external_converters: never[];
};
export { getWithDefaults as get, schema, write as _write };
