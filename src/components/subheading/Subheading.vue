<template>
  <h6
    data-testid="subheading"
    :class="classNames">
    <slot />
  </h6>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
} from 'vue-demi'
import { SizeVariant } from '.'
import { WeightVariant, TransformVariant } from '../heading'

export default defineComponent({
  props: {
    size: {
      type   : String as PropType<SizeVariant>,
      default: 'md',
    },
    weight: {
      type   : String as PropType<WeightVariant>,
      default: 'normal',
    },
    transform: {
      type   : String as PropType<TransformVariant>,
      default: 'normalcase',
    },
    overline: {
      type   : Boolean,
      default: undefined,
    },
  },

  setup (props) {
    const classNames = computed(() => {
      const result: String[] = ['subheading']

      if (props.overline)
        result.push('subheading--overline')

      // eslint-disable-next-line unicorn/explicit-length-check
      else if (props.size)
        result.push(`subheading--${props.size}`)

      if (props.transform)
        result.push(`subheading--${props.transform}`)

      if (props.weight)
        result.push(`subheading--${props.weight}`)

      return result
    })

    return { classNames }
  },
})
</script>

<style lang="postcss">
.subheading {
  @apply m-0 capitalize tracking-normal text-default dark:text-dark-default;

  /**
  * Weight variant
  * of subheading
  */
  &&--normal {
    @apply font-normal;
  }

  &&--medium {
    @apply font-medium;
  }

  &&--bold {
    @apply font-bold;
  }

  /**
  * Text transform
  * of subheading
  */
  &&--normalcase {
    @apply normal-case;
  }

  &&--lowercase {
    @apply lowercase;
  }

  &&--capitalize {
    @apply capitalize;
  }

  &&--uppercase {
    @apply uppercase;
  }

  /**
  * Size variant
  * of subheading
  */
  &&--md {
    @apply text-base;
  }

  &&--sm {
    @apply text-sm leading-[1.42];
  }

  /**
  * Overline variant
  * of subheading
  */
  &&--overline {
    @apply uppercase text-tn tracking-widest text-subtle;
  }
}
</style>
