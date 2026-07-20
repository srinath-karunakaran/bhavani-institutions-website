// Gallery items — uses only real, existing photo assets. `category` powers
// the filter tabs on the Gallery page; the Home preview ignores it.
export const homeGallery = [
  { image: '/images/Bhavani_Abacus.png', label: 'Abacus & Vedic Math', category: 'Academics', tall: true },
  { image: '/images/Bhavani_Drawing.png', label: 'Drawing & Art', category: 'Arts' },
  { image: '/images/Bhavani_Music.png', label: 'Music', category: 'Arts' },
  { image: '/images/Bhavani_Dance.png', label: 'Dance', category: 'Arts', tall: true },
  { image: '/images/Bhavani_Sports_Frame.png', label: 'Sports', category: 'Activities' },
  { image: '/images/Bhavani_Daycare.png', label: 'Day Care', category: 'Activities' },
  { image: '/images/Bhavani_Vanservice.png', label: 'Van Service', category: 'Campus', tall: true },
  { image: '/images/Bhavani_Branch_Photo.png', label: 'Our Campus', category: 'Campus' },
]

// Tab order for the Gallery page filter bar. 'All' is prepended in the page.
export const galleryCategories = ['Academics', 'Arts', 'Activities', 'Campus']
