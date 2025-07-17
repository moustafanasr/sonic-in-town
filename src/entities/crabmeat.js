import k from "../kaplayCtx";

export function makeCrabmeat(pos) {
  const crab = k.add([
    k.sprite("crabmeat", { anim: "walk" }),
    k.area({ shape: new k.Rect(k.vec2(0, 0), 32, 32) }),
    k.scale(4),
    k.anchor("center"),
    k.pos(pos),
    k.body({ isStatic: true }),
    k.state("walk", ["walk", "attack"]),
    "enemy",
    {
      health: 2,
      speed: 100,
      attackCooldown: false,
    }
  ]);

  crab.onStateEnter("walk", () => {
    crab.play("walk");
    crab.moveTo(k.rand(-200, 200), crab.pos.y, crab.speed);
    k.wait(k.rand(1, 3), () => crab.enterState("attack"));
  });

  crab.onStateEnter("attack", () => {
    if (!crab.attackCooldown) {
      crab.play("attack");
      crab.attackCooldown = true;
      
      // Shoot projectile
      const projectile = k.add([
        k.rect(20, 10),
        k.color(255, 0, 0),
        k.area(),
        k.anchor("center"),
        k.pos(crab.pos),
        k.move(k.vec2(-300, 0)),
        k.lifespan(2),
        "enemy-projectile",
      ]);
      
      k.wait(3, () => crab.attackCooldown = false);
    }
    crab.enterState("walk");
  });

  crab.onCollide("player-projectile", () => {
    crab.health--;
    if (crab.health <= 0) {
      k.destroy(crab);
      k.play("destroy", { volume: 0.5 });
    }
  });

  return crab;
}