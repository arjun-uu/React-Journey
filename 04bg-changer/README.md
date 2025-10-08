# 🎨 Background Color Changer

A simple **React + Tailwind CSS** project that lets you change the background color of the entire screen with just one click!

---

## 🚀 Features

* 🖱️ **One-Click Color Change** — Instantly change the background color.
* 🎨 **Multiple Colors** — Choose from **White, Red, Green, Yellow, Blue, Black, Pink**.
* ⚡ **Smooth Transition** — Background color changes smoothly with a fade effect.
* 📱 **Responsive UI** — Buttons stay fixed at the bottom and adjust on all screen sizes.
* 🌈 **Tailwind-Powered Styling** — Clean and modern UI.

---

## 🛠️ Tech Stack

* ⚛️ **React** (Functional Components + `useState`)
* 🎨 **Tailwind CSS** (Utility-first styling)

---

## 📂 Project Structure

```
src/
 ├── App.jsx       # Main component with buttons to change background
 ├── index.css     # Tailwind CSS styles
 └── main.jsx      # Renders the App component
```

---

## 🖥️ How It Works

1. The app uses React’s `useState` hook to store the **current background color**.
2. Clicking a button updates the state with the chosen color.
3. The `div` covering the screen applies the new color instantly.

---
