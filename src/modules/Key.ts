// Dependencies
import { Cryptolens } from "../index.js";
import { IKeyBlockRequest, IKeyBlockResponse } from "../interface/IKeyBlock.js";
import { IKeyChangeNotesRequest, IKeyChangeNotesResponse } from "../interface/IKeyChangeNotes.js";
import { IKeyDeactivateRequest, IKeyDeactivateResponse } from "../interface/IKeyDeactivate.js";
import { IKeyGetRequest, IKeyGetResponse } from "../interface/IKeyGet.js";
import { IKeyMachineLockLimitRequest, IKeyMachineLockLimitResponse } from "../interface/IKeyMachineLockLimit.js";

//
export interface IKey {}
export interface Key extends IKey {}
export class Key {
    // Constructor
    constructor(Data: IKey) {
        Object.assign(this, Data)
    }

    // This method will 'undo' a key activation with a certain machine code. The key should not be blocked, since otherwise this method will throw an error.
    static async Deactivate(Client: Cryptolens, Data: IKeyDeactivateRequest) {
        return <IKeyDeactivateResponse>await Client.SendRequest("key/Deactivate", Data)
    }

    // This method will return information about a license key, similar to Validate [Web API 2]. In contrast to activation, this method (aka Key Validation) will be in read only mode. That is, it will not add a device to the license nor use trial activation. More about this in Remarks.
    static async Get(Client: Cryptolens, Data: IKeyGetRequest) {
        return <IKeyGetResponse>await Client.SendRequest("key/GetKey", Data)
    }

    // This method will block a specific license key to ensure that the key cannot be accessible by most of the methods in the Web API (activation, validation, optional field, and deactivation). Note, blocking the key will still allow you to access the key in Web API 3, unless otherwise stated for a given Web API 3 method. To do the reverse, please see Unblock Key.
    static async Block(Client: Cryptolens, Data: IKeyBlockRequest) {
        return <IKeyBlockResponse>await Client.SendRequest("key/BlockKey", Data)
    }

    // This method will unblock a specific license key to ensure that the key can be accessible by most of the methods in the Web API (activation, validation, optional field, and deactivation). To do the reverse, please see Block Key.
    static async Unblock(Client: Cryptolens, Data: IKeyBlockRequest) {
        return <IKeyBlockResponse>await Client.SendRequest("key/UnblockKey", Data)
    }

    // This method will change the maximum number of machine codes that a license key can have.
    static async SetMachineLockLimit(Client: Cryptolens, Data: IKeyMachineLockLimitRequest) {
        return <IKeyMachineLockLimitResponse>await Client.SendRequest("key/MachineLockLimit", Data)
    }

    // This method will change the content of the notes field of a given license key.
    static async ChangeNotes(Client: Cryptolens, Data: IKeyChangeNotesRequest) {
        return <IKeyChangeNotesResponse>await Client.SendRequest("key/ChangeNotes", Data)
    }
}
export default Key