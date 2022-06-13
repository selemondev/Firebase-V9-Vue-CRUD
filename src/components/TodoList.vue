<script setup>
import {collection, query, onSnapshot, updateDoc,doc, deleteDoc, QuerySnapshot} from "@firebase/firestore";
import { watchEffect, ref} from "vue";
import { db } from "../../firebase/firebaseConfig.js";

const Todos = ref([])
watchEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, querySnapshot => {
        let todosArray = [];
        querySnapshot.forEach(doc => {
            todosArray.push({...doc.data(), id: doc.id})
        });
        Todos.value = todosArray
    });

    return () => unsub();
})

const completed = async (todo) => {
    await updateDoc(doc(db,"todos", todo.id), {
        completed: !todo.completed
    })
};

const deleteTodo = async (todo) => {
    await deleteDoc(doc(db, "todos", todo.id))
}
</script>
<template>
<div class="flexLayout">
    <div>
        <div v-for="todo in Todos" :key="todo.id">
        <div class="flexLayout w-72 sm:w-80 bg-gray-200 mt-2 px-2 py-2 rounded-md">
           <div class="flex justify-center items-center">
            <input type="checkbox" :checked="todo.completed" class="mr-2" @change="completed(todo)">
             <h3 :class="[todo.completed ? 'line-through font-bold' : 'font-bold']">{{todo.todo}}</h3>
           </div>
        <span><i class='bx bxs-trash-alt text-lg text-red-500' @click="deleteTodo(todo)"></i></span>
        </div>
        </div>
    </div>
</div>
</template>