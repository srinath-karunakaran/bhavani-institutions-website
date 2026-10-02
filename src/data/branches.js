// Shared by the Branches page's card grid, the "Find Us On The Map" section,
// and the branch detail modal — so the three real addresses live in one place.
// `items` is the short card checklist; the remaining fields populate the modal.
export const branches = [
  {
    name: 'Main Campus — Madhanandapuram',
    short: 'Madhanandapuram',
    address: '18/11, Annai Velankanni Nagar, Phase 1, Madhanandapuram, Chennai - 600125',
    itemsLabel: null,
    items: ['All academies', 'Smart classroom', 'Parking available'],
    mapQuery: '18/11, Annai Velankanni Nagar, Phase 1, Madhanandapuram, Chennai 600125',
    mapLabel: 'View on Google Maps',
    timing: 'Monday – Saturday · 9:00 AM – 7:00 PM',
    phone: '+91 63831 29475',
    academies: ['Tuition Centre', 'Abacus & Vedic Math', 'Olympiad Prep', 'NEET Foundation', 'Drawing & Art', 'Music'],
    highlights: ['Flagship main campus', 'Smart classrooms', 'On-site parking', 'All academies under one roof'],
  },
  {
    name: 'Mugalivakkam',
    short: 'Mugalivakkam',
    address: '18/11, Mugalivakkam Main Road, Guruswamy Nagar, Madhanandapuram, Chennai - 600125',
    itemsLabel: 'Academies here',
    items: ['Dance', 'Music', 'Day Care'],
    mapQuery: '18/11, Mugalivakkam Main Road, Guruswamy Nagar, Madhanandapuram, Chennai 600125',
    mapLabel: 'View Map',
    timing: 'Monday – Saturday · 9:00 AM – 7:00 PM',
    phone: '+91 63831 29475',
    academies: ['Dance Academy', 'Music Academy', 'Drawing & Art', 'Sports Academy', 'Day Care & After-School', 'School Van Service'],
    highlights: ['Activities & arts hub', 'CCTV-monitored day care', 'School van service base', 'Spacious activity rooms'],
  },
  {
    name: 'Manapakkam',
    short: 'Manapakkam',
    address: 'No 2/245 MG Road, Girigori Nagar, Opposite OTA Gate, Manapakkam, Chennai - 600125',
    itemsLabel: 'Academies here',
    items: ['Abacus', 'Phonics', 'Handwriting'],
    mapQuery: 'No 2/245 MG Road, Girigori Nagar, Manapakkam, Chennai 600125',
    mapLabel: 'View Map',
    timing: 'Monday – Saturday · 9:00 AM – 7:00 PM',
    phone: '+91 63831 29475',
    academies: ['Abacus & Vedic Math', 'Phonics', 'Handwriting', 'Olympiad Prep', 'Creative Writing'],
    highlights: ['Neighbourhood coaching centre', 'Close to residential areas', 'Focused small batches', 'Skill-building programs'],
  },
]

export function googleMapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
