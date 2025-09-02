/* Data model: sample hostels across India */
const HOSTELS = [
  // South
  { id: 'blr-1', name: 'Backpackers Hub Indiranagar', city: 'Bengaluru', state: 'Karnataka', lat: 12.9716, lon: 77.5946, rating: 4.4, pricePerNight: 899, type: 'Mixed Dorm', amenities: ['Wi‑Fi', 'Lockers', 'Breakfast'], address: 'Indiranagar, Bengaluru', mapsQuery: 'Indiranagar Bengaluru hostel' },
  { id: 'blr-2', name: 'MG Road City Hostel', city: 'Bengaluru', state: 'Karnataka', lat: 12.975, lon: 77.605, rating: 4.1, pricePerNight: 1099, type: 'Female Dorm', amenities: ['Wi‑Fi', 'AC', 'Kitchen'], address: 'MG Road, Bengaluru', mapsQuery: 'MG Road Bengaluru hostel' },
  { id: 'chn-1', name: 'Marina Beach Hostel', city: 'Chennai', state: 'Tamil Nadu', lat: 13.0827, lon: 80.2707, rating: 3.9, pricePerNight: 749, type: 'Mixed Dorm', amenities: ['Wi‑Fi', 'Common Room'], address: 'Triplicane, Chennai', mapsQuery: 'Triplicane Chennai hostel' },
  // West
  { id: 'mum-1', name: 'Bandra Backpackers', city: 'Mumbai', state: 'Maharashtra', lat: 19.076, lon: 72.8777, rating: 4.5, pricePerNight: 1499, type: 'Private + Dorm', amenities: ['Wi‑Fi', 'AC', 'Kitchen'], address: 'Bandra West, Mumbai', mapsQuery: 'Bandra Mumbai hostel' },
  { id: 'goa-1', name: 'Anjuna Chill Hostel', city: 'Anjuna', state: 'Goa', lat: 15.5889, lon: 73.744, rating: 4.3, pricePerNight: 999, type: 'Mixed Dorm', amenities: ['Wi‑Fi', 'Pool', 'Bar'], address: 'Anjuna, North Goa', mapsQuery: 'Anjuna Goa hostel' },
  { id: 'uda-1', name: 'Lake View Hostel', city: 'Udaipur', state: 'Rajasthan', lat: 24.5854, lon: 73.7125, rating: 4.6, pricePerNight: 899, type: 'Mixed Dorm', amenities: ['Wi‑Fi', 'Rooftop'], address: 'Old City, Udaipur', mapsQuery: 'Udaipur hostel' },
  // North
  { id: 'del-1', name: 'Paharganj Travelers Home', city: 'Delhi', state: 'Delhi', lat: 28.6139, lon: 77.209, rating: 3.8, pricePerNight: 699, type: 'Mixed Dorm', amenities: ['Wi‑Fi', 'Lockers'], address: 'Paharganj, New Delhi', mapsQuery: 'Paharganj Delhi hostel' },
  { id: 'jai-1', name: 'Pink City Hostel', city: 'Jaipur', state: 'Rajasthan', lat: 26.9124, lon: 75.7873, rating: 4.2, pricePerNight: 799, type: 'Female Dorm', amenities: ['Wi‑Fi', 'AC'], address: 'Bani Park, Jaipur', mapsQuery: 'Jaipur hostel' },
  { id: 'man-1', name: 'Old Manali Basecamp', city: 'Manali', state: 'Himachal Pradesh', lat: 32.2432, lon: 77.1892, rating: 4.7, pricePerNight: 999, type: 'Mixed Dorm', amenities: ['Wi‑Fi', 'Bonfire'], address: 'Old Manali, Manali', mapsQuery: 'Manali hostel' },
  // East
  { id: 'kol-1', name: 'Park Street Pods', city: 'Kolkata', state: 'West Bengal', lat: 22.5726, lon: 88.3639, rating: 4.0, pricePerNight: 649, type: 'Pods', amenities: ['Wi‑Fi', 'Breakfast'], address: 'Park Street, Kolkata', mapsQuery: 'Kolkata hostel' },
  { id: 'puri-1', name: 'Beach Breeze Hostel', city: 'Puri', state: 'Odisha', lat: 19.8135, lon: 85.8312, rating: 4.1, pricePerNight: 599, type: 'Mixed Dorm', amenities: ['Wi‑Fi', 'Sea View'], address: 'Near Puri Beach, Puri', mapsQuery: 'Puri hostel' },
];

