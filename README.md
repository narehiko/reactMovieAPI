📺 AniList Explorer
A simple and fast anime explorer built with React + Vite, using the AniList GraphQL API to fetch real-time anime data.


✨ Features
🔍 Search for anime titles via AniList GraphQL API

🖼️ Display cover images, titles, and details

⚡ Lightning-fast development with Vite HMR

♻️ Component-based and reusable React structure

🧠 Clean, maintainable, and modern React code

🔧 Stack
React

Vite

AniList GraphQL API

ESLint

Tailwind CSS (optional, if you use it)

🚀 Getting Started
bash
Copy
Edit
# Clone this repo
git clone https://github.com/yourusername/anilist-explorer.git
cd anilist-explorer

# Install dependencies
npm install

# Run the dev server
npm run dev
📁 Project Structure
graphql
Copy
Edit
src/
├── assets/         # Images or static assets
├── components/     # Reusable React components
├── pages/          # Page-based structure (if using React Router)
├── api/            # API utility functions (GraphQL queries)
├── App.jsx
└── main.jsx
🔌 Using the AniList API
This app uses the AniList GraphQL API to fetch anime data. Here’s a simple example of a GraphQL query used:

graphql
Copy
Edit
query ($search: String) {
  Media(search: $search, type: ANIME) {
    id
    title {
      romaji
      english
    }
    coverImage {
      large
    }
    description
  }
}
You can use https://anilist.co/graphiql to test your queries.

📦 Build for Production
bash
Copy
Edit
npm run build
🧪 Linting
bash
Copy
Edit
npm run lint
📜 License
MIT License © 2025 [Your Name]