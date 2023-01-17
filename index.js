const fs = require("hexo-fs");
const path = require("path");

hexo.extend.tag.register(
  "collapsebtn",
  (args, content) => {
    const hintShow = args[0] || hexo.config.collapse?.hintShow || "Show";
    const hintHide = args[1] || hexo.config.collapse?.hintHide || "Hide";
    return `<div class='collapse'>
    <button class='collapse-ctrl'><span class='collapse-hint-show show'>${hintShow}</span><span class='collapse-hint-hide'>${hintHide}</span></button>
    <div class='collapse-content${
      hexo.config.collapse?.border ? " collapse-border" : ""
    }'>
        ${hexo.render.renderSync({
          text: content,
          engine: "markdown",
        })}
    </div>
</div>`;
  },
  {
    ends: true,
  }
);

hexo.extend.tag.register(
  "collapselink",
  (args, content) => {
    const hintShow = args[0] || hexo.config.collapse?.hintShow || "Show";
    const hintHide = args[1] || hexo.config.collapse?.hintHide || "Hide";
    return `<div class='collapse'>
      <a class='collapse-ctrl' href="javascript:void (0);"><span class='collapse-hint-show show'>${hintShow}</span><span class='collapse-hint-hide'>${hintHide}</span></a>
      <div class='collapse-content${
        hexo.config.collapse?.border ? " collapse-border" : ""
      }'>
          ${hexo.render.renderSync({
            text: content,
            engine: "markdown",
          })}
      </div>
  </div>`;
  },
  {
    ends: true,
  }
);

hexo.extend.generator.register("collapse_lib", () => [
  {
    path: "css/collapse.css",
    data: function () {
      return fs.createReadStream(
        path.resolve(path.resolve(__dirname, "./lib"), "collapse.css")
      );
    },
  },
  {
    path: "js/collapse.js",
    data: function () {
      return fs.createReadStream(
        path.resolve(path.resolve(__dirname, "./lib"), "collapse.js")
      );
    },
  },
]);

const css = hexo.extend.helper.get("css").bind(hexo);
const js = hexo.extend.helper.get("js").bind(hexo);

hexo.extend.injector.register("head_end", () => {
  return css("/css/collapse.css");
});

hexo.extend.injector.register("body_end", () => {
  return js("/js/collapse.js");
});