/* Utilities */
function toRadians(degrees) { return (degrees * Math.PI) / 180; }
function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function formatCurrencyINR(value) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}
function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }

/* Geocoding shim: light, no APIs. We match city/state tokens to coordinates */
const CITY_COORDS = {
  bengaluru: { lat: 12.9716, lon: 77.5946 },
  bangalore: { lat: 12.9716, lon: 77.5946 },
  mumbai: { lat: 19.076, lon: 72.8777 },
  delhi: { lat: 28.6139, lon: 77.209 },
  chennai: { lat: 13.0827, lon: 80.2707 },
  goa: { lat: 15.2993, lon: 74.124 },
  anjuna: { lat: 15.5889, lon: 73.744 },
  jaipur: { lat: 26.9124, lon: 75.7873 },
  udaipur: { lat: 24.5854, lon: 73.7125 },
  manali: { lat: 32.2432, lon: 77.1892 },
  kolkata: { lat: 22.5726, lon: 88.3639 },
  puri: { lat: 19.8135, lon: 85.8312 },
  hyderabad: { lat: 17.385, lon: 78.4867 },
  pune: { lat: 18.5204, lon: 73.8567 },
  goa_north: { lat: 15.592, lon: 73.744 },
};

function parseQueryToCoords(query) {
  if (!query) return null;
  const token = query.trim().toLowerCase();
  return CITY_COORDS[token] || null;
}

/* DOM */
const elements = {
  form: document.getElementById('searchForm'),
  input: document.getElementById('locationInput'),
  useLocationBtn: document.getElementById('useLocationBtn'),
  rating: document.getElementById('ratingSelect'),
  budget: document.getElementById('budgetSelect'),
  sort: document.getElementById('sortSelect'),
  resultsGrid: document.getElementById('resultsGrid'),
  resultCount: document.getElementById('resultCount'),
  noResults: document.getElementById('noResults'),
  summaryText: document.getElementById('summaryText'),
  year: document.getElementById('year'),
};

function computeDerived(hostels, origin) {
  return hostels.map(h => ({
    ...h,
    distanceKm: origin ? haversineKm(origin.lat, origin.lon, h.lat, h.lon) : null,
  }));
}

function filterHostels(hostels, { minRating, budgetKey }) {
  return hostels.filter(h => {
    const passRating = h.rating >= minRating;
    let passBudget = true;
    if (budgetKey === 'lt1000') passBudget = h.pricePerNight < 1000;
    else if (budgetKey === '1000-2000') passBudget = h.pricePerNight >= 1000 && h.pricePerNight <= 2000;
    else if (budgetKey === '>2000') passBudget = h.pricePerNight > 2000;
    return passRating && passBudget;
  });
}

function sortHostels(hostels, sortKey) {
  const copy = [...hostels];
  if (sortKey === 'rating') copy.sort((a,b) => b.rating - a.rating);
  else if (sortKey === 'price') copy.sort((a,b) => a.pricePerNight - b.pricePerNight);
  else copy.sort((a,b) => (a.distanceKm ?? Infinity) - (b.distanceKm ?? Infinity));
  return copy;
}

