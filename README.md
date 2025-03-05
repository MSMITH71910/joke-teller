# Joke-Teller

A fun and interactive web application that fetches jokes from an API and narrates them using text-to-speech functionality. The app supports multiple languages and provides a seamless user experience with a clean and responsive design.

---

## Features

- Fetches jokes from the [JokeAPI](https://jokeapi.dev/) in real-time.
- Narrates jokes using the **Web Speech API** or **VoiceRSS API** (if configured).
- Supports multiple languages (e.g., English and German by default, but can be extended to others).
- Responsive design for mobile, tablet, and desktop devices.
- Interactive language toggle for switching between supported languages.
- Loading spinner for better user experience while fetching jokes.

---

## How It Works

1. **Fetch Jokes**: The app fetches jokes from the JokeAPI based on the selected language.
2. **Text-to-Speech**: The joke is narrated using the Web Speech API (or VoiceRSS API if configured with an API key).
3. **Language Support**: Users can toggle between supported languages (e.g., English and German).
4. **Responsive Design**: The app adjusts its layout and functionality for all screen sizes.

---

## Technologies Used

- **HTML5**: For structuring the web app.
- **CSS3**: For styling and responsive design.
- **JavaScript**: For fetching jokes, handling user interactions, and text-to-speech functionality.
- **JokeAPI**: For fetching jokes dynamically.
- **Web Speech API**: For text-to-speech functionality (no API key required).
- **VoiceRSS API** *(optional)*: For advanced text-to-speech functionality (requires an API key).

---
