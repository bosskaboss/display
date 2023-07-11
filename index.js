// Settings
var particleCount = 40,
flareCount = 10,
motion = 0.05,
tilt = 0.05,
color = '#FFEED4',
particleSizeBase = 1,
particleSizeMultiplier = 0.5,
flareSizeBase = 100,
flareSizeMultiplier = 100,
lineWidth = 1,
linkChance = 75, // chance per frame of link, higher = smaller chance
linkLengthMin = 5, // min linked vertices
linkLengthMax = 7, // max linked vertices
linkOpacity = 0.25; // number between 0 & 1
linkFade = 90, // link fade-out frames
linkSpeed = 1, // distance a link travels in 1 frame
glareAngle = -60,
glareOpacityMultiplier = 0.05,
renderParticles = true,
renderParticleGlare = true,
renderFlares = true,
renderLinks = true,
renderMesh = false,
flicker = true,
flickerSmoothing = 15, // higher = smoother flicker
blurSize = 0,
orbitTilt = true,
randomMotion = true,
noiseLength = 1000,
noiseStrength = 1;

var canvas = document.getElementById('stars')