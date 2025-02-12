    // // Function to update the mask based on scroll position
    // function updateMaskOnScroll() {
    //     const scrollY = window.scrollY; // Current scroll position
    //     const totalHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    //     const scrollProgress = scrollY / totalHeight; // Scroll progress (0 to 1)
  
    //     // Calculate the mask gradient based on scroll progress
    //     const maskValue = `linear-gradient(-20deg, transparent ${40 + scrollProgress * 40}%, white)`;
  
    //     // Apply the new mask to the ::before pseudo-element
    //     document.body.style.setProperty('--mask', maskValue);
    //     document.body.style.mask = maskValue;
    //   }
  
    //   // Add scroll event listener
    //   window.addEventListener('scroll', updateMaskOnScroll);
  
    //   // Initialize the mask on page load
    //   updateMaskOnScroll();











    // Function to update the mask based on scroll position
    function updateMaskOnScroll() {
      const scrollY = window.scrollY; // Current scroll position
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollProgress = scrollY / totalHeight; // Scroll progress (0 to 1)

      // Calculate the new mask gradient based on scroll progress
      const maskValue = `linear-gradient(${-20 + scrollProgress * 50}deg, transparent ${40 + scrollProgress * 40}%, white)`;

      // Update the :root variable --mask-gradient
      document.documentElement.style.setProperty('--mask-gradient', maskValue);
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateMaskOnScroll);

    // Initialize the mask on page load
    updateMaskOnScroll();