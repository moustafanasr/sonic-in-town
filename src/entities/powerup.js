import k from "../kaplayCtx";

export function makePowerup(pos, type) {
  const powerup = k.add([
    k.sprite("powerups", { anim: type }),
    k.area(),
    k.scale(4),
    k.anchor("center"),
    k.pos(pos),
    k.body({ isStatic: true }),
    {
      type: type,
    },
    "powerup",
  ]);

  // Add floating animation
  let floatDirection = 1;
  powerup.onUpdate(() => {
    powerup.pos.y += floatDirection * 0.5;
    if (powerup.pos.y > pos.y + 20) floatDirection = -1;
    if (powerup.pos.y < pos.y - 20) floatDirection = 1;
  });

  return powerup;
}