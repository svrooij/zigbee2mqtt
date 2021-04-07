export = SoftReset;
/**
 * This extensions soft resets the ZNP after a certain timeout.
 */
declare class SoftReset extends Extension {
    constructor(zigbee: any, mqtt: any, state: any, publishEntityState: any, eventBus: any);
    timer: NodeJS.Timeout | null;
    timeout: number;
    onZigbeeStarted(): void;
    clearTimer(): void;
    resetTimer(): void;
    handleTimeout(): Promise<void>;
    onZigbeeEvent(): void;
}
import Extension = require("../extension");
