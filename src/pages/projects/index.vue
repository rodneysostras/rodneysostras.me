<!--
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Copyright (c) 2022 by the author of the rodneysostras.me project. All rights reserved.       │
│ This owner-supplied source code has no limitations on the condition imposed on the           │
│ maintenance of the copyright notice.                                                         │
│ For more information, read the LICENSE file at the root of the project.                      │
│ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<template>
    <section id="projects" class="container">
        <h2>Projetos</h2>
        <ul>
            <li v-for="item in projects" :key="item.node.id">
                <ProjectsCard
                    :name="item.node.name"
                    :description="item.node.description"
                    :url="item.node.url"
                    :watchers="item.node.watchers.totalCount"
                    :star="item.node.stargazerCount"
                    :language="item.node.primaryLanguage"
                />
            </li>
        </ul>
    </section>
</template>

<script>
import gql from 'graphql-tag';

import { API_ENDPOINT_GITHUB_USER } from '@/settings';

import ProjectsCard from './components/projects-card';

const GITHUB_PROJECTS_QUERY = gql`
    {
        user(login: "${API_ENDPOINT_GITHUB_USER}") {
            name
            pinnedItems(first: 6, types: [REPOSITORY]) {
                edges {
                    node {
                        ... on Repository {
                            id
                            name
                            description
                            stargazerCount
                            url
                            primaryLanguage {
                                name
                                color
                            }
                            watchers {
                                totalCount
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default {
    name: 'Projects',
    components: {
        ProjectsCard,
    },
    data() {
        return {
            user: {},
            loading: true,
            error: undefined,
        };
    },
    apollo: {
        user: {
            query: GITHUB_PROJECTS_QUERY,
        },
    },
    computed: {
        projects() {
            return (this.user.pinnedItems && this.user.pinnedItems.edges) || [];
        },
    },
};
</script>

<style>
#projects {
    display: flex;
    flex-direction: column;
}
#projects > h2 {
    font-size: 3.125rem;
    text-align: center;
}

#projects > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1rem 1rem;
    list-style: none;
    overflow: hidden;
}

@media screen and (max-width: 600px) {
    #projects > ul {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
}
</style>
