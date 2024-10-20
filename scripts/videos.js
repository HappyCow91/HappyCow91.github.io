const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const volumeBar = document.getElementById('volumeBar'); // 소리 조절 슬라이더

// 재생 및 일시정지 기능
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '재생 중지';
        playPauseBtn.style.backgroundColor = 'red'
    } else {
        video.pause();
        playPauseBtn.style.backgroundColor = 'rgb(0, 255, 34)'
        playPauseBtn.textContent = '재생';
    }
});

// 진행바 업데이트
video.addEventListener('timeupdate', () => {
    if (video.duration > 0) {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.value = percent;
    }
});

// 진행바 조절
progressBar.addEventListener('input', () => {
    const newTime = (progressBar.value / 100) * video.duration;
    video.currentTime = newTime;
});

// 소리 조절
volumeBar.addEventListener('input', () => {
    video.volume = volumeBar.value / 100; // 0~1 범위로 설정
});
