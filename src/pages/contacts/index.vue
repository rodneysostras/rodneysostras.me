<!--
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Copyright (c) 2022 by the author of the rodneysostras.me project. All rights reserved.       │
│ This owner-supplied source code has no limitations on the condition imposed on the           │
│ maintenance of the copyright notice.                                                         │
│ For more information, read the LICENSE file at the root of the project.                      │
│ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────┘ -->
<template>
    <section id="contacts" class="container">
        <h2>Contatos</h2>
        <ul>
            <li>
                <ContactsCard title="Telefone">
                    <template #icon>
                        <font-awesome-icon icon="phone" />
                    </template>
                    <a
                        href="https://wa.me/5521979310963"
                        target="_blank"
                        title="Rodney Sostras WhatsApp"
                    >
                        +55 21 9 7931-0963
                    </a>
                </ContactsCard>
            </li>
            <li>
                <ContactsCard title="E-Mail">
                    <template #icon>
                        <font-awesome-icon icon="envelope" />
                    </template>
                    <a href="mailto:rodney.sostras@gmail.com" title="Rodney Sostras E-Mail">
                        rodney.sostras@gmail.com
                    </a>
                </ContactsCard>
            </li>
            <li>
                <ContactsCard title="Social Links">
                    <template #icon>
                        <font-awesome-icon icon="hashtag" />
                    </template>
                    <ul :style="{ 'font-size': '1.6rem', color: 'var(--color-primary)' }">
                        <li>
                            <a
                                href="http://github.com/rodneysostras"
                                target="_blank"
                                title="Rodney Sostras Github"
                            >
                                <font-awesome-icon :icon="['fab', 'github']" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://linkedin.com/in/rodney-sostras"
                                target="_blank"
                                title="Rodney Sostras linkedn"
                            >
                                <font-awesome-icon :icon="['fab', 'linkedin']" />
                            </a>
                        </li>
                    </ul>
                </ContactsCard>
            </li>
        </ul>
        <div></div>
    </section>
</template>

<script>
import ContactsCard from './components/contacts-card';

export default {
    name: 'Contacts',
    components: {
        ContactsCard,
    },
};
</script>

<style>
#contacts > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 1rem 3rem;
    list-style: none;
}

@media screen and (max-width: 620px) {
    #contacts > ul {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
}
</style>
