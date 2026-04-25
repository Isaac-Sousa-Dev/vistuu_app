<template>
    <div>
        <ScrollPanel class="flex min-h-screen flex-col" style="width: 100%; height: calc(100vh - 56px);">
            <div class="pr-4.5 lg:pl-80 h-full">
                <div class="bg-gray-50 h-full flex-1 p-3 md:p-6" style="border-top-left-radius: 25px;">
                    <slot />
                </div>
            </div>
        </ScrollPanel>
    </div>
</template>
<script>

</script>
<style scoped>

</style>