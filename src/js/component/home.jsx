import React, {useState} from "react";

//create your first component
const Home = () => {

	const [color,setColor]=useState("")

	return (
		<div className="">
			<div className="bg-black"><div className="opacity-0">.</div></div>
			<div className="rounded-5 bg-dark col-1 p-4 m-auto">
				<div onClick={() => setColor("100 rojo")} className={"bg-danger rounded-circle opacity-" 
				+ (color == "100 rojo" ? "100 rojo" : "25")}><h1 className="opacity-0">.</h1></div>
				<div onClick={() => setColor("100 naranja")} className={"bg-warning rounded-circle opacity-" 
				+ (color == "100 naranja" ? "100 naranja" : "25")}><h1 className="opacity-0">.</h1></div>
				<div onClick={() => setColor("100 verde")} className={"bg-success rounded-circle opacity-" 
				+ (color == "100 verde" ? "100 verde" : "25")}><h1 className="opacity-0">.</h1></div>
			</div>
		</div> 
	);
};

export default Home;
