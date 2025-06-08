// For OnePlus 13 section
let currentOffer13 = 0;
const offers13 = ["hdfc-offer", "icici-offer"];

function updateOffers13() {
  offers13.forEach((offer) => {
    document.getElementById(offer).style.display = "none";
  });
  document.getElementById(offers13[currentOffer13]).style.display = "flex";
}

function nextBankOffer13() {
  currentOffer13 = (currentOffer13 + 1) % offers13.length;
  updateOffers13();
}

function prevBankOffer13() {
  currentOffer13 = (currentOffer13 - 1 + offers13.length) % offers13.length;
  updateOffers13();
}

// For OnePlus 13R section
let currentOffer13R = 0;
const offers13R = ["hdfc-offer13r", "icici-offer13r"];

function updateOffers13R() {
  offers13R.forEach((offer) => {
    document.getElementById(offer).style.display = "none";
  });
  document.getElementById(offers13R[currentOffer13R]).style.display = "flex";
}

function nextBankOffer13R() {
  currentOffer13R = (currentOffer13R + 1) % offers13R.length;
  updateOffers13R();
}

function prevBankOffer13R() {
  currentOffer13R = (currentOffer13R - 1 + offers13R.length) % offers13R.length;
  updateOffers13R();
}

// Initialize both sections
document.addEventListener("DOMContentLoaded", function () {
  updateOffers13();
  updateOffers13R();
});
// For OnePlus nord ce4 section
document.addEventListener("DOMContentLoaded", function() {
    let currentOfferce4 = 0;
    const offersCE4 = [
        "hdfc-offerce4",
        "icici-offerce4",
        "no-cost-offerce4"
    ];

    function updateOfferCE4() {
        offersCE4.forEach((offer) => {
            const el = document.getElementById(offer);
            if (el) el.style.display = "none";
        });
        const showEl = document.getElementById(offersCE4[currentOfferce4]);
        if (showEl) showEl.style.display = "flex";
    }

    function nextBankOfferce4() {
        currentOfferce4 = (currentOfferce4 + 1) % offersCE4.length;
        updateOfferCE4();
    }

    function prevBankOfferce4() {
        currentOfferce4 = (currentOfferce4 - 1 + offersCE4.length) % offersCE4.length;
        updateOfferCE4();
    }

    // Expose to global scope for inline onclick
    window.nextBankOfferce4 = nextBankOfferce4;
    window.prevBankOfferce4 = prevBankOfferce4;

    // Initialize
    updateOfferCE4();
});



// feedback
document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star-label');
  
  stars.forEach(star => {
    star.addEventListener('click', function() {
      const starId = this.getAttribute('for');
      const starNum = parseInt(starId.replace('star', ''));
      
      // Highlight all stars up to the clicked one
      for (let i = 1; i <= 5; i++) {
        const starInput = document.getElementById(`star${i}`);
        const starLabel = document.querySelector(`label[for="star${i}"]`);
        
        if (i <= starNum) {
          starInput.checked = true;
          starLabel.style.color = '#4107ff';
        } else {
          starInput.checked = false;
          starLabel.style.color = '#dee2e6';
        }
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star-label');
  const submitBtn = document.getElementById('feedbtn');
  
  stars.forEach(star => {
    star.addEventListener('click', function() {
      // Enable and style the button when any star is clicked
      submitBtn.disabled = false;
      submitBtn.classList.remove('btn-outline-secondary');
      submitBtn.classList.add('bg-black', 'text-white', 'border-black');
      submitBtn.textContent = 'Next';
    });
  });
  
  // Alternative approach using the radio inputs
  document.querySelectorAll('input[name="rating"]').forEach(input => {
    input.addEventListener('change', function() {
      if (document.querySelector('input[name="rating"]:checked')) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-outline-secondary');
        submitBtn.classList.add('bg-black', 'text-white', 'border-black');
      }
    });
  });
});





document.addEventListener('DOMContentLoaded', function() {
  const collapseLinks = document.querySelectorAll('a[data-bs-toggle="collapse"]');
  
  collapseLinks.forEach(link => {
    link.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.querySelector('.show-more').classList.toggle('d-none', isExpanded);
      this.querySelector('.show-less').classList.toggle('d-none', !isExpanded);
    });
  });
});



function onToggleMenu(menuIcon) {
        const nav = document.getElementById('nav');

        menuIcon.name = menuIcon.name === 'menu' ? 'close' : 'menu';
        
        // Toggle the menu open and close
        if (nav.style.top === '60px') {
            nav.style.top = '-900%';  // Hide the menu
        } else {
            nav.style.top = '60px';  // Show the menu at 20px from the top
        }
    }