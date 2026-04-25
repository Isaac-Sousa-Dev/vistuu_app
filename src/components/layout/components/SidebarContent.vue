<template>
    <div class="mt-7 flex flex-col">
        <div v-for="menu in sections" class="mb-7">
            <Divider class="bg-gray-200 h-[1px]" />
            <div class="text-xs font-bold uppercase text-gray-300 mt-4">{{menu.title}}</div>
            <div class="flex flex-col mt-3 gap-3 text-white">
                <div v-for="item in menu.items" :class="{ 'rounded-lg bg-linear-to-bl from-violet-500 to-fuchsia-500': item.active }">
                    <div class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 hover:text-gray-700 rounded-lg p-2 transition-all duration-300">
                        <font-awesome-icon :icon="item.icon" />
                        <div v-if="item.icon">{{item.label}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLayout } from '@/composables/useLayout'

const layout = useLayout()

const sections = layout.sidebarSections.value
</script>