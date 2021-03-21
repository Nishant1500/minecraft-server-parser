export declare class ServerInfo {
    icon: string;
    ip: string;
    name: string;
    acceptTextures: number;
}
/**
 * The servers.dat format server information, contains known host displayed in "Multipler" page.
 */
export declare class ServersData {
    servers: ServerInfo[];
}
/**
 * Read the server information from the binary data of .minecraft/server.dat file, which stores the local known server host information.
 *
 * @param buff The binary data of .minecraft/server.dat
 */
export declare function readInfo(buff: Uint8Array): Promise<ServerInfo[]>;
/**
 * Write the information to NBT format used by .minecraft/server.dat file.
 *
 * @param infos The array of server information.
 */
export declare function writeInfo(infos: ServerInfo[]): Promise<Uint8Array>;
/**
 * Read the server information from the binary data of .minecraft/server.dat file, which stores the local known server host information.
 *
 * @param buff The binary data of .minecraft/server.dat
 */
export declare function readInfoSync(buff: Uint8Array): ServerInfo[];
/**
 * Write the information to NBT format used by .minecraft/server.dat file.
 *
 * @param infos The array of server information.
 */
export declare function writeInfoSync(infos: ServerInfo[]): Uint8Array;
