## Install / 安装

```bash
npm install hexo-tag-collapse-spoiler --save
```

## Syntax / Tag用法

```plain
{% collapse(btn|link|card) HINT_SHOW HINT_HIDE %}
content
{% endcollapse(btn|link|card) %}
```

It will hide your content and place the HINT at the top with a button, link or card.

See the demo below.

## Demo / 示例

![ ](/example.gif)

### Corresponding Tags / 对应代码

```plain
{% collapsebtn "Click to show" "Click to hide" %}
content1
{% endcollapsebtn %}

{% collapselink Show Hide %}
content2
{% endcollapselink %}

{% collapsecard 展开 收起 %}
{% collapselink Show2 Hide2 %}
content3
{% endcollapselink %}
{% endcollapsecard %}
```



## Config (optional) / 可选配置

In the global `_config.yml`: / 在站点的配置文件 `_config.yml` 里

```yaml
collapse:
  border: false  # Whether to enable borders for content hidden using 'collapsebtn' and 'collapselink' / 是否开启按钮和链接样式的边框
  hint_show: Show # Default text for 'Show' operation / 展开默认提示文字
  hint_hide: Hide # Default text for 'Hide' operation / 收起默认提示文字
```



## Thanks

Improved from [hexo-sliding-spoiler](https://github.com/fletchto99/hexo-sliding-spoiler), using the workings of [Bootstrap's collapse](https://getbootstrap.com/docs/5.3/components/collapse/#how-it-works). With better performance and compatibility for the hidden element, and more customisation options.

