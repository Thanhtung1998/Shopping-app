interface isCancelled {
    isCancelled: boolean;
    reason: string;
    timestamps: object;
    updateTimestamp: object;
}

interface isSuccess {
    isSuccess: boolean;
    timestamps: object;
    updateTimestamp: object;
}


export interface dataHistoryBuy {
    _idProduct: string;
    nameProduct: string;
    priceProduct: number;
    ImgProduct: string;
    phoneNumber: string;
    address: string;
    size: string;
    quantity: string;
    colorProduct: string;
    payments: string
    isCancelled: isCancelled;
    isSuccess: isSuccess;
    timestamps: object;
    updateTimestamp: object;
}