// script.js

// Course data
const courses = {
    'first-aid': {
        title: 'First Aid',
        fees: 'R1500',
        purpose: 'To provide first aid awareness and basic life support',
        content: [
            'Wounds and bleeding',
            'Burns and fractures',
            'Emergency scene management',
            'Cardio-Pulmonary Resuscitation (CPR)',
            'Respiratory distress e.g., Choking, blocked airway',
        ],
    },
    'sewing': {
        title: 'Sewing',
        fees: 'R1500',
        purpose: 'To provide alterations and new garment tailoring services',
        content: [
            'Types of stitches',
            'Threading a sewing machine',
            'Sewing buttons, zips, hems and seams',
            'Alterations',
            'Designing and sewing new garments',
        ],
    },
    'landscaping': {
        title: 'Landscaping',
        fees: 'R1500',
        purpose: 'To provide landscaping services for new and established gardens',
        content: [
            'Indigenous and exotic plants and trees',
            'Fixed structures (fountains, statues, benches, tables, built-in braai)',
            'Balancing of plants and trees in a garden',
            'Aesthetics of plant shapes and colours',
            'Garden layout',
        ],
    },
    'life-skills': {
        title: 'Life Skills',
        fees: 'R1500',
        purpose: 'To provide skills to navigate basic life necessities',
        content: [
            'Opening a bank account',
            'Basic labour law (know your rights)',
            'Basic reading and writing literacy',
            'Basic numeric literacy',
        ],
    },
    'child-minding': {
        title: 'Child Minding',
        fees: 'R750',
        purpose: 'To provide basic child and baby care',
        content: [
            'Birth to six-month old baby needs',
            'Seven-month to one year old needs',
            'Toddler needs',
            'Educational toys',
        ],
    },
    'cooking': {
        title: 'Cooking',
        fees: 'R750',
        purpose: 'To prepare and cook nutritious family meals',
        content: [
            'Nutritional requirements for a healthy body',
            'Types of protein, carbohydrates and vegetables',
            'Planning meals',
            'Preparation and cooking of meals',
        ],
    },
    'garden-maintenance': {
        title: 'Garden Maintenance',
        fees: 'R750',
        purpose: 'To provide basic knowledge of watering, pruning and planting in a domestic garden',
        content: [
            'Water restrictions and the watering requirements of indigenous and exotic plants',
            'Pruning and propagation of plants',
            'Planting techniques for different plant types',
        ],
    },
};

// Function to show course info
function showCourseInfo(course) {
    const courseInfo = document.getElementById('course-info');
    const selectedCourse = courses[course.dataset.course];

    if (selectedCourse) {
        courseInfo.innerHTML = `
            <h3>${selectedCourse.title}</h3>
            <p><strong>Fees:</strong> ${selectedCourse.fees}</p>
            <p><strong>Purpose:</strong> ${selectedCourse.purpose}</p>
            <p><strong>Content:</strong></p>
            <ul>
                ${selectedCourse.content.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        courseInfo.classList.remove('hidden');

        // Insert the course info directly after the clicked course link
        course.insertAdjacentElement('afterend', courseInfo);
    }
}

// Event listeners for course links
const courseLinks = document.querySelectorAll('.course');
courseLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor click behavior
        showCourseInfo(this);
    });
});
