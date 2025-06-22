document.addEventListener('DOMContentLoaded', () => {
    // --- Image Upload ---
    const imageUploadContainers = document.querySelectorAll('.image-upload-container');

    imageUploadContainers.forEach(container => {
        const input = container.querySelector('input[type="file"]');
        const placeholder = container.querySelector('.placeholder');
        const imagePreview = container.querySelector('.image-preview');

        container.addEventListener('click', () => {
            input.click();
        });

        input.addEventListener('change', () => {
            const file = input.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imagePreview.src = e.target.result;
                    placeholder.classList.add('hidden');
                    imagePreview.classList.remove('hidden');
                    container.classList.add('has-image');
                };
                reader.readAsDataURL(file);
            }
        });
    });

    // --- Section Switching (for now, just logging) ---
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`Navigating to ${link.textContent}`);
            // In the future, this will show/hide the relevant section
        });
    });

    // --- View Button Modal ---
    const viewButtons = document.querySelectorAll('.view-button');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeButtons = document.querySelectorAll('.close-modal');

    if (modal && closeButtons.length > 0) {
        viewButtons.forEach(button => {
            button.addEventListener('click', () => {
                const card = button.closest('.memory-card');
                const title = card.querySelector('h4').textContent;
                const imgSrc = card.querySelector('.image-preview')?.src;

                // For now, just showing the title in the modal
                modalContent.innerHTML = `<h2 class="font-serif text-3xl text-maroon mb-4">${title.trim()}</h2>`;
                if(imgSrc && card.querySelector('.image-upload-container.has-image')) {
                    modalContent.innerHTML += `<img src="${imgSrc}" class="w-full h-auto rounded-md my-4">`;
                }
                modalContent.innerHTML += `<p class="text-maroon">Here you can add or view the full story.</p>`;

                modal.classList.remove('hidden');
            });
        });

        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        });

        // Close modal if clicking outside of the content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }
});
