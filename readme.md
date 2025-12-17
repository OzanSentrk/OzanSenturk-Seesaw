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

## 🤝 Contributing

1.  Fork the project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

_Developed by Ozan Senturk_
