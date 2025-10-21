const movies = [
    { 
        title: "Dune: Part Two", 
        year: 2024, 
        rating: "★★★★★", 
        image: "https://www.themoviedb.org/t/p/original/28L7YFGnuN24JTInn3GNdUzetBq.jpg",
        isLatest: true,
        synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he must prevent a terrible future only he can foresee.",
        cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin", "Austin Butler"]
    },
    { 
        title: "Oppenheimer", 
        year: 2023, 
        rating: "★★★★★", 
        image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/oppenheimer-poster.jpg",
        isLatest: true,
        synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, and the moral dilemmas he faced.",
        cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr.", "Florence Pugh"]
    },
    { 
        title: "The Batman", 
        year: 2022, 
        rating: "★★★★☆", 
        image: "https://wallpapers.com/images/hd/the-batman-2022-movie-poster-4u7dg02wjiewmyum.jpg",
        isLatest: false,
        synopsis: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano", "Jeffrey Wright", "Colin Farrell"]
    },
    { 
        title: "Spider-Man: Across the Spider-Verse", 
        year: 2023, 
        rating: "★★★★★", 
        image: "https://preview.redd.it/hi-res-across-the-spider-verse-character-posters-3429-5000-v0-wzhe0vzps71b1.jpg?width=3429&format=pjpg&auto=webp&s=c9d0a444af19c0d0c013aeb238a1720c1590eb5c",
        isLatest: true,
        synopsis: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
        cast: ["Shameik Moore", "Hailee Steinfeld", "Brian Tyree Henry", "Oscar Isaac", "Jake Johnson"]
    },
    { 
        title: "Top Gun: Maverick", 
        year: 2022, 
        rating: "★★★★★", 
        image: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
        isLatest: false,
        synopsis: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice.",
        cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly", "Jon Hamm", "Glen Powell"]
    },
    { 
        title: "Everything Everywhere All at Once", 
        year: 2022, 
        rating: "★★★★★", 
        image: "https://image.tmdb.org/t/p/original/u68AjlvlutfEIcpmbYpKcdi09ut.jpg",
        isLatest: false,
        synopsis: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
        cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan", "Jamie Lee Curtis", "James Hong"]
    },
    { 
        title: "John Wick: Chapter 4", 
        year: 2023, 
        rating: "★★★★★", 
        image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
        isLatest: true,
        synopsis: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård", "Laurence Fishburne", "Ian McShane"]
    },
    { 
        title: "Avatar: The Way of Water", 
        year: 2022, 
        rating: "★★★★☆", 
        image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/avater-the-way-of-water-poster.jpg",
        isLatest: false,
        synopsis: "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.",
        cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang", "Kate Winslet"]
    }
];

// Function to populate movie grid
function populateMovieGrid(containerId, filterLatest = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let moviesToShow = movies;
    if (filterLatest) {
        moviesToShow = movies.filter(movie => movie.isLatest);
    }

    container.innerHTML = '';

    moviesToShow.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.setAttribute('data-movie', movie.title);
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" class="movie-poster">
            ${movie.isLatest ? '<span class="latest-badge">NEW</span>' : ''}
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-year">${movie.year}</p>
                <div class="movie-rating">${movie.rating}</div>
            </div>
        `;
        container.appendChild(movieCard);
    });
}

// Function to show movie details in a nice popup
function showMovieDetails(movieTitle) {
    const movie = movies.find(m => m.title === movieTitle);
    if (!movie) return;

    // Create popup overlay
    const popup = document.createElement('div');
    popup.className = 'movie-popup-overlay';
    popup.innerHTML = `
        <div class="movie-popup">
            <div class="popup-header">
                <h2>${movie.title} (${movie.year})</h2>
                <button class="close-popup">&times;</button>
            </div>
            <div class="popup-content">
                <div class="popup-poster">
                    <img src="${movie.image}" alt="${movie.title}">
                </div>
                <div class="popup-details">
                    <div class="popup-rating">${movie.rating}</div>
                    <div class="popup-section">
                        <h3>Synopsis</h3>
                        <p>${movie.synopsis}</p>
                    </div>
                    <div class="popup-section">
                        <h3>Cast</h3>
                        <div class="cast-grid">
                            ${movie.cast.map(actor => `<span class="cast-member">${actor}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Add event listeners
    const closeBtn = popup.querySelector('.close-popup');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(popup);
    });
    
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            document.body.removeChild(popup);
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(popup);
            document.removeEventListener('keydown', closeOnEscape);
        }
    });
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Populate movies on pages that need it
    if (document.getElementById('movieGrid')) {
        populateMovieGrid('movieGrid');
    }

    if (document.getElementById('latestMovies')) {
        populateMovieGrid('latestMovies', true);
    }

    // Add click event listeners to movie cards
    document.addEventListener('click', function(e) {
        const movieCard = e.target.closest('.movie-card');
        if (movieCard) {
            const movieTitle = movieCard.getAttribute('data-movie');
            showMovieDetails(movieTitle);
        }
    });
});