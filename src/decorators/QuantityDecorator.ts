
import type { CartItem } from "../interfaces/CartItem";

// This class calculates the cost based on quantity
export class QuantityDecorator implements CartItem {

  // Store the item and its quantity
  private item: CartItem;
  private quantity: number;

  // Set the item and quantity
  constructor(item: CartItem, quantity: number) {
    this.item = item;
    this.quantity = quantity;
  }

  // Multiply the item price by the quantity
  getTotalCost(): number {
    return this.item.getTotalCost() * this.quantity;
  }
}
