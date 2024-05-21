<template>
    <section>
        <h1>Projetos</h1>
        <form @submit.prevent="salvar" >
            <div>
                <label for="nomeDoProjeto"> Nome do Projeto</label>
                <input type="text"
                v-model="nomeDoProjeto"
                id="nomeDoProjeto"
                />
            </div>
            <div>
                <button type="submit" >Salvar</button>
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