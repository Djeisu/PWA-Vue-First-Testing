<template>
    <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        :title="name"
        :sub-title="abducted"
    >
        <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
    <!-- <md-card class="card-default">
        <h2></h2>
        <p>{{abducted}}</p>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{name}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    </md-card> -->
</template>

<script>
export default {
    name: 'survivor',
    props: {
        name: {
            type: String,
            required: true
        },
        abducted: {
            type: Boolean
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