<script setup lang="ts">
import { computed, ref } from 'vue'

import { Icon } from '@iconify/vue'
interface Props {
  id: string
  items: Array<string>
  selectedItems: Array<string>
  updateItemsAction: (newValues: Array<string>) => void
  label: string
}

const props = defineProps<Props>()

const isOpen = ref(false)

const toggleSelections = () => {
  isOpen.value = !isOpen.value
}

const hideSelections = () => {
  isOpen.value = false
}

const selectedValues = computed<Array<string>>({
  get() {
    return props.selectedItems
  },
  set(newValues) {
    props.updateItemsAction(newValues)
  }
})
</script>

<template>
  <div
    v-click-outside="hideSelections"
    class="relative z-30 flex flex-col rounded-md bg-white font-semibold dark:bg-dark-blue"
  >
    <button
      :for="id"
      class="relative z-30 flex cursor-pointer items-center justify-center gap-7 rounded-md px-6 py-4 shadow-md"
      @click="toggleSelections"
    >
      <span>{{ label }}</span>
      <Icon icon="mingcute:down-line" />
    </button>

    <Transition
      enter-active-class="duration-200 ease-out transition-all"
      enter-from-class="transform -translate-y-5 opacity-0"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="duration-150 ease-in transition-all"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="transform -translate-y-5 opacity-0"
    >
      <div
        v-if="isOpen"
        :id="id"
        class="absolute top-16 mt-1 flex w-full flex-col gap-2 overflow-y-auto rounded-md bg-white p-5 shadow-md focus:outline-none dark:bg-dark-blue"
        multiple
      >
        <label
          v-for="item in items"
          :key="item"
          class="cursor-pointer"
          :class="{ 'line-through': !selectedValues.includes(item) }"
        >
          <input :id="item" type="checkbox" :value="item" v-model="selectedValues" class="hidden" />
          {{ item }}
        </label>
      </div>
    </Transition>
  </div>
</template>
