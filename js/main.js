let progressDiv = document.getElementById("progress");
let progressBar = document.querySelectorAll(".progress");
let bars = document.querySelectorAll(".progress-bar");
let text = document.querySelectorAll(".inner-text");
let counterDiv = document.getElementById("counter");
let counter = document.getElementsByClassName("counter");
let listItemsNode = document.querySelectorAll(".list-group-item");
let listItems = Array. from(listItemsNode);
let filterItemsNode = document.querySelectorAll(".filter a");
let filterItems=Array. from(filterItemsNode);

// console.log(listItems);
// console.log(Array.isArray(listItems));
// console.log(filterItems);
// console.log(counterDiv);
// console.log(counter);
// console.log(progressBar);
// console.log(progressDiv);
// console.log(bars);
// console.log(text);
ScrollOut({
  targets: "#progress,#counter",
});

window.addEventListener(
  "scroll",
  function () {
    if (progressDiv.dataset.scroll == "in") {
      for (i = 0; i < progressBar.length; i++) {
        // console.log(progressBar[i]);
        let valuenow = progressBar[i].getAttribute("aria-valuenow");
        // console.log(valuenow);
        bars[i].style.width = valuenow + "%";
        let timer = setInterval(function () {
          for (i = 0; i < text.length; i++) {
            if (
              +text[i].innerText < progressBar[i].getAttribute("aria-valuenow")
            ) {
              text[i].innerText = +text[i].innerText + 1;
              // console.log(0);
            } else {
              clearInterval(timer);
            }
          }
        }, 500);
      }
    } else {
      for (i = 0; i < bars.length; i++) {
        bars[i].style.width = 0;
        text[i].innerText = 0;
      }
    }

    // counter
    if (counterDiv.dataset.scroll == "in") {
      let counterTimer = setInterval(function () {
        for (j = 0; j < counter.length; j++) {
          if (
            +counter[j].innerText < +counter[j].getAttribute("data-counter")
          ) {
            counter[j].innerText = +counter[j].innerText + 1;
          } else {
            clearInterval(counterTimer);
          }
        }
      }, 1);
    } else {
      for (j = 0; j < counter.length; j++) {
        counter[j].innerText = 0;
      }
    }
  }
  // end counter
);

let counterTimer = setInterval(function () {
  for (j = 0; j < counter.length; j++) {
    if (+counter[j].innerText < +counter[j].getAttribute("data-counter")) {
      counter[j].innerText = +counter[j].innerText + 1;
    } else {
      clearInterval(counterTimer);
    }
  }
}, 100);
// potofolio
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".list-group li.active").classList.remove("active");
    item.classList.add("active");
    let filterValue=item.dataset.filter
    console.log(filterValue);
    filterItems.forEach((image)=>{
if(image.classList.contains(filterValue)){
image.classList.add("active-image")
image.classList.remove("hidden-image")
}else{
  image.classList.remove("active-image")
  image.classList.add("hidden-image")
}
    })
  });
});
//end potofoli
// gallery
lightGallery(document.getElementById('gallery'), {

});
//end gallery
// animation on scroll

  AOS.init();

//end animation on scroll