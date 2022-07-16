class Student {
    constructor(name:string, age:number, isGraduated:false){
        this.name = name;
        this.age = age;
        this.isGraduated = isGraduated;
    }

    public name: string = '';
    public age: number = 0;
    private isGraduated: boolean = false;

    public studentFormattedData(): string{
        return 'Nome: ' + this.name + ', Idade: ' + this.age;
    }
}

const student = new Student('Amanda', 16, false);

student.studentFormattedData()