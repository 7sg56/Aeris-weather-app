// Weather Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const cityName = document.querySelector('.city-name');
    const dateTime = document.querySelector('.date-time');

    // Update current date and time
    function updateDateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        };
        dateTime.textContent = now.toLocaleDateString('en-US', options);
    }

    // Update time every minute
    updateDateTime();
    setInterval(updateDateTime, 60000);

    // Search functionality
    function handleSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // Here you would typically make an API call to your weather service
            // For now, we'll just update the city name as a demo
            cityName.textContent = query;
            searchInput.value = '';
            
            // Add a subtle animation
            cityName.style.transform = 'scale(1.05)';
            setTimeout(() => {
                cityName.style.transform = 'scale(1)';
            }, 200);
        }
    }

    // Event listeners
    searchBtn.addEventListener('click', handleSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Add hover effects to weather cards
    const weatherCards = document.querySelectorAll('.weather-card, .hourly-forecast, .daily-forecast');
    
    weatherCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
        });
    });

    // Add loading animation for search
    searchBtn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });

    // Smooth scrolling for hourly forecast
    const hourlyContainer = document.querySelector('.hourly-container');
    if (hourlyContainer) {
        hourlyContainer.addEventListener('wheel', function(e) {
            e.preventDefault();
            this.scrollLeft += e.deltaY;
        });
    }
});
