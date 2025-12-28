document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active from all tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(tc => tc.style.display = 'none');
        // Activate clicked tab and show its content
        this.classList.add('active');
        document.getElementById(this.dataset.tab).style.display = '';
    });
});