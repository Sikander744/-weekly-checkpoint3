
import type { CartItem } from "../interfaces/CartItem";

// This class represents Glue Sticks
export class GlueSticks implements CartItem {

  // Return the price of one Glue Stick
  getTotalCost(): number {
    return 25;
  }
}
