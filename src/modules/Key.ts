// Dependencies
import { Cryptolens } from "../index.js";
import { IKeyAddFeatureRequest, IKeyAddFeatureResponse } from "../interface/IKeyAddFeature.js";
import { IKeyBlockRequest, IKeyBlockResponse } from "../interface/IKeyBlock.js";
import { IKeyChangeNotesRequest, IKeyChangeNotesResponse } from "../interface/IKeyChangeNotes.js";
import { IKeyCreateRequest, IKeyCreateResponse } from "../interface/IKeyCreate.js";
import { IKeyCreateTemplate, IKeyCreateTemplateResponse } from "../interface/IKeyCreateTemplate.js";
import { IKeyCreateTrialRequest, IKeyCreateTrialResponse } from "../interface/IKeyCreateTrial.js";
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

    // This method will set a certain feature (F1..F8) to true. If the key algorithm in the product is SKGL, the key string will be changed if necessary. Otherwise, if SKM15 is used, the key will stay the same. To do the reverse, please see RemoveFeature.
    static async AddFeature(Client: Cryptolens, Data: IKeyAddFeatureRequest) {
        return <IKeyAddFeatureResponse>await Client.SendRequest("key/AddFeature", Data)
    }

    // This method will block a specific license key to ensure that the key cannot be accessible by most of the methods in the Web API (activation, validation, optional field, and deactivation). Note, blocking the key will still allow you to access the key in Web API 3, unless otherwise stated for a given Web API 3 method. To do the reverse, please see Unblock Key.
    static async Block(Client: Cryptolens, Data: IKeyBlockRequest) {
        return <IKeyBlockResponse>await Client.SendRequest("key/BlockKey", Data)
    }

    // This method will unblock a specific license key to ensure that the key can be accessible by most of the methods in the Web API (activation, validation, optional field, and deactivation). To do the reverse, please see Block Key.
    static async Unblock(Client: Cryptolens, Data: IKeyBlockRequest) {
        return <IKeyBlockResponse>await Client.SendRequest("key/UnblockKey", Data)
    }

    // This method will set a certain feature (F1..F8) to false. If the key algorithm in the product is SKGL, the key string will be changed if necessary. Otherwise, if SKM15 is used, the key will stay the same. To do the reverse, please see AddFeature.
    static async RemoveFeature(Client: Cryptolens, Data: IKeyAddFeatureRequest) {
        return <IKeyAddFeatureResponse>await Client.SendRequest("key/RemoveFeature", Data)
    }

    // This method will change the maximum number of machine codes that a license key can have.
    static async SetMachineLockLimit(Client: Cryptolens, Data: IKeyMachineLockLimitRequest) {
        return <IKeyMachineLockLimitResponse>await Client.SendRequest("key/MachineLockLimit", Data)
    }

    // This method will change the content of the notes field of a given license key.
    static async ChangeNotes(Client: Cryptolens, Data: IKeyChangeNotesRequest) {
        return <IKeyChangeNotesResponse>await Client.SendRequest("key/ChangeNotes", Data)
    }

    // This method allows you to create a new license key. The license can either be standalone or associated to a specific customer. It is also possible to add a new customer and associate it with the newly created license using NewCustomer parameter. If you would like to avoid duplicates based on the email, you can use the AddOrUseExistingCustomer parameter.
    static async Create(Client: Cryptolens, Data: IKeyCreateRequest) {
        return <IKeyCreateResponse>await Client.SendRequest("key/CreateKey", Data)
    }

    // This method creates a license key that is time-limited, node-locked and with the "Time-Limited" and "Trial" features set to true (which can be set by editing the feature definitions on the product page). Note, by default, the trial will work for 15 days. To change this limit, you can set the Feature Lock to the desired value, when creating the access token. If a trial key was already created for a certain machine code, this method will try to find the license key and return it instead. However, this will only occur if the license key is still a trial key (based on feature definitions) and is not blocked.
    static async CreateTrial(Client: Cryptolens, Data: IKeyCreateTrialRequest) {
        return <IKeyCreateTrialResponse>await Client.SendRequest("key/CreateTrialKey", Data) 
    }

    // This method will create a license key based on a License Template. If you want to see all the defined license templates through the API, this can be accomplished with Get License Templates. An alternative is to call the Create Key method, which allows you to specify all the parameters yourself. Note: the "feature lock" field in the access token can be used to restrict which license tempalte id can be used.
    static async CreateFromTemplate(Client: Cryptolens, Data: IKeyCreateTemplate) {
        return <IKeyCreateTemplateResponse>await Client.SendRequest("key/CreateKeyFromTemplate", Data) 
    }
}
export default Key