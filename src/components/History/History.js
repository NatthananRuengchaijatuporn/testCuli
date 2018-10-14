import React, { Component } from 'react';
import './History.css';

class History extends Component {
	render() {
		return (
			<div>
				<header id="header-background" className="one" />
				<ul id="a">
					<li><a className="active" href="#home">Home</a></li>
					<li><a href="#Create">Create New Activity</a></li>
					<li><a href="#Attendance">Check Attendance</a></li>
					<li><a href="#View">View Created Activity</a></li>
					<li><a href="#History">History</a></li>
				</ul>
				
				<br />
				<br />
				
				<table id="table1" align="center">
					<tbody>
						<tr>
							<th id="th1" colSpan={3}>Reserved Activity</th>
						</tr>
						<tr>
							<th id="col1">Date</th>
							<th id="col2">Activity Name</th>
							<th id="col3">Cancel</th>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td id="topcol3"></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td id="topcol3"></td>
						</tr>
					</tbody>
				</table>
				
				<br />
				
				<table id="table1" align="center">
					<tbody>
						<tr>
							<th id="th1" colSpan={3}>History</th>
						</tr>
						<tr>
							<th id="col1">Date</th>
							<th id="col2">Activity Name</th>
							<th id="col3">Attendance</th>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td id="bottomcol3uncheck"></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td id="bottomcol3check"></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default History;
