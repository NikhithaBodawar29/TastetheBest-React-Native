🍽️ TasteTheBest – React Native Food App

TasteTheBest is a simple, clean food browsing mobile application built using React Native.
The goal of this project is to demonstrate real-world app structure, navigation, data handling, and performance-aware UI, rather than heavy UI design.

✨ App Features

📱 Multiple screens with smooth navigation

🍔 Food listing with images

🔍 Search functionality

📜 Scrollable list using FlatList (performance-friendly)

🧭 Stack navigation

📐 Responsive layout (works well in portrait & landscape)

🧩 Reusable components

🎨 Clean and readable UI using core React Native components only

🛠️ Tech Stack

React Native

TypeScript

React Navigation

Functional Components & Hooks

GitHub Codespaces (for development)

Expo (development environment)

⚠️ Note:
Due to local system limitations, the project was developed and tested using GitHub Codespaces with Expo.
The app structure and logic are fully compatible with React Native CLI.

📁 Project Structure
TastetheBest
│
├── App.tsx
├── assets
│   └── images
│       ├── food1.jpg
│       ├── food2.jpg
│       ├── food3.jpg
│       ├── food4.jpg
│       └── food5.jpg
│
└── src
    ├── components
    │   └── FoodCard.tsx
    │
    ├── data
    │   └── foodData.ts
    │
    ├── navigation
    │   └── StackNavigator.tsx
    │
    └── screens
        ├── HomeScreen.tsx
        └── DetailsScreen.tsx

▶️ How to Run the Project
Prerequisites

Node.js

GitHub account

Expo Go app (for mobile testing)

Steps
npm install
npm start


Open the app using Expo Go (QR code)

Or run in browser via Expo web preview

🧠 Key Technical Decisions

FlatList is used instead of ScrollView for better performance with lists

Limited content width to keep mobile-like appearance on wide screens

Reusable components (FoodCard) for scalability

Simple local data to focus on architecture and UI behavior

Navigation separation for clean and maintainable code

🚀 Improvements With More Time

Redux integration for global state management

API-based data with pagination / infinite scroll

Offline storage using AsyncStorage

Favorites feature

Better error & loading states

Unit testing

👩‍💻 Developer Notes

This project focuses on code quality, structure, and clarity, keeping the UI simple but functional.
The approach mirrors how a real production app would be structured at an entry-level role.

📌 Final Note

Instructions were intentionally open-ended.
This implementation prioritizes clean architecture, responsiveness, and readability over heavy UI styling.
