
export interface IPurchase {
    id: string,
    id_client: string,
    cart_items: string,
    total_price: number
}


export interface IPurchaseDTO {
    cart_items: string[],
    total_price: number
}

export interface InewCart  {
    id: number,
    name: string,
    price: number,
    qty_stock: number,
    amout: number
}

