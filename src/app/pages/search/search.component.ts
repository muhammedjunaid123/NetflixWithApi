import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchData:any[]=[]
  constructor(private service:MovieApiServiceService){}
ngOnInit(): void {
  
}
searchFrom=new FormGroup({
  'movieName':new FormControl(null)
})

submitForm(){
  console.log(this.searchFrom.value,'searchfromdata');
  this.service.searchMovie(this.searchFrom.value).subscribe((res)=>{
    console.log(res,'searchMovie');
    this.searchData=res.results
  })
  
}
}
