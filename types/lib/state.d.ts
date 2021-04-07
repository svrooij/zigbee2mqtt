export = State;
declare class State {
    constructor(eventBus: any);
    state: {};
    file: string;
    timer: NodeJS.Timeout | null;
    eventBus: any;
    start(): void;
    clearTimer(): void;
    stop(): void;
    _load(): void;
    save(): void;
    exists(ID: any): boolean;
    get(ID: any): any;
    set(ID: any, state: any, reason?: any): void;
    removeKey(ID: any, path: any): void;
    remove(ID: any): void;
}
