
# Shezso

This is a Next.js project for Shezso, a modern cosmetics and beauty marketplace.

## Core Features:

- **Landing Page**: A beautiful landing page featuring the latest beauty products and information on top brands.
- **Product Listings**: Comprehensive product browsing with robust filtering, similar to beauty retailers like Sephora and Ulta.
- **Product Details**: Rich product detail pages featuring high-quality images, detailed descriptions, ingredients, and authentic user reviews.
- **User Accounts**: Personalized user profiles for tracking favorite products, managing reviews, and viewing interaction history.
- **Store & Brand Locator**: Geolocation features to help users find local beauty stores and brand counters.
- **AI Shade Finder**: An intelligent AI-powered tool that recommends the perfect foundation or concealer shades by asking users a series of questions about their skin tone, undertone, and type.

## Style Guidelines:

- **Primary Color**: Soft Purple (`#CDB4DB`) for a luxurious and elegant feel.
- **Background Color**: Light Pink (`#FFC8DD`) to create a warm and inviting atmosphere.
- **Accent Color**: Deep Magenta (`#A2D2FF`) to draw attention to key actions and links.
- **Body Font**: 'PT Sans' (sans-serif) for excellent readability and a clean, modern look.
- **Headline Font**: 'Belleza' (sans-serif) to add a touch of elegance and style to headings.
- **Icons**: Simple, clean, and modern icons for categories and UI elements.
- **Animations**: Use subtle, smooth animations for loading states and page transitions to enhance the user experience.

## Setting up AI Features

This project uses Google's Gemini models for its AI-powered features. To enable them, you need to provide a Gemini API key.

1.  **Get an API Key**: Visit [Google AI Studio](https://aistudio.google.com) and click "Get API key".
2.  **Create `.env` file**: Make sure you have a `.env` file in the root of your project.
3.  **Add the Key**: Add the following line to your `.env` file, replacing `YOUR_API_KEY_HERE` with the key you copied:

```
GEMINI_API_KEY="YOUR_API_KEY_HERE"
```

The AI features will now be enabled in your application.
