document.addEventListener('DOMContentLoaded', () => {
    const breadcrumbContainer = document.getElementById('breadcrumb');
    const pathParts = window.location.pathname.split('/').filter(Boolean);

    let pathAccumulator = '/';
    const breadcrumbItems = pathParts.map((part, index) => {
        pathAccumulator += part + '/';
        const displayName = decodeURIComponent(part.charAt(0).toUpperCase() + part.slice(1));

        // If it's the last part (current page), show as bold text
        if (index === pathParts.length - 1) {
            return `<strong>${displayName}</strong>`;
        }

        // Otherwise, show as a clickable link
        return `<a href="${pathAccumulator}">${displayName}</a>`;
    });

    breadcrumbContainer.innerHTML = 
        `<a href="/">Home</a>` + 
        breadcrumbItems.map(item => ` &gt; ${item}`).join('');
});