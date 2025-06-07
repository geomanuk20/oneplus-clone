 let currentOffer = 0;
    const offers = ['hdfc-offer', 'icici-offer'];
    
    function updateOffers() {
        // Hide all offers
        offers.forEach(offer => {
            document.getElementById(offer).style.display = 'none';
        });
        
        // Show current offer
        document.getElementById(offers[currentOffer]).style.display = 'flex';
    }
    
    function nextBankOffer() {
        currentOffer = (currentOffer + 1) % offers.length;
        updateOffers();
    }
    
    function prevBankOffer() {
        currentOffer = (currentOffer - 1 + offers.length) % offers.length;
        updateOffers();
    }
    
    // Initialize
    updateOffers();