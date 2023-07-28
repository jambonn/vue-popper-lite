<p align="center">
<img width="350" src="https://github.com/jambonn/vue-popper-lite/assets/10803710/355cd886-dada-4b72-82e3-45537b3d6e3a">
</p>

# vue-popper-lite
> A popover component based on <a href="https://popper.js.org/docs/v2/performance/#popper-lite">popper-lite</a> for Vue 3 support typescript

## Example

### Using Vue Popper Lite from Vue SFC
[Vue SFC Playground](https://play.vuejs.org/#eNrNVdtu1DAQ/ZVReGiRclHViodlqaBVEUXQVt2WF4KQNzvJpuvYlu3shWr/nbGTbLcpoHIT+Gl85nbmOLFvg1dKxfMag0EwNJkulQWDtlaHqSgrJbWFW7iQSqGGNeRaVrBD0ZHyUMRLizupGCZNKiXRxmKlOLNIO4DhpJx7g0wGU435izSYWqvMIEkWi0UsVHVj4kxWiWLZjBWY9OqnAVimC7SU+HnMmZilweGHGoFi5Jx4uaBhwrouY92zhknDoaMDGWfGULVClxOq1UY3LcHqsihQO5auOnWnYTKsUDgCVqpNRq9ak7/lhU64YykspW+yWj7O3mCdaPCEJEKNImv0a90b6Z4Qoa7jfTJuXRFyl7TRxNn3TsUBDd9Wl8fOP5bWyuqPSfBb4z/g4tZRA/5VETjm9v+QgGhOt6m49c6x++n57z7Gx2nQ7/wPRegdh1uXnt0viNARuhdFW2NX3Jkv20ux1nx3p7vGaqFmhb/CelcXFTM28blxZszO0+eu2MdyQqyZop/3E9y6rjmpEuWsKvlqABF5OEZmZYhCCEe8FLP3LBv5/WuKDCENRlhIhOvTNAjhUtKfIEM4X64KFCFcj2th6xCOmaCLEzl3CecKBYyYMC4jDd4gn6MtMwZnWNMVG4IhX2RQlzmRbCmZ8gsOYO9ALT1GTDCaotOW0GceXacidvdoMwjNS6LREA7yOc6IOi2jTPK6EmYAGhUyu3sQwl6unSwAik0mpSi2K9O74nUPwqDRPaqYim+MFPRc+YZp66CxBg0Fhz14QQYEPvK0emCMhhqmgStNjNZExZpMirwsekSooio56nNlS+l03iLEOJeLtx6zusaww7MpZrNv4Ddm2ZC+0EhnMncn1Pmax7Bxn4zOcEn2xlnJSc3bgb/jvERDp+A4NmFHtZgQ7a04z/bU60oHcmVOlvTPmm4oR9Sr4eO92Mc/GP2O7n68v1Fx/RXU07Nv)

### Using Vue Popper Lite from CDN
[Vue from CDN](https://codepen.io/jambonn/pen/poQQzOB)

## Install

### NPM

```bash
npm install vue-popper-lite
```

### Yarn

```bash
yarn add vue-popper-lite
```

### PNPM

```bash
pnpm add vue-popper-lite
```

#### CDN

> Recommended: https://unpkg.com/vue-popper-lite, which will reflect the latest version as soon as it is published to npm. You can also browse the source of the npm package at https://unpkg.com/vue-popper-lite/

## Usage

### Vue environment

```html
<!-- If your content is only a simple string, you can use the content prop -->
<template>
  <v-popper content="This is the Popper content">
    <button slot="reference">
      Reference Element
    </button>
  </v-popper>
</template>

<!-- If your content is more complex, you can use the content slot -->
<template>
  <v-popper>
    <div>This is the Popper content</div>
    <template #reference>
        <button>Trigger element</button>
    </template>
  </v-popper>
</template>

<script>
  import { defineComponent } from "vue";
  import { Popper } from "vue-popper-lite";
  import "vue-popper-lite/style.css";

  export default defineComponent({
    components: {
      'VPopper': Popper,
    },
  });
</script>
```

## Props

| Name                  | Type    | Default    | Description                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------------------|---------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `trigger`             | String  | `hover`    | Optional value: <br><ul><li>**hover** - hover to open popper content</li><li>**clickToOpen** - every click on the popper triggers open, only clicking outside of the popper closes it</li><li>**clickToToggle** - click on the popper toggles it's visibility</li><li>**focus** - opens popper on focus event, closes on blur.</li> |
| `placement`           | String  | `bottom`   | Preferred placement of the Popper                                                                                                                                                                                                                                                                                                                                                              |
| `delay-on-mouse-over` | Number  | `10`       | Delay in ms before showing popper during a mouse over                                                                                                                                                                                                                                                                                                                                          |
| `delay-on-mouse-out`  | Number  | `10`       | Delay in ms before hiding popper during a mouse out                                                                                                                                                                                                                                                                                                                                            |
| `disabled`            | Boolean | `false`    | Disables the Popper. If it was already open, it will be closed.                                                                                                                                                                                                                                                                                                                                |
| `content`             | String  | `null`     | If your content is just a simple string, you can pass it as a prop                                                                                                                                                                                                                                                                                                                             |
| `transition`          | String  | `empty`    | Custom transition class                                                                                                                                                                                                                                                                                                                                                                        |
| `enter-active-class`  | String  | `null`     | Custom transition class enter                                                                                                                                                                                                                                                                                                                                                                  |
| `leave-active-class`  | String  | `null`     | Custom transition class leave                                                                                                                                                                                                                                                                                                                                                                  |
| `force-show`          | Boolean | `false`    | Force show popper                                                                                                                                                                                                                                                                                                                                                                              |
| `append-to-body`      | Boolean | `false`    | Append content to body                                                                                                                                                                                                                                                                                                                                                                         |
| `visible-arrow`       | Boolean | `true`     | Visible an arrow on the Popper                                                                                                                                                                                                                                                                                                                                                                 |
| `arrow-padding`       | Number  | `0`        | Stop arrow from reaching the edge of the Popper (in pixels)                                                                                                                                                                                                                                                                                                                                    |
| `enable-flip`         | Boolean | `true`     | Popper into place, it will not flip dynamically when it runs out of space if this is set to `false`                                                                                                                                                                                                                                                                                            |
| `offset-kidding`      | Number  | `0`        | Offset in pixels along the trigger element                                                                                                                                                                                                                                                                                                                                                     |
| `offset-distance`     | Number  | `8`        | Offset in pixels away from the trigger element                                                                                                                                                                                                                                                                                                                                                 |
| `stop-propagation`    | Boolean | `false`    | Stop propagation event click                                                                                                                                                                                                                                                                                                                                                                   |
| `prevent-default`     | Boolean | `false`    | Prevent default event click                                                                                                                                                                                                                                                                                                                                                                    |
| `strategy`            | String  | `absolute` | Describes the positioning strategy to use. If your reference element is in a fixed container, use the `fixed` strategy                                                                                                                                                                                                                                                                         |
| `content-class`       | String  | `empty`    | Class name for content element                                                                                                                                                                                                                                                                                                                                                                 |

## Events

| Name              | Description              |
|-------------------|--------------------------|
| `created`         | Created popper component |
| `show`            | Show popover             |
| `hide`            | Hide popover             |
| `document-click`  |                          |


## Slots

| Name         | Description            |
|--------------|------------------------|
| `default`    | For the Popper content |
| `reference`  | For Trigger the Popper |

## CSS variables

`Popper` also uses a list of predefined CSS variables. You can overwrite these variables to suit your needs.

| CSS variable                   | Example value                       |
|--------------------------------|-------------------------------------|
| `--popper-background`          | #333333                             |
| `--popper-color`               | #ffffff                             |
| `--popper-padding`             | 8px                                 |
| `--popper-radius`              | 4px                                 |
| `--popper-arrow-width`         | 8px                                 |
| `--popper-arrow-height`        | 8px                                 |

## Development Setup

``` bash
# install dependencies
pnpm install

# build dist files
pnpm build

# build dist files and types
pnpm prepublishOnly
```