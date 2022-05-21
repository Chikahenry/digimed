import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  closeResult: string = ''; 
  transaction: any;
  userData: any;
  form!: FormGroup;
  mainModal: boolean = false;
  successModal: boolean = false;
  errorModal: boolean = false;
  message: string = '';
  errorMessage: boolean = false;
  symptoms: { id: number; name: string; strikeThrough: boolean }[] = [];
  selectedSymptoms: {id: number; name: string; strikeThrough: boolean}[] = [];
  sickness: string = '';
  // strikeThrought = {} 

  constructor(
    private modalService: NgbModal,
    private formBuiilder: FormBuilder,
    private route : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
   
  }

  checked(id:any){
    // console.log(id)
    if(this.selectedSymptoms.length < 5){
      // console.log('you can do better')
      this.message = 'Try adding more symptoms to let us serve you better'
     
    }else{
      this.message = ''
    }

    
    let newSymp = this.symptoms.filter(e => e.id == id)
    let selSymp = this.selectedSymptoms.filter(e => e.id == id)
    if(newSymp[0]?.id == selSymp[0]?.id){
      this.selectedSymptoms = this.selectedSymptoms.filter(e => e.id != id)
      newSymp[0].strikeThrough = false
    }else{
      newSymp[0].strikeThrough = true
      this.selectedSymptoms.push(newSymp[0])

    }
    console.log(this.selectedSymptoms)
     

  }

  submit(){
    if(this.selectedSymptoms.length < 5){
      console.log('you can do better')
      this.message = 'Try adding more symptoms to let us serve you better'
     
      return
    }else
    if(this.selectedSymptoms.length > 15){
      console.log('you can do better')
      this.message = 'Ahh only you, fear God na'
      
      return
    }else{

      let val = []
      let cho = 0
      let typ = 0
      let tub = 0
      let ebo = 0
      let yel = 0
      let mal = 0
  
      for(let i=0; i<this.selectedSymptoms.length; i++){
        let j = this.selectedSymptoms[i]?.id
        if(j == 16 || j == 17 || j == 18 || j == 19 || j == 7 || j == 26 || j == 6){
          typ += 1
        }
        else if(j == 30 || j == 2 || j == 5 || j == 4 || j == 19 || j == 6){
          cho += 1
        }
        else if(j == 10 || j == 9 || j == 26 || j == 11 || j == 3 || j == 7 || j == 8 || j == 4){
          ebo += 1
        }
        else if(j == 3 || j == 1 || j == 12 || j == 13 || j == 15 || j == 7 || j == 8 || j == 4){
          mal += 1
         }
         else if(j == 21 || j == 22 || j == 23 || j == 24 || j == 25 || j == 3 || j == 19){
          yel += 1
        }
        else if(j == 29 || j == 28 || j == 27 || j == 26 || j == 3 || j ==19 || j == 12){
          tub += 1
        } 
        else{
            // Do nothing
        }
      }
  
      this.message = ''
      console.log( cho , ebo , mal , tub , typ , yel )
      val.push(cho)
      val.push(ebo)
      val.push(mal)
      val.push(tub)
      val.push(typ)
      val.push(yel) 
      // console.log(Math.max(...val));
      console.log(val.indexOf(Math.max(...val)));
      let diseaseIndex = val.indexOf(Math.max(...val));
       
      if(diseaseIndex == 0){
        this.sickness = 'cholera'
      }else if(diseaseIndex == 1){
        this.sickness = 'ebola'
      }
      else if(diseaseIndex == 2){
        this.sickness = 'malaria'
      }
      else if(diseaseIndex == 3){
        this.sickness = 'tuberculosis'
      }
      else if(diseaseIndex == 4){
        this.sickness = 'typhoid'
      }
      else if(diseaseIndex == 5){
        this.sickness = 'yellow-fever'
      }
  
      this.mainModal = false
      this.successModal = true
  }

  }

  goto(route: any){
    let btn = document.getElementById('closebtn') as HTMLElement
    btn.click()
    this.router.navigate(['/'+route])
  }

  open(content:any, modal: boolean) {
    this.selectedSymptoms = []
    this.mainModal = modal 
    this.getSymptoms()
    this.message = ''
    this.successModal = false
    this.errorModal = false
    this.errorMessage = false
    this.modalService.open(content, {size:'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 
     
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  getSymptoms(){
    let symptoms = [
      { strikeThrough: false, id:1, name: 'Headache'},
      { strikeThrough: false, id:2, name: 'Watery diarrhea'},
      { strikeThrough: false, id:3, name: 'Fever'},
      { strikeThrough: false, id:4, name: 'Vomitting'},
      { strikeThrough: false, id:5, name: 'Dehydration'},
      { strikeThrough: false, id:6, name: 'Abdominal Pain'},
      { strikeThrough: false, id:7, name: 'Diarrhea'},
      { strikeThrough: false, id:8, name: 'Weakness'},
      { strikeThrough: false, id:9, name: 'Muscle pain'},
      { strikeThrough: false, id:10, name: 'Unexplained hemorrhage'},
      { strikeThrough: false, id:11, name: 'Severe headache'},
      { strikeThrough: false, id:12, name: 'Chills or Cold'},
      { strikeThrough: false, id:13, name: 'Paleness of the skin'},
      { strikeThrough: false, id:14, name: 'Myalgia or Muscle Pain'},
      { strikeThrough: false, id:15, name: 'Arthralgia or Join Pain'},
      { strikeThrough: false, id:16, name: 'High Fever'},
      { strikeThrough: false, id:17, name: 'Dull Frontal Headache'},
      { strikeThrough: false, id:18, name: 'Constipation'},
      { strikeThrough: false, id:19, name: 'Malaise or fatigue'},
      { strikeThrough: false, id:20, name: 'Cough'},
      { strikeThrough: false, id:21, name: 'Jaundice or yellowish Skin'},
      { strikeThrough: false, id:22, name: 'Hypotension or Low blood Pressure'},
      { strikeThrough: false, id:23, name: 'Low heart beat'},
      { strikeThrough: false, id:24, name: 'Conjunctiva injection'},
      { strikeThrough: false, id:25, name: 'Hemorrhagic diathesis'},
      { strikeThrough: false, id:26, name: 'Loss of appetite'},
      { strikeThrough: false, id:27, name: 'Coughing up blood or mucus'},
      { strikeThrough: false, id:28, name: 'Chest pain, or pain with breathing'},
      { strikeThrough: false, id:29, name: 'Night Sweats'},
      { strikeThrough: false, id:30, name: 'S-typhi and S-paratyphi infections'}
    ]

    this.symptoms = symptoms
  }

}
