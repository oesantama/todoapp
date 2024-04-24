import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = signal([
    'instalar el angular cli',
    'crear proyecto',
    'crear componentes'
  ]);
  name = signal('Oscar');
  age = '36';
  disabled = true;
  img = 'https://github.com/oesantama.png';
  person = signal({
    name: 'naruto',
    age: 36,
    avatar: 'https://github.com/oesantama.png'
  });

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50,{
    nonNullable:true
  });
  nameCtrl = new FormControl('oscar',{
    nonNullable:true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });


  constructor (){
    this.colorCtrl.valueChanges.subscribe(value=> {
      console.log(value)
    })
  }

  clickHandler(){
alert('Hola')
  };
  changekHandler(event: Event){
    const input = event.target as HTMLInputElement;
  const newvalue = input.value
    this.name.set(newvalue)
  };
  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
console.log(event)
console.log(input.value)
  }
  changeAge(event: Event){
    const input = event.target as HTMLInputElement;
  const newvalue = input.value
    this.person.update(prevState => {
      return {
       ...prevState,
       age:parseInt(newvalue,10) 
        
      }
    }
       )
  };
  changeName(event: Event){
    const input = event.target as HTMLInputElement;
  const newvalue = input.value
    this.person.update(prevState => {
      return {
       ...prevState,
       name: newvalue
        
      }
    }
       )
  };

}
