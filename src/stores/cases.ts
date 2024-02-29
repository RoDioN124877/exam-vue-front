import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCases = defineStore('cases', () => {
    const boxs = ref<any>([
        {
            id: 1,
            title: "Multicast",
            img: "/public/cases/caseOne.png",
            price: 150,
            bonus: 7,
            filling: ['Throe', 'Yonex\'s Rage', 'Blackened Edge of the Bladekeeper', 'Pauldron of the Fiend Cleaver', 'Totem of Deep Magma']
        },
        {
            id: 2,
            title: "DMC",
            img: "/public/cases/caseTwo.png",
            price: 990,
            bonus: 49,
        },
        {
            id: 3,
            title: "True Ghoul",
            img: "/public/cases/caseThree.png",
            price: 4990,
            bonus: 249,
        },
        {
            id: 4,
            title: "Support",
            img: "/public/cases/caseFoure.png",
            price: 1090,
            bonus: 10,
        }
    ])

    return { boxs }
})
