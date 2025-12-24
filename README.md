# TasteTheBest – React Native Food App 🍔📱

## 📌 Project Overview

**TasteTheBest** is a beginner-friendly React Native food browsing application built to demonstrate real-world mobile app concepts such as navigation, list rendering, search functionality, responsive layouts, and clean code structure.

The app displays a list of food items with images, allows users to search, and navigate to a detailed view of each item. The focus of this project is **code quality, structure, and practical React Native patterns**, rather than heavy UI styling.

---

## ✨ Features

* 📱 Two-screen mobile app (Home & Details)
* 🔍 Search functionality for food items
* 🧭 Stack navigation between screens
* 🖼️ Local image assets for food items
* 📜 Optimized list rendering using `FlatList`
* 📐 Responsive layout (works well in portrait & landscape)
* 🧩 Reusable components (FoodCard)
* 🧼 Clean and scalable folder structure

---

## 🛠️ Tech Stack

* **React Native**
* **TypeScript**
* **React Navigation (Native Stack)**
* **Expo (used via GitHub Codespaces due to system limitations)**

> ⚠️ Note: Although the original requirement was React Native CLI, Expo was used to ensure successful execution due to local machine constraints. Core React Native concepts and APIs are still followed.

---

## 📂 Project Structure

```
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
    ├── data
    │   └── foodData.ts
    ├── navigation
    │   └── StackNavigator.tsx
    └── screens
        ├── HomeScreen.tsx
        └── DetailsScreen.tsx
```

---

## 🚀 How to Run the Project

### Prerequisites

* Node.js
* GitHub account
* Expo Go app (for mobile testing)

### Steps

```bash
# install dependencies
npm install

# start the app
npx expo start
```

You can run the app on:

* 📱 Mobile device (using Expo Go)
* 🌐 Web browser

---

## 🧠 Key Technical Decisions

* **FlatList** was used instead of ScrollView for better performance with lists
* **Responsive max-width layout** was implemented to avoid UI stretching on large screens
* **Reusable components** were created to improve maintainability
* **Separation of concerns** through structured folders (screens, components, data)

---

## 🔮 Improvements with More Time

* Redux integration for global state management
* Persist data using AsyncStorage
* API-based food data instead of static data
* Favorites & cart functionality
* Loading & error states
* Dark mode support

---

## 👩‍💻 Author

**Nikhitha Bodawar**
Frontend / React Native Developer (Fresher)

---

## 📎 Final Note

This project reflects my approach to building clean, understandable, and sca
