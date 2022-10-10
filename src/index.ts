// Dependencies
import got, { Got } from "got"
import { IStandardResponseAny } from "./interface/IStandardResponse.js"
import Key from "./modules/Key.js"

//
export interface ICryptolens {
    Token: string
}
export interface Cryptolens extends ICryptolens {}
export class Cryptolens {
    HTTPClient: Got

    // Constructor
    constructor(Data: ICryptolens) {
        // Add all of the data to this
        Object.assign(this, Data)

        // Additional variables
        this.HTTPClient = got.extend({
            prefixUrl: "https://api.cryptolens.io/api",
            searchParams: {
                token: this.Token
            }
        })
    }

    //
    async SendRequest(URL: string, Data: Object) {
        return <IStandardResponseAny>await this.HTTPClient(URL, {
            searchParams: Data
        }).json()
    }
}
export default Cryptolens

// Other exports
export { Key }