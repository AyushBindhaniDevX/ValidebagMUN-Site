<template>
    <div>
        <footer class="footer p-10 bg-base-200 text-base-content dark:bg-neutral dark:text-accent">
            <div>
                <ClientOnly>
                    <img :src="icon" alt="VMUN icon" class="h-24">
                </ClientOnly>
                <p>Validebağ Science High School<br />Model United Nations Club</p>
                <span class="text-neutral dark:text-primary font-semibold">Developed by <a target="_blank"
                        href="https://github.com/HexaBinary">HexaBinary</a></span>
            </div>
            <div>
                <span class="footer-title">Secretariat</span>
                <NuxtLink to="/"><a class="link link-hover">Home</a></NuxtLink>
                <NuxtLink to="/team/"><a class="link link-hover">Our Team</a></NuxtLink>
                <NuxtLink to="/faq/"><a class="link link-hover">FAQ</a></NuxtLink>
                <NuxtLink to="/contact/"><a class="link link-hover">Contact Us</a></NuxtLink>
                <NuxtLink to="/apply/"><a class="link link-hover">Applications</a></NuxtLink>
            </div>
            <div>
                <NuxtLink to="/committees/"><span class="footer-title">Committees</span></NuxtLink>
                <NuxtLink to="/committees/SPECPOL/"><a class="link link-hover">SPECPOL</a></NuxtLink>
                <NuxtLink to="/committees/JCC/"><a class="link link-hover">JCC</a></NuxtLink>
            </div>
            <div>
                <span class="footer-title">Legal</span>
                <NuxtLink to="/termsandconditions/"><a class="link link-hover">Terms of use</a></NuxtLink>
                <NuxtLink to="/privacypolicy/"><a class="link link-hover">Privacy policy</a></NuxtLink>
            </div>
            <div>
                <span class="footer-title">Social</span>
                <div class="grid grid-flow-col gap-4">
                    <a target="_blank" href="https://www.instagram.com/validebagmun/">
                        <svg type="color-fill-current" width="24px" height="24px" viewBox="0 0 20 20" x="0px" y="0px"
                            class="fill-current">
                            <g>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M10 5.892a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm0 6.774a2.667 2.667 0 110-5.333 2.667 2.667 0 010 5.333z">
                                </path>
                                <path d="M15.23 5.73a.96.96 0 11-1.92 0 .96.96 0 011.92 0z"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M10 2c-2.173 0-2.445.01-3.299.048-.851.039-1.432.174-1.941.372a3.918 3.918 0 00-1.417.923c-.445.445-.719.89-.923 1.417-.198.509-.333 1.09-.372 1.941C2.01 7.555 2 7.827 2 10s.01 2.445.048 3.298c.039.852.174 1.433.372 1.942.205.526.478.972.923 1.417.445.445.89.718 1.417.923.509.198 1.09.333 1.942.372C7.555 17.99 7.827 18 10 18s2.445-.01 3.298-.048c.852-.039 1.434-.174 1.942-.372a3.918 3.918 0 001.417-.923 3.92 3.92 0 00.923-1.417c.198-.509.333-1.09.372-1.942.039-.853.048-1.125.048-3.298s-.01-2.445-.048-3.299c-.039-.851-.174-1.433-.372-1.941a3.918 3.918 0 00-.923-1.417 3.92 3.92 0 00-1.417-.923c-.51-.198-1.09-.333-1.942-.372C12.445 2.01 12.172 2 10 2zm0 1.441c2.136 0 2.389.009 3.232.047.78.036 1.204.166 1.486.275.373.146.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.485.039.844.047 1.097.047 3.233s-.008 2.389-.047 3.232c-.035.78-.165 1.204-.275 1.486-.145.373-.319.64-.598.92-.28.28-.547.454-.92.598-.282.11-.706.24-1.486.276-.843.038-1.096.046-3.232.046s-2.39-.008-3.233-.046c-.78-.036-1.203-.166-1.485-.276a2.481 2.481 0 01-.92-.598 2.474 2.474 0 01-.599-.92c-.11-.282-.24-.706-.275-1.486-.038-.843-.047-1.096-.047-3.232s.009-2.39.047-3.233c.036-.78.166-1.203.275-1.485.145-.374.319-.64.599-.92.28-.28.546-.454.92-.599.282-.11.705-.24 1.485-.275.844-.038 1.097-.047 3.233-.047z">
                                </path>
                            </g>
                        </svg>
                    </a>
                    <a target="_blank" href="https://twitter.com/VMUN_">
                        <svg type="color-fill-current" width="24px" height="24px" viewBox="0 0 20 20" x="0px" y="0px"
                            class="fill-current">
                            <g>
                                <path
                                    d="M19 3.844a7.07 7.07 0 01-2.12.62 3.912 3.912 0 001.623-2.178 7.075 7.075 0 01-2.345.955 3.613 3.613 0 00-2.694-1.24c-2.04 0-3.694 1.76-3.694 3.94 0 .31.037.61.1.9C6.8 6.668 4.078 5.1 2.253 2.72c-.33.606-.5 1.286-.498 1.977 0 1.363.653 2.567 1.643 3.273a3.49 3.49 0 01-1.672-.493v.05c0 1.906 1.272 3.496 2.963 3.857-.55.156-1.12.18-1.67.067.47 1.57 1.83 2.7 3.45 2.73a7.07 7.07 0 01-5.47 1.63 9.954 9.954 0 005.66 1.77c6.79 0 10.51-5.99 10.51-11.19 0-.17-.01-.34-.01-.51.73-.56 1.35-1.25 1.84-2.03">
                                </path>
                            </g>
                        </svg>
                    </a>
                    <a target="_blank" href="https://github.com/ValidebagMUN">
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    isDark: {
        type: Boolean,
        default: false
    }
})
const icon = computed(() => props.isDark ? '/vmun-light.svg' : '/vmun-dark.svg')
</script>

<style scoped></style>