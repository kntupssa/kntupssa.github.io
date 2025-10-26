// Simple Blog Search and Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    const authorFilter = document.getElementById('author-filter');
    const postItems = document.querySelectorAll('.post-item');
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterPosts();
        });
    }
    
    // Category filter
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterPosts);
    }
    
    // Author filter
    if (authorFilter) {
        authorFilter.addEventListener('change', filterPosts);
    }
    
    function filterPosts() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
        const selectedAuthor = authorFilter ? authorFilter.value : 'all';
        
        postItems.forEach(item => {
            const title = item.querySelector('.post-item-title a').textContent.toLowerCase();
            const description = item.querySelector('.post-item-description').textContent.toLowerCase();
            const author = item.querySelector('.post-item-meta a').textContent.toLowerCase();
            
            const matchesSearch = searchTerm === '' || 
                title.includes(searchTerm) || 
                description.includes(searchTerm);
            
            const matchesCategory = selectedCategory === 'all' || 
                item.dataset.category === selectedCategory;
            
            const matchesAuthor = selectedAuthor === 'all' || 
                author.includes(selectedAuthor.toLowerCase());
            
            if (matchesSearch && matchesCategory && matchesAuthor) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.3s ease-in';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    // Add fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});
