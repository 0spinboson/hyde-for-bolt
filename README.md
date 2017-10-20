# Hyde Theme for Bolt CMS

Hyde is a brazen two-column theme that pairs a prominent sidebar with uncomplicated content. It's based on [Poole](http://getpoole.com), the Jekyll butler. Both created by [Mark Otto](https://github.com/mdo).

This is the [Bolt CMS](http://bolt.cm/) adaption of the theme.

![hyde-for-bolt-01](https://user-images.githubusercontent.com/7450884/28960604-a62ac4ea-78ff-11e7-830f-5eff2b994056.png)

## Contents

- [Options](#options)

  - [Sidebar menu](#sidebar-menu)
  - [Sticky sidebar content](#sticky-sidebar-content)
  - [Themes](#themes)
  - [Reverse layout](#reverse-layout)

- [Features](#features)

  - [Favicon](#favicon)
  - [Custom CSS](#custom-css)
  - [Optional display of teaserimage in main article](#optional-display-of-teaserimage-in-main-article)
  - [Galleries](#galleries)
  - [GPX tracks](#gpx-tracks)
  - [Optional publishing date and taxonomies](#optional-publishing-date-and-taxonomies)
  - [Latest posts](#latest-posts)
  - [No listing template](#no-listing-template)
  - [Code highlighting](#code-highlighting)
  - [Maintenance Text](#maintenance-text)
  - [Copyright notice](#copyright-notice)

- [License](#license)

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

### Sticky sidebar content

By default Hyde for Bolt ships with a sidebar that affixes it's content to the bottom of the sidebar. You can optionally disable this by setting `sticky_sidebar: false` in `theme.yml`.

### Themes

Hyde for Bolt ships with eight optional themes based on the [base16 color scheme](https://github.com/chriskempson/base16). Apply a theme to change the color scheme (mostly applies to sidebar and links).

![Hyde theme classes](https://f.cloud.github.com/assets/98681/1817044/e5b0ec06-6f68-11e3-83d7-acd1942797a1.png)

To use a theme, uncomment the related line in `theme.yml` to set the `color_theme` variable to the right value.

### Reverse layout

Hyde for Bolt's page orientation can be reversed by setting `reverse_layout: true` in `theme.yml`.

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

### Optional display of teaserimage in main article

By adding the field `show_image_above_body` with `type: checkbox` to your contenttype you can regulate if the teaser image will be shown on top of the article/entry. Normally the teaser image (field `image`) is only used for listings.

### Galleries

Hyde for Bolt supports galleries - to use them just add a field `gallery` with `type: imagelist` to your contenttype. [PhotoSwipe](http://photoswipe.com/) is used as lightbox for the gallery images.

Captions can be shown optionally, to manage this behavior add a field `show_gallery_captions` with `type: checkbox` to your contenttype.

### GPX tracks

If you regularly publish gpx tracks with your posts, you can add a field `gpx` with `type: file` to your contenttype. You also have to extend `accept_file_types` in `config.yml` to accept `gpx`-files in order to be able to upload your tracks. If a nonempty field `gpx` is found in your record a map is drawn right below the content (and above a gallery, if there is one).

The map is created using [leaflet](http://leafletjs.com/) and [leaflet-gpx](https://github.com/mpetazzoni/leaflet-gpx) and uses maptiles from the [Open Street Map Project](https://www.openstreetmap.org), some symbols from [Font Awesome](http://fontawesome.io/) are used in the footer to indicate distance, duration and elevations of your track.

### Optional publishing date and taxonomies

You can define for which ContentTypes the publishing date will be displayed by adding `show_publishdate: true` to your contenttypes values in `config://contenttypes.yml`. Typically you don't want to show the publishdate for pages.

Display of taxonomies can be controlled via adding a corresponding value, e.g. `shown_taxonomies: [ categories, tags ]` to your contenttype definition. Hereby it is possible to use some taxonomies internally but not showing them to your visitors. Tags will be prefixed with a hash #, categories will be prefixed with an @.

Both rules apply for listings as well as the display of the documents.

### Latest posts

You can use the template `latest.twig` (see [Bolt Docs](https://docs.bolt.cm/3.3/fields/templateselect)) to include lists of the last three entries of each of your ContentTypes.
Please note that you have to explicitly add `show_in_latest: true` to your
ContentType to make it appear in the list of the latest entries. Also `viewless`
must not be set to `true`.

### No listing template

A bare `nolisting.twig`-template is also included, it uses title and content of
a `block/nolisting` if present, otherwise it uses a translated string.
This template can be used as `listing_template` for ContentTypes that should not
be listable (e.g. pages).
Unfortunately there seems to be no build-in parameter to _forbid_ listings for a certain ContentType.

### Code highlighting

Code blocks are highlighted using [highlight.js](https://highlightjs.org/), the theme used for highlighting can be defined in `theme.yml` by setting the `highlight_theme` variable (use only lowercase!), see the [highlight.js demo page](https://highlightjs.org/static/demo/) for previews of the different themes.

### Maintenance text

To set an individual title and content of your Maintenance-Site, just create `block/maintenance` (it has to have exactly this slug) and set title and content there.

### Copyright notice

If you regularly use content which needs a copyright notice, just add a field `copyright` with `type: html` or `type:markdown` to your contenttype. The notice will be added below your content, and below the gallery (if there is one).

## License

Open sourced under the [MIT license](LICENSE.md).

<3
