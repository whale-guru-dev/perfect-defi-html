// range styling
function isOlderEdgeOrIE() {
    return (
      window.navigator.userAgent.indexOf("MSIE ") > -1 ||
      !!navigator.userAgent.match(/Trident.*rv\:11\./) ||
      window.navigator.userAgent.indexOf("Edge") > -1
    );
  }
  
  function valueTotalRatio(value, min, max) {
    return ((value - min) / (max - min)).toFixed(2);
  }
  
  function getLinearGradientCSS(ratio, leftColor, rightColor) {
    return [
      "-webkit-gradient(",
      "linear, ",
      "left top, ",
      "right top, ",
      "color-stop(" + ratio + ", " + leftColor + "), ",
      "color-stop(" + ratio + ", " + rightColor + ")",
      ")",
    ].join("");
  }
  
  function updateRangeEl(rangeEl) {
    var ratio = valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);
  
    rangeEl.style.backgroundImage = getLinearGradientCSS(
      ratio,
      "#f8f8f8",
      "#8095A9"
    );
  }
  
  function initRangeEl() {
    const allRanges2 = document.querySelectorAll(".range-wrap");
  
    allRanges2.forEach((wrap2) => {
      const rangeEl = wrap2.querySelector("input[type=range]");
  
      if (isOlderEdgeOrIE()) {
        rangeEl.style.height = "20px";
        // IE 11/10 fires change instead of input
        // https://stackoverflow.com/a/50887531/3528132
        rangeEl.addEventListener("change", function (e) {
          textEl.value = e.target.value;
        });
        rangeEl.addEventListener("input", function (e) {
          textEl.value = e.target.value;
        });
      } else {
        updateRangeEl(rangeEl);
        rangeEl.addEventListener("input", function (e) {
          updateRangeEl(e.target);
          textEl.value = e.target.value;
        });
      }
    });
  
    // var textEl = document.querySelector('input[type=text]');
  
    /**
     * IE/Older Edge FIX
     * On IE/Older Edge the height of the <input type="range" />
     * is the whole element as oposed to Chrome/Moz
     * where the height is applied to the track.
     *
     */
  }
  
  initRangeEl();
  
  // range tool tip
  
  const allRanges = document.querySelectorAll(".range-wrap");
  allRanges.forEach((wrap) => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");
    const bubbled = wrap.querySelector(".bubbled");
  
    range.addEventListener("input", () => {
      setBubble(range, bubble, bubbled);
    });
    setBubble(range, bubble, bubbled);
  });
  
  
  function setBubble(range, bubble, bubbled) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = `${val}`;
  
    // Sorta magic numbers based on size of the native UI thumb
    bubbled.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  }
  