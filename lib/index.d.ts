export declare type InitOptions = {
    /** 存储库名称 或者用于检测是否需要更新数据数的函数,返回 true 则不新, 否则执行 upgradeneeded */
    store?: string | ((db: IDBDatabase) => boolean);
    /**
     * 打开数据库时的version参数； 一般无需提供 version，除非你很清楚 indexedDB version 的机制
     */
    version?: number;
    /**
     * 更新数据库
     * @param db IDBDatabase
     * @param event onupgradeneeded的事件对像
     */
    upgradeneeded?: (this: IDBOpenDBRequest, db: IDBDatabase, event: IDBVersionChangeEvent) => void;
};
/**
 * 打开指定indexedDb数据库
 * @param dbName 库名
 * @param options 初始化参数
 * @returns Promise<IDBDatabase>
 */
export declare const idbOpen: (
/** */
dbName: string, options: InitOptions) => Promise<IDBDatabase>;
export declare const idbDelete: (dbName: string) => Promise<unknown>;
export default idbOpen;