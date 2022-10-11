// Dependencies
import { Cryptolens } from "../index.js";
import { IKeyCreateRequest } from "../interface/IKeyCreate.js";
import { IStandardResponse } from "../interface/IStandardResponse.js";

//
export interface ILicenseTemplateParameters extends IKeyCreateRequest {

}
export interface ILicenseTemplate {
    id: number
    name: string
    productId: number
    parameters: ILicenseTemplateParameters
}
export interface ILicenseTemplateResponse extends IStandardResponse<"Access denied."> {
    licenseTemplates: ILicenseTemplate[]
}

//
export interface LicenseTemplate extends ILicenseTemplate {}
export class LicenseTemplate {
    // Constructor
    constructor(Data: ILicenseTemplate) {
        Object.assign(this, Data)
    }

    // Returns the list of license templates. A license template allows you to pre-define the parameters that are used when creating a new license. You can read more about them here.
    static async Get(Client: Cryptolens) {
        return <ILicenseTemplateResponse>await Client.SendRequest("licensetemplate/GetLicenseTemplates")
    }
}