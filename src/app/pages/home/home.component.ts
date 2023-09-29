import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieApiServiceService){}
  ApiBannnerData:any[]=[]
  ApitrendingMovieData:any[]=[]
    ActionMovieData:any[]=[]
    advMoviesR : any[]=[]
  animationMoviesR : any[]=[]
  comedyMoviesR : any[]=[]
  documentaryMoviesR : any[]=[]
  scienceFictionMoviesR : any[]=[]
  thrillerMoviesR : any[]=[]
  ngOnInit(){
  this.bannerData()
  this.trendingMovieData()
  this.actionMovieData()
  this.advMovieData()
  this.animationMovieData()
  this.comedyMovieData()
  this.documentaryMoviesData()
  this.scienceFictionMovieData()
  this.thrillerMoviesData()
 }

  bannerData(){
    this.service.bannerApiData().subscribe((res)=>{
      console.log(res,'bannerdata');
        this.ApiBannnerData=res.results
      
    })
  }

  trendingMovieData(){
      this.service.trendingMovieApiData().subscribe((res)=>{
        console.log(res);
        this.ApitrendingMovieData=res.results;

      })
  }
  actionMovieData() {
    this.service.actionMovies().subscribe((res) => {
      this.ActionMovieData = res.results
    })
  }

  animationMovieData() {
    this.service.animationMovies().subscribe((res) => {
      this.animationMoviesR = res.results
    })
  }

  advMovieData() {
    this.service.advMovies().subscribe((res) => {
      this.advMoviesR = res.results
    })
  }

  scienceFictionMovieData() {
    this.service.scienceFictionMovies().subscribe((res) => {
      this.scienceFictionMoviesR = res.results
    })
  }

  documentaryMoviesData() {
    this.service.documentaryMovies().subscribe((res) => {
      this.documentaryMoviesR = res.results
    })
  }

  comedyMovieData() {
    this.service.comedyMovies().subscribe((res) => {
      this.comedyMoviesR = res.results
    })
  }

  thrillerMoviesData() {
    this.service.thrillerMovies().subscribe((res) => {
      this.thrillerMoviesR = res.results
    })
  }
}
