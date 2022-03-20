<!--
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Copyright (c) 2022 by the author of the rodneysostras.me project. All rights reserved.       │
│ This owner-supplied source code has no limitations on the condition imposed on the           │
│ maintenance of the copyright notice.                                                         │
│ For more information, read the LICENSE file at the root of the project.                      │
│ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<template>
    <section id="education" class="container">
        <h2>Educação</h2>
        <ul>
            <li v-for="(item, idx) in education" :key="idx">
                <EducationCard
                    :image="item.image"
                    :headline="item.headline"
                    :subhead="item.subhead"
                    :date="item.date"
                    :text="item.text"
                />
            </li>
        </ul>
    </section>
</template>

<script>
import EducationCard from './components/education-card';

export default {
    name: 'Education',
    components: {
        EducationCard,
    },
    data() {
        return {
            education: [
                {
                    image: require('@/assets/img/logo-estacio-faculdade.jpg'),
                    headline: 'Universidade Estacio de Sã',
                    subhead: 'Sistema de Informação',
                    date: '2014-2019',
                    text: 'Aprendi a manipular dados e a estrutura para desenvolver um software além de comunicação e gestão.',
                },
                {
                    image: require('@/assets/img/logo-colegio-flama.png'),
                    headline: 'Colegio Flama',
                    subhead: 'Técnico em Informática',
                    date: '2009-2011',
                    text: 'Me capacitei nas ferramentas fundamentais de hardware e software com ênfase principal no desenvolvimento de algoritmos, VB.NET e páginas para web.',
                },
            ],
        };
    },
};
</script>

<style>
#education > h2 {
    font-size: 1.875rem;
    text-align: left;
    color: var(--color-secondary);
}

#education > ul {
    list-style: none;
}

#education > ul li + li {
    padding-top: 1rem;
    margin-top: 1rem;
    border-top: 1px solid rgb(150, 150, 150, 0.3);
}
</style>
