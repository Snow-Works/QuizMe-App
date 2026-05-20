// Theme & Modal Logic bundled together
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            themeIcon.className = isDark ? 'fas fa-sun text-yellow-400' : 'fas fa-moon';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
            themeIcon.className = 'fas fa-sun text-yellow-400';
        }

        function openCommunityModal() { document.getElementById('communityModal').style.display = 'flex'; }
        function closeCommunityModal() { document.getElementById('communityModal').style.display = 'none'; }
        function openStoryModal() { document.getElementById('storyModal').style.display = 'flex'; }
        function closeStoryModal() { document.getElementById('storyModal').style.display = 'none'; }
        function toggleProfilePopup() { document.getElementById('profilePopup').classList.toggle('hidden'); }

        function handleDecision(choice) {
            if (choice === 'yes') {
                burstEmojis();
                document.getElementById('communityDecision').innerHTML = `
                    <h2 class="text-2xl font-black mb-4 dark:text-white text-center">Welcome to the Tribe</h2>
                    <a href="https://chat.whatsapp.com/EoRkie8rB1y4uZrQ1Aj0iN?mode=gi_t" class="block w-full py-4 bg-[#28a745] text-white text-center font-bold rounded-2xl animate-bounce">Join WhatsApp Group</a>
                    <button onclick="closeCommunityModal()" class="w-full mt-4 text-slate-400 text-xs text-center">Close</button>
                `;
            } else { window.location.href = 'login.html'; }
        }

        function burstEmojis() {
            const container = document.getElementById('emojiContainer');
            const emojis = ['🧠', '📚', '🧠', '📖', '💡', '📚'];
            emojis.forEach((emoji, i) => {
                const span = document.createElement('span');
                span.innerText = emoji;
                span.className = 'absolute text-3xl animate-fly-emoji';
                span.style.left = (15 * i) + '%';
                span.style.bottom = '0%';
                container.appendChild(span);
            });
        }

        // Scroll reveal logic for Explore section
        window.addEventListener('scroll', () => {
            document.querySelectorAll('.reveal').forEach(el => {
                if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
            });
        });

        function logout() { window.location.reload(); };