function bouncingBall(h, bounce, window) {
    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
        let bounces = 0;
        while (h > window) {
            h *= bounce;
            bounces += 2;
        }
        return bounces - 1;
        } else {
        return -1;
    }
}