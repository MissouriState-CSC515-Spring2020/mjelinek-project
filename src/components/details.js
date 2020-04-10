import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Details extends React.Component {
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
			'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=UnSILVWDKL8&key=AIzaSyAAN7bkXlpi5pqkVlJaXVmciwrNYN1RdSY'
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
				(document.title = 'Video Details'),
				(
					<Card style={{ width: '18rem' }}>
						<div className="row">
							{results.map((item) => (
								<div key={item.id}>
									<div className="col s3">
										<iframe
											title="myFrame"
											src={url + item.id}
										></iframe>
										<Card.Body>
											<Card.Title>{item.snippet.title}</Card.Title>
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroupItem>
												Description: {item.snippet.description}
											</ListGroupItem>
										</ListGroup>
									</div>
								</div>
							))}
						</div>
					</Card>
				)
			);
		}
	}
}
export default Details;
