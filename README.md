# Web Development Project (Group 246)

This project is a modern, responsive website designed for a portfolio or personal branding. It includes multiple sections such as a hero section, biography, services, skills, gallery, and footer. The website is styled with CSS and includes animations for a dynamic user experience.

---

## Group 246 Members:
**Emmanuel	Ojo** -	ojoemmanueltiwalade@gmail.com

**Abiodun	Ijiola** -	ijiolaabiodun7@gmail.com	

**Evaline	Kioko**	- evalinemutuli002@gmail.com

**Paul	Odhiambo**	- aloopaul3@gmail.com	

**T urikubwimana	Vincent** -	kubwimanavincent2020@gmail.com	

**Saraphina	Kirika** -	saraphinakirika@gmail.com	

**Argie	Muriuki** -	argieshali@gmail.com	

**Godfrey	Ochieng** -	mcochiengg@gmail.com	

**Gift	Mwangi** -	giftmwangi39@gmail.com	

**Carlos	Chongo** -	chongoc77@gmail.com	

---

## Table of Contents
1. Features
2. Technologies Used
3. Folder Structure
4. Sections Overview
5. Responsive Design
6. Animations
7. How to Run
8. Customization
9. Credits

---

## Features

- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile devices.
- **Hero Section**: Includes a title, subtitle, call-to-action buttons, and an image.
- **Biography Section**: Displays personal details and social media links.
- **Services Section**: Highlights the services offered with cards.
- **Skills Section**: Showcases skills with progress bars.
- **Gallery Section**: Displays a grid of images.
- **Footer**: Includes contact information, social media links, and a scroll-to-top button.
- **Animations**: Smooth fade-in, slide-in, and glowing text animations.

---

## Technologies Used

- **HTML5**: For structuring the content.
- **CSS3**: For styling and layout.
  - Flexbox and Grid for layout.
  - Media queries for responsiveness.
  - Keyframe animations for dynamic effects.
- **JavaScript**: For interactive features like smooth scrolling.

---

## Folder Structure

```
Web Development Group/
├── index.html         # Main HTML file
├── css/
│   ├── main.css       # General styles
│   ├── hero.css       # Styles for the hero and hero1 sections
│   ├── header.css     # Styles for the header and navigation
├── js/
│   ├── main.js        # JavaScript for animations and interactivity
├── images/            # Folder for images
└── README.md          # Project documentation
```

---

## Sections Overview

### 1. **Hero Section**
- **HTML**: Contains a title, subtitle, description, buttons, and an image.
- **CSS**:
  - `hero-container`: Flexbox layout for content and image.
  - `hero-title`: Transparent text with a white outline and glowing animation.
  - Responsive adjustments for font sizes and layout.

### 2. **Biography Section (Hero1)**
- **HTML**: Displays a profile image, biography, personal details, and social media links.
- **CSS**:
  - `hero1-container`: Flexbox layout for image and content.
  - `info ul`: Flex-wrap for personal details.
  - Responsive adjustments for smaller screens.

### 3. **Services Section**
- **HTML**: Grid layout for service cards.
- **CSS**:
  - `services-grid`: Flexbox layout with hover effects on cards.
  - Responsive adjustments for stacking cards on smaller screens.

### 4. **Skills Section**
- **HTML**: Displays skills with progress bars.
- **CSS**:
  - `skills-grid`: Flexbox layout for image and content.
  - `progress-bar`: Animated progress bars for skills.

### 5. **Gallery Section**
- **HTML**: Grid layout for images.
- **CSS**:
  - `gallery-grid`: CSS Grid for image layout.
  - Responsive adjustments for fewer columns on smaller screens.

### 6. **Footer**
- **HTML**: Includes contact information, social media links, and a scroll-to-top button.
- **CSS**:
  - `footer`: Flexbox layout for top and bottom sections.
  - `social-icons`: Circular icons with hover effects.

---

## Responsive Design

The website is fully responsive, ensuring a seamless experience across all devices. Key breakpoints include:

- **1200px**: Adjusts font sizes and layout for large screens.
- **992px**: Stacks content vertically for tablets.
- **768px**: Centers content and reduces font sizes for smaller tablets.
- **576px**: Further reduces font sizes and adjusts image sizes for mobile devices.

---

## Animations

### Keyframe Animations
- **Fade-In**: Smoothly fades in sections as they load.
- **Slide-In**: Slides images into view from the left.
- **Text Glow**: Adds a glowing effect to the hero title.

### CSS Example
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  animation: fadeIn 1s ease-in-out forwards, textGlow 1.5s infinite alternate;
}
```

---

## How to Run

1. Clone or download the repository.
2. Open the index.html file in a web browser.
3. Ensure the css and `images` folders are in the same directory as index.html.

---

## Customization

### Colors
- Update the `:root` variables in `main.css` to change the color scheme:
```css
:root {
  --primary-color: #0d9488;
  --primary-dark: #0f766e;
  --primary-light: #14b8a6;
  --dark-bg: #0f172a;
  --light-text: #f8fafc;
}
```

### Fonts
- The project uses the **Poppins** font. You can change it in the `body` CSS:
```css
body {
  font-family: 'Poppins', sans-serif;
}
```

### Images
- Replaced the placeholder images in the `images` folder or update the `src` attributes in the HTML.

---

## Credits

- **Icons**: [Flaticon](https://www.flaticon.com/)
- **Images**: [Pexels](https://www.pexels.com/)
- **Font**: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)

---


  
