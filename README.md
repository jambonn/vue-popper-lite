<p align="center">
<img width="350" src="https://github.com/jambonn/vue-popper-lite/assets/10803710/355cd886-dada-4b72-82e3-45537b3d6e3a">
</p>

# vue-popper-lite
> A popover component based on <a href="https://popper.js.org/docs/v2/performance/#popper-lite">popper-lite</a> for Vue 3 support typescript

## Example

### Using Vue Popper Lite from Vue SFC
[Vue SFC Playground](https://play.vuejs.org/#eNrNVdlu1DAU/RUrPEyRsqhqxcMwVNCqiCJoq07LC0HIk9xk3HFsy3Zmoeq/c+0snaaAyibw0/W527nHiX0TvFIqXtYQjIOJyTRTlhiwtTpIBauU1JacS6VAk0LLiowwMlIeiDizMErFJGnSMAE3FirFqQXcETLJ2dIbaFIy11C8SIO5tcqMk2S1WsVCVdcmzmSVKJotaAnJoH4aEEt1CRYTP884FYs0OPhQA8EYuURWLmiS0K7LTA+sSdJw6OiQjFNjsFqpWY612uimJbGalSVox9JVx+44TAYVCEfAStVnDKo1+Vte0sl2JIXF9D6r5ePsHutEI09QItAgska/1t1L9wQJdR3vk3HrEpG7pF4TZ987FQc0fFtdHjv/TForqz8mwW+N/4CLW4cN+FdF4FDY/0MCpDnfpuLWO8fup+e/+xgfp8Gw8z8UYXAcbl14dr8gQkfoXhRujd1wZ75sL8Ra851Rd43VQi1Kf4UNri4sZmzic+PMmNHT567YR5Yja6rw5/1EblzXAlWJCloxvhmTCD0cIrMxSCEkh5yJxXuaTf3+NUaGJA2mUEogVydpEJILiX+CDMnZelOCCMnVrBa2DskRFXhxAucu4UyBIFMqjMtIgzfAl2BZRskp1HjFhsSgLzKgWYEkW0qGfYEx2d1Xa48hE4jm4LRF9JlHb1MRu3u0GQTnRdFwCAf5HGdEnZZRJnldCTMmGhRQu7Mfkt1CO1kIUTTPmSi3K+O74nUPwqDRPaqoiq+NFPhU+YZp68Cxxg0Fhz14QcYIPvK0BmAMBhumgSuNjG6RijWZFAUrB0SwomIc9JmyTDqdtwhRzuXqrcesriHs8GwO2eIb+LVZN6TPNeCZLN0Jdb7mMWzcx9NTWKPdOyuZ17wd+DvOCzB4Co5jE3ZYixxpb8V5tideVzyQS3O8xn/WdEM5ol4NH+/FPvrB6Hd09+K9XsXbr3mGsjc=)

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