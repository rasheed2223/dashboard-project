document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".add-project").addEventListener("click", function() {
        alert("Add Project button clicked!");
    });

    const ctx = document.getElementById('paymentChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Total Payments', 'Pending Payments', 'Completed Payments'],
            datasets: [{
                label: 'Amount ($)',
                data: [500000, 120000, 380000],
                backgroundColor: ['#8e44ad', '#2980b9', '#e67e22']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    enabled: true
                }
            }
        }
    });

    // Dark mode toggle
    window.toggleDarkMode = function() {
        document.body.classList.toggle('dark-mode');
    };

    // Table Validation & Add Row
    document.getElementById("addRow").addEventListener("click", function() {
        const table = document.querySelector(".data-table tbody");
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const userType = document.getElementById("userType").value;
        const status = document.getElementById("status").value;

        if (!name || !email || !userType || !status) {
            alert("All fields are required!");
            return;
        }

        const row = `<tr><td>${name}</td><td>${email}</td><td>${userType}</td><td class="${status.toLowerCase()}">${status}</td></tr>`;
        table.innerHTML += row;
    });
});
