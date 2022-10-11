export type TStandardKeyError = "Access denied." |
                                "The input parameters were incorrect." |
                                "Could not find the product." |
                                "Could not find the key."
                                
export type TKeyErrorA = TStandardKeyError | 
                         "The key is blocked and cannot be accessed." | 
                         "Either the machine code was never activated or key activation feature was never set up."

export type TKeyErrorB = TStandardKeyError |
                         "The notes field cannot be more than 500 characters." |
                         "Creation of a license with x day(s) is not possible in SKGL. The limit is 999 days." |
                         "Generating more than 99,999 keys is not possible in SKGL."

export type TKeyErrorC = TKeyErrorB |
                         "Access denied. Please add 'AddCustomer' permission."

export type TKeyErrorD = "Access denied." |
                         "The input parameters were incorrect." |
                         "Could not find the product." |
                         "The search query causes problems. Please check that it follows the standard: https://help.cryptolens.io/web-interface/linq-search-product" |
                         "The 'order by' field causes problems. Please check the remarks section for this method."