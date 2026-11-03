
import { useState } from "react";
import "./App.css";

// Import all stationery item classes
import { ExerciseBooks } from "./items/ExerciseBooks";
import { Pens } from "./items/Pens";
import { Pencils } from "./items/Pencils";
import { Sharpener } from "./items/Sharpener";
import { GlueSticks } from "./items/GlueSticks";

// Import the decorator to calculate cost by quantity
import { QuantityDecorator } from "./decorators/QuantityDecorator";

function App() {

  // Store Exercise Books selection and quantity
  const [selected, setSelected] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Store Pens selection and quantity
  const [pensSelected, setPensSelected] = useState(false);
  const [pensQuantity, setPensQuantity] = useState(1);

  // Store Pencils selection and quantity
  const [pencilsSelected, setPencilsSelected] = useState(false);
  const [pencilsQuantity, setPencilsQuantity] = useState(1);

  // Store Sharpener selection and quantity
  const [sharpenerSelected, setSharpenerSelected] = useState(false);
  const [sharpenerQuantity, setSharpenerQuantity] = useState(1);

  // Store Glue Sticks selection and quantity
  const [glueSelected, setGlueSelected] = useState(false);
  const [glueQuantity, setGlueQuantity] = useState(1);

  // Calculate the total cost of selected items
  const calculateTotal = (): number => {
    let newTotal = 0;

    // Add Exercise Books cost if selected
    if (selected) {
      const book = new ExerciseBooks();
      const decoratedBook = new QuantityDecorator(book, quantity);
      newTotal += decoratedBook.getTotalCost();
    }

    // Add Pens cost if selected
    if (pensSelected) {
      const pen = new Pens();
      const decoratedPen = new QuantityDecorator(pen, pensQuantity);
      newTotal += decoratedPen.getTotalCost();
    }

    // Add Pencils cost if selected
    if (pencilsSelected) {
      const pencil = new Pencils();
      const decoratedPencil = new QuantityDecorator(
        pencil,
        pencilsQuantity
      );
      newTotal += decoratedPencil.getTotalCost();
    }

    // Add Sharpener cost if selected
    if (sharpenerSelected) {
      const sharpener = new Sharpener();
      const decoratedSharpener = new QuantityDecorator(
        sharpener,
        sharpenerQuantity
      );
      newTotal += decoratedSharpener.getTotalCost();
    }

    // Add Glue Sticks cost if selected
    if (glueSelected) {
      const glue = new GlueSticks();
      const decoratedGlue = new QuantityDecorator(
        glue,
        glueQuantity
      );
      newTotal += decoratedGlue.getTotalCost();
    }

    // Return the final total
    return newTotal;
  };

  // Display the shopping cart on the screen
  return (
    <div>
      <h1>Stationary Shop </h1>

      {/* Exercise Books checkbox and quantity */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={selected}
            onChange={(e) => setSelected(e.target.checked)}
          />
          Exercise Books
        </label>

        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>

      {/* Pens checkbox and quantity */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={pensSelected}
            onChange={(e) => setPensSelected(e.target.checked)}
          />
          Pens
        </label>

        <select
          value={pensQuantity}
          onChange={(e) => setPensQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>

      {/* Pencils checkbox and quantity */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={pencilsSelected}
            onChange={(e) => setPencilsSelected(e.target.checked)}
          />
          Pencils
        </label>

        <select
          value={pencilsQuantity}
          onChange={(e) => setPencilsQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>

      {/* Sharpener checkbox and quantity */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={sharpenerSelected}
            onChange={(e) => setSharpenerSelected(e.target.checked)}
          />
          Sharpener
        </label>

        <select
          value={sharpenerQuantity}
          onChange={(e) => setSharpenerQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>

      {/* Glue Sticks checkbox and quantity */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={glueSelected}
            onChange={(e) => setGlueSelected(e.target.checked)}
          />
          Glue Sticks
        </label>

        <select
          value={glueQuantity}
          onChange={(e) => setGlueQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>

      {/* Show the total cost when the button is clicked */}
      <button onClick={() => window.alert(`Total Cost: $${calculateTotal()}`)}>
        Display Total Cost
      </button>

      {/* Show the selected items */}
      <h2>Selected Items:</h2>

      {/* Show Exercise Books if selected */}
      {selected && (
        <p>Exercise Books - Quantity: {quantity}</p>
      )}

      {/* Show Pens if selected */}
      {pensSelected && (
        <p>Pens - Quantity: {pensQuantity}</p>
      )}

      {/* Show Pencils if selected */}
      {pencilsSelected && (
        <p>Pencils - Quantity: {pencilsQuantity}</p>
      )}

      {/* Show Sharpener if selected */}
      {sharpenerSelected && (
        <p>Sharpener - Quantity: {sharpenerQuantity}</p>
      )}

      {/* Show Glue Sticks if selected */}
      {glueSelected && (
        <p>Glue Sticks - Quantity: {glueQuantity}</p>
      )}

      {/* Update the total when selection or quantity changes */}
      <h2>Total Cost: ${calculateTotal()}</h2>
    </div>
  );
}

// Export the App component
export default App;
