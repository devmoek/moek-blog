---
title: How To Add Different Breadcrumbs Background Images in Each Collection Page Using Larine Theme?
date: "2022-06-17T22:12:03.284Z"
description: "If you want to show different background images follow my steps I wrote in this article."
---

## Modify collection.template.liquid file
```liquid
{% if section.settings.ena_bg_img %} style="background-image : 
url({% if section.settings.bg_breadcrumb != blank  %}{{section.settings.bg_breadcrumb | img_url : 'master'}}
 {% elsif  collection.image != blank %}  {{ collection.image | image_url: width: 2048 }}
  {% else %}
   //via.placeholder.com/1920x300
   {% endif %}); background-position : center; background-size: cover" {% else %}style="background-color : {{section.settings.bg_color_breadcrumb}}"{% endif %}>
```

## Be sure you don't have picked an image in the admin panel
If so, unpick it because you'll not be able to see a different background images.
![breadcrumbs background image not picked](../../../src/images/breadcrumbs-article/background-image.png)

## Set collection image
![collection image](../../../src/images/breadcrumbs-article/collection-image.png)

## How it works? 
If your section don't have a background image then collection image will show up. If you don't have a collection image, then you will see a dummy image from the theme.

## If you have another theme
If your theme is not Larine. You can try to use this code, but I think it will work not correctly. So, you need to change a dummy image first, because 100% you don't have a file with this name in your theme. Next you should check a sections name. If they are the same, then alright, if no - you need to change them.

## Overall 
That's it. Super simple and looks great. Use high resolution images as a collection image and all will be fine. If you have any questions you can send me a message and I'll try all my best to help you. Also, I have [YouTube channel](https://www.youtube.com/channel/UCJ7a90E4ZflmScpRxfyyeCw) where you can check videos about Shopify(and more). I'm posting videos not so often, because have 2 more channels, but I'm trying. 