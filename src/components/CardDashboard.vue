<template>
    <div class="w-full h-28 p-3 bg-white rounded-xl shadow-md">
        <div class="h-full flex flex-col justify-between">
            <div class="text-md text-gray-500">{{ title }}</div>
            <div class="flex items-center justify-between">
                <div :class="valueSize" class="font-bold">{{ value }}</div>
                <div :class="iconColor" class="p-2 rounded-full">
                    <component :is="LucideIcons[icon]" class="w-6 h-6 text-white" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

import * as LucideIcons from '@lucide/vue';

defineProps({
    title: {
        type: String
    },
    value: {
        type: Number
    },
    icon: {
        type: String
    },
    iconColor: {
        type: String
    },
    valueSize: {
        type: String
    }
})
</script>