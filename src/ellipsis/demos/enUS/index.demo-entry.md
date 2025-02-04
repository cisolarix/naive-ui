# Ellipsis

Complexity has to live somewhere.

When you hear somebody talk about a subtle concept, keep alert.

## Demos

```demo
basic
line-clamp
expand-trigger
custom-tooltip
```

## Props

| Name | Type | Default | Description | Version |
| --- | --- | --- | --- | --- |
| expand-trigger | `'click'` | `undefined` | Abbreviated content trigger event to expand to the full text. | 2.1.0 |
| line-clmap | `number \| string` | `undefined` | Maximum lines. | 2.1.0 |
| tooltip | `boolean \| TooltipProps` | `true` | Tooltip properties. | 2.1.0 |

## Slots

| Name    | Parameters | Description                 |
| ------- | ---------- | --------------------------- |
| default | `()`       | The content of the ellipsis.    |
| tooltip | `()`       | The content of the ellipsis' tooltip. |
