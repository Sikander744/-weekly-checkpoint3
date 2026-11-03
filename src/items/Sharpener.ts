
import type { CartItem } from "../interfaces/CartItem";

// This class represents a Sharpener
export class Sharpener implements CartItem {

  // Return the price of one Sharpener
  getTotalCost(): number {
    return 18;
  }
}
