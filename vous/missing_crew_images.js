let leader1imgs = document.querySelectorAll('.leaderimg1')
let leader2imgs = document.querySelectorAll('.leaderimg2')
let names = document.querySelectorAll('.namewrapper')

let missing_leader_1_imgs = []
let missing_leader_2_imgs = []

leader1imgs.forEach((item, index) => {
    if (item.style.cssText.includes('background-image: none;')){
        missing_leader_1_imgs.push(names[index].children[0].innerText))
    }
})

leader2imgs.forEach((item, index) => {
    if (item.style.cssText.includes('background-image: none;')){
        missing_leader_2_imgs.push(names[index].children[2].innerText))
    }
})

let people_who_are_missing_images = missing_leader_1_imgs.concat(missing_leader_2_imgs)

console.log(missing_images.sort())


