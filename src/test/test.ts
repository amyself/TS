(()=>{
  class Animal{
    name:string

    constructor(name:string){
      this.name=name
    }
    run (distance:number=0){
      console.log(`${this.name} run ${distance}m`)
    }
  }
  class Snake extends Animal{
    run (distance:number=5){
      console.log('snake sliding')
      super.run(distance)
    }
  }
})()