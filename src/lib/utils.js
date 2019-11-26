function myanimate(ele, target) {
  clearInterval(ele.timer);
  ele.timer = setInterval(() => {
    if (target > 0) {
      target = 0;
    }
    let speed = target > ele.offsetLeft ? 5 : -5;
    let diff = target - ele.offsetLeft;
    ele.style.left = ele.offsetLeft + speed + 'px';
    if (Math.abs(diff) < Math.abs(speed)) {
      ele.style.left = target + 'px';
      clearInterval(ele.timer);
    }
  });
}
export default {
  myanimate,
};
