# YouTube Demo App

This is a cross-platform YouTube demo application built with [Expo](https://expo.dev) and [React Native](https://reactnative.dev). The project demonstrates fetching and displaying YouTube video data, including video playback, channel details, and responsive UI components.

## Features

- Modern UI with light and dark theme support
- Fetches video and channel data from a backend API
- Plays YouTube videos using an embedded player
- Displays channel information and subscriber count
- Responsive design for mobile and web
- File-based routing powered by [expo-router](https://expo.github.io/router/docs)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (optional, for advanced usage)

### Installation & Running

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Mohd-Fazal-khan/ytfrontend.git
   cd client
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npx expo start
   ```

4. **Open the app:**
   - Scan the QR code with Expo Go on your mobile device
   - Or press `a` for Android emulator, `i` for iOS simulator, or `w` for web

### Project Structure

- `app/` – Main application screens and routing
- `componets/` – Reusable UI components
- `constants/` – App-wide constants (e.g., colors)
- `hooks/` – Custom React hooks
- `assets/` – Fonts and images
- `scripts/` – Utility scripts (e.g., project reset)
- `.expo/` – Expo local configuration (auto-generated)

### Scripts

- `npm run start` – Start the Expo development server
- `npm run reset-project` – Reset the project to a blank state (see below)
- `npm run lint` – Run ESLint

## Resetting the Project

To start with a blank project, run:

```sh
npm run reset-project
```

This will move the starter code to the `app-example` directory and create a fresh `app` directory.

## Customization

- Update colors in [`constants/Colors.ts`](constants/Colors.ts)
- Add new screens in the `app/` directory
- Extend components in `componets/`
- Configure TypeScript in [`tsconfig.json`](tsconfig.json)

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [expo-router Documentation](https://expo.github.io/router/docs)

## License

This project is licensed under the MIT License.

---

**Created By:** Mohd Fazal Khan
