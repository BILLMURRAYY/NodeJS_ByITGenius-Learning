// export default class User { // export แบบที่ 1
class User {
    constructor(name){
        this.name = name
    }
    sayHi(){
        console.log(`Hi ${this.name}`)
    }

}
export default User // export แบบที่ 2