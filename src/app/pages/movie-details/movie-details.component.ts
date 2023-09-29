import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
constructor (private service:MovieApiServiceService,private router:ActivatedRoute){}
movieDetailsData:any;
movieVideo:any;
movieCast:any
ngOnInit(): void {
  let getParamId=this.router.snapshot.paramMap.get('id') 
  this.getMovie(getParamId)
  this.getCast(getParamId)
  this.getvideo(getParamId)

}

getMovie(id:any){
  this.service.movieDetails(id).subscribe((res)=>{
    console.log(res,'movieDetails');
    this.movieDetailsData=res

    
  })
}
getvideo(id:any){
  this.service.movieVideo(id).subscribe((res)=>{
  res.results.forEach((element:any)=>{
    if(element.type == "Trailer") {
      this.movieVideo = element.key
      console.log(this.movieVideo,'keyvideo');
    }
  })
  })
}
getCast(id:any){
  this.service.movieCast(id).subscribe((res)=>{
  this.movieCast=res.cast
  })
}
}
