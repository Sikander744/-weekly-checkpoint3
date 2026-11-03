
import type { CartItem } from "../interfaces/CartItem";

// This class represents Pencils
export class Pencils implements CartItem {

  // Return the price of one Pencil
  getTotalCost(): number {
    return 10;
  }
}
