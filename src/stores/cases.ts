import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCases = defineStore('cases', () => {
    const boxs = ref([
        {
            id: 1,
            title: "Multicast",
            img: "/public/cases/caseOne.png",
            price: 150,
            bonus: 7,
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
        }
    ])

    return { boxs }
})
