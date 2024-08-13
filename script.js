function showSubsection(subsectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.sections section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the clicked section
    const sectionToShow = document.getElementById(subsectionId).parentElement;
    sectionToShow.style.display = 'block';

    // Hide all subsections
    const subsections = document.querySelectorAll('.subsection');
    subsections.forEach(subsection => {
        subsection.style.display = 'none';
    });

    // Remove 'active' class from all subsections
    subsections.forEach(subsection => {
        subsection.classList.remove('active');
    });

    // Show the clicked subsection and add 'active' class
    const subsectionToShow = document.getElementById(subsectionId);
    subsectionToShow.style.display = 'block';
    subsectionToShow.classList.add('active');
}