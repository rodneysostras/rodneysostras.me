<!--
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Copyright (c) 2022 by the author of the rodneysostras.me project. All rights reserved.       │
│ This owner-supplied source code has no limitations on the condition imposed on the           │
│ maintenance of the copyright notice.                                                         │
│ For more information, read the LICENSE file at the root of the project.                      │
│ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<template>
    <section id="about" class="container">
        <h2>Sobre mim</h2>
        <img src="@/assets/img/rodneysostras.png" alt="Rodney Sostras" />
        <p>
            Sou um desenvolvedor de software Front-end me aprimorando em Full Stack, apaixonado por
            tecnologia com desejo de impactar a vida de pessoas com o que sou capaz de criar.
            <span>
                <i>Em busca de novos desafios</i>
                <i>
                    <font-awesome-icon
                        icon="location-dot"
                        :style="{ color: 'var(--color-secondary)' }"
                    />
                    Rio de Janeiro - Brasil
                </i>
            </span>
        </p>
        <ul>
            <li>
                <img src="https://ahsankhan.me/images/skills/javascript.png" alt="javascript" />
            </li>
            <li><img src="https://ahsankhan.me/images/skills/react.png" alt="reactjs" /></li>
            <li><img src="https://ahsankhan.me/images/skills/html.png" alt="html5" /></li>
            <li><img src="https://ahsankhan.me/images/skills/css.png" alt="css3" /></li>
            <li>
                <img src="https://ahsankhan.me/images/skills/firebase.png" alt="firebase" />
            </li>
            <li>
                <img src="https://ahsankhan.me/images/skills/photoshop.png" alt="photoshop" />
            </li>
        </ul>
        <div>
            <a href="#contact" class="outline">Meu contato</a>
            <a href="https://drive.google.com/drive/folders/1R60dhO7brP_HOhX9y_kv2oGiM8s-RuKy">
                Currículo
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About',
};
</script>

<style>
#about {
    display: grid;
    grid-template-columns: 0px 1fr;
    grid-template-rows: repeat(4, auto);
    gap: 0px 0px;
    grid-template-areas:
        'image title'
        'image text'
        'image skill'
        'image action';
}

#about > img {
    grid-area: image;
    display: none;
    margin: 0 auto;
}

#about > h2 {
    grid-area: title;
}
#about > p {
    grid-area: text;
}

#about > p span {
    display: flex;
    flex-direction: column;
}

#about > p span > i {
    margin-top: 1.25rem;
    font-style: normal;
}

#about > ul {
    grid-area: skill;
    padding: 1.25rem;
    text-align: center;
}
#about > ul li {
    display: inline-block;
    list-style: none;
}

#about > ul li + li {
    margin-left: 1.25rem;
}

#about > div {
    grid-area: action;
    display: flex;
    justify-content: space-around;
}

#about > div a {
    height: 50px;
    padding: 12px 22px;
    font-weight: 700;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    color: #000;
    background-color: var(--color-secondary);
    border: 1px solid var(--color-secondary);
    border-radius: 6px;
    box-shadow: 0px 24px 36px -11px rgba(0, 0, 0, 0.09);
    cursor: pointer;
    transition: all 0.3s ease-in-out 0s;
}

#about > div a.outline {
    color: #fff;
    background-color: transparent;
    border-color: #fff;
}

#about > div a:hover {
    color: #fff;
    transition: all 0.3s ease 0s;
    transform: translateY(-3px);
}

#about > div a::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;

    pointer-events: none;
    border-radius: inherit;

    color: inherit;
    background-color: currentColor;

    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}

#about > div a:hover::before {
    opacity: 0.18;
}

@media screen and (min-width: 964px) {
    #about {
        grid-template-columns: 1fr 1fr;
    }

    #about > h2 {
        margin-bottom: 0px;
        text-align: left;
    }

    #about > img {
        display: block;
    }
}

@media screen and (max-width: 420px) {
    #about > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.25rem;
    }

    #about > div a {
        width: 100%;
    }
}
</style>
