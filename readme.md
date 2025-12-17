# Seesaw Logic Simulation

A physics-based interactive seesaw simulation built with **Vanilla JavaScript**, **CSS**, and **HTML**. This project demonstrates DOM manipulation, state management, and physics calculations (Torque) without using any external frameworks.

## 🚀 Features

- **Physics Engine:** Real-time torque calculation based on weight and distance ($Torque = Weight \times Distance$).
- **Dynamic Rendering:** The plank rotates proportionally to the net torque, clamped at ±30 degrees.
- **Persistence:** Uses `localStorage` to save the simulation state (weights & positions) across page reloads.
- **Responsive UI:** Dynamic weight counters and smooth CSS transitions for realistic movement.
- **State Management:** Custom state logic to track objects, generating unique IDs and managing updates.

## 🛠 Technologies Used

- **HTML5:** Semantic structure.
- **CSS3:** Flexbox for layout and transitions for animation.
- **JavaScript (ES6+):** Modular architecture (`physics.js`, `ui.js`, `storage.js`).

## ⚙️ How It Works

### The Physics Logic

The simulation follows the rotational equilibrium principle:

1.  **Torque Calculation:**
    Each object's torque is calculated relative to the pivot point.
    ```js
    Torque = Weight (kg) * Distance from Center (px)
    ```
2.  **Net Torque:**
    The difference between Right Torque and Left Torque determines the direction.
3.  **Rotation:**
    The net torque is divided by a sensitivity constant to determine the angle (max ±30°).

## 📂 Project Structure

/ ├── index.html # Main entry point ├── style.css # Styles and animations ├── app.js # Main controller └── js/ ├── constants.js # Global configuration ├── physics.js # Pure math & physics logic ├── ui.js # DOM manipulation helper └── storage.js # LocalStorage management

## 💿 Installation & Setup

1.  Clone the repository:

    ```bash
    git clone [https://github.com/OzanSentrk/OzanSenturk-Seesaw.git]
    ```

2.  Open `index.html` in your browser (or use Live Server).

## 🧠 Case Study: Implementation Details

### 1. Thought Process & Design Decisions

1.  **Modular Architecture:**
    I separated the code into distinct modules (physics.js, ui.js, storage.js, app.js) to follow the "Separation of Concerns" principle. This makes the codebase easier to test, debug, and maintain compared to a single monolithic file.
    Torque = Weight (kg) \* Distance from Center (px)

2.  **State-Driven Rendering:**
    Instead of manipulating the DOM directly for every calculation, I created a centralized state (seesawObjects array). The UI is a reflection of this state. This made implementing localStorage persistence much easier, as I only needed to save/load this array.
3.  **DOM over Canvas:**
    Although HTML5 Canvas offers better performance for high-frequency animations, I used DOM manipulation (HTML Elements) because the requirements strictly forbade Canvas and asked for pure JS/CSS.

### 2. Trade-offs & Limitations

1.  **Physics Simplification:**
    The simulation calculates torque equilibrium but ignores complex physics factors like friction, air resistance, or angular momentum acceleration. The plank rotates to the calculated angle immediately (smoothed by CSS transitions) rather than accelerating over time.

2.  **DOM Performance:**
    For a seesaw simulation with 10-20 objects, DOM manipulation is performant enough. However, if we were to simulate hundreds of objects, this approach would cause layout thrashing. In a real-world high-performance scenario, Canvas or WebGL would be preferred.
3.  **Z-Index Stacking:**
    Objects are placed sequentially. If multiple objects are placed on the exact same spot, they might overlap visually without interacting with each other physically (collision detection was out of scope).

### 3. AI Usage Disclosure

1.  **Assisted Parts:**
    AI tools were used to generate the initial README.md structure, debug specific syntax errors in the module imports, and refine the CSS transition timing functions for smoother animations.

2.  **Logic Support:**
    While the core algorithms (calcTorque, determineSeesawAngle) were implemented by the developer, AI assistance was utilized to troubleshoot specific logical bottlenecks, clarify complex JavaScript state behaviors, and optimize implementation details when technical blockers were encountered.

## 🤝 Contributing

1.  Fork the project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

_Developed by Ozan Senturk_
