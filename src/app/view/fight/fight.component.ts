import { Transformers } from './../../model/Transformers';
import { Results } from './../../model/Results';
import { AppConstantsService } from './../../service/app-constants.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/http/api.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {
  form: FormGroup;
  inProgress = false;
  results: BehaviorSubject<Results> = new BehaviorSubject<Results>(null);
  autobots: BehaviorSubject<Transformers[]> = new BehaviorSubject<Transformers[]>([]);
  decepticons: BehaviorSubject<Transformers[]> = new BehaviorSubject<Transformers[]>([]);

  errorMessages = {
      "autobots": [
        { type: 'required', message: 'Select atleast one autobot' }
      ],
      "decepticons": [
        { type: 'required', message: 'Select atleast one decepticon' }
      ],
  }
  
  constructor(private fb: FormBuilder, private apiService: ApiService, private appConstantsService: AppConstantsService) { }

  ngOnInit() {
    this.apiService.getTransformers(this.appConstantsService.TYPE_AUTOBOT).subscribe(autobotResponse => {
      this.apiService.getTransformers(this.appConstantsService.TYPE_DECEPTICON).subscribe(decepticonResponse => {
        this.autobots.next(autobotResponse.data);
        this.decepticons.next(decepticonResponse.data);
        this.createForm();
      })
    })
    
  }

  /**
   * Create Fight Form
   */
  createForm() {
    this.form = this.fb.group({
      autobots: ['', Validators.required],
      decepticons: ['', Validators.required],
    });
  }

  submit = () => {
    if(this.form.invalid){
      return;
    }

    const controls = this.form.controls;

    let payload = {
      autobots: controls["autobots"].value ? controls["autobots"].value : [],
      decepticons: controls["decepticons"].value ? controls["decepticons"].value : [],
    }

    this.apiService.getFightResults(payload).subscribe(results => {
      this.results.next(results.data);
    })
  }

}
