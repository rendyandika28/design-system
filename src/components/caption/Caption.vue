<template>
  <span
    data-testid="caption"
    :class="classNames">
    <slot />
  </span>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
} from 'vue-demi'
import { WeightVariant, TransformVariant } from '../heading'
import { SizeVariant } from '.'

export default defineComponent({
  props: {
    weight: {
      type   : String as PropType<WeightVariant>,
      default: 'normal',
    },
    transform: {
      type   : String as PropType<TransformVariant>,
      default: 'normalcase',
    },
    size: {
      type   : String as PropType<SizeVariant>,
      default: 'xs',
    },
  },

  setup (props) {
    const classNames = computed(() => {
      const result: string[] = ['caption']

      if (props.transform)
        result.push(`caption--${props.transform}`)

      if (props.weight)
        result.push(`caption--${props.weight}`)

      // eslint-disable-next-line unicorn/explicit-length-check
      if (props.size)
        result.push(`caption--${props.size}`)

      return result
    })

    return { classNames }
  },
})
</script>

<style lang="postcss">
.caption {
  @apply block text-muted text-xs tracking-wide;
  @apply dark:text-dark-muted;

  /**
  * Caption in tiny size
  */
  &--tn {
    @apply text-tn tracking-wider;
  }

  /**
  * Weight of caption
  */
  &--normal {
    @apply font-normal;
  }

  &--medium {
    @apply font-medium;
  }

  &--bold {
    @apply font-bold;
  }

  /**
  * Text transform
  * of caption
  */
  &--normalcase {
    @apply normal-case;
  }

  &--lowercase {
    @apply lowercase;
  }

  &--capitalize {
    @apply capitalize;
  }

  &--uppercase {
    @apply uppercase;
  }
}
</style>
