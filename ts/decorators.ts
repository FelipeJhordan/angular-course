function MenuItem(itemId: string) {
    return function(value) {
        return class extends value {
            id = itemId
        }
    }
}

@MenuItem("abc")
class Pizza {
    id: string
}


@MenuItem("dfc")
class Hamburger {
    id: string
}


console.log(new Pizza().id)
console.log(new Hamburger().id)