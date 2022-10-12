
export interface User {
  name: string | "";
  date: Date | "";
}

export interface IProduct {
  id: number,
  name: string,
  price: number,
  qty_stock: number
}

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