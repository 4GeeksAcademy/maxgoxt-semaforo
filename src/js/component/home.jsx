import React, {useState} from "react";

//create your first component
const Home = () => {

	const [color,setColor]=useState("")

	let coso = {width: '20px', height: '50px'}
	
	return (
		<div className="">
			<div className="bg-black m-auto" style={coso}><div className="opacity-0">.</div></div>
			<div className="rounded-5 bg-dark col-1 p-1 m-auto">
				<div onClick={() => setColor("100 rojo")} className={"bg-danger p-4 rounded-circle opacity-" 
				+ (color == "100 rojo" ? "100 rojo" : "25")}><h1 className="opacity-0">.</h1></div>
				<div onClick={() => setColor("100 naranja")} className={"bg-warning p-4 rounded-circle opacity-" 
				+ (color == "100 naranja" ? "100 naranja" : "25")}><h1 className="opacity-0">.</h1></div>
				<div onClick={() => setColor("100 verde")} className={"bg-success p-4 rounded-circle opacity-" 
				+ (color == "100 verde" ? "100 verde" : "25")}><h1 className="opacity-0">.</h1></div>
			</div>
		</div> 
	);
};

export default Home;
