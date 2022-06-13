<script setup>
import { ref} from "vue";
import { db } from "../../firebase/firebaseConfig.js";
import TodoListVue from "../components/TodoList.vue";
import { addDoc, collection} from "@firebase/firestore";
const input = ref("");
const handleSubmit = async () => {
    await addDoc(collection(db, "todos"), {
        todo: input.value,
        createdAt: new Date(),
        completed: false,
    });

    input.value = ""
};

</script>
<template>
  <div class='layout'>
      <div class='max-w-md w-72 md:w-80 mt-5 mb-5 border border-gray-200'>
        <form class='px-6 py-4 bg-white w-full rounded-sm' @submit.prevent="handleSubmit">
          <div class='layout'>
            <h3 class='mt-3 mb-5 font-bold text-green-600'>Firebase CRUD App</h3>
          </div>
          <div class='pb-4 flex justify-center items-center'>
           <div>
           <input type="text" placeholder='Todo' v-model="input" class='input'/>
           </div>
            <button type='submit' class='ml-2 py-2 px-2 w-32 bg-green-500 hover:bg-blue-600 text-white rounded-md'>Todo</button>
          </div>
        </form>
        </div>

        <div>
            <TodoListVue />
        </div>
        </div>
</template>
