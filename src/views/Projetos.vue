<template>
    <section class="d-flex justify-content-center flex-column align-items-center">
        <h1>Projetos</h1>
        <form @submit.prevent="salvar" class="d-flex flex-column justify-content-center align-items-center gap-3 w-100" >
            <div class="d-flex flex-column justify-content-center align-items-center  gap-2 w-100">
                <label for="nomeDoProjeto"> Nome do Projeto</label>
                <input type="text"
                v-model="nomeDoProjeto"
                id="nomeDoProjeto"
                />
            </div>
            <div>
                <button class="button-save" type="submit" >Salvar</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IProjeto from '@/interfaces/IProjeto';

export default defineComponent({
    name: 'Projetos',
    data(){
        return{
            nomeDoProjeto: "",
            projetos: [] as IProjeto[]
        };
    },
    methods: {
        salvar (){
            const projeto: IProjeto = {
                nome: this.nomeDoProjeto,
                id: new Date().toISOString()
            }
            this.projetos.push(projeto)
            this.nomeDoProjeto = ''
        }
    }
});

</script>

<style scoped>
h1{
    color: #598e98;
    font-size: 2rem;
    font-weight: 700;
}

.button-save{
    background-color: #598e98;
    padding: 0.5rem;
    color: white;
    border-radius: 6px;
    border: 1px solid black;
}

form {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
}

label{
    font-size: 1.15rem;
}

input{
    width: 40%;
    padding: 0.5rem;
    border-radius: 6px;
}

@media screen and (max-width: 760px){
    input{
    width: 60%;
    padding: 0.4rem;
}
}

</style>