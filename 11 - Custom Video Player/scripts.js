// Was completely empty

// Get elements
const video = document.querySelector("video");
const toggle = document.querySelector(".toggle");
const skippers = document.querySelectorAll("button[data-skip]");
const ranges = document.querySelectorAll(".player__slider");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");

// Build out functions
// 1. togglePlay (2 event listeners)
function togglePlay() {
  video.paused ? video.play() : video.pause();
};
// 2. updateButton (2 event listeners)
function updateButton() {
  toggle.textContent = video.paused ? "❚ ❚" : "►";
};
// 3. skip
function skip() {
  video.currentTime += parseInt(this.dataset.skip, 10);
};
// 4. handleRangeUpdate
function handleRangeUpdate() {
  video[`${this.name}`] = this.value;
};
// 5. handleProgress
function handleProgress() {
  const percentageFill = video.currentTime / video.duration * 100;
  progressBar.style.flexBasis = `${percentageFill}%`;
};
// 6. scrub (2 event listeners)
function scrub(event) {
  video.currentTime = event.offsetX / progress.offsetWidth; * video.duration;
};

// Hook up event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skippers.forEach(skipper => skipper.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener("mouseup", handleRangeUpdate));

progress.addEventListener("click", scrub);

