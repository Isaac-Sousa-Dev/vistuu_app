<template>
    <div class="w-full h-28 p-3 px-4 bg-white rounded-2xl shadow-md">
        <div class="h-full flex flex-col justify-between">
            <div class="text-md text-gray-500 leading-tight">{{ title }}</div>
            <div class="flex items-end justify-between">
                <div :class="valueSize" class="font-semibold">{{ value }}</div>
                <div :class="iconColor" class="p-2 rounded-full">
                    <component :is="LucideIcons[icon]" class="w-5 h-5 text-white" />
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
    iconTextColor: {
        type: String
    },
    valueSize: {
        type: String
    }
})
</script>