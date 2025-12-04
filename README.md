**AutoHub Motors** is a responsive frontend website designed for a modern Mazda dealership in the Bay Area. It allows users to browse car inventories, schedule vehicle services, and book test drives through a clean, user-friendly interface.
## 🧐 About the Project
This project simulates a digital storefront for a car dealership. It focuses on providing a seamless user experience for potential car buyers and current owners looking for maintenance. The design is fully responsive, adapting to both desktop and mobile devices.

## ✨ Features
* **Landing Page:** A welcoming home page with quick access to inventory and services.
* **Inventory Browsing:** Dedicated pages for **New** and **Pre-owned** vehicles with filtering options (Price, Certification, Drivetrain, etc.).
* **Service Center:** Users can book appointments for maintenance, smog checks, and diagnostics.
* **Interactive Forms:**
    * **Test Drive Booking:** Users can select a specific model and time slot.
    * **Service Scheduling:** detailed form for vehicle info and service needs.
* **Mobile Responsive:** Includes a functional mobile navigation menu.

## 🛠️ Technologies Used
* **HTML5:** Semantic structure for all pages.
* **Tailwind CSS (CDN):** Used for styling, responsive design, and layout utility classes.
* **JavaScript:** Handles mobile menu toggling and basic interactivity.
* **Font Awesome:** Icons for social media and UI elements.

## 🚀 How to Run
Since this project relies on the Tailwind CSS CDN, no build tools or package managers (like Node.js) are required to view it.

### Option 1: The Simple Way (Double Click)
1.  **Download** or **Clone** this repository to your computer.
    ```bash
    git clone [https://github.com/TrangDao0630/auto_dealershop_web.git](https://github.com/TrangDao0630/auto_dealershop_web.git)
    ```
2.  Navigate to the project folder.
3.  Double-click the `landing_page.html` file.
4.  The website will open in your default web browser.

### Option 2: VS Code Live Server (Recommended)
For the best experience (and to ensure all images load correctly), use the "Live Server" extension in Visual Studio Code.

1.  Open the project folder in **VS Code**.
2.  Install the **Live Server** extension (by Ritwick Dey).
3.  Right-click on `landing_page.html` in the file explorer.
4.  Select **"Open with Live Server"**.

## 📂 Project Structure
```text
/autohub-motors
│
├── landing_page.html      # Main Homepage
├── new_car.html           # New Inventory Page
├── preowned.html          # Pre-owned Inventory Page
├── service.html           # Service Center Hub
├── contact.html           # Contact Us Page
├── TestDrive.html         # Test Drive Booking Form
├── ScheduleServiceSubPage.html # Detailed Service Form
├── Thank_you.html         # Submission Confirmation Page
│
├── css/
│   └── landing_page.css   # Custom styles & Tailwind overrides
│
├── js/
│   └── landing_page.js    # Mobile menu logic
│
└── img/                   # Project images (logos, cars, etc.)
