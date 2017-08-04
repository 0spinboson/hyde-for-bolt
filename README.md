# Hyde Theme for Bolt CMS

Hyde is a brazen two-column theme that pairs a prominent sidebar with
uncomplicated content. It's based on [Poole](http://getpoole.com), the Jekyll butler. Both created by [Mark Otto](https://github.com/mdo).

This is the [Bolt CMS](http://bolt.cm/) adaption of the theme.

![Hyde screenshot](https://f.cloud.github.com/assets/98681/1831228/42af6c6a-7384-11e3-98fb-e0b923ee0468.png)


## Contents

- [Options](#options)
  - [Sidebar menu](#sidebar-menu)
  - [Sticky sidebar content](#sticky-sidebar-content)
  - [Themes](#themes)
  - [Reverse layout](#reverse-layout)
- [Features](#features)
  - [Galleries](#galleries)
  - [Optional publishing date and taxonomies](#optional-publishing-date-and-taxonomies)
  - [Code highlighting](#code-highlighting)
- [License](#license)


## Options

Hyde for Bolt includes some customizable options, typically
applied via `theme.yml` file.

### Sidebar menu

The `main` menu is used for the sidebar, you can adjust it in
the `config://menu.yml` file.

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

### Galleries

Hyde for Bolt supports galleries - to use them just add a field `gallery` with `type: imagelist` to your contenttype.
[ImageLightbox](https://osvaldas.info/image-lightbox-responsive-touch-friendly)
is used as lightbox for the gallery images.

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


## License

Open sourced under the [MIT license](LICENSE.md).

<3