function hostelCardTemplate(h) {
  const dist = h.distanceKm != null ? `${h.distanceKm.toFixed(1)} km` : null;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.mapsQuery || `${h.name} ${h.city}`)}`;
  return `
    <article class="card" data-id="${h.id}">
      <div class="image" aria-hidden="true"></div>
      <div class="body">
        <div class="title">
          <div class="name">${h.name}</div>
          <div class="pill" title="Rating"><span>⭐</span><strong>${h.rating.toFixed(1)}</strong></div>
        </div>
        <div class="meta">
          <span class="pill">📍 ${h.city}, ${h.state}${dist ? ` · ${dist}` : ''}</span>
          <span class="pill">🛏️ ${h.type}</span>
          ${h.amenities.slice(0,3).map(a => `<span class="pill">${a}</span>`).join('')}
        </div>
        <div class="price-row">
          <div class="price">${formatCurrencyINR(h.pricePerNight)} <small>/ night</small></div>
          <div class="price-meta" style="color:#a9b4d5;font-size:12px;">Inclusive of taxes</div>
        </div>
        <div class="actions">
          <a class="btn btn-outline" href="${mapsUrl}" target="_blank" rel="noopener">Open in Maps</a>
          <button class="btn btn-primary" data-action="details" data-id="${h.id}">Details</button>
        </div>
      </div>
    </article>
  `;
}

function render(hostels, origin, queryLabel) {
  const grid = elements.resultsGrid;
  grid.innerHTML = hostels.map(hostelCardTemplate).join('');
  elements.resultCount.textContent = hostels.length;

  const originText = origin ? `near ${queryLabel || 'your location'}` : 'across India';
  elements.summaryText.textContent = `Showing ${hostels.length} hostels ${originText}`;
  elements.noResults.hidden = hostels.length !== 0;
}

async function handleSearch(origin, queryLabel) {
  const minRating = parseFloat(elements.rating.value);
  const budgetKey = elements.budget.value;
  const sortKey = elements.sort.value;

  let base = computeDerived(HOSTELS, origin);
  base = filterHostels(base, { minRating, budgetKey });
  base = sortHostels(base, sortKey);
  render(base, origin, queryLabel);
}

function getBrowserLocation() {
  return new Promise((resolve, reject) => {
    if (!('geolocation' in navigator)) {
      reject(new Error('Geolocation not supported'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      (err) => reject(err),
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
    );
  });
}

function findNearestCityCoords() {
  // If user typed a known city, use that. Otherwise, null.
  const q = elements.input.value;
  return parseQueryToCoords(q);
}

/* Event wiring */
window.addEventListener('DOMContentLoaded', () => {
  elements.year.textContent = new Date().getFullYear();

  // Initial render: show all sorted by rating
  elements.sort.value = 'rating';
  handleSearch(null, null);

  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const coords = findNearestCityCoords();
    const label = elements.input.value.trim() || null;
    if (coords) {
      elements.sort.value = 'distance';
    }
    handleSearch(coords || null, label);
  });

  elements.useLocationBtn.addEventListener('click', async () => {
    elements.useLocationBtn.disabled = true;
    elements.useLocationBtn.textContent = 'Locating…';
    try {
      const coords = await getBrowserLocation();
      elements.sort.value = 'distance';
      handleSearch(coords, 'your location');
    } catch (err) {
      const coords = findNearestCityCoords();
      if (coords) {
        elements.sort.value = 'distance';
        handleSearch(coords, elements.input.value.trim());
      } else {
        alert('Could not get location. Try typing a city name (e.g. Bengaluru, Mumbai, Delhi).');
      }
    } finally {
      elements.useLocationBtn.disabled = false;
      elements.useLocationBtn.textContent = 'Use my location';
    }
  });

  elements.sort.addEventListener('change', () => {
    const coords = findNearestCityCoords();
    const label = elements.input.value.trim() || null;
    handleSearch(coords || null, label);
  });
  elements.rating.addEventListener('change', () => {
    const coords = findNearestCityCoords();
    const label = elements.input.value.trim() || null;
    handleSearch(coords || null, label);
  });
  elements.budget.addEventListener('change', () => {
    const coords = findNearestCityCoords();
    const label = elements.input.value.trim() || null;
    handleSearch(coords || null, label);
  });
});