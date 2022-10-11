// Dependencies
import { Cryptolens } from "../index.js";
import { IDataObject } from "../interface/IDataObject.js";
import { IFeatureDefinition } from "../interface/IFeatureDefinition.js";
import { IProductKeyGetRequest, IProductKeyGetResponse } from "../interface/IProductKeyGet.js";
import { IStandardResponse } from "../interface/IStandardResponse.js";

//
export interface IProduct {
    id: number
    name: string
    creationDate: string
    description: string
    password: string | undefined
    keyAlgorithm: "SKGL" | "SKM15"
    featureDefinitions: IFeatureDefinition
    dataObjects: IDataObject
}
export interface IProductResponse extends IStandardResponse<"Access denined."> {
    products: IProduct[]
}

//
export interface Product extends IProduct {}
export class Product {
    // Constructor
    constructor(Data: IProduct) {
        Object.assign(this, Data)
    }

    // This method will return the list of products.
    static async Get(Client: Cryptolens, Data: {v?: number}) {
        return <IProductResponse>await Client.SendRequest("product/GetProducts", Data)
    }

    // This method will return a list of keys for a given product. Please keep in mind that although each license key will be of the License Key type, the fields related to signing operations will be left empty. Instead, if you want to get a signed license key (for example, to achieve offline key activation), please use the Activation instead.
    static async GetKeys(Client: Cryptolens, Data: IProductKeyGetRequest) {
        return <IProductKeyGetResponse>await Client.SendRequest("product/GetKeys", Data)
    }
}
export default Product