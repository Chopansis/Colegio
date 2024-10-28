function toggleContent(contentId) {
  const content = document.getElementById(contentId);
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
// Agrandar fotiños
document.querySelectorAll('.character-image').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.2)';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});

