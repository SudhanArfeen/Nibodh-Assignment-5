import React from "react";

export default function bar() {

 var array1 = [
    { name: "IRELAND", val: 25},
    { name: "TURKEY", val: 35 },
    { name: "INDIA", val: 45},
    { name: "EGYPT", val: 55 },
]



	return (
		<div>
			<div className="row custom-misc-2-con-chart">
				<div className="col-5">
					<h1>Current pollution</h1>
					<h3>around the world</h3>
					<ul style={{ color: "#ff6302" }}>
						{["IRELAND", "TURKEY", "INDIA", "EGYPT", ].map((data)=><li>{data}</li>)}
					</ul>

					<button
						className="btn btn-primary"
						style={{ backgroundColor: "#ff6302", borderRadius: "30px" }}
					>
						KNOW MORE
					</button>
				</div>
				<div className="col-7">
					<div className="heignt-creator">
						{/* array of objects */}

						{array1.map((data) => {
							return (
								<div className="con-chart">
									<div className="bar-chart" style={{ height: `${data.val}%` }}>
										<div>{data.val}%</div>
										<p>{data.name}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}