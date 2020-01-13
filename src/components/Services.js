import React, {Component} from "react"
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
import Title from "./Title"
export default class Services extends Component {
	state={
		services:[
		{
			icon:<FaCocktail />,
			title:"Free Cocktails",
			info: "Cold and refreshing beverages to rehydrate your system!"
		},
		{
			icon:<FaHiking />,
			title: "Endless Hiking",
			info: "Many different hiking trails to choose from!"
		},
		{
			icon:<FaShuttleVan />,
			title: "Free Shuttle",
			info: "No need to pay for Uber while here!"
		},
		{
			icon:<FaBeer />,
			title: "Strongest Beer",
			info: "Can you handle our strongest beer?"
		}
		]
	};
	render() {
		return (
			<section className="services">
				<Title title="services" />
				<div className="services-center">
				{this.state.services.map((item, index) => {
					return (
					<article key={index} className="service">
						<span>{item.icon}</span>
						<h6>{item.title}</h6>
						<p>{item.info}</p>
					</article>
					);
				})}
				</div>
			</section>
		)
	}
}