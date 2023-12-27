// Set Primary Colors And Background
export const setPrimaryBackgroundsNdColors = () => {
  const primary_heroBanner = `assets/images/banner/hero-banner.jpg`;
  const primary_tickerBg = `assets/images/shapes/ticker-bg.png`;
  const primary_hm5Banner = `assets/images/home-5/section-bg.jpg`;

  document.body.removeAttribute('class');
  document.documentElement.style.setProperty('--primary-color', '#5044EB');

  // Update The Background Images Here
  updateBackgroundImage('.hero-section', primary_heroBanner);
  updateBackgroundImage('.ticker-section', primary_tickerBg);
  updateBackgroundImage('.hm5-main-section', primary_hm5Banner);

};

// Update Background Images
export const updateBackgroundImage = (sectionName, url) => {
  const isSectionAvailable = document.querySelector(`${sectionName}`);
  if (isSectionAvailable) {
    return document.querySelector(`${sectionName}`).style.backgroundImage = `url(${url})`;
  }
  return null;

}

// Handle Theme Background and color
export const handleColorClick = (class_Name) => {
  if (class_Name === "primary") {
    setPrimaryBackgroundsNdColors();
  } else {
    document.documentElement.style.setProperty('--primary-color', class_Name);

    const heroBanner = `assets/images/banner/hero-banner-${class_Name}.jpg`;
    const tickerBg = `assets/images/shapes/ticker-bg-${class_Name}.png`;
    const hm5Banner = `assets/images/home-5/section-bg-${class_Name}.jpg`;

    document.body.removeAttribute('class');
    document.body.classList.add(class_Name);

    // Update The Background Images Here
    updateBackgroundImage('.hero-section', heroBanner);
    updateBackgroundImage('.ticker-section', tickerBg);
    updateBackgroundImage('.hm5-main-section', hm5Banner);
  }
};

// Render Stars
export const renderStars = (ratings) => {
  const stars = [];
  for (let i = 0; i < ratings; i++) {
    stars.push(<li key={i}><i className="fas fa-star"></i></li>);
  }
  return stars;
};