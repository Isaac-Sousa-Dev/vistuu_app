<template>
    <div class="card flex justify-center"></div>
    <Transition name="drawer-transition">
        <div v-if="isOpen">
            <div
            class="drawer-backdrop"
            @click="emit('toggle')"
            >
                <div>
                    Teste
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { emit } from 'process';

    
</script>