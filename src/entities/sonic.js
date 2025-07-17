import k from "../kaplayCtx";

export function makeSonic(pos) {
  const sonic = k.add([
    k.sprite("sonic", { anim: "run" }),
    k.scale(4),
    k.area(),
    k.anchor("center"),
    k.pos(pos),
    k.body({ 
      jumpForce: 1700,
      maxSpeed: 800,  // Add max speed limit
    }),
    {
      speed: 500,
      isFacingRight: true,
      ringCollectUI: null,
      
      setControls() {
        // Jump control (unchanged)
        k.onButtonPress("jump", () => {
          if (this.isGrounded()) {
            this.play("jump");
            this.jump();
            k.play("jump", { volume: 0.5 });
          }
        });

        // Continuous movement controls
        k.onButtonDown("left", () => {
          this.moveLeft();
        });
        
        k.onButtonDown("right", () => {
          this.moveRight();
        });
        
        k.onButtonDown("up", () => {
          this.moveUp();
        });
        
        // Stop when keys are released
        k.onButtonRelease(["left", "right"], () => {
          if (!k.isButtonDown("left") && !k.isButtonDown("right")) {
            this.stopX();
          }
        });
        
        k.onButtonRelease("up", () => {
          this.stopY();
        });
      },
      
      moveLeft() {
        this.isFacingRight = false;
        this.flipX = true;
        this.play("run");
        this.move(-this.speed, 0);
      },
      
      moveRight() {
        this.isFacingRight = true;
        this.flipX = false;
        this.play("run");
        this.move(this.speed, 0);
      },
      
      moveUp() {
        if (this.isGrounded()) {
          this.jump();
        } else {
          // Allow limited air control
          this.move(0, -this.speed * 0.6);
        }
      },
      
      stopX() {
        this.move(0, this.vel.y);
      },
      
      stopY() {
        this.move(this.vel.x, 0);
      },
      
      setEvents() {
        this.onGround(() => {
          this.play("run");
        });
      },
    },
  ]);

  sonic.ringCollectUI = sonic.add([
    k.text("", { font: "mania", size: 24 }),
    k.color(255, 255, 0),
    k.anchor("center"),
    k.pos(30, -10),
  ]);

  return sonic;
}