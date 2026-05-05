function switchTab(id) {
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById('panel-' + id).classList.add('active');
            event.currentTarget.classList.add('active');
            window.scrollTo({ top: document.querySelector('.tabs-nav').offsetTop - 20, behavior: 'smooth' });
        }