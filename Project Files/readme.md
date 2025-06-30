🛒 ShopSmart: Your Digital Grocery Store Experience

ShopSmart is a full-featured MERN stack (MongoDB, Express.js, React.js, Node.js) web application that simulates an online grocery store. The project is divided into two main parts — a React-based frontend and a Node.js/Express backend with MongoDB integration.

📁 Project Structure

ShopSmart/
│
├── code/
│ ├── Backend/ # Node.js + Express backend
│ │ ├── index.js # Server entry point
│ │ ├── package.json # Backend dependencies
│ │ └── db/
│ │ ├── connect.js # MongoDB connection logic
│ │ ├── schema.js # Mongoose schema definitions
│ │ └── products.js # Product data (if seeded manually)
│ │
│ └── Frontend/ # React-based frontend
│ ├── public/ # Static files (index.html, manifest, icons)
│ ├── src/ # React source files
│ │ ├── App.js # App root component
│ │ ├── index.js # Entry point
│ │ ├── components/ # User-facing components
│ │ ├── admin_components/# Admin panel components
│ │ └── ... # Utilities, styles, assets
│ └── package.json # Frontend dependencies

🚀 Key Components

🔹 Frontend (React)
- Home, Products, Cart, Checkout, Login, Register, etc.
- Admin portal for product management (AddProduct, ProductItem)
- Custom styling using styled-components
- Client-side routing using react-router-dom

🔹 Backend (Node.js + Express)
- API server setup (index.js)
- MongoDB integration using mongoose
- Product and user schema setup
- Connection config in connect.js

🔧 Setup Instructions
 1. Clone the Repository
bash
git clone https://github.com/your-username/ShopSmart.git
cd ShopSmart/code

3. Setup Backend

cd Backend
npm install
node index.js

4. Setup Frontend

cd ../Frontend
npm install
npm start

🔁 Make sure MongoDB is running locally (mongodb://127.0.0.1:27017/grocery)

📦 Dependencies Used
Frontend:
React.js, React Router styled-components, Bootstrap (optional)

Backend:
Express.js,MongoDB,Mongoose,Nodemon (for dev)


📁 Notes
This project currently does not use a .env file — configuration is hardcoded (e.g., MongoDB URI, port)
You should move sensitive info like DB URI into a .env file for production

video demo: https://github.com/Geethikasree-7/ShopSmart-Your-Digital-Grocery-Store-Experience/tree/main/Video%20Demo
documentation: 


