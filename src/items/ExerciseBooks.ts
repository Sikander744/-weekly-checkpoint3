
import type { CartItem } from "../interfaces/CartItem";

// This class represents Exercise Books
export class ExerciseBooks implements CartItem {

  // Return the price of one Exercise Book
  getTotalCost(): number {
    return 30;
  }
}
