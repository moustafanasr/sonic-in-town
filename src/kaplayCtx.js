import kaplay from "kaplay";

const k = kaplay({
  width: 1920,
  height: 1080,
  letterbox: true,
  background: [0, 0, 0],
  global: false,
  buttons: {
    jump: {
      keyboard: ["space", "up", "w"],
    },
    left: {
      keyboard: ["left", "a"],
    },
    right: {
      keyboard: ["right", "d"],
    },
    up: {
      keyboard: ["up", "w"],
    }
  },
  touchToMouse: true,
  debug: false,
});

export default k;