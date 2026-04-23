<template>
    <div class="mt-7 flex flex-col">
        <div v-for="menu in sections" class="mb-7">
            <Divider class="bg-gray-200 h-[1px]" />
            <div class="text-xs font-bold uppercase text-gray-300 mt-4">{{menu.title}}</div>
            <div class="flex flex-col mt-3 gap-5">
                <div  v-for="item in menu.items"  class="flex items-center gap-2">
                    <font-awesome-icon class="text-white" :icon="item.icon" />
                    <div v-if="item.icon" class="cursor-pointer text-white">{{item.label}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLayout } from '@/composables/layout'

const layout = useLayout()

const sections = layout.sidebarSections.value
</script>