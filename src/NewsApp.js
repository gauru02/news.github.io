import {useState} from "react";
import axios from "axios";
import Result from "./Result";
function NewsApp()

{
	const[news ,setNews] =useState([]);
	const find = (event)=>{
		event.preventDefault();
		let a1="https://newsapi.org/v2/top-headlines";
		let a2="?country=" +"in";
		let a3= "&apikey="+"dcf42dec7d614e778d3dcd8616ab8182";
		
		let urladd=a1+a2+a3;
		axios.get(urladd)
		.then(res=>{
			console.log(res.data.articles);
			setNews(res.data.articles);
			console.log(news);
		})
		.catch(err=>console.log(err))

}


return(

		<div>
			<center>
				<h1>News App </h1>
				<form onSubmit={find}>
					<input type = "submit" value = "Get News" />
				</form>
				{
					news.map((e)=>(
						<Result title = {e.title} url={e.url} />
				))

			}
				
			</center>
		</div>

	);
}
export default NewsApp;

