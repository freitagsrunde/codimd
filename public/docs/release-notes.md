Release Notes
===

<i class="fa fa-tag"></i> 2.6.0 <i class="fa fa-clock-o"></i> 2025-06-10
---

[Check out the complete release note][v2_6_0].

[v2_6_0]: https://hackmd.io/@codimd/release-notes/%2F%40codimd%2Fv2_6_0

This minor release includes several enhancements and fixes to improve the overall functionality and performance of CodiMD.

## Enhancements

- Update GitHub Actions to use the latest versions [#1895](https://github.com/hackmdio/codimd/pull/1895)
- Update ESLint configuration for ES6 support [#1900](https://github.com/hackmdio/codimd/pull/1900)
- Add preference to disable table editor shortcuts and migrate preferences to localStorage [#1901](https://github.com/hackmdio/codimd/pull/1901)
- Add PDF URL validation and content type check [#1896](https://github.com/hackmdio/codimd/pull/1896)
- Upgrade mermaid to the latest version [#1894](https://github.com/hackmdio/codimd/pull/1894)
- Add baseURL configuration option to S3 modules [#1876](https://github.com/hackmdio/codimd/pull/1876)
- Improve contrast on certain elements [#1899](https://github.com/hackmdio/codimd/pull/1899)
- Bump codemirror version to 5.65.8 [#1908](https://github.com/hackmdio/codimd/pull/1908)
- Add state parameter to OAuth strategies for enhanced security [#1902](https://github.com/hackmdio/codimd/pull/1902)
- Configure MiniCssExtractPlugin for production environment in webpack [#1897](https://github.com/hackmdio/codimd/pull/1897)
- Refactor plugin paths and move custom reveal plugin [#1898](https://github.com/hackmdio/codimd/pull/1898)
- Update dependencies for abcjs and mermaid.js [#1914](https://github.com/hackmdio/codimd/pull/1914)
- VSCode: update image to allow development on MBP ARM chips [#1913](https://github.com/hackmdio/codimd/pull/1913)

## Fixes

- Fix: login email should be case insensitive [#1911](https://github.com/hackmdio/codimd/pull/1911)
- Fix: Lost schema of S3 URL [#1893](https://github.com/hackmdio/codimd/pull/1893)
- Chore: update docker-compose.yml with build instructions for codimd service [#1917](https://github.com/hackmdio/codimd/pull/1917)

<i class="fa fa-tag"></i> 2.5.4 <i class="fa fa-clock-o"></i> 2024-06-06
---

[Check out the complete release note][v2_5_4]. Thank you CodiMD community and all our contributors. ❤️

[v2_5_4]: https://hackmd.io/@codimd/release-notes/%2F%40codimd%2Fv2_5_4

## Enhancements

- Add index at revision table for improving system performance [#1856](https://github.com/hackmdio/codimd/pull/1856)
- Refactor to reuse random filename in filesystem image provider [#1867](https://github.com/hackmdio/codimd/pull/1867)

## Fixes

- Fix exclusion of name attribute from iframe filterXSS allowlist [#1865](https://github.com/hackmdio/codimd/pull/1865)
- Fix typo: "opened source" -> "open sourced" [#1869](https://github.com/hackmdio/codimd/pull/1869)

<i class="fa fa-tag"></i> 2.5.3 <i class="fa fa-clock-o"></i> 2024-01-08
---

[Check out the complete release note][v2_5_3]. Thank you CodiMD community and all our contributors. ❤️

[v2_5_3]: https://hackmd.io/@codimd/release-notes/%2F%40codimd%2Fv2_5_3

It's a minor fix release that bumps the version number in `package.json`

## Enhancements

- Add `codeium-chrome` extension support [#1851](https://github.com/hackmdio/codimd/pull/1851)
- Add `check-release` GitHub action workflow that prevents us from forgetting to update the `package.json` during releases again [#1852](https://github.com/hackmdio/codimd/pull/1852)

<i class="fa fa-tag"></i> 2.5.2 <i class="fa fa-clock-o"></i> 2024-01-05
---

[Check out the complete release note][v2_5_2]. Thank you CodiMD community and all our contributors. ❤️

[v2_5_2]: https://hackmd.io/@codimd/release-notes/%2F%40codimd%2Fv2_5_2

This is another recovery release that fixes the pandoc DoS issue.

## Enhancements

- Build docker image using github actions

## Fixes

- **\[Security Issue]** address denial of service issue in actionPandoc


<i class="fa fa-tag"></i> 2.5.1 <i class="fa fa-clock-o"></i> 2024-01-03
---

[Check out the complete release note][v2_5_1]. Thank you CodiMD community and all our contributors. ❤️

[v2_5_1]: https://hackmd.io/@codimd/release-notes/%2F%40codimd%2Fv2_5_1


## Security Fixes

- **\[Security Issue]** Bump `@hackmd/pandoc.js` version to 0.2.0

## Fixes

- Replace mattermost-redux with mattermost/client
- Fix dependency resolving with prom-client v12


<i class="fa fa-tag"></i> 2.5.0 The Formosan hare <i class="fa fa-clock-o"></i> 2023-12-26
---

<div style="text-align: center; margin-bottom: 1em;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Lepus_sinensis_formosus.jpg/640px-Lepus_sinensis_formosus.jpg" width="600">
  <small style="display: block;">The Formosan hare</small>
</div>

> The Formosan hare (scientific name: Lepus sinensis formosus), a species of the rabbit family, is a subspecies unique to Taiwan. It measures 30-40 centimeters in length, with a tail that's 5-6 centimeters long and ears that are 8-10 centimeters long. Smaller than the Chinese hare, it has brownish eyes.
> [Wikipedia](https://zh.wikipedia.org/wiki/%E5%8F%B0%E7%81%A3%E9%87%8E%E5%85%94?oldformat=true)

[Check out the complete release note][v2_5_0]. Thank you CodiMD community and all our contributors. ❤️

[v2_5_0]: https://hackmd.io/@codimd/release-notes/%2F%40codimd%2Fv2_5_0

## Security Fixes
* **\[Security Issue]** Strip HTML tags for gist id to avoid stored XSS on showing error [Security Issue]
* **\[Security Issue]** Upgrade mermaid to version 8.10.2 to avoid prototype pollution
* **\[Security Issue]** potential XSS in vimeo embed
* **\[Security Issue]** FIX: pandoc security issue
* **\[Security Issue]** fix: sanitize pdf url to prevent XSS on inline PDFs

## Fixes
* Avoid append zero suffix on exporting user data
* Handle when request url has no valid referer
* Fix S3 client config passing for image upload
* Set a proper "lang" attribute on <html>
* Fix matchInContainer false positives
* Convert "include" directives to functions
* Move HTML-related code from JS to EJS to enable more i18n
* fix: may referernce out of bound index in clearDuplicatedHistory
* Feat/csrf export user data
* sequelize.import deprecation
* chore: remove unused uglifyjs-webpack-plugin dep
* fix: should not clear guest history when guest pin note
* Fix: s3 api supported multiple cloud providers. fixes: https://github.com/hackmdio/codimd/issues/1761
* Fix: Code Fence parameter parsing
* Update README.md to remove IE from supporting list
* FIX: server crash when filename too long
* fix: use encoded note id to update history
* 🐛 [fix] modify replacement rule for disqus short-name
* Fix history page nav
* Fix the uploadimage form
* Add the logout callback to prevent exception

## Enhancements
* Add TeX mhchem extensions for MathJax
* Upgrade flowchart.js to version 1.15.0
* Upgrade codemirror to 5.63.2
* Update de.json in
* Documentation - add Music section and move abc abd fretboard to this section
* chore: bump meta-marked to 0.5.0
* Typos + Better translation for "Externals"
* feat: Migrate to gtag and support GA4
* 【fix】reword japanese
* upgrading pg to 8.8.0 to support new scram-sha-256 authentication
* feat: add organizations whitelist to GitHub OAuth
* Add oauth2 authorization
* Update both Traditional and Simplified Chinese locales

## DX
* Run CI with GitHub Actions
* Add dev container for GitHub Codespaces and VSCode remote container
* Add arm64 docker image build.
* fix(buildpacks): replace custom buildpack with APT buildpack
* Update minimum required node.js version to v12 with npm package dependencies
* Upgrade Node.js version
* Update node.js version in .nvmrc
* Update npm dependencies

<i class="fa fa-tag"></i> 2.4.2 <i class="fa fa-clock-o"></i> 2022-08-06
---

## Security Fixes
- **[Security Issue]** Upgrade flowchart.js to version 1.15.0
- **[Security Issue]** Upgrade mermaid to 8.10.2
- **[Security Issue]** Strip HTML tags for gist id to avoid stored XSS on showing error
- **[Security Issue]** Add CSRF token in export API to prevent security issue
- **[Security Issue]** Upgrade CodeMirror to 5.63.2

## Fixes
- Fix container syntax not parsed correctly
- Handle request url has no valid referer case
- Fix S3 client config passing for image upload
- Fix array access index may out of bound
- Remove unused uglifyjs webpack plugin dependency

## Enhancements
- Set lang attributes via user locale
- Use include function instead of directives
- Extract more keyword for i18n translate
- Avoid append zero suffix on exporting user data
- Add TeX mhchem extensions for MathJax
- Support arm64 docker image
- Refactor Sequelize model import mechanism due to sequelize.import is deprecated
- Better german translation

## DX
- Support DevContainer for GitHub Codespaces and VSCode remote container
- Run CI with GitHub Actions

<i class="fa fa-tag"></i> 2.4.0 Papilio maraho <i class="fa fa-clock-o"></i> 2021-05-11
---

<div style="text-align: center; margin-bottom: 1em;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Papilio_maraho_male_ventral_view_20160423.jpg/569px-Papilio_maraho_male_ventral_view_20160423.jpg" width="600">
  <small style="display: block;">Papilio maraho</small>
</div>

> Papilio maraho is a species of butterfly in the family Papilionidae. It is endemic to Taiwan.
> \- Wikipedia [Papilio maraho](https://en.wikipedia.org/wiki/Papilio_maraho)

[Check out the complete release note][v2_4_0]. Thank you CodiMD community and all our contributors. ❤️

[v2_4_0]: https://hackmd.io/@codimd/release-notes/%2F%40codimd%2Fv2_4_0

## Enhancements

- Support autofix linter errors
- Support anonymous updates via API
- Support mediawiki export format in pandoc export
- Add some help strings to Prometheus metrics
- Allow more syntax highlight modes in editor
- Support TOC level customization
- Follow Google guidelines to use Google OAuth

## Fixes

- Vimeo won't show up due to the jsonp callback data unable be parsed with jQuery
- Fix slide mode stored XSS
- Enforce PG ssl require mode on heroku
- Webpack exclude path should support windows path
- Free url can read any md in file system
- Use encoded noteId when calling updateHistory

## Docs

- Add matrix badge and links to README [#1629](https://github.com/hackmdio/codimd/pull/1629) [@a-andreyev](https://github.com/a-andreyev)

<i class="fa fa-tag"></i> 2.3.1 Isoetes taiwanensis <i class="fa fa-clock-o"></i> 2021-01-04
---

### Fixes

* Upgrade mermaid to 8.6.4 to make the previous fix works

<i class="fa fa-tag"></i> 2.3.0 Isoetes taiwanensis <i class="fa fa-clock-o"></i> 2020-12-30
---

<div style="text-align: center; margin-bottom: 1em;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/%E5%8F%B0%E7%81%A3%E6%B0%B4%E9%9F%AD.JPG" width="600">
  <small style="display: block;">Isoetes taiwanensis</small>
</div>

> Isoetes taiwanensis is a species of plant in the family Isoetaceae. It is endemic to Taiwan, and the only species of quillwort there. As other quillworts, it is relatively small, with erect leaves 7–24 cm (2.8–9.4 in) long. It grows submersed in shallow ponds for most of the year. IUCN considers it critically endangered because of habitat loss.
> \- Wikipedia [Isoetes taiwanensis](https://en.wikipedia.org/wiki/Isoetes_taiwanensis)

In this release, we focus on polishing existing features, fixing bugs and patching security issues.

We continue to expand the APIs. CodiMD now supports ["Update note's content" and "delete note"](https://github.com/hackmdio/codimd/pull/1559) RESTful APIs. Thanks for the great works from [@JamesCamel](https://github.com/JamesCamel) :heart_eyes:

We also fix several XSS security issues, including [mermaid](https://github.com/hackmdio/codimd/pull/1633), [vega](https://github.com/hackmdio/codimd/pull/1637) and [image lightbox](https://github.com/hackmdio/codimd/pull/1632). We appreciate the security report from [@msrkp](https://github.com/@msrkp), [@Alemmi](https://github.com/Alemmi), and [@nename0
](https://github.com/nename0).

This is the last release before the end of this year.
Merry Christmas to everyone! Let's look forward and see you in the next year. :tada:

[Check out the complete release note][v2_3_0]. Thank you CodiMD community and all our contributors. ❤️

[v2_3_0]: https://hackmd.io/@codimd/release-notes/%2F%40codimd%2Fv2_3_0

### Enhancements

- Fretboard improvements
- Update and delete note api
- Allow Sequelize CLI to use options set in config.json
- Allow specifying option for graphviz
- Spellcheck: add en_GB dictionary

### Fixes

- Fix ui-edit and ui-both buttons in night mode
- Don't run jsonlint on .vscode jsonc files
- Fix image lightbox xss issue
- Fix mermaid xss issue
- Check upload image mime type
- Vega syntax XSS dependencies

<i class="fa fa-tag"></i> 2.2.0 Diploderma swinhonis <i class="fa fa-clock-o"></i> 2020-07-20
---

<div style="text-align: center; margin-bottom: 1em;">
  <img src="https://i.imgur.com/P1HXrhw.jpg" width="600">
  <small style="display: block;">Diploderma swinhonis</small>
</div>

> Diploderma swinhonis, also known as the Taiwan japalure, Swinhoe's japalure, and Swinhoe's tree lizard, is a species of lizard in the family Agamidae. The species is endemic to Taiwan.
> \- Wikipedia [Diploderma swinhonis](https://en.wikipedia.org/wiki/Diploderma_swinhonis)

In this release, we've added some Markdown renderer plugins, including fretboard guitar, Mindmap, and CSV. We believe the simplicity and the extensibility of markdown can bring more possibilities to you and your workflow. So let's find out more about what we can do with markdown. :100: 

We also fixed a long-lasting issue: CodiMD cannot be hosted under URL subpath perfectly. Check PR [#1551](https://github.com/hackmdio/codimd/pull/1551) for details.

Last but not least, we start standarizing CodiMD API. We drafted [`List my notes`](https://github.com/hackmdio/codimd/pull/1548) API in this release. Stay tuned. :person_in_lotus_position: 

Here are some highlights from this release:

- [Fretboard Guitar tab renderer](#Fretboard-Guitar-tab-renderer)
- [Mindmap rendrer](#Mindmap)
- [Image Lightbox](#Image-Lightbox-Support)
- [CSV renderer](#Render-csv-codeblock-as-table)

[Check out the complete release note][v2_2_0]. Thank you CodiMD community and all our contributors. ❤️

[v2_2_0]: https://hackmd.io/@codimd/release-notes/%2F%40codimd%2Fv2_2_0

### Enhancements

- Use array for tags when available
- Replace btn-social with btn-login-method
- Set html image meta tag with YAML metadata
- List my note API

### Fixes

- Update Simplified Chinese translation and fix typography
- Fix webpack urlpath font loading error



<i class="fa fa-tag"></i> 2.1.0 Zhangixalus prasinatus <i class="fa fa-clock-o"></i> 2020-05-18
---

<div style="text-align: center; margin-bottom: 1em;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Rhacophorus_prasinatus.jpg/640px-Rhacophorus_prasinatus.jpg" width="450">
  <small style="display: block;">Zhangixalus prasinatus</small>
</div>

> Zhangixalus prasinatus is a species of frog in the family Rhacophoridae endemic to northern Taiwan. It is the largest tree frog in Taiwan; females can reach 7 cm (2.8 in) in snout-vent length. It is known from Taipei, Yilan, and Taoyuan.
> \- Wikipedia [Zhangixalus prasinatus](https://en.wikipedia.org/wiki/Zhangixalus_prasinatus)

During this hard time of COVID-19, it's a pleasure to help people collaborate better with CodiMD. We hope the world will recover from this situation soon. :sunrise: 

Good news, we have some goodies for CodiMD including:

- [Support Prometheus metrics](https://hackmd.io/@codimd/v2_1_0#Support-Prometheus-metrics)
- [Cut docker image size by 57%](https://hackmd.io/@codimd/v2_1_0#Cut-docker-image-size-by-57)
- [Drop Node 8 Support](https://hackmd.io/@codimd/v2_1_0#Drop-Node-8-Support)

[Check out the complete release note][v2_1_0]. Thank you CodiMD community and all our contributors. ❤️

[v2_1_0]: https://hackmd.io/@codimd/release-notes/%2F%40codimd%2Fv2_1_0

### Enhancements

- Optimize module size
- Support brace wrapped param in fence lang
- Upgrade Node.JS version to 10.20.1

### Fixes

- Fix getStatus caused "TypeError: Converting circular structure to JSON"


<i class="fa fa-tag"></i> 2.0.1 Urocissa caerulea <i class="fa fa-clock-o"></i> 2020-04-09
---

[CodiMD 2.0.1](https://github.com/hackmdio/codimd/releases/tag/2.0.1) is a minor release fixing bugs introduced in 2.0.0 and earlier versions along with some enhancements. We encourage everyone to upgrade to 2.0.1 now. See how things are going on [GitHub](https://github.com/hackmdio/codimd/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc+milestone%3ANext). Stay tuned and healthy, and we hope you love it!


### Enhancements

- Allow inline markdown in spoiler summary syntax
- Improve visibility of some UI elements
- Support avatar for OAuth users

### Fixes

- Fix to add missing configs in docker secret
- Fix not able to upload image using imgur
- Fix to improve version checker behavior
- Fix Wikipedia link in 2.0.0 release notes
- Fix require path for minio
- Fix check for creating free url notes

[Check out the complete release note][v2_0_1]. Thank you CodiMD community and all our contributors. ❤️

[v2_0_1]: https://hackmd.io/@codimd/release-notes/%2F%40codimd%2Fv2_0_1

<i class="fa fa-tag"></i> 2.0.0 Urocissa caerulea <i class="fa fa-clock-o"></i> 2020-03-02
---

<div style="text-align: center; margin-bottom: 1em;">
  <img src="https://i.imgur.com/oRbNzRm.jpg" width="600">
  <small style="display: block;">Urocissa caerulea</small>
</div>

> The Taiwan blue magpie (Urocissa caerulea), also called the Taiwan magpie, Formosan blue magpie , or the "long-tailed mountain lady", is a species of bird of the crow family. It is endemic to Taiwan.
> 
> \- Wikipedia [Taiwan blue magpie](https://en.wikipedia.org/wiki/Taiwan_blue_magpie)

In the past few months, we delivered not only a bunch of awesome features but also some critical bug fixes. Moreover, we refactored CodiMD's backend and started to write new tests.

To make it easier to maintain, we dropped legacy code, reorganize the repository, and add new documentation. For these reasons, we decided to make a huge leap toward version 2.0.0.

Here are the highlights coming from version 2.0.0:

- [Multilanguage spellchecker][multilanguage-spellchecker]
- [Customize editor color schemes][customize-editor-color-schemes]
- [Export note with Pandoc][support-pandoc-export]
- [Embed Geolocation data][embedding-geolocation-data]
- [Version checking][auto-version-check-for-site-admin]
- [Meet the new CodiMD CLI][meet-the-new-codimd-cli]
- [Refreshed Documentation structure and new Markdown guides](refreshed-documentation-structure-and-new-markdown-guides)

It's our pleasure to announce CodiMD `2.0.0`. Enjoy as always :heartpulse:.

[Check out the complete release note][v2_0_0]. Thank you CodiMD community and all our contributors. ❤️

[multilanguage-spellchecker]: https://hackmd.io/@codimd/v2_0_0#Multilanguage-spellchecker
[customize-editor-color-schemes]: https://hackmd.io/@codimd/v2_0_0#Customize-editor-color-schemes
[support-pandoc-export]: https://hackmd.io/@codimd/v2_0_0#Support-Pandoc-export
[embedding-geolocation-data]: https://hackmd.io/@codimd/v2_0_0#Embedding-Geolocation-data
[auto-version-check-for-site-admin]: https://hackmd.io/@codimd/v2_0_0#Auto-version-check-for-site-admin
[meet-the-new-codimd-cli]: https://hackmd.io/@codimd/v2_0_0#Meet-the-new-CodiMD-CLI
[refreshed-documentation-structure-and-new-markdown-guides]: https://hackmd.io/@codimd/v2_0_0#Refreshed-Documentation-structure-and-new-Markdown-guides

[v2_0_0]: https://hackmd.io/@codimd/release-notes/%2F%40codimd%2Fv2_0_0

<i class="fa fa-tag"></i> 1.4.1 <i class="fa fa-clock-o"></i> 2019-12-13
---

[CodiMD 1.4.1](https://github.com/hackmdio/codimd/releases/tag/1.4.1) is a minor release including bug fixes introduced in 1.4.0 and earlier versions. We encourage everyone to upgrade to 1.4.1 now. Also, we're preparing for the next major release, and you can see how things are going on [GitHub](https://github.com/hackmdio/codimd/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc+milestone%3ANext). Stay tuned, and we hope you love it!

### Fixes

- Fix urlpath in webpack build
- Fix mysql not bundled in package.json
- Fix minio image uploading
- Fix pcheck not parsed url correctly
- Fix manage_users script

### Enhancement

- Added Scalingo compatible deployment

[Check out the complete release note][v1_4_1]. Thank you CodiMD community and all our contributors. ❤️

[v1_4_1]: https://hackmd.io/@codimd/release-notes/%2F%40codimd%2Fv1_4_1

<i class="fa fa-tag"></i> 1.4.0 Syrmaticus mikado <i class="fa fa-clock-o"></i> 2019-11-11
---

<div style="text-align: center; margin-bottom: 1em;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Mikado_Pheasant_398.jpg" width="300">
  <small style="display: block;">Mikado Pheasant, photo credits to <a href="https://zh.wikipedia.org/wiki/File:Mikado_Pheasant_398.jpg">Snowyowls from wikipedia</a></small>
</div>

Starting from version 1.4.0, we'll pick one species from [_the endemic species of Taiwan_](https://en.wikipedia.org/wiki/List_of_endemic_species_of_Taiwan) as version name. Is there anyone still remember we've once used type of coffee as our version name? It's time to revive that good convention, but this time we don't need coffee to stay up all night. 💤

It has been over 200+ commits since our last release. These are the highlights from version 1.4.0:

- [New table tools][table-tools] - Create table with auto-formatting and keyboard shortcut
- [Markdownlint integration][markdownlint] - Lint you markdown document
- [Support PlantUML, vega-lite renderer][more-renderers] - More renderers to come
- [Support spoiler container, ruby markdown syntax][more-syntax]
- [New Emoji sets][new-emoji]
- [Slide mode plugins][slide-mode-plugins]: Elapsed time bar and Spotlight

[Check out the complete release note][v1_4_0]. Thank you CodiMD community and all our contributors. ❤️

[table-tools]: https://hackmd.io/@codimd/v1_4_0#New-Table-Tools
[markdownlint]: https://hackmd.io/@codimd/v1_4_0#Markdownlint-integration
[more-renderers]: https://hackmd.io/@codimd/v1_4_0#Support-2-new-render-engines-PlantUML-and-Vega-lite
[more-syntax]: https://hackmd.io/@codimd/v1_4_0#Suppport-2-New-markdown-syntax-Spoiler-and-Ruby
[new-emoji]: https://hackmd.io/@codimd/v1_4_0#New-emoji-sets
[slide-mode-plugins]: https://hackmd.io/@codimd/v1_4_0#Slide-mode-enhancement

[v1_4_0]: https://hackmd.io/@codimd/release-notes/%2F%40codimd%2Fv1_4_0

<i class="fa fa-tag"></i> 1.3.1 <i class="fa fa-clock-o"></i> 2019-03-23 00:00
---

### Enhancements
* Add some missing translations
* Add Serbian language

### Fixes
* Fix broken redirect for empty `serverURL`
* Fix wrong variable type for HSTS maxAge
* Fix GitLab snippets showing up without being configured
* Fix Google's API after disabling Google+
* Fix broken PDF export

### Contributors
* atachibana (translator)
* [Aurélien JANVIER](https://github.com/ajanvier) (translator)
* [Daan Sprenkels](https://github.com/dsprenkels) (translator)
* Farizrizaldy (translator)
* [Luclu7](https://github.com/Luclu7)
* Sylke Vicious (translator)
* [toshi0123](https://github.com/toshi0123) & okochi-toshiki
* [Turakar](https://github.com/Turakar)
* [Vladan](https://github.com/cvladan) (translator)

<i class="fa fa-tag"></i> 1.3.0 <i class="fa fa-clock-o"></i> 2019-03-03 00:00
---

### Enhancements
* Run db migrations on `npm start`
* Add documentation about integration with AD LDAP
* Add `rel="noopener"` to all links
* Add documentation about integration with Nextcloud for authentication
* Update URL on frontpage to point to codimd.org
* Replace Fontawesome with Forkawesome
* Add OpenID support
* Add print icon to slide view
* Add auto-complete for language names that are highlighted in codeblocks
* Improve translations for Chinese, Dutch, French, German, Italien, Korean, Polish, and Russian language
* Add Download action to published document API
* Add reset password feature to `manage_users` script
* Move from own `./tmp` directory to system temp directory
* Add Etherpad migration guide
* Move XSS library to a more native position
* Use full version string to determine changes from the backend
* Update winston (logging library)
* Use slide preview in slide example
* Improve migration handling
* Update reveal.js to version 3.7.0
* Replace scrypt library with its successor
* Replace `to-markdown` with `turndown` (successor library)
* Update socket.io
* Add warning on missing base URL
* Update bootstrap to version 3.4.0
* Update handlebar

### Fixes
* Fix paths in GitLab documentation
* Fix missing `data:` URL in CSP
* Fix oAuth2 name/label field
* Fix GitLab API integration
* Fix auto-completed but not rendered emojis
* Fix menu organization depending on enabled services
* Fix some logging in the OT module
* Fix some unhandled internalOAuthError exception
* Fix unwanted creation of robots.txt document in "freeurl-mode"
* Fix some links on index page to lead to the right sections on feature page
* Fix document breaking, empty headlines
* Fix wrong multiplication for HSTS header seconds
* Fix wrong subdirectories in exported user data
* Fix CSP for speaker notes
* Fix CSP for disqus
* Fix URL API usage
* Fix Gist embedding
* Fix upload provider error message
* Fix unescaped disqus user names
* Fix SAML vulnerability
* Fix link to SAML guide
* Fix deep dependency problem with node 6.x
* Fix broken PDF export by wrong unlink call
* Fix possible XSS attack in MathJax

### Refactors
* Refactor to use `ws` instead of the the no longer supported `uws`
* Refactor frontend build system to use webpack version 4
* Refactor file path configuration (views, uploads, …)
* Refactor `manage_users` script
* Refactor handling of template variables
* Refactor linting to use eslint

### Removes
* Remove no longer working Octicons
* Remove links to our old Gitter channel
* Remove unused library node-uuid
* Remove unneeded blueimp-md5 dependency
* Remove speakerdeck due to broken implementation

### Contributors
* Adam.emts (translator)
* [Alex Garcia](https://github.com/asg017)
* [Cédric Couralet (micedre)](https://github.com/micedre)
* [Claudius Coenen](https://github.com/ccoenen)
* [Daan Sprenkels](https://github.com/dsprenkels)
* [David Mehren](https://github.com/davidmehren)
* [Erona](https://github.com/Eronana)
* [Felix Yan](https://github.com/felixonmars)
* [Jonathan](https://github.com/phrix32)
* Jong-kai Yang (translator)
* [MartB](https://github.com/MartB)
* [Max Wu (jackycute)](https://github.com/jackycute)
* [mcnesium](https://github.com/mcnesium)
* Nullnine (translator)
* RanoIP (translator)
* [SuNbiT](https://github.com/sunbit)
* Sylke Vicious (translator)
* Timothee (translator)
* [WilliButz](https://github.com/WilliButz)
* [Xaver Maierhofer](https://github.com/xf-)
* [云屿](https://github.com/cloudyu)

<i class="fa fa-tag"></i> 1.2.1 <i class="fa fa-clock-o"></i> 2018-09-26 00:00
---

### Enhancements
* Update Italian translations
* Update Japanese translations
* Update markdown-pdf
* Add support for unix sockets
* Update "follow us" information to Community channel and translation
* Add Cloudron installation method
* Add guide for Mattermost authentication
* Update various packages
* Add Indonesian language as new translation

### Fixes
* Fix content types in status router
* Fix some modal colors in night mode
* Fix CSP to allow usage of speaker notes
* Fix some wrong title attributes in the editor toolbar
* Fix some confusion about the default location of images. It's always the local filesystem now
* Fix object handling in avatar generation code
* Finally fix error handling of LZ-String by using self-maintained version
* Fix migration handling
* Fix gitlab API version
* Fix some server crashes caused by PDF creation
* Fix document length limit on post to `/new`
* Fix broken youtube embedding on `/features` page

### Refactors
* Refactor generation of table of contents
* Refactor "copyright"-section to be a "Powered by"

### Removes
* Remove unneeded inline styling

### Deprecations
* NodeJS version 6
* Mattermost login integration (is replaced by [generic oAuth2 module](https://github.com/hackmdio/codimd/blob/6ce7b20a7f92ccff2f7f870ff5d116d685310cfd/docs/guides/auth/mattermost-self-hosted.md))

### Honorable mentions
* [Alex Hesse (Pingu501)](https://github.com/Pingu501)
* [Alexander Wellbrock (w4tsn)](https://github.com/w4tsn)
* [Cédric Couralet (micedre)](https://github.com/micedre)
* [Girish Ramakrishnan (gramakri)](https://github.com/gramakri)
* [maahl](https://github.com/maahl)
* [Max Wu (jackycute)](https://github.com/jackycute)
* [Miranda (ahihi)](https://github.com/ahihi)
* [Ondřej Slabý (maxer456)](https://github.com/maxer456)

<i class="fa fa-tag"></i> 1.2.0 <i class="fa fa-clock-o"></i> 2018-06-28 00:00
---

### Announcement
* HackMD CE is renamed to CodiMD to prevent confusion. [For details see here](https://github.com/hackmdio/codimd#hackmd-ce-became-codimd)

### Enhancements
* Show full title by hovering over to table of contents entries
* Add generic OAUTH2 support for authentication
* Redirect unauthenticated user to login page on "forbidden" pages
* Add ability to add ToS and privacy documents without code changes
* Add account deletion as part of user self-management
* Add download of all own notes
* Add privacy policy example (no legal advice)
* Increase checkbox size on slides
* Add support for Azure blob storage for image uploads
* Add Korean translation
* Add note about official K8s chart for deployment
* Add toolbar for markdown shortcuts in editor
* Add ability to disable Gravatar integration
* Add print icon to slide menu which leads to the print view.
* Add sequelize to setup instructions
* Update various packages

### Fixes
* Fix local writes for non-existing translations in production
* Fix wrong documentation about default image upload type
* Fix possible error if CodiMD is started with wrong working directory
* Fix issues caused by cached/cacheeable client config
* Fix issues caused by notes created via curl/API with CRLF line endings
* Fix broken images for downloaded PDFs while using `filesystem` as `imageUploadType`
* Fix Unicode URLs when using `allowFreeURL=true`

### Refactors
* Split auth documentation into multiple documents

### Removes
* Remove polyfill for `useCDN=false` setups
* Remove unused and no longer needed symlink from translations

### Honorable mentions
* [Adam Hoka (ahoka)](https://github.com/ahoka)
* [Edgar Z. Alvarenga (aivuk)](https://github.com/aivuk)
* [Jacob Burden (jekrb)](https://github.com/jekrb)
* [Pedro Ferreira (pferreir)](https://github.com/pferreir)
* [TC Liu (liuderchi)](https://github.com/liuderchi)


<i class="fa fa-tag"></i> 1.1.1-ce <i class="fa fa-clock-o"></i> 2018-05-23 12:00
---

### Security
* Fix Google Drive integration leaked `clientSecret` for Google integration
* Update base64url package

### Fixes
* Fix typos in integrations
* Fix high need of file descriptors during build
* Fix heroku deployment by limiting node version to <10.x

### Refactors
* Refactor letterAvatars to be compliant with CSP

### Removes
* Google Drive integration

### Honorable mentions
* [Max Wu (jackycute)](https://github.com/jackycute)

<i class="fa fa-tag"></i> 1.1.0-ce <i class="fa fa-clock-o"></i> 2018-04-06 12:00
---

### Security
* Adding CSP headers
* Prevent data-leak by wrong LDAP config
* Generate dynamic `sessionSecret` if none is specified

### Enhancements
* Add Minio support
* Allow posting content to new notes by API
* Add anonymous edit function in restricted mode
* Add support for more Mimetypes on S3, Minio and local filesystem uploads
* Add basic CLI tooling for local user management
* Add referrer policy
* Add more usable HTML5 tags
* Add `useridField` in LDAP config
* Add option for ReportURI for CSP violations
* Add persistance for night mode
* Allow setting of `sessionSecret` by environment variable
* Add night mode to features page
* Add Riot / Matrix - Community link to help page

### Fixes
* Fix ToDo-toggle function
* Fix LDAP provider name in front-end
* Fix errors on authenticated sessions for deleted users
* Fix typo in database migration
* Fix possible data truncation of authorship
* Minor fixes in README.md
* Allow usage of ESC-key by codemirror
* Fix array of emails in LDAP
* Fix type errors by environment configs
* Fix error message on some file API errors
* Fix minor CSS issues in night mode

### Refactors
* Refactor contact
* Refactor social media integration on main page
* Refactor socket.io code to no longer use referrer
* Refactor webpack config to need less dependencies in package.json
* Refactor imageRouter for modularity
* Refactor configs to be camel case

### Removes
* Remove unused `tokenSecret` from LDAP config

### Deprecations
* All non-camelcase config

### Honorable mentions
* [Dario Ernst (Nebukadneza)](https://github.com/Nebukadneza)
* [David Mehren (davidmehren)](https://github.com/davidmehren)
* [Dustin Frisch (fooker)](https://github.com/fooker)
* [Felix Schäfer (thegcat)](https://github.com/thegcat)
* [Literallie (xxyy)](https://github.com/xxyy)
* [Marc Deop (marcdeop)](https://github.com/marcdeop)
* [Max Wu (jackycute)](https://github.com/jackycute)
* [Robin Naundorf (senk)](https://github.com/senk)
* [Stefan Bühler (stbuehler)](https://github.com/stbuehler)
* [Takeaki Matsumoto (takmatsu)](https://github.com/takmatsu)
* [Tang TsungYi (vazontang)](https://github.com/vazontang)
* [Zearin (Zearin)](https://github.com/Zearin)

<i class="fa fa-tag"></i> 1.0.1-ce <i class="fa fa-clock-o"></i> 2018-01-19 15:00
---

### Security
* Fix Dropbox client secret leak

### Enhancements
* Improve version handling
* It's 2018!

### Fixes
* Fix image alt-tag rendering
* Fix Dropbox appkey

<i class="fa fa-tag"></i> 1.0.0-ce <i class="fa fa-clock-o"></i> 2018-01-18 12:00
---
### License
* Switch from MIT to AGPL

### Enhancements
* Improve language support
* Allow themes for reveal
* Add dark theme for editor and view
* Add danish translation
* Add simplified chinese translation
* Provide new permission table
* Make HSTS configurable
* Make PDF export configurable
* Add Mattermost auth support
* Add SAML support

### Fixes
* Fix regex for speaker notes
* Fix S3 endpoint support
* Fix German translation
* Fix English translation
* Fix broken profile images
* Fix XSS attacks
* Fix history order
* Fix missing boolean settings
* Fix LDAP auth
* Fix too long notes droping content
* Fix mermaid compatiblity with new version
* Fix SSL CA path parsing

### Refactors
* Refactor main page
* Refactor status pages
* Refactor config handling
* Refactor auth backend
* Refactor code styling
* Refactor middleware to modules

<i class="fa fa-tag"></i> 0.5.1 `Doppio` <i class="fa fa-clock-o"></i> 2017-03-23 00:20
---
### Enhancements
* Update to indicate version in status API header
* Update to generate front-end constants on server startup
* Update to add gitlab api scope option and auto adapt gitlab snippet feature on it
* Update to add default permission config option
* Update to add basics for secret management by Docker 1.13
* Update webpack config to use parallel uglify plugin to speed up production build
* Update realtime to use timer to avoid memory leaks on busy tick
* Update to remove history cache to lower application coupling
* Update to add screenshot on index page
* Update index layout to add profile on navbar
* Update to support allow email register option
* Update to support disable anonymous view option
* Update to add limited and protected permission
* Update to allow displaying LDAP provider name on sign-in modal
* Update to show yaml-metadata and diagram parsing error in the view

### Fixes
* Fix XSS vulnerability in link regex [Security Issue]
* Fix todo list item class might add in wrong element
* Fix pagination error in list.js over v1.5.0
* Fix update doc from filesystem cause redundant authorship stringify
* Fix export html to replace fallen cdn tortue.me to cdnjs
* Fix rendering might result XSS attribute on self closing tag [Security Issue]
* Fix out of sync when deleting on same cursor position on several clients
* Fix not determine OT have pending operations properly
* Fix to keep selections on save and restore info
* Fix image path problem when using filesystem backend
* Fix meta error not clear on before rendering
* Fix duplicated headers anchor link not been updated properly
* Fix checkLoginStateChanged might fall into infinite loop while calling loginStateChangeEvent
* Fix to workaround text shadow for font antialias might cause cut off in Edge
* Fix and refactor extracting content using metaMarked directly might lead in invalid object

### Refactors
* Refactor editor related code
* Refactor code with JavaScript Standard Style
* Refactor templates, partials and rearrange its path
* Refactor front-end code with more modular concepts
* Refactor front-end code using ES6 (also unify configs to `config.json`)

### Removes
- Removed UTF-8 BOM in download function

<i class="fa fa-tag"></i> 0.5.0 `Ristretto` <i class="fa fa-clock-o"></i> 2017-01-02 02:35
---
### Enhancements
* Update year to 2017 (Happy New Year!)
* Update to improve editor performance by debounce checkEditorScrollbar event
* Refactor data processing to model definition
* Update to remove null byte on editor changes
* Update to remove null byte before saving to DB
* Update to support Esperanto locale
* Little improvements (typos, uppercase + accents, better case) for French locale
* Update features.md publish button name and icon

### Fixes
* Fix authorship might losing update event because of throttling
* Fix migration script of revision lacks of definition of primary key
* Fix to not use diff_cleanupSemantic
* Fix URL concatenation when uploading images to local filesystem
* Fix js-url not import correctly
* Fixed typo: anonmyous
* Fix codemirror spell checker not considering abbreviation which contain apostrophe in word
* Fix possible user is undefined in realtime events
* Fix wrong package name reference in webpack config for bootstrap-validator
* Fix email option in config not parse correctly
* Fix mathjax not able to render issue

### Removes
- Remove LZString compression for data storage
- Remove LZString compression for some socket.io event data

<i class="fa fa-tag"></i> 0.4.6 `Melya` <i class="fa fa-clock-o"></i> 2016-12-19 17:20
---
### Features
+ Add support of allow free url config option
+ Add support of allow anonymous config option
+ Add preferences to editor status bar and add allow override browser keymap option
+ Add support of s3 and local filesystem for image uploading
+ Add of support optional email register and signin
+ Use uWebSocket to improve websocket performance
+ Use CDNJS by default with https and SRI support
+ Use Webpack to bundle frontend code

### Enhancements
* Update to make TOC syntax be case-insensitive
* Update to handle request with invalid uri
* Update to auto generate meta description based on content in publish note and slide
* Update to support haskell, go, typescript and jsx syntax highlighting in code block
* Update to use workers to leverage intensive work loading
* Update to support summary tag
* Change use cdn config option default to be true
* Update to retry when anytime the socket io disconnect
* Change to raise socket io timeout, heartbeat interval and timeout to lower offline period
* Update emoji parser using markdown-it-emoji instead of emojify
* Optimize finishView selector performance by avoid universal selector
* Config heroku deployment
* Update to support Hindi, Swedish locale
* Update to support wrap syntax for code block
* Update to support pagination for history list

### Fixes
* Fix slide mode on print pdf not finish view rendering
* Fix when server have heavy loading cache might not update to db properly
* Fix redirection to url without trailing slashes not considering about config urlpath
* Fix header id and text might affects by mathjax tags
* Fix possible meta XSS in history list [Security Issue]
* Fix possible XSS in yaml-metadata and turn using ejs escape syntax than external lib [Security Issue]
* Fix to allow data attribute of section tag in slide
* Fix slide might able to add unsafe attribute on section tag which cause XSS [Security Issue]
* Fix slide might trigger script when processing markdown which cause XSS [Security Issue]
* Fix published note won't scroll to hash on load
* Fix mathjax with blockquote might have race condition
* Fix server reconnect might not resend pending operations
* Fix slide export pdf styles not applied issue
* Fix possible unclose HTML and leaked html tags when fail to parse diagrams
* Fix typos in the `slide-example.md`
* Fix socket io doc event should setDoc when revision mismatch and no outstanding operation
* Fix markdown styles conflicting bootstrap on p and ul under alert area
* Fix finishView mermaid might select and replace whole markdown-body issue
* Fix code block which in deeper level will not be parsed issue
* Fix code block highlighting html not escaped when no languages specified
* Fix client socket on delete event might not delete corresponding history record correctly
* Fix to handle name or color is undefined error
* Fix history item event not bind properly on pagination change
* Fix history time should save in UNIX timestamp to avoid time offset issue

### Removes
- Drop bower the package manager
- Remove auto linkify image

<i class="fa fa-tag"></i> 0.4.5 `latte` <i class="fa fa-clock-o"></i> 2016-10-11 01:22
---
### Features
+ Add more environment variables for server configuration
+ Add setup script for getting started
+ Add support of deleting note
+ Add support of shortcut keys which can add and remove symbol surround text
+ Add support of shortcut keys for changing mode
+ Add support of i18n (English, Chinese, French, German, Japanese, Spanish, Portuguese, Greek, Italian, Turkish, Russian, Dutch, Croatian, Polish, Ukrainian)
+ Add support of note info API
+ Add support of disqus via yaml-metadata

### Enhancements
* Optimize png images by using zopflipng
* Update CodeMirror to 5.19.0 and rename jade to pug
* Update to add cache to history and improve its performance
* Update default indent to use spaces instead of tabs
* Improve syntax highlighting performance
* Update to make client handle syncing error better, use delay to avoid wrong document revision
* Update to allow CORS as API on revision actions
* Update to support showing owner on the infobar
* Update to prevent duplicate client push in queue to lower down server loading
* Reduce update view debounce time to make preview refresh quicker
* Update help modal cheatsheet font styles to make it more clear on spaces
* Update to add revision saving policy
* Update to support tiddlywiki and mediawiki syntax highlighting in editor
* Update to support save mode to url and vise versa
* Update edit and publish icon and change toggle icon for UX  
* Improve authorship markers update performance
* Update slide mode to show extra info and support url actions
* Change the last change user saving strategy
* Update to support data uri in src attribute of image tag
* Improve index layout and UX with UI adjustments
* Update XSS policy to allow iframe and link with custom protocol
* Update markdown styles to follow github latest layout styles
* Update slide mode, now respect all meta settings and update default styles
* Update to make ToC menu always accessible without scrolling
* Update to make doc only update while filesystem content not match db content

### Fixes
* Fix README and features document format and grammar issues
* Fix some potential memory leaks bugs
* Fix history storage might not fallback correctly
* Fix to make mathjax expression display in editor correctly (not italic)
* Fix note title might have unstriped html tags
* Fix client reconnect should resend last operation
* Fix a bug when setting both maxAge and expires may cause user can't signin
* Fix text complete extra tags for blockquote and referrals
* Fix bug that when window close will make ajax fail and cause cookies set to wrong state
* Fix markdown render might fall into regex infinite loop
* Fix syntax error caused by element contain special characters
* Fix reference error caused by some scripts loading order
* Fix ToC id naming to avoid possible overlap with user ToC
* Fix header nav bar rwd detect element should use div tag or it might glitch the layout
* Fix textcomplete of extra tags for blockquote not match space character in the between
* Fix text-shadow for text antialiased might cause IE or Edge text cutoff

### Removes
- Cancel updating history on page unload

<i class="fa fa-tag"></i> 0.4.4 `mocha` <i class="fa fa-clock-o"></i> 2016-08-02 17:10
---
### Features
* Add support of showing authorship in editor
* Add support of saving authorship
* Add support of saving authors
* Add support of slide preview in both mode
* Add support of all extra syntax in slide mode

### Enhancements
* Update realtime check and refresh event, compress data to minimize network transfer delay
* Update to keep showing second level TOC if there is only one first level TOC
* Update to add expand and collapse toggle for TOC
* Update to make help modal and text complete hint using consistent reminder text
* Update to support slideOptions in the yaml metadata for customize slides
* Update to support redirect back to previous url after signin
* Update to avoid duplicated rendering slides and reduce DOM wrap
* Update CodeMirror to version 5.17.1
* Update to make random color more discrete
* Update user icon styles to make avatar more obvious
* Update Bootstrap to 3.3.7 and jQuery to 3.1.0 with related patches
* Update spell checker to ignore non-english or numeric alphabets
* Update to auto rolling session for auto extending cookies expiration
* Update some menu items and UIs
* Update to reduce realtime timeout and heartbeat interval to handle stale clients quicker
* Update to force note, publish note, publish slide redirect to their expected url
* Update to change server pre-rendering engine to markdown-it

### Fixes
* Workaround vim mode might overwrite copy keyMap on Windows
* Fix TOC might not update after changeMode
* Workaround slide mode gets glitch and blurry text on Firefox 47+
* Fix idle.js not change isAway property on onAway and onAwayBack events
* Fix http body request entity too large issue
* Fix google-diff-match-patch encodeURI exception issue
* Fix yaml metadata title should pass to generateWebTitle
* Fix spellcheck settings from cookies might not a boolean in string type
* Fix cookies might not in boolean type cause page refresh loop
* Fix the signin and logout redirect url might be empty
* Fix realtime might not clear or remove invalid sockets in queue
* Fix slide not refresh layout on ajax item loaded
* Fix retryOnDisconnect not clean up after reconnected
* Fix some potential memory leaks

<i class="fa fa-tag"></i> 0.4.3 `espresso` <i class="fa fa-clock-o"></i> 2016-06-28 02:04
---
### Features
* Add support of spellcheck
* Add support of light editor theme
* Add support of embed pdf
* Add support of exporting raw html
* Add revision modal with UIs and support marking patch diff texts
* Add support of saving note revision

### Enhancements
* Update to extend login info cookies to 365 days to reduce reductant page refresh
* Update to support new metadata: title, description, tags and google-analytics
* Prevent crawling editing note to enhance privacy
* Update to remove all data lines attributes to gain better update performance
* Update refresh modal to show more detail informations
* Update to make cursor tag default as hover mode to prevent tag overlay other lines
* Update highlight.js to version 9.4.0 and use bower dependency
* Improve history performance

### Fixes
* Fix history filter tags and search keyword might not apply after refresh
* Fix part class in list item might infect buildMap process
* Fix pdf tmp path is missing a folder slash before timestamp
* Fix realtime connection get stock when lots of client try to connect at same moment
* Fix locked or private permission should block any operation if owner is null
* Add back missing support of image size syntax in 0.4.2
* Fix update permission might cause duplicate view rendering
* Fix on paste long document to editor might cause scroll not syncing
* Workaround CodeMirror won't draw selections outside of the viewport
* Fix to make socket keep retry after disconnect on server maintenance

### Removes
- Remove metadata spellcheck support
- Remove robot meta on note edit page and html template


<i class="fa fa-tag"></i> 0.4.2 `cappuccino` <i class="fa fa-clock-o"></i> 2016-04-22 10:43
---
### Features
+ Support sync scrolling to edit area
+ Support import and export with GitLab snippet
+ Support GitLab signin
+ Add cheatsheet and help modal

### Enhancements
* Upgrade CodeMirror to version 5.15.3
* Support maintenance mode and gracefully exit process on signal
* Update to update doc in db when doc in filesystem have newer modified time
* Update to replace animation acceleration library from gsap to velocity
* Support image syntax with size
* Update textcomplete rules to support more conditions
* Update to use bigger user profile image
* Support showing signin button only when needed

### Fixes
* Fix other clients' cursor might disappear or move out of bound
* Fix to handle user profile image not exists
* Fix potential toolbar layout glitch
* Fix imgur uploads should always use https to avoid mix-content warning
* Fix to change fullscreen key to avoid OS key conflicts
* Fix and change ESC key in Vim mode

<i class="fa fa-tag"></i> 0.4.1 <i class="fa fa-clock-o"></i> 2016-04-22 10:43
---
### Enhancements
* Support when client domain not provided will use window.location variable
* Support when domain not provided will use relative path
* Support DOMAIN and URL_PATH environment variables


<i class="fa fa-tag"></i> 0.4.0 `first-year` <i class="fa fa-clock-o"></i> 2016-04-20 14:30
---
### Features
+ Support docs
+ Support Ionicons and Octicons
+ Support mermaid diagram
+ Support import and export with Gist
+ Support import and export with Google Drive
+ Support more options in YAML metadata
+ Support change keymap and indentation size/type

### Enhancements
* Change header anchor styles
* Refactor server code and configs
* Support experimental spell checking
* Upgrade CodeMirror to 5.13.5
* Update to emit info and disconnect clients if updater get errors
* Support to indicate if the note status is created or updated
* Support more DB types
* Server now use ORM for DBs
* Support static file cache
* Support more ssl settings
* Improve server stablilty
* Improve server performance
* Support Ionicons
* Support container syntax and styles
* Improve input performance
* Change markdown engine from remarkable to markdown-it
* Server now support set sub url path
* Support textcomplete in multiple editing
* Update to filter XSS on rendering
* Update to make sync scroll lerp on last line
* Update to make continue list in todo list default as unchecked
* Support auto indent whole line in list or blockquote

### Fixes
* Fix status bar might be inserted before loaded
* Fix mobile layout and focus issues
* Fix editor layout and styles might not handle correctly
* Fix all diagram rendering method and styles to avoid partial update gets wrong
* Fix to ignore process image which already wrapped by link node
* Fix when cut or patse scroll map might get wrong
* Fix to handle more socket error and info status
* Fix textcomplete not matching properly
* Fix and refactor cursor tag and cursor menu
* Fix Japanese, Chinese font styles
* Fix minor bugs of UI and seletor syntaxes

<i class="fa fa-tag"></i> 0.3.4 `techstars` <i class="fa fa-clock-o"></i> 2016-01-19 00:22
---
### Features
+ Beta Support slide mode
+ Beta Support export to PDF
+ Support TOC syntax
+ Support embed slideshare and speakerdeck
+ Support Graphviz charts
+ Support YAML metadata
+ Support private permission

### Enhancements
* Support pin note in history
* Support IE9 and above
* Support specify and continue line number in code block
* Changed all embed layout to 100% width
* Added auto detect default mode
* Support show last change note user
* Upgrade CodeMirror to 5.10.1 with some manual patches
* Improved server performance
* Support autocomplete for code block languages of charts

### Fixes
* Fixed some server connection issues
* Fixed several issues cause scrollMap incorrect
* Fixed cursor animation should not apply on scroll
* Fixed a possible bug in partial update
* Fixed internal href should not link out
* Fixed dropbox saver url not correct
* Fixed mathjax might not parse properly
* Fixed sequence diagram might render multiple times

<i class="fa fa-tag"></i> 0.3.3 `moon-festival` <i class="fa fa-clock-o"></i> 2015-09-27 14:00
---
### Features
+ Added status bar below editor
+ Added resizable grid in both mode
+ Added title reminder if have unread changes
+ Support todo list change in the view mode
+ Support export to HTML
+ Changed to a new theme, One Dark(modified version)

### Enhancements
* Support extra tags in todo list
* Changed overall font styles
* Optimized build sync scroll map, gain lots better performance
* Support and improved print styles
* Support to use CDN
* Image and link will href to new tab ors window
* Support auto scroll to corresponding position when change mode from view to edit
* Minor UI/UX tweaks

### Fixes
* Change DB schema to support long title
* Change editable permission icon to avoid misunderstanding
* Fixed some issues in OT and reconnection
* Fixed cursor menu and cursor tag are not calculate doc height properly
* Fixed scroll top might not animate
* Fixed scroll top not save and restore properly
* Fixed history might not delete or clear properly
* Fixed server might not clean client properly

<i class="fa fa-tag"></i> 0.3.2 `typhoon` <i class="fa fa-clock-o"></i> 2015-07-11 12:30
---
### Features
+ Support operational transformation
+ Support show other user selections
+ Support show user profile image if available

### Enhancements
* Updated editor to 5.4.0
* Change UI share to publish to avoid misleading
* Added random color in blockquote tag
* Optimized image renderer, avoid duplicated rendering
* Optimized building syncscroll map, make it faster
* Optimized SEO on publish and edit note

<i class="fa fa-tag"></i> 0.3.1 `clearsky` <i class="fa fa-clock-o"></i> 2015-06-30 16:00
---
### Features
+ Added auto table of content
+ Added basic permission control
+ Added view count in share note

### Enhancements
* Toolbar now will hide in single view
* History time now will auto update
* Smooth scroll on anchor changed
* Updated video style

### Fixes
* Note might not clear when all users disconnect
* Blockquote tag not parsed properly
* History style not correct

<i class="fa fa-tag"></i> 0.3.0 `sunrise` <i class="fa fa-clock-o"></i> 2015-06-15 24:00
---
### Enhancements
* Used short url in share notes
* Added upload image button on toolbar
* Share notes are now SEO and mobile friendly
* Updated code block style
* Newline now will cause line breaks
* Image now will link out
* Used otk to avoid race condition
* Used hash to avoid data inconsistency
* Optimized server realtime script

### Fixes
* Composition input might lost or duplicated when other input involved
* Note title might not save properly
* Todo list not render properly

<i class="fa fa-tag"></i> 0.2.9 `wildfire` <i class="fa fa-clock-o"></i> 2015-05-30 14:00
---
### Features
+ Support text auto complete
+ Support cursor tag and random last name
+ Support online user list
+ Support show user info in blockquote

### Enhancements
* Added more code highlighting support
* Added more continue list support
* Adjust menu and history filter UI for better UX
* Adjust sync scoll animte to gain performance
* Change compression method of dynamic data
* Optimized render script

### Fixes
* Access history fallback might get wrong
* Sync scroll not accurate
* Sync scroll reach bottom range too much
* Detect login state change not accurate
* Detect editor focus not accurate
* Server not handle some editor events

<i class="fa fa-tag"></i> 0.2.8 `flame` <i class="fa fa-clock-o"></i> 2015-05-15 12:00
---
### Features
+ Support drag-n-drop(exclude firefox) and paste image inline
+ Support tags filter in history
+ Support sublime-like shortcut keys

### Enhancements
* Adjust index description
* Adjust toolbar ui and view font
* Remove scroll sync delay and gain accuracy

### Fixes
* Partial update in the front and the end might not render properly
* Server not handle some editor events

<i class="fa fa-tag"></i> 0.2.7 `fuel` <i class="fa fa-clock-o"></i> 2015-05-03 12:00
---
### Features
+ Support facebook, twitter, github, dropbox login
+ Support own history

### Enhancements
* Adjust history ui
* Upgrade realtime package
* Upgrade editor package, now support composition input better

### Fixes
* Partial update might not render properly
* Cursor focus might not at correct position

<i class="fa fa-tag"></i> 0.2.6 `zippo` <i class="fa fa-clock-o"></i> 2015-04-24 16:00
---
### Features
+ Support sync scroll
+ Support partial update

### Enhancements
* Added feedback ui
* Adjust animations and delays
* Adjust editor viewportMargin for performance
* Adjust emit refresh event occasion
* Added editor fallback fonts
* Index page auto focus at history if valid

### Fixes
* Server might not disconnect client properly
* Resume connection might restore wrong info

<i class="fa fa-tag"></i> 0.2.5 `lightning` <i class="fa fa-clock-o"></i> 2015-04-14 21:10
---
### Features
+ Support import from dropbox and clipboard
+ Support more code highlighting
+ Support mathjax, sequence diagram and flow chart

### Enhancements
* Adjust toolbar and layout style
* Adjust mobile layout style
* Adjust history layout style
* Server using heartbeat to gain accuracy of online users

### Fixes
* Virtual keyboard might broken the navbar
* Adjust editor viewportMargin for preloading content

<i class="fa fa-tag"></i> 0.2.4 `flint` <i class="fa fa-clock-o"></i> 2015-04-10 12:40
---
### Features
+ Support save to dropbox
+ Show other users' cursor with light color

### Enhancements
* Adjust toolbar layout style for future
### Fixes
* Title might not render properly
* Code border style might not show properly
* Server might not connect concurrent client properly

<i class="fa fa-tag"></i> 0.2.3 `light` <i class="fa fa-clock-o"></i> 2015-04-06 20:30
---
### Features
+ Support youtube, vimeo
+ Support gist
+ Added quick link in pretty
+ Added font-smoothing style

### Enhancements
* Change the rendering engine to remarkable
* Adjust view, todo list layout style for UX
+ Added responsive layout check
+ Auto reload if client version mismatch
+ Keep history stack after reconnect if nothing changed
+ Added features page

### Fixes
* Closetags auto input might not have proper origin
* Autofocus on editor only if it's on desktop
* Prevent using real script and iframe tags
* Sorting in history by time not percise

<i class="fa fa-tag"></i> 0.2.2 `fire` <i class="fa fa-clock-o"></i> 2015-03-27 21:10
---
### Features
+ Support smartLists, smartypants
+ Support line number on code block
+ Support tags and search or sort history

### Enhancements
+ Added delay on socket change
+ Updated markdown-body width to match github style
+ Socket changes now won't add to editor's history
+ Reduce redundant server events

### Fixes
* Toolbar links might get wrong
* Wrong action redirections

<i class="fa fa-tag"></i> 0.2.1 `spark` <i class="fa fa-clock-o"></i> 2015-03-17 13:40
---

### Features
+ Support github-like todo-list
+ Support emoji

 ### Enhancements
+ Added more effects on transition
+ Reduced rendering delay
+ Auto close and match brackets
+ Auto close and match tags
+ Added code fold and fold gutters
+ Added continue listing of markdown

<i class="fa fa-tag"></i> 0.2.0 `launch-day` <i class="fa fa-clock-o"></i> 2015-03-14 20:20
---
### Features

+ Markdown editor
+ Preview html
+ Realtime collaborate
+ Cross-platformed
+ Recently used history
