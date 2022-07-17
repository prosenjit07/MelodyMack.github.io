const cover = document.getElementById('cover');
const disc = document.getElementById('disc');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const timer = document.getElementById('timer');
const duration = document.getElementById('duration');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');
let songIndex = 0;

// Songs info
const songs = [
  {
    title: 'Salamat',
    artist: 'Arijit singh',
    coverPath: 'assets/images/salamat.jpg',
    discPath: 'mp3/1.mp3',
    duration: '4:30',
  },
  {
    title: 'Khabhi Jo Badal',
    artist: 'Arijit singh',
    coverPath: 'assets/images/jackpot.jfif',
    discPath: 'mp3/2.mp3',
    duration: '4:13',
  },
  {
    title: 'Awargi',
    artist: 'Sangeet',
    coverPath: 'assets/images/love games.jfif',
    discPath: 'mp3/3.mp3',
    duration: '4:32',
  },

  {
    title: 'Teri Galiya',
    artist: 'Sradha kapor',
    coverPath: 'assets/images/galiyaan.jfif',
    discPath: 'mp3/4.mp3',
    duration: '4:14',
  },

  {
    title: 'Saanso ko',
    artist: 'Arijit singh',
    coverPath: 'assets/images/zid.jpg',
    discPath: 'mp3/5.mp3',
    duration: '4:48',
  },
  {
    title: 'Tu haa ki nahi',
    artist: 'Ankit Tawari',
    coverPath: 'assets/images/roy.jfif',
    discPath: 'mp3/6.mp3',
    duration: '5:33',
  },
  {
    title: 'Chod diya',
    artist: 'Arijit singh',
    coverPath: 'assets/images/baazar.jfif',
    discPath: 'mp3/7.mp3',
    duration: '5:15',
  },
  {
    title: 'Tum hi Anna',
    artist: 'Jubin Nautiyal',
    coverPath: 'assets/images/tum hi.jfif',
    discPath: 'mp3/8.mp3',
    duration: '4:27',
  },

  {
    title: 'Main Dhoondnee ko',
    artist: 'Arijit singh',
    coverPath: 'assets/images/main.jfif',
    discPath: 'mp3/9.mp3',
    duration: '4:30',
  },
  {
    title: 'Banjarra',
    artist: 'Mohammod Irfan',
    coverPath: 'assets/images/ek vilain.jfif',
    discPath: 'mp3/10.mp3',
    duration: '4:30',
  },
  {
    title: 'Teri Galiyaan',
    artist: 'Ankit Tiwari',
    coverPath: 'assets/images/galiyaan.jfif',
    discPath: 'mp3/11.mp3',
    duration: '4:30',
  },
  {
    title: 'Main Adhori',
    artist: 'Akansha Sharma',
    coverPath: 'assets/images/main adhori.jpg',
    discPath: 'mp3/12.mp3',
    duration: '4:30',
  },
  {
    title: 'Baatein Ye Khabi Ne',
    artist: 'Sreyaa Ghosal',
    coverPath: 'assets/images/batein.jpg',
    discPath: 'mp3/13.mp3',
    duration: '4:30',
  },
  {
    title: 'Khamosiyaan',
    artist: 'Arijit singh',
    coverPath: 'assets/images/khamosiyaan.jfif',
    discPath: 'mp3/14.mp3',
    duration: '4:30',
  },
  {
    title: 'Hamdard',
    artist: 'Arijit singh',
    coverPath: 'assets/images/humdard.jfif',
    discPath: 'mp3/15.mp3',
    duration: '4:30',
  },
  {
    title: 'O khudaa',
    artist: 'Amaal Molick',
    coverPath: 'assets/images/o khuda.jfif',
    discPath: 'mp3/16.mp3',
    duration: '4:30',
  },
  {
    title: 'Ishq Wali Love',
    artist: 'Shekhar Ravjiani & Salim',
    coverPath: 'assets/images/ishq.jpg',
    discPath: 'mp3/17.mp3',
    duration: '4:30',
  },
  {
    title: 'Khabhi Aynee Mein',
    artist: 'Jay Bahnushali',
    coverPath: 'assets/images/kbhi.jpg',
    discPath: 'mp3/18.mp3',
    duration: '4:30',
  },
  {
    title: 'Kuch Toh Haa',
    artist: 'Amaan Molick',
    coverPath: 'assets/images/kuch toh hain.jfif',
    discPath: 'mp3/19.mp3',
    duration: '4:30',
  },
  {
    title: 'Tum Hi Ho',
    artist: 'Arijit singh',
    coverPath: 'assets/images/tum hi ho.jfif',
    discPath: 'mp3/20.mp3',
    duration: '4:30',
  },
  {
    title: 'Assan Nahin Yahan',
    artist: 'Arijit singh',
    coverPath: 'assets/images/assan.jpg',
    discPath: 'mp3/21.mp3',
    duration: '3:34',
  },

];

// Load song initially
loadSong(songs[songIndex]);

// Load the given song
function loadSong(song) {
  cover.src = song.coverPath;
  disc.src = song.discPath;
  title.textContent = song.title;
  artist.textContent = song.artist;
  duration.textContent = song.duration;
}

// Toggle play and pause
function playPauseMedia() {
  if (disc.paused) {
    disc.play();
  } else {
    disc.pause();
  }
}

// Update icon
function updatePlayPauseIcon() {
  if (disc.paused) {
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
  } else {
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
  }
}

// Update progress bar
function updateProgress() {
  progress.style.width = (disc.currentTime / disc.duration) * 100 + '%';

  let minutes = Math.floor(disc.currentTime / 60);
  let seconds = Math.floor(disc.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  timer.textContent = `${minutes}:${seconds}`;
}

// Reset the progress
function resetProgress() {
  progress.style.width = 0 + '%';
  timer.textContent = '0:00';
}

// Go to previous song
function gotoPreviousSong() {
  if (songIndex === 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex = songIndex - 1;
  }

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex]);
  resetProgress();
  if (isDiscPlayingNow) {
    playPauseMedia();
  }
}

// Go to next song
function gotoNextSong(playImmediately) {
  if (songIndex === songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex = songIndex + 1;
  }

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex]);
  resetProgress();
  if (isDiscPlayingNow || playImmediately) {
    playPauseMedia();
  }
}

// Change song progress when clicked on progress bar
function setProgress(ev) {
  const totalWidth = this.clientWidth;
  const clickWidth = ev.offsetX;
  const clickWidthRatio = clickWidth / totalWidth;
  disc.currentTime = clickWidthRatio * disc.duration;
}

// Play/Pause when play button clicked
play.addEventListener('click', playPauseMedia);

// Various events on disc
disc.addEventListener('play', updatePlayPauseIcon);
disc.addEventListener('pause', updatePlayPauseIcon);
disc.addEventListener('timeupdate', updateProgress);
disc.addEventListener('ended', gotoNextSong.bind(null, true));

// Go to next song when next button clicked
prev.addEventListener('click', gotoPreviousSong);

// Go to previous song when previous button clicked
next.addEventListener('click', gotoNextSong.bind(null, false));

// Move to different place in the song
progressContainer.addEventListener('click', setProgress);
