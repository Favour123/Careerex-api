# Random User Generator

A modern React application that fetches and displays random user profiles with a beautiful, responsive interface. Built with React and Vite.

## 🌟 Features

- Fetch random user profiles from the [Random User API](https://randomuser.me/)
- Responsive grid layout that adapts to different screen sizes
- Beautiful UI with gradient buttons and smooth animations
- Loading states and error handling
- Refresh functionality to get new users
- User cards with detailed information

## 🚀 Tech Stack

- React 18
- Vite (for fast development and building)
- Tailwind CSS (for styling)
- Lucide React (for icons)
- Random User API

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
```

2. Navigate to the project directory:
```bash
cd <project-directory>
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Development

This project uses Vite as its build tool. Here are the available commands:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🔧 Configuration

The application is configured to fetch 6 random users by default. You can modify this in the `RandomUsers.jsx` component by adjusting the `count` parameter in the `fetchUsers` function.

## 📱 Component Structure

- `RandomUsers.jsx` - Main component that handles user fetching and display
- `UserCard.jsx` - Component for displaying individual user information

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---
*This project was bootstrapped with Vite and uses its React template with HMR (Hot Module Replacement) and ESLint configuration.*
