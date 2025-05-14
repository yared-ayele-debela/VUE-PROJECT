<script setup>
import Card from './Card.vue';

</script>
<template>
    <section class="py-4">
        <div class="m-auto container-xl lg:container">
            <div class="grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2">
                <Card>
                    <h2 class="text-2xl font-bold">For Developers</h2>
                    <p class="mt-2 mb-4">
                        Browse our Vue jobs and start your career today
                    </p>
                    <router-link to="/jobs" class="inline-block px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-700">
                        Browse Jobs
                    </router-link>
                </Card>
                <Card bg="bg-green-100">
                    <h2 class="text-2xl font-bold">For Employers</h2>
                    <p class="mt-2 mb-4">
                        List your job to find the perfect developer for the role
                    </p>
                    <router-link to="/jobs/add"
                        class="inline-block px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
                        Add Job
                    </router-link>
                </Card>
            </div>
        </div>
    </section>
</template>