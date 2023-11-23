"use strict";
cc._RF.push(module, 'b17bdM6/FlI8aRFdqpwmXvl', 'SkeletonExt');
// game/scripts/SkeletonExt.js

"use strict";

cc.game.once(cc.game.EVENT_ENGINE_INITED, function () {
  cc.js.mixin(sp.Skeleton.prototype, {
    update: function update(dt) {
      // if (CC_EDITOR) return;
      if (CC_EDITOR) {
        cc.engine._animatingInEditMode = 1;
        cc.engine.animatingInEditMode = 1;
      }

      if (this.paused) return;
      dt *= this.timeScale * sp.timeScale;

      if (this.isAnimationCached()) {
        // Cache mode and has animation queue.
        if (this._isAniComplete) {
          if (this._animationQueue.length === 0 && !this._headAniInfo) {
            var frameCache = this._frameCache;

            if (frameCache && frameCache.isInvalid()) {
              frameCache.updateToFrame();
              var frames = frameCache.frames;
              this._curFrame = frames[frames.length - 1];
            }

            return;
          }

          if (!this._headAniInfo) {
            this._headAniInfo = this._animationQueue.shift();
          }

          this._accTime += dt;

          if (this._accTime > this._headAniInfo.delay) {
            var aniInfo = this._headAniInfo;
            this._headAniInfo = null;
            this.setAnimation(0, aniInfo.animationName, aniInfo.loop);
          }

          return;
        }

        this._updateCache(dt);
      } else {
        this._updateRealtime(dt);
      }
    }
  });
});

cc._RF.pop();