# 🚀 Zenith Tasks

A sleek, interactive task management application built with React. Zenith Tasks is designed with a strong focus on seamless user experience, featuring dynamic state management, intuitive component swapping, and clean UI design.

## ✨ Features

* **Dynamic Task Editing:** Users can seamlessly swap a task from 'view' mode to an interactive `input` field without losing their place, complete with save and cancel capabilities.
* **Real-Time Progress Tracking:** A custom-built, smooth-animated progress bar that calculates and updates instantly as tasks are completed.
* **Global State Management:** Utilizes React's `useContext` API to efficiently broadcast task data and completion metrics across different components (like the Navbar and Task List) without prop drilling.
* **Smart Formatting:** Greets the user with a dynamically generated, human-readable date layout.

## 🛠️ Tech Stack

* **Frontend:** React.js 
* **State Management:** React Hooks (`useState`, `useEffect`, `useContext`)
* **Styling:** Custom CSS (Focused on responsive layouts and smooth transitions)
* **Icons:** FontAwesome

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/zenith-tasks.git](https://github.com/your-username/zenith-tasks.git)
2. Navigate into the project directory:
   cd zenith-tasks
3. Install the dependencies:
   npm install
4. Start the development server:
   npm run dev
