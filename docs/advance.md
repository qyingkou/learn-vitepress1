---
_name: qy
_age: 18
_sex: male
---
<script setup>
  // Access to Site & Page Data
import { useData } from 'vitepress'
// import vue component
import CustomComponent from './component.vue'

const { page } = useData()
</script>

# advance

## variable

 {{ $frontmatter._name }}

 {{ $frontmatter._age }}

 {{ $frontmatter._sex }}

 {{ 1+1 }}

{{ page }}

::: v-pre
{{ page }}
:::

## vue

<span v-for="i in 3">{{ i }},</span>
::: v-pre
 `<span v-for="i in 3">{{ i }},</span>`
:::

<CustomComponent/>
