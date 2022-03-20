<template>
    <div class="education-card">
        <img :src="image" />
        <div>
            <h3>{{ headline }}</h3>
            <strong>
                {{ subhead }}
                <em>({{ date }})</em>
            </strong>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EducationCard',
    props: {
        image: {
            type: String,
            required: true,
        },
        headline: {
            type: String,
            required: true,
        },
        subhead: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
};
</script>

<style>
.education-card {
    display: flex;
    flex-direction: row;
    list-style: none;
}

.education-card > img {
    width: 6rem;
    height: 6rem;
    margin-right: 2rem;
    background-color: #fff;
    object-fit: contain;
    border-radius: 50%;
    box-shadow: 0px 24px 36px -11px rgb(0 0 0 / 9%);
}

.education-card > div strong > em {
    font-style: normal;
    font-size: 0.85rem;
}

@media screen and (max-width: 780px) {
    .education-card {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .education-card > img {
        width: 8rem;
        height: 8rem;
        margin-right: 0;
    }

    .education-card > div {
        text-align: center;
    }
}
</style>
