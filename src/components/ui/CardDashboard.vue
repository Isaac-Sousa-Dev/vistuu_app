<template>
    <div :class="bgCard" class="cursor-box w-full h-28 p-3 px-4 rounded-2xl shadow-sm">
        <div class="h-full flex flex-col justify-between">
            <div class="text-md text-gray-500 leading-tight">{{ title }}</div>
            <div class="flex items-end justify-between">
                <div :class="valueSize" class="font-semibold">{{ value }}</div>
                <div :class="iconColor" class="p-2 rounded-full">
                    <component :is="LucideIcons[icon]" class="w-5 h-5" :class="iconTextColor" />
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
    },
    bgCard: {
        type: String,
        default: 'bg-white'
    }
})
</script>

<style>
.cursor-box {
    border-radius: 12px;
    font-size: 1rem;
    transition: all 0.3s ease;
    padding: 1rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.cursor-box::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(107, 136, 233, 0.158), transparent);
    top: -100%;
    left: -100%;
    transition: all 0.5s ease;
}

.cursor-box:hover::before {
    top: 100%;
    left: 100%;
}

.cursor-box:hover {
    transform: scale(1.05);
    box-shadow: 2px 2px 0 #4E56C0;
}
</style>