# Hyde Theme for Bolt CMS

Hyde is a brazen two-column theme that pairs a prominent sidebar with uncomplicated content. It's based on [Poole](http://getpoole.com), the Jekyll butler. Both created by [Mark Otto](https://github.com/mdo).

This is the [Bolt CMS](http://bolt.cm/) adaption of the theme.

![hyde-for-bolt-01](https://user-images.githubusercontent.com/7450884/28960604-a62ac4ea-78ff-11e7-830f-5eff2b994056.png)

---

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Options](#options)
	- [Sidebar menu](#sidebar-menu)
	- [Reverse layout](#reverse-layout)
	- [Themes](#themes)
	- [Sticky sidebar content](#sticky-sidebar-content)
- [Features](#features)
	- [Favicon](#favicon)
	- [Custom CSS](#custom-css)
	- [Change Labels for pager](#change-labels-for-pager)
	- [Optional display of teaserimage in main article](#optional-display-of-teaserimage-in-main-article)
	- [Galleries](#galleries)
	- [GPX tracks](#gpx-tracks)
	- [Code highlighting](#code-highlighting)
	- [Copyright notice](#copyright-notice)
	- [Optional publishing of date and taxonomies](#optional-publishing-of-date-and-taxonomies)
	- [Latest posts template](#latest-posts-template)
	- [Archive template](#archive-template)
	- [Prevent listing](#prevent-listing)
	- [Maintenance text](#maintenance-text)
	- [Password Protection Extension](#password-protection-extension)
- [License](#license)

<!-- /TOC -->

## Options

Hyde for Bolt includes some customizable options, typically applied via `theme.yml` file.

### Sidebar menu

The `main` menu is used for the sidebar, you can adjust it in the `config://menu.yml` file.

You can show a very basic search-box as any item in the menu, to enable it add
an entry with `class: menusearch` to your menu, the `label` will be used as placeholder
for the searchbox.
A `menu.yml` can look like this:
```yml
main:
    - label: Home
      title: Welcome page
      path: homepage
      class: first
    - label: Posts
      path: posts
    - label: Entries
      path: entries
    - label: Search...
      class: menusearch
```


You can show a copyright notice for your site at the bottom of the sidebar, to enable it set `show_copyright_in_sidebar: true` in `theme.yml`.

### Reverse layout

Hyde for Bolt's page orientation can be reversed by setting `reverse_layout: true` in `theme.yml`.

### Themes

Hyde for Bolt ships with eight optional themes based on the [base16 color scheme](https://github.com/chriskempson/base16). Apply a theme to change the color scheme (mostly applies to sidebar and links).

![Hyde theme classes](https://f.cloud.github.com/assets/98681/1817044/e5b0ec06-6f68-11e3-83d7-acd1942797a1.png)

To use a theme, uncomment the related line in `theme.yml` to set the `color_theme` variable to the right value.

### Sticky sidebar content

By default Hyde for Bolt ships with a sidebar that affixes it's content to the bottom of the sidebar. You can optionally disable this by setting `sticky_sidebar: false` in `theme.yml`.


## Features

### Favicon

Just add a `favicon.png` with at least size of 180px*180px at the top level of your files-folder and it will be used as _favicon_ as well as _apple-touch-icon_, otherwise the themes [default favicon](images/favicon.png) will be used.

### Custom CSS

You can upload your own CSS-file to change some small things.
The file has to be named `custom.css` and be placed in the top level of your files-directory.

__Note:__ this is only working if the `css` is provided with the correct Content-Type,
a [Pull Request to the Bolt CMS repo](https://github.com/bolt/bolt/pull/6964) was created, please check if it was accepted
or add the necessary change to your installation of Bolt if you want to use this feature.

A typical `custom.css` (to change the color for links) can be:
```css
a{
    color: red;
}
```

### Change Labels for pager

The labels for _Newer_ and _Older_ Buttons in Listings can be changed in `theme.yml`.

### Optional display of teaserimage in main article

By adding the field `show_image_above_body` with `type: checkbox` to your ContentType you can regulate if the teaser image will be shown on top of the article/entry. Normally the teaser image (field `image`) is only used for listings.

### Galleries

Hyde for Bolt supports galleries - to use them just add a field `gallery` with `type: imagelist` to your ContentType. [PhotoSwipe](http://photoswipe.com/) is used as lightbox for the gallery images.

Captions can be shown optionally, to manage this behavior add a field `show_gallery_captions` with `type: checkbox` to your ContentType.

### GPX tracks

If you regularly publish gpx tracks with your posts, you can add a field `gpx` with `type: file` to your ContentType. You also have to extend `accept_file_types` in `config.yml` to accept `gpx`-files in order to be able to upload your tracks. If a nonempty field `gpx` is found in your record a map is drawn right below the content (and above a gallery, if there is one).

The map is created using [leaflet](http://leafletjs.com/) and [leaflet-gpx](https://github.com/mpetazzoni/leaflet-gpx) and uses maptiles from the [Open Street Map Project](https://www.openstreetmap.org), some symbols from [Font Awesome](http://fontawesome.io/) are used in the footer to indicate distance, duration and elevations of your track.

### Code highlighting

Code blocks are highlighted using [highlight.js](https://highlightjs.org/), the theme used for highlighting can be defined in `theme.yml` by setting the `highlight_theme` variable (use only lowercase!), see the [highlight.js demo page](https://highlightjs.org/static/demo/) for previews of the different themes.

### Copyright notice

If you regularly use content which needs a copyright notice, just add a field `copyright` with `type: html` or `type:markdown` to your ContentType. The notice will be added below your content, and below the gallery (if there is one).

### Optional publishing of date and taxonomies

You can define for which ContentTypes the publishing date will be displayed by adding `show_publishdate: true` to your ContentTypes values in `config://contenttypes.yml`. Typically you don't want to show the publishdate for pages.

Display of taxonomies can be controlled via adding a corresponding value, e.g. `shown_taxonomies: [ categories, tags ]` to your ContentType definition. Hereby it is possible to use some taxonomies internally but not showing them to your visitors. Tags will be prefixed with a hash #, categories will be prefixed with an @.

Both rules apply for listings as well as the display of the documents.

### Latest posts template

You can use the template `latest.twig`
(see [Bolt Docs](https://docs.bolt.cm/3.3/fields/templateselect)) to include
lists of the last three entries of each of your ContentTypes.
Please note that ContentTypes with `hide_in_listings: true` will not appear in
the list of the latest entries (see [below](#prevent-listing)).
Also `viewless` must not be set to `true`.  
The lists will be shown below the _normal_ content (title, body/content) of the
record whose template is set to `latest.twig`.

### Archive template

Similar to the _latest template_ (see above) there also exists an `archive.twig`
template which can be used to list __all__ records of all ContentTypes.
Again note that ContentTypes with `hide_in_listings: true` will not appear in
the list and `viewless` must not be set to `true`.

### Prevent listing

You can prevent records of a certain ContentTypes from showing in listings and
in in the _latest template_ and _archive template_ (see above) by adding
`hide_in_listings: true` to this ContentType.  
This can be useful for ContentTypes that should not be listable (e.g. pages).
Unfortunately there seems to be no build-in parameter to _forbid_ listings for a
certain ContentType.

### Maintenance text

To set an individual title and content of your Maintenance-Site, just create `block/maintenance` (it has to have exactly this slug) and set title and content there.

### Password Protection Extension

The theme supports the [PasswordProtect extension by Bob den Otter](https://github.com/bobdenotter/PasswordProtect).  
To use it, just add the following new `field` to the `fields` of the ContentType you want to protect:
```
use_password_protection:
            type: checkbox
            default: false
            label: 'Use the password protection provided by the PasswordProtect extension'
            variant: inline
```

Now you are able to decide which records you want to password protect.

Please note you have to provide a _redirect page_ in the configuration of the __extension__.  
You have to create this page on your own, but you can use the `login.twig` template provided by of this theme.

Password protected records are emphasized by a lock symbol 🔒 in listings and the record-page itself.

## License

Open sourced under the [MIT license](LICENSE.md).

<3
