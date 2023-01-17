(function (document) {
  [].forEach.call(
    document.getElementsByClassName("collapse"),
    function (panel) {
      panel.children[0].onclick = function () {
        const cCtrl=panel.children[0];
        const cCont = panel.children[1];
        cCtrl.children[0].classList.toggle("show");
        cCtrl.children[1].classList.toggle("show");
        if (cCont.classList.contains("expanded")) {
          cCont.style.height = cCont.getBoundingClientRect().height + "px";
          cCont.offsetHeight;
          cCont.classList.add("collapsing");
          cCont.classList.remove("collapse-content", "expanded");
          setTimeout(() => {
            cCont.classList.remove("collapsing");
            cCont.classList.add("collapse-content");
          }, 350);
          cCont.style.height = "";
        } else {
          cCont.classList.remove("collapse-content");
          cCont.classList.add("collapsing");
          cCont.style.height = cCont.scrollHeight + "px";
          setTimeout(() => {
            cCont.classList.remove("collapsing");
            cCont.classList.add("collapse-content");
            cCont.classList.add("expanded");
            cCont.style.height = "";
          }, 350);
        }
      };
    }
  );
})(document);
