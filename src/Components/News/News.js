import React from "react";
import { Container, Row, Col, Card, Spinner, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
const News = () => {
  const [news, setNews] = useState([]);
  const [countrySelected, setCountrySelected] = useState("in");

  useEffect(() => {
    axios
      .get(
        ` https://newsapi.org/v2/top-headlines?apiKey=bcd328e18e4449de843ddca1530da311&country=${countrySelected}`
      )
      .then((res) => setNews(res.data.articles))
      .catch((err) => console.log(err));
  }, [countrySelected]);

  return (
    <Container className="m-0 w-100 main">
      <Form.Select
        size="lg"
        style={{ width: "200px", margin: "10px auto" ,backgroundColor:'black',color:'white'}}
        value={countrySelected}
        onChange={(e) => setCountrySelected(e.target.value)}
      >
        <option value="in" > India </option>
        <option value="us">USA</option>
        <option value="ca">Canada</option>
        <option value="ae">United Arab Emirates</option>
        <option value="ua">Ukraine</option>
      </Form.Select>
      <Row className="m-0 w-100">
        {news.length ? (
          news.map((singleNews, index) => (
            <Col md={4} className="mt-2 mb-2 " key={index}>
              <Card className="news-card">
                <Card.Header className="theme">
                  {singleNews.source.name}
                </Card.Header>
                <Card.Img
                  variant="top"
                  src={
                    singleNews.urlToImage
                      ? singleNews.urlToImage
                      : " https://media.istockphoto.com/id/837212290/photo/red-stamp-on-a-white-background-breaking-news.jpg?s=1024x1024&w=is&k=20&c=_kq1x6OdlZqsD3a4B2w5huwPDU1PvC8ztMW_Wrm_yis="
                  }
                  style={{ height: "200px", borderRadius: "0" }}
                />
                <Card.Body>
                  <Card.Title className="news-title">
                    {singleNews.title.length <= 100
                      ? singleNews.title
                      : `${singleNews.title.slice(0, 90)}...`}
                  </Card.Title>
                  <Card.Text className="news-discription">
                    {singleNews.description
                      ? `${singleNews.description.slice(0, 100)}...`
                      : "Please Click On Read More to know about this Breaking News"}
                  </Card.Text>
                  <a
                    href={singleNews.url}
                    className="btn btn-dark btn-sm"
                    style={{ margin: "0 5px" }}
                  >
                    Read More
                  </a>
                </Card.Body>
                <Card.Footer className="text-muted theme">
                  {singleNews.publishedAt}
                </Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <Spinner
            animation="border"
            role="status"
            style={{ margin: "200px auto" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Row>
    </Container>
  );
};

export default News;
