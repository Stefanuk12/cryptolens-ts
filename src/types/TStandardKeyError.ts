export type TStandardKeyError = "Access denied." |
                                "The input parameters were incorrect." |
                                "Could not find the product." |
                                "Could not find the key."
export type TKeyErrorA = TStandardKeyError | 
                         "The key is blocked and cannot be accessed." | 
                         "Either the machine code was never activated or key activation feature was never set up."