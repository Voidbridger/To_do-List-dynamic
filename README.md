# To_do-List-dynamic
A simple yet powerful full-stack web application that lets users dynamically manage a personal to-do list. Built using Node.js, Express, MongoDB, and EJS, the app supports adding and deleting tasks in real-time using a connected MongoDB database.
📌 Features
📝 Add new tasks instantly via the input form

❌ Delete tasks with a checkbox click

🗃️ Tasks persist in MongoDB (no data loss on refresh)

💡 Clean, minimalistic UI using EJS templates

🔄 Dynamically rendered task list from database

🛠️ Tech Stack
Layer	Technology
Server	Node.js, Express.js
Database	MongoDB + Mongoose
Frontend	HTML, CSS, EJS
Middleware	Body-Parser

🚀 Getting Started
📥 Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/dynamic-todo-list.git
cd dynamic-todo-list
📦 Install dependencies
bash
Copy
Edit
npm install
🛢️ Start MongoDB locally
Ensure that your MongoDB server is running:

bash
Copy
Edit
mongod
▶️ Run the server
bash
Copy
Edit
node app.js
🌐 Access the app
Open your browser and go to:

arduino
Copy
Edit
http://localhost:3000
🧠 How It Works
GET /: Fetches all current tasks from the MongoDB collection and renders them via the list1.ejs view.

POST /: Adds a new task to the database based on user input and redirects back to home.

POST /delete: Deletes the task selected via checkbox by its MongoDB ObjectID.

📂 Folder Structure (Simplified)
php
Copy
Edit
project-root/
├── public/               # Static assets like CSS
├── views/
│   └── list1.ejs         # EJS template for the task list
├── app.js                # Main application logic
├── package.json
🧱 Schema Design
js
Copy
Edit
const trySchema = new mongoose.Schema({
    name: String
});
Each task is a simple document with a name field stored in the task collection.

💡 Future Enhancements
✅ Mark tasks as completed (with visual indicator)

🗓️ Add due dates and priority levels

👥 User authentication for personalized task lists

🧾 Support for multiple to-do lists

👤 Author
Dev S
GitHub: voidbridger
