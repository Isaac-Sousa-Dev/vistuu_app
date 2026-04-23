<template>
    <div class="mt-7 flex flex-col">
        <div v-for="menu in sections" class="mb-7">
            <Divider class="bg-purple-200 h-0.5" />
            <div class="text-xs font-bold uppercase text-gray-400 mt-4">{{menu.title}}</div>
            <div class="flex flex-col mt-3 gap-5">
                <div  v-for="item in menu.items"  class="flex items-center gap-2">
                    <font-awesome-icon :icon="item.icon" />
                    <div v-if="item.icon" class="cursor-pointer">{{item.label}}</div>
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