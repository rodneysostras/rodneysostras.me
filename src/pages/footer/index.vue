<!--
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Copyright (c) 2021 by the author of the rodneysostras.me project. All rights reserved.       │
│ This owner-supplied source code has no limitations on the condition imposed on the           │
│ maintenance of the copyright notice.                                                         │
│ For more information, read the LICENSE file at the root of the project.                      │
│ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<template>
    <footer id="footer">
        <div class="container">
            <div class="logo">
                <a href="//rodneysostras.me" target="_self" title="Website Rodney Sostras">
                    <span>&lt;</span>
                    <span class="logo-name">Rodney Sostras</span>
                    <span>/&gt;</span>
                </a>
            </div>
            <div class="links">
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
                <div>
                    <a href="#home">Home</a>
                    <a href="#about">Sobre</a>
                    <a href="#projects">Projetos</a>
                    <a href="#contacts">Contato</a>
                </div>
                <span>© {{ new Date().getFullYear() }} Rodney Sostras</span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style>
#footer {
    margin: 1rem;
}

#footer .container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#footer .logo {
    font-size: 2em;
    font-family: sans-serif;
    text-decoration: none;
    line-height: normal;
    margin-top: 0.188rem;
    color: #868e96;
    cursor: pointer;
}

#footer .logo .logo-name {
    font-family: 'Agustina Regular' !important;
    font-weight: bold;
    font-variant-ligatures: no-common-ligatures;
    padding: 0 10px;
    color: #ffac00;
    transition: 0.3s all ease;
    white-space: nowrap;
}
#footer .logo .logo-name:hover {
    color: #e5e5e5 !important;
}

#footer .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
    order: -1;
}

#footer .links > ul {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    list-style: none;
}

#footer .links > ul li + li {
    margin-left: 0.5rem;
}

#footer .links > ul li a:hover > * {
    transform: scale(1.1);
}

#footer .links > div {
    display: flex;
    flex-direction: column;
    color: var(--color-secondary);
}

#footer .links > div > a {
    transition: all 0.3s ease-in-out;
}

#footer .links > div > a:hover {
    color: var(--color-primary);
}

#footer .links > span {
    font-size: 0.85rem;
    opacity: 0.4;
    user-select: none;
}

@media screen and (min-width: 640px) {
    #footer {
        margin: 5rem;
    }

    #footer .container {
        flex-direction: row;
        justify-content: space-between;
    }

    #footer .links {
        order: 2;
        align-items: flex-end;
        text-align: right;
    }
}
</style>
