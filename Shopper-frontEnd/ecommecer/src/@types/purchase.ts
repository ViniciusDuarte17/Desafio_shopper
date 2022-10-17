export interface IProductPurchase {
  id: number,
  name: string,
  price: number,
  qty_stock: number,
  amout: number
}

export interface IPurchaseDTO {
  cart_items: string[],
  total_price: number
}


export interface INewPurchase {
  cart: IProductPurchase[],
  setCart: React.Dispatch<React.SetStateAction<IProductPurchase[]>>
}