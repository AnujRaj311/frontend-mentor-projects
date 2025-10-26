const shareBtn = document.querySelector('.share-section');
const socialMedia = document.querySelector('.social-media');
const profile = document.querySelector('.profile-details');
const profileImg = document.querySelector('.share');

shareBtn.addEventListener('click', () => {
  socialMedia.classList.toggle('hidden');
  profile.classList.toggle('active');
  profileImg.classList.toggle('active');
  if(profile.classList.contains('active')) {
    shareBtn.classList.add('full-width');
  } else {
    shareBtn.classList.remove('full-width');
  }

});
