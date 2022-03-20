<!--
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Copyright (c) 2022 by the author of the rodneysostras.me project. All rights reserved.       │
│ This owner-supplied source code has no limitations on the condition imposed on the           │
│ maintenance of the copyright notice.                                                         │
│ For more information, read the LICENSE file at the root of the project.                      │
│ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<template>
    <a class="card-container" :href="url" target="_blank">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
        <div class="card-itens">
            <span>
                <div class="cicle-language" :style="{ 'background-color': language.color }"></div>
                {{ language.name }}
            </span>
            <span>
                <font-awesome-icon :icon="['fa', 'code-branch']" :style="{ color: '#ffffff2e' }" />
                {{ watchers }}
            </span>
            <span>
                <font-awesome-icon :icon="['far', 'star']" :style="{ color: '#ffffff2e' }" />
                {{ star }}
            </span>
        </div>
    </a>
</template>

<script>
export default {
    name: 'CardProject',
    props: {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        watchers: {
            type: Number,
            required: true,
        },
        star: {
            type: Number,
            required: true,
        },
        language: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style>
.card-container {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    text-decoration: none;
    background-color: #ffffff1a;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    cursor: pointer;
}

.card-container:hover {
    transform: scale(1.01);
}

.card-container > h3 {
    font-size: 1.5rem;
    color: var(--color-secondary);
}
.card-container > p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 1rem 0;
    overflow: hidden;
}

.card-container > .card-itens {
    display: flex;
    gap: 0.75rem;
    font-size: 0.85rem;
}

.card-itens > span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
}

.card-itens .cicle-language {
    height: 0.85rem;
    width: 0.85rem;
    border-radius: 50%;
    background: #fafafa;
}
</style>
