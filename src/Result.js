function Result(props)
{
	return(
			<div>
				<h1> {props.title} </h1>
				<a href = {props.url} > Read More </a>
				<hr/>
			</div>

);
}
export default Result;