import { Component } from '@angular/core';
import { JobBoard, JobPosting } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  jobBoard:JobBoard<JobPosting> = {
    list:[
      {
        position:'Frontend',
        level:'Senior Developer',
        langRequirement:[0,1,2,3],
        diploma:1,
        description:'Something I need',
        company:'Hitech*',
        email:'recruiter@hitech.com.cn',
        expireStatus:-1,
        expireDate:'2021-05-17',
        style: {
          'background-color':'#FFFFFF'
        }
      }
    ]
  };

  today = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;
  
  navBar = {
    currentSelected:  0,
    listItems:  ['All','In Demand','Expired']
  }
  
  time = (time) : number => {
    return new Date(time).getTime();
  }

  languagesList:Array<String> = [
    'C#','Javascript','Java','PHP',
    'Python','C++','Ruby','Laravel',
    'ReactJS','Spring','VueJS','Angular',
    'Ruby On Rails'
  ];
  
  diplomasList:Array<String> = ['Bachelor','College','Certificate','No diploma required'].reverse();

  form = {
    values : {
      position:'',
      level:'',
      langRequirement:[],
      diploma:0,
      description:'',
      company:'',
      email:'',
      expireStatus:-1,
      expireDate:'',
      style: {
        'background-color':'#FFFFFF'
      }
    }
  }

  selectLang = (index:number) : void => {
    if (this.form.values.langRequirement.indexOf(index) == -1) {
      this.form.values.langRequirement.push(index);
    } else {
      this.form.values.langRequirement = this.form.values.langRequirement.filter(i => i !== index);
    }
  }

  post = (event) : void => {
    event.preventDefault();
    const data:JobPosting = {
      ...this.form.values,
    }
    
    this.form.values = {
      position:'',
      level:'',
      langRequirement:[],
      diploma:0,
      description:'',
      company:'',
      email:'',
      expireStatus:-1,
      expireDate:'',
      style: {
        'background-color':'#FFFFFF'
      }
    };

    this.jobBoard.list.push(data);
    this.jobBoard.list = this.jobBoard.list.map(job => {
      return {
        ...job,
        expireStatus: this.time(this.today) < this.time(job.expireDate) ? 1 : 2,
      }
    });
  }
}