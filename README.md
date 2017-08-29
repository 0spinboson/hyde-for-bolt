# Hyde Theme for Bolt CMS

Hyde is a brazen two-column theme that pairs a prominent sidebar with
uncomplicated content. It's based on [Poole](http://getpoole.com), the Jekyll butler. Both created by [Mark Otto](https://github.com/mdo).

This is the [Bolt CMS](http://bolt.cm/) adaption of the theme.

![hyde-for-bolt-01](https://user-images.githubusercontent.com/7450884/28960604-a62ac4ea-78ff-11e7-830f-5eff2b994056.png)


## Contents

- [Options](#options)
  - [Sidebar menu](#sidebar-menu)
  - [Sticky sidebar content](#sticky-sidebar-content)
  - [Themes](#themes)
  - [Reverse layout](#reverse-layout)
- [Features](#features)
  - [Optional display of teaserimage in main article](#Optional-display-of-teaserimage-in-main-article)
  - [Galleries](#galleries)
  - [GPX tracks](#gpx-tracks)
  - [Optional publishing date and taxonomies](#optional-publishing-date-and-taxonomies)
  - [Code highlighting](#code-highlighting)
  - [Maintenance Text](#maintenance-text)
  - [Copyright notice](#copyright-notice)
- [License](#license)


## Options

Hyde for Bolt includes some customizable options, typically
applied via `theme.yml` file.

### Sidebar menu

The `main` menu is used for the sidebar, you can adjust it in
the `config://menu.yml` file.

You can show a very basic search-box as the last item of the menu,
to enable it set `show_search_in_menu: true` in `theme.yml`.

You can show a copyright notice for your site at the bottom of the sidebar,
to enable it set `show_copyright_in_sidebar: true` in `theme.yml`.

### Sticky sidebar content

By default Hyde for Bolt ships with a sidebar that affixes it's content to the
bottom of the sidebar.
You can optionally disable this by setting `sticky_sidebar: false` in `theme.yml`.

### Themes

Hyde for Bolt ships with eight optional themes based on the [base16 color scheme](https://github.com/chriskempson/base16).
Apply a theme to change the color scheme (mostly applies to sidebar and links).

![Hyde theme classes](https://f.cloud.github.com/assets/98681/1817044/e5b0ec06-6f68-11e3-83d7-acd1942797a1.png)

To use a theme, uncomment the related line in `theme.yml` to set the
`color_theme` variable to the right value.

### Reverse layout

Hyde for Bolt's page orientation can be reversed by setting `reverse_layout: true` in `theme.yml`.

## Features

### Optional display of teaserimage in main article

By adding the field `show_image_above_body` with `type: checkbox` to your
contenttype you can regulate if the teaser image will be shown on top of the article/entry.
Normally the teaser image (field `image`) is only used for listings.

### Galleries

Hyde for Bolt supports galleries - to use them just add a field `gallery` with `type: imagelist` to your contenttype.
[ImageLightbox](https://osvaldas.info/image-lightbox-responsive-touch-friendly)
is used as lightbox for the gallery images.

Captions for galleries can be shown optionally, to manage this behavior add a field
`show_gallery_captions` with `type: checkbox` to your contenttype.

### GPX tracks

If you regularly publish gpx tracks with your posts, you can add a field `gpx` with
`type: file` to your contenttype.
You also have to extend `accept_file_types` in `config.yml` to accept `gpx`-files
in order to be able to upload your tracks.
If a nonempty field `gpx` is found in your record a map is drawn right below the
content (and above a gallery, if there is one).

The map is created using [leaflet](http://leafletjs.com/) and
[leaflet-gpx](https://github.com/mpetazzoni/leaflet-gpx) and uses maptiles from
the [Open Street Map Project](https://www.openstreetmap.org), some symbols from
[Font Awesome](http://fontawesome.io/) are used in the footer to indicate distance,
duration and elevations of your track.

### Optional publishing date and taxonomies

You can define for which ContentTypes the publishing date will be displayed by
setting up the array in `show_publishdate` in `theme.yml`.
Typically you don't want to show the date for pages.
This applies for listings as well as the display of the documents.

Display of taxonomies can be controlled via `shown_taxonomies`, just define which taxonomies should be displayed.
For each taxonomy its possible to optionally show the groupname in front, define a prefix for each (such as # for tags) and define a separator (maybe a comma is a good choice).

### Code highlighting

Code blocks are highlighted using [highlight.js](https://highlightjs.org/),
the theme used for highlighting can be defined in `theme.yml` by setting the
`highlight_theme` variable (use only lowercase!), see the [highlight.js demo page](https://highlightjs.org/static/demo/)
for previews of the different themes.

### Maintenance text

To set an individual title and content of your Maintenance-Site, just create `block/maintenance`
(it has to have exactly this slug) and set title and content there.

### Copyright notice

If you regularly use content which needs a copyright notice, just add a field
`copyright` with `type: html` or `type:markdown` to your contenttype. The notice
will be added below your content, and below the gallery (if there is one).


## License

Open sourced under the [MIT license](LICENSE.md).

<3
