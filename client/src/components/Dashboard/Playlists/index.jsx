import React, { useEffect, useState } from "react";
import Spotify from "spotify-web-api-js";
import styled from "styled-components";
import {
	Row,
	Col,
	Card,
	Container,
	Dropdown,
	DropdownButton,
	Form,
} from "react-bootstrap";

export const Playlists = () => {
	const [visibility, setVisibility] = useState("Private");
	const [length,setLength] = useState(50);
	return (
		<Container>
			<Row>
				<Col xs={12}>
					<Heading>
						Generate a personalized playlist tailored to you:
					</Heading>
					<Menu>
						<Row className="justify-content-center">
							<Col xs={6}>
								<SmallCard
									bg="dark"
									text="light"
									style={{
										display: "flex",
										flexDirection: "row",
									}}>
									<h4 style={{ margin: "14px 10px 0 0" }}>
										Visibility:
									</h4>
									<DropdownButton
										variant="success"
										title={visibility}
										style={{ margin: "10px 0 0 10px" }}>
										<Dropdown.Item
											onClick={() =>
												setVisibility("Private")
											}>
											Private
										</Dropdown.Item>
										<Dropdown.Item
											onClick={() =>
												setVisibility("Public")
											}>
											Public
										</Dropdown.Item>
									</DropdownButton>
								</SmallCard>
							</Col>
							<Col xs={6}>
							<SmallCard
									bg="dark"
									text="light"
									style={{
										display: "flex",
										flexDirection: "row",
									}}>
									<h4 style={{ margin: "14px 10px 0 0" }}>
										Playlist Length:
									</h4>
									<DropdownButton
										variant="success"
										title={length + " Tracks"}
										style={{ margin: "10px 0 0 10px" }}>
										<Dropdown.Item
											onClick={() =>
												setLength(20)
											}>
											20
										</Dropdown.Item>
										<Dropdown.Item
											onClick={() =>
												setLength(30)
											}>
											30
										</Dropdown.Item>
										<Dropdown.Item
											onClick={() =>
												setLength(40)
											}>
											40
										</Dropdown.Item>
										<Dropdown.Item
											onClick={() =>
												setLength(50)
											}>
											50
										</Dropdown.Item>
									</DropdownButton>
								</SmallCard>
							</Col>
						</Row>
						<Row className="justify-content-center">
							<Col xs={4}>
								<Card
									style={{
										borderColor: "rgb(40,40,40)",
										borderRadius: "20px",
									}}
									bg="dark"
									text="light">
									<Card.Body>
										<Card.Title
											style={{ fontSize: "28px" }}>
											Preferences
										</Card.Title>
										<Card.Text>
											Choose what your playlist is made out of. 
											Would you like top songs from your favourite
											 artists, some of your favourite tracks, or a 
											 little bit of both?  
										</Card.Text>
										<div
											style={{
												marginLeft: "22%",
											}}>
											<DropdownButton
												variant="success"
												title={"Preferences"}>
												<Dropdown.Item>
												Top Artists
												</Dropdown.Item>
												<Dropdown.Item>
												Top Tracks
												</Dropdown.Item>
												<Dropdown.Item>
												A bit of both
												</Dropdown.Item>
											</DropdownButton>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xs={4}>
								<Card
									style={{
										borderColor: "rgb(40,40,40)",
										borderRadius: "20px",
									}}
									bg="dark"
									text="light">
									<Card.Body>
										<Card.Title
											style={{ fontSize: "28px" }}>
											Time Frame
										</Card.Title>
										<Card.Text>
											Choose the time frame that is analyzed when 
											creating your playlist. Your top artists and
											tracks will be from this time frame.
										</Card.Text>
										<div
											style={{
												marginLeft: "22%",
											}}>
											<DropdownButton
												variant="success"
												title={"Select Time Range"}>
												<Dropdown.Item>
												Short Term (1 month)
												</Dropdown.Item>
												<Dropdown.Item>
												Medium Term (6 months)
												</Dropdown.Item>
												<Dropdown.Item>
												Long Term (All Time)
												</Dropdown.Item>
											</DropdownButton>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xs={4}>
								<Card
									style={{
										borderColor: "rgb(40,40,40)",
										borderRadius: "20px",
									}}
									bg="dark"
									text="light">
									<Card.Body>
										<Card.Title
											style={{ fontSize: "28px" }}>
											Name of Playlist
										</Card.Title>
										<Card.Text>
											Give your playlist a name.<br/> 
											(default name is "My Playlist")
										</Card.Text>
										<div
											style={{
												marginTop: "54px"
											}}>
											<Form>
												<Form.Control type="text" size="lg" placeholder="Playlist Name"/>
											</Form>
										</div>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Menu>
				</Col>
			</Row>
		</Container>
	);
};

const Heading = styled.h2`
	color: rgb(29, 185, 84);
	margin: 20px 0 0 0;
`;

const Menu = styled.div`
	background-color: rgb(35, 35, 35);
	padding: 30px;
	margin: 30px 0 20px 0;
	border-radius: 30px;
`;

const SmallCard = styled(Card)`
	border-color: rgb(40, 40, 40);
	border-radius: 20px;
	margin: 0 0 20px 0;
	height: 60px;
	justify-content: center;
`;