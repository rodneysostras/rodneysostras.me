<!--
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Copyright (c) 2022 by the author of the rodneysostras.me project. All rights reserved.       │
│ This owner-supplied source code has no limitations on the condition imposed on the           │
│ maintenance of the copyright notice.                                                         │
│ For more information, read the LICENSE file at the root of the project.                      │
│ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<template>
    <div class="contacts-card">
        <div>
            <slot name="icon"></slot>
        </div>
        <h3>{{ title }}</h3>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ContactsCards',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style>
.contacts-card {
    height: 16rem;
    width: 16rem;
    padding: 3rem;
    padding-bottom: 4rem;
    font-size: 0.85rem;
    text-align: center;
    margin: 0 auto;
    color: var(--color-secondary);
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    transition: all 0.3s ease-in-out;
    overflow: hidden;
}
.contacts-card > div {
    height: 6rem;
    width: 6rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    font-size: 2em;
    line-height: 6.185rem;
    border-radius: 50%;
    color: var(--bg-primary);
    background-color: var(--color-secondary);
}
.contacts-card > h3 {
    font-size: 1.17rem;
    color: var(--color-primary);
}
.contacts-card > p:hover,
.contacts-card > a:hover {
    color: var(--color-primary);
}

.contacts-card > ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    list-style: none;
}

@media screen and (max-width: 620px) {
    .contacts-card {
        width: 100%;
    }
}
</style>
