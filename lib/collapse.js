var collapseToggle = function collapseToggle(dom) {
  var collapseDiv = dom.parentNode;
  var cCont = collapseDiv.children[1];
  if (cCont.classList.contains("collapsing")) return false;
  var cCtrl = collapseDiv.children[0];
  cCtrl.classList.toggle("show");
  if (cCont.classList.contains("expanded")) {
    cCont.style.height = cCont.getBoundingClientRect().height + "px";
    cCont.offsetHeight;
    cCont.classList.add("collapsing");
    cCont.classList.remove("collapse-content", "expanded");
    setTimeout(function () {
      cCont.classList.remove("collapsing");
      cCont.classList.add("collapse-content");
    }, 350);
    cCont.style.height = "";
  } else {
    cCont.classList.remove("collapse-content");
    cCont.classList.add("collapsing");
    cCont.style.height = cCont.scrollHeight + "px";
    setTimeout(function () {
      cCont.classList.remove("collapsing");
      cCont.classList.add("collapse-content");
      cCont.classList.add("expanded");
      cCont.style.height = "";
    }, 350);
  }
};