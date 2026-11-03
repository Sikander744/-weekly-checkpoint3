
import type { CartItem } from "../interfaces/CartItem";

// This class represents Pens
export class Pens implements CartItem {

  // Return the price of one Pen
  getTotalCost(): number {
    return 12;
  }
}
