<template>
    <b-card :bg-variant="abducted ? 'danger' : 'default'" :text-variant="abducted ? 'white' : ''" class="text-center"
    tag="article"
    style="width: 20rem; height: auto;"
    :title="name">
        <b-card-text :class="abducted ? 'text-white' : 'text-secondary'">{{gender}}, {{age}} years</b-card-text>
        <b-alert show variant="light">{{abducted ? 'Abducted' : 'Non-abducted'}}</b-alert>
        <b-button block variant='light' :href="'http://www.google.com/maps/place/' + latitude + ',' + longitude" target="_system">Open Last Location</b-button>
        <div v-if="!abducted">
            <b-button type="button" block variant='primary' class="mt-1">Report Abduction</b-button>
        </div>
    </b-card>
</template>

<script>
export default {
    name: 'survivor',
    props: {
        name: {
            type: String,
            required: true
        },
        age:{
            type: Number,
        },
        gender:{
            type: String,
        },
        abducted: {
            type: Boolean
        },
        latitude:{
            type: String,
        },
        longitude:{
            type: String,
        }
    }
}
</script>

<style scoped>
    .imagem-quadrinho {
        width: 120px;
    }
    .card-default {
        padding: 28px;
        margin: 18px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        background: #FFF !important;
    }
</style>