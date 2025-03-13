# AppSwiper

> AppSwiper Component

This component is a wrapper around the Swiper.js library, providing a flexible and customizable
carousel or slider component for Vue.js applications. It simplifies the integration of Swiper.js
and offers several options for controlling the behavior and appearance of the slider.

## Props

| Prop name            | Description                                                                                                                                 | Type                                          | Values | Default      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------ | ------------ |
| customClass          | A custom CSS class to apply to the main container of the swiper.<br/> Allows for easy styling and customization of the swiper's appearance. | string                                        | -      | ""           |
| slideCount           | The total number of slides to display. Used primarily for pagination indicators.                                                            | number                                        | -      | 3            |
| showPagination       | A boolean indicating whether to display pagination indicators (dots) below the swiper.                                                      | boolean                                       | -      | false        |
| slidePerView         | The number of slides to display per view. Can be a number or 'auto' to fit slides based on their width.                                     | Number as () =&gt; any                        | -      | "auto"       |
| spaceBetween         | The space (in pixels) between each slide.                                                                                                   | number                                        | -      | 15           |
| freeMode             | A boolean indicating whether to enable free mode, allowing the user to freely swipe through the slides.                                     | boolean                                       | -      | true         |
| loop                 | A boolean indicating whether the swiper should loop back to the beginning after the last slide.                                             | boolean                                       | -      | false        |
| swiperClass          | A custom CSS class to apply to the swiper container itself.                                                                                 | string                                        | -      | "pr-6"       |
| currentSlidePosition | The index of the slide to initially display. Useful for programmatically setting the starting slide.                                        | number                                        | -      | 0            |
| direction            | The direction of the swiper. Can be 'vertical' or 'horizontal'.                                                                             | String as () =&gt; "vertical" \| "horizontal" | -      | "horizontal" |
| autoPlay             | Configuration for the autoplay feature. See Swiper.js documentation for options. If delay is set, autoplay is enabled.                      | Object as () =&gt; any                        | -      | {}           |

## Events

| Event name        | Properties | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---
