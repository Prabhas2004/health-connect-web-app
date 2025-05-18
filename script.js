
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });

  // Scroll to appointment section
  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById('book-appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add click event listeners to all book appointment buttons
  document.getElementById('nav-book-btn').addEventListener('click', scrollToAppointment);
  document.getElementById('hero-book-btn').addEventListener('click', scrollToAppointment);
  const mobileBookBtn = document.querySelector('.mobile-book-btn');
  if (mobileBookBtn) {
    mobileBookBtn.addEventListener('click', scrollToAppointment);
  }

  // Find doctor button scrolls to doctors section
  document.getElementById('find-doctor-btn').addEventListener('click', function() {
    const doctorsSection = document.getElementById('doctors');
    if (doctorsSection) {
      doctorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww",
      rating: 4.9,
      reviews: 124,
      availability: "Available Today",
      location: "New York, NY"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fHww",
      rating: 4.7,
      reviews: 98,
      availability: "Next Available: Tomorrow",
      location: "Boston, MA"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww",
      rating: 4.8,
      reviews: 156,
      availability: "Available Today",
      location: "Chicago, IL"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.6,
      reviews: 87,
      availability: "Next Available: Friday",
      location: "Los Angeles, CA"
    },
    {
      id: 5,
      name: "Dr. Lisa Wang",
      specialty: "Neurology",
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.9,
      reviews: 132,
      availability: "Available Today",
      location: "Seattle, WA"
    },
    {
      id: 6,
      name: "Dr. Robert Patel",
      specialty: "Psychiatry",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.7,
      reviews: 104,
      availability: "Next Available: Thursday",
      location: "Denver, CO"
    }
  ];

  // Render doctors
  renderDoctors(doctors);

  // Doctor search functionality
  const searchBtn = document.getElementById('search-btn');
  searchBtn.addEventListener('click', handleDoctorSearch);

  // Populate specialty dropdown in appointment form
  const doctorsBySpecialty = {
    cardiology: ["Dr. Sarah Johnson"],
    dermatology: ["Dr. Michael Chen"],
    neurology: ["Dr. Lisa Wang"],
    orthopedics: ["Dr. James Wilson"],
    pediatrics: ["Dr. Emily Rodriguez"],
    psychiatry: ["Dr. Robert Patel"]
  };
  
  // Update doctor dropdown when specialty changes
  const specialtySelect = document.getElementById('appointment-specialty');
  const doctorSelect = document.getElementById('doctor');
  
  specialtySelect.addEventListener('change', function() {
    const selectedSpecialty = this.value;
    updateDoctorOptions(selectedSpecialty);
  });

  // Appointment form submission
  const appointmentForm = document.getElementById('appointment-form');
  appointmentForm.addEventListener('submit', handleAppointmentSubmit);

  // Show welcome toast on page load
  showToast('Welcome to HealthConnect!', 'Find doctors and schedule appointments with ease.', 'info');
  
  // Functions
  function renderDoctors(doctorList) {
    const doctorsGrid = document.getElementById('doctors-grid');
    doctorsGrid.innerHTML = '';
    
    if (doctorList.length === 0) {
      doctorsGrid.innerHTML = `
        <div style="text-align: center; grid-column: 1/-1; padding: 2rem 0;">
          <p style="font-size: 1.125rem; color: var(--text-light);">No doctors match your search criteria. Try adjusting your filters.</p>
        </div>
      `;
      return;
    }
    
    doctorList.forEach(doctor => {
      const doctorCard = document.createElement('div');
      doctorCard.className = 'doctor-card';
      doctorCard.setAttribute('data-id', doctor.id);
      
      doctorCard.innerHTML = `
        <div class="doctor-image">
          ${doctor.image ? 
            `<div class="doctor-image-bg" style="background-image: url(${doctor.image})"></div>` :
            `<div class="doctor-placeholder">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                 <circle cx="12" cy="7" r="4"></circle>
               </svg>
             </div>`
          }
          <div class="doctor-rating">
            <span>★</span> ${doctor.rating} (${doctor.reviews})
          </div>
        </div>
        <div class="doctor-info">
          <h3 class="doctor-name">${doctor.name}</h3>
          <p class="doctor-specialty">${doctor.specialty}</p>
          <p class="doctor-availability">${doctor.availability}</p>
          <div class="doctor-actions">
            <button class="btn btn-outline btn-sm view-profile-btn">View Profile</button>
            <button class="btn btn-primary btn-sm book-now-btn">Book Now</button>
          </div>
        </div>
      `;
      
      doctorsGrid.appendChild(doctorCard);
      
      // Add event listener to the Book Now button
      const bookNowBtn = doctorCard.querySelector('.book-now-btn');
      bookNowBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        handleDoctorSelection(doctor);
      });

      // Add event listener to the entire card
      doctorCard.addEventListener('click', function() {
        // Show doctor profile (can be expanded in the future)
        showToast(`${doctor.name}`, `Specializes in ${doctor.specialty}`, 'info');
      });
    });
  }

  function handleDoctorSearch() {
    const specialty = document.getElementById('specialty-select').value;
    const location = document.getElementById('location-input').value.toLowerCase();
    const searchQuery = document.getElementById('search-query').value.toLowerCase();
    
    // Filter doctors
    const filteredDoctors = doctors.filter(doctor => {
      // Filter by specialty
      const matchesSpecialty = specialty === 'all' || 
        doctor.specialty.toLowerCase() === specialty.toLowerCase();
      
      // Filter by location
      const matchesLocation = !location || 
        doctor.location.toLowerCase().includes(location);
      
      // Filter by search query (name or specialty)
      const matchesQuery = !searchQuery || 
        doctor.name.toLowerCase().includes(searchQuery) ||
        doctor.specialty.toLowerCase().includes(searchQuery);
      
      return matchesSpecialty && matchesLocation && matchesQuery;
    });
    
    // Render filtered doctors
    renderDoctors(filteredDoctors);
    
    // Show toast notification
    if (filteredDoctors.length === 0) {
      showToast('No results found', 'Try adjusting your search criteria.', 'info');
    } else {
      showToast('Search results', `Found ${filteredDoctors.length} doctors matching your criteria.`, 'success');
    }
  }

  function handleDoctorSelection(doctor) {
    // Save selected doctor
    localStorage.setItem('selectedDoctor', JSON.stringify({
      name: doctor.name,
      specialty: doctor.specialty.toLowerCase()
    }));
    
    // Set the form values
    const specialtySelect = document.getElementById('appointment-specialty');
    specialtySelect.value = doctor.specialty.toLowerCase();
    
    // Update doctor dropdown
    updateDoctorOptions(doctor.specialty.toLowerCase(), doctor.name);
    
    // Scroll to appointment form
    scrollToAppointment();
    
    // Show toast
    showToast('Doctor selected', `You selected ${doctor.name}`, 'success');
  }

  function updateDoctorOptions(specialty, preSelectedDoctor = null) {
    const doctorSelect = document.getElementById('doctor');
    doctorSelect.innerHTML = '';
    
    if (!specialty) {
      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = 'Select specialty first';
      doctorSelect.appendChild(defaultOption);
      doctorSelect.disabled = true;
      return;
    }
    
    doctorSelect.disabled = false;
    
    const availableDoctors = doctorsBySpecialty[specialty] || [];
    
    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Choose a doctor';
    doctorSelect.appendChild(defaultOption);
    
    // Add doctor options
    availableDoctors.forEach(doctorName => {
      const option = document.createElement('option');
      option.value = doctorName;
      option.textContent = doctorName;
      doctorSelect.appendChild(option);
    });
    
    // Select doctor if passed
    if (preSelectedDoctor) {
      doctorSelect.value = preSelectedDoctor;
    }
  }

  function handleAppointmentSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const specialty = document.getElementById('appointment-specialty').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const reason = document.getElementById('reason').value;
    
    // Simple validation
    if (!name || !email || !phone || !specialty || !doctor || !date || !time) {
      showToast('Missing information', 'Please fill in all required fields.', 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Invalid email', 'Please enter a valid email address.', 'error');
      return;
    }
    
    // Phone validation
    const phoneRegex = /^[0-9()\-\s]+$/;
    if (!phoneRegex.test(phone)) {
      showToast('Invalid phone', 'Please enter a valid phone number.', 'error');
      return;
    }
    
    // Date validation
    const currentDate = new Date();
    const selectedDate = new Date(date);
    if (selectedDate < currentDate) {
      showToast('Invalid date', 'Please select a future date.', 'error');
      return;
    }
    
    // Simulate form submission
    const submitButton = document.getElementById('submit-btn');
    submitButton.textContent = 'Scheduling...';
    submitButton.disabled = true;
    
    setTimeout(() => {
      // Show success message
      showToast('Appointment scheduled', `Your appointment with ${doctor} on ${formatDate(date)} at ${time} has been confirmed.`, 'success');
      
      // Reset form
      document.getElementById('appointment-form').reset();
      
      // Clear localStorage
      localStorage.removeItem('selectedDoctor');
      
      // Reset button
      submitButton.textContent = 'Schedule Appointment';
      submitButton.disabled = false;
    }, 1500);
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  function showToast(title, message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div>
        <strong>${title}</strong>
        ${message ? `<p>${message}</p>` : ''}
      </div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Remove toast after 5 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        toastContainer.removeChild(toast);
      }, 300);
    }, 5000);
  }
  
  // Check for stored doctor on page load
  const storedDoctor = localStorage.getItem('selectedDoctor');
  if (storedDoctor) {
    const doctor = JSON.parse(storedDoctor);
    if (doctor.name && doctor.specialty) {
      // Update form values
      const specialtySelect = document.getElementById('appointment-specialty');
      specialtySelect.value = doctor.specialty;
      updateDoctorOptions(doctor.specialty, doctor.name);
    }
  }
});
