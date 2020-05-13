import React from 'react';
import {
	Container,
	Col,
	Row
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			url: [],
			isLoaded: false,
		};
	}

	componentDidMount() {
		fetch(
			'https://www.googleapis.com/youtube/v3/search?part=id&q=lastweektonight&type=video&maxResults=15&order=date&key=AIzaSyAAN7bkXlpi5pqkVlJaXVmciwrNYN1RdSY'
		)
			.then((response) => response.json())
			.then((result) => {
				this.setState({
					isLoaded: true,
					results: result.items,
					url: 'https://www.youtube.com/embed/',
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		const { error, isLoaded, results, url } = this.state;

		if (error) {
			return <div>Error in loading</div>;
		} else if (!isLoaded) {
			return <div>Loading ...</div>;
		} else {
			return (
				(document.title = 'Search Results'),
				(
					<Container>
										<div>
					<h1 align="center">Last Week Tonight</h1>
				</div>

						<Row>
							<Col xs={6} md={4} lg={3}>
								<a href="/details">
									<div className="row">
										{results.map((item) => (
											<div key={item.id}>
												<div className="col s3">
													<iframe
														title="myFrame"
														src={url + item.id.videoId}
													></iframe>
												</div>
											</div>
										))}
									</div>
								</a>
							</Col>
						</Row>
					</Container>
				)
			);
		}
	}
}

export default Gallery;
