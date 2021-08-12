class KeystrokeLogger {
    #maxCount = 10;

    constructor() {
        this.downKey = 0;
        this.upKey = 0;
        this.leftKey = 0;
        this.rightKey = 0;
    }

    incrementUp() {
        this.upKey += 1;
        this.upKey = ceiling(this.upKey, maxCount);
    }
    incrementDown() {
        this.downKey += 1;
        this.downKey = ceiling(this.downKey, maxCount);
    }
    incrementLeft() {
        this.leftKey += 1;
        this.downKey = ceiling(this.downKey, maxCount);
        
    }
    incrementRight() {
        this.rightKey += 1;
        this.downKey = ceiling(this.downKey, maxCount);
    }

    resetCounts() {
        this.downKey = 0;
        this.upKey = 0;
        this.leftKey = 0;
        this.rightKey = 0;
    }

    ceiling(value, max) {
        if (value > max) {
            return max;
        } else {
            return value;
        }
    }
}