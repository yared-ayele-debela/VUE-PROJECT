<script setup>
import { defineProps, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
const props =defineProps({
    job: {
        type: Object,
    },
});

const showFullDescription= ref(false);

const toggleFullDescription = () => {
    showFullDescription.value = !showFullDescription.value;
}
const truncatedDescription= computed(()=>{
    let description= props.job.description;
    if(!showFullDescription.value){
        description= description.substring(0, 90) + '...';
    }
    return description;
})
</script>
<template>
    <div class="relative bg-white shadow-md rounded-xl">
        <div class="p-4">
            <div class="mb-6">
                <div class="my-2 text-gray-600">{{ job.type }}</div>
                <h3 class="text-xl font-bold">{{ job.title }}</h3>
            </div>

            <div class="mb-5">
               <div>
                {{ truncatedDescription }}
               </div>
               <button @click="toggleFullDescription" class="mb-5 text-green-500 hover:text-green-600">
                {{ showFullDescription?'Show Less':'Show More' }}
               </button>
            </div>

            <h3 class="mb-2 text-green-500">{{ job.salary }} / Year</h3>
            <div class="mb-5 border border-gray-100"></div>
            <div class="flex flex-col justify-between mb-4 lg:flex-row">
                <div class="mb-3 text-orange-700">
                    <i class="text-lg pi pi-map-marker"></i>
                    {{ job.location }}
                </div>
                <RouterLink :to="`/jobs/${job.id}`"
                    class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                    Read More
                </RouterLink>
            </div>
        </div>
    </div>
</template>