# Vista Academy Website

A modern, high-performance competitive exam coaching website built with Next.js 15, Tailwind CSS, and Framer Motion. This project is designed to outperform competitors like Veranda Race through superior UI/UX, modern components, and efficient user flows.

## 🚀 Features

-   **Modern UI/UX**: Professional color palette (Royal Blue & Gold) with Glassmorphism and Bento-style layouts.
-   **Dynamic Hero Section**: High-impact visuals with clear call-to-actions.
-   **Interactive Course Grid**: Categorized displays for Offline, Online, and Residential courses.
-   **Context-Aware Contact System**: 
    -   Location toggling for **Salem** and **Erode**.
    -   Address, phone, and timing details update dynamically.
    -   Direct **WhatsApp integration** routing leads to the specific branch counselor.
-   **Bento Success Stories**: An aesthetically pleasing grid for student achievers and testimonials.
-   **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop.

## 🛠️ Tech Stack

-   **Frontend**: Next.js (App Router)
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion
-   **Icons**: Lucide React
-   **Utilities**: clsx, tailwind-merge

## 🏗️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📍 Location Routing Configuration

The contact form is configured to route WhatsApp messages based on the selected location:
-   **Salem**: `9345254176`
-   **Erode**: `6381950060`

To update these, edit the `locations` constant in `src/components/sections/ContactSection.tsx`.

## 📸 Assets
Note: Some images are currently represented by styled components or glassmorphic blocks for visual flair. Replace placeholders in `HeroSection.tsx` and `page.tsx` with actual high-resolution campus and achiever photos.
