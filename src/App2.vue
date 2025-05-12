<script setup>
import { ref, onMounted } from 'vue';

const message = ref('Yared Ayele');
const status = ref('active');
const tasks = ref(['Task One', 'Task Two', 'Task Three']);
const newTask = ref('');
const toggleStatus = () => {
  status.value = status.value === 'active' ? 'inactive' : 'active';
};

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data);
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
});
</script>

<template>
  <h1>{{ message }}</h1>
  <p v-if="status === 'active'">User active</p>
  <p v-else-if="status === 'pending'">user is pending</p>
  <p v-else>User inactive </p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" name="newTask" id="newTask" v-model="newTask" />
    <button type="submit">Submit</button>

  </form>
  <hr>
  <h2>Tasks</h2>
  <ol>
    <li v-for="(task, index) in tasks" :key="task">
      <span> {{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ol>

  <button @click="toggleStatus">Change Status</button>
</template>
