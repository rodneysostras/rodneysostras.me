<!--
 ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
 │ Copyright (c) 2021 by the author of the rodneysostras.me project. All rights reserved.       │
 │ This owner-supplied source code has no limitations on the condition imposed on the           │
 │ maintenance of the copyright notice.                                                         │
 │ For more information, read the LICENSE file at the root of the project.                      │
 │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
 └──────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<template>
    <div class="container-info">
        <h1 class="name">Rodney Sostras</h1>
        <h3>Develop | Web | Frontend</h3>
        <div class="icon">
            <a
                href="https://github.com/rodneysostras"
                target="_blank"
                rel="nofollow"
                title="Github"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    aria-label="Github Icon"
                >
                    <image xlink:href="../../../../assets/img/github.svg"></image>
                </svg>
            </a>
            <a
                href="https://linkedin.com/in/rodney-sostras"
                target="_blank"
                rel="nofollow"
                title="Linkedin"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    aria-label="Linkdin Icon"
                >
                    <image xlink:href="../../../../assets/img/linkedin.svg"></image>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Info',
};
</script>

<style>
.container-info {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translateX(-50%) translateY(-48%);
    color: #e5e5e5;
    text-align: center;
    z-index: 1;
    user-select: none;
    white-space: nowrap;
}

.container-info .name {
    font-size: 3.75rem; /* 60px */
    font-weight: 800;
    line-height: 1.5;
}

.container-info .name + h3 {
    font-size: 1.25rem; /* 20px */
}

.container-info .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;

    filter: invert(100%) sepia(0%) saturate(4211%) hue-rotate(303deg) brightness(112%) contrast(80%);
}

@media screen and (max-width: 600px) {
    .container-info .name {
        font-size: 1.875rem; /* 30px */
    }

    .container-info .name + h3 {
        font-size: 0.938rem; /* 15px */
    }
}
</style>
