<script setup>
import jobData from '../jobs.json';
import JobListing from './JobListing.vue';
import { ref, defineProps,onMounted, reactive } from 'vue';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

defineProps({
    limit:Number,
    showButton:{
        type:Boolean,
        default:false
    }
});

const state= reactive({
    jobs:[],
    isLoading:true,
})

onMounted (async () =>{
    try{
        const response= await axios.get('api/jobs');
        state.jobs= response.data;
    }catch (error){
        console.error('Error fetching jobs:', error);
    }finally{
        state.isLoading= false;
    }
}) 

</script>

<template>
    <section class="px-4 py-10 bg-blue-50">
        <div class="m-auto container-xl lg:container" >
            <h2 class="mb-6 text-3xl font-bold text-center text-green-500">
                Browse Jobs
            </h2>
            <!-- Show Loading spinner white loading is true -->
            <div v-if="state.isLoading" class="py-6 text-center text-gray-500">
                <PulseLoader />
            </div>
            <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3">
                 <JobListing v-for="job in state.jobs.slice(0,limit || state.jobs.length)" :key="job.id" :job="job"/>
            </div>
        </div>
    </section>
     <section v-if="showButton" class="max-w-lg px-6 m-auto my-10">
      <RouterLink
        :to="'/jobs'"
        class="block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
</template>