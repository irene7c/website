document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const tabName = this.getAttribute('data-tab');
        fetch('tabs/' +tabName + '.html')
            .then(response => response.text())
            .then(html => {
                document.querySelectorAll('.tab-content').forEach(tc => tc.style.display = 'none');
                let container = document.getElementById(tabName);
                if (!container) {
                    container = document.createElement('div');
                    container.className = 'tab-content';
                    container.id = tabName;
                    document.querySelector('nav').after(container);
                }
                container.innerHTML = html;
                container.style.display = '';
            });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var activeTab = document.querySelector('.tab.active');
    if (activeTab) {
        activeTab.click();
    }
});