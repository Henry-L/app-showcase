# Henry's App Showcase

A showcase website for my daily AI-assisted application development challenge during parental leave.

## 🚀 Tech Stack

- **React** - UI framework
- **Emotion** - CSS-in-JS styling
- **Ant Design** - UI component library
- **Firebase Hosting** - Hosting platform

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.js        # Title, expand button, and description
│   ├── AppCard.js       # Individual app card component
│   ├── AppGrid.js       # Grid layout for app cards
│   └── Footer.js        # Footer component
├── data/
│   └── apps.js          # App data configuration
├── images/
│   └── handwritten_title.png
├── App.js               # Main app component
└── index.js             # Entry point
```

## 🎨 Components

### Header
Displays the site title (handwritten image) with an expandable description section.

### AppCard
A clickable card component that displays:
- App icon with custom color
- Title and description
- Technology tags

### AppGrid
Responsive grid layout:
- 3 columns on desktop (>968px)
- 2 columns on tablet (768-968px)
- 1 column on mobile (<768px)

### Footer
Simple footer with attribution.

## 📝 Adding New Apps

Edit `src/data/apps.js` and add a new object to the `apps` array:

```javascript
{
  id: 3,
  title: 'My New App',
  description: 'Description of your app',
  url: '/apps/my-new-app',
  color: '#52c41a',
  icon: <YourIcon />,
  tags: ['React', 'TypeScript', 'AI']
}
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to Firebase
npm run deploy
```

## 🎯 About This Project

I'm currently on parental leave and have set myself a challenge: create one application a day using AI. Between playing with my daughter and the necessary contact naps, time is limited—but I'm using every available moment to deepen my understanding of AI-assisted development, the GCP environment, and programming languages I haven't worked with much before.

Each app here represents a day's work—whatever I can build and ship by end of day. Some will be simple, others more ambitious, but all are learning experiences.

