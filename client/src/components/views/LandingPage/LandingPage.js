import React, { useEffect, useState, useRef } from 'react'
import { Typography, Row, Button } from 'antd';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from '../../Config'
import MainImage from './Sections/MainImage'
import GridCard from './Sections/GridCard'

const { Title } = Typography;
function LandingPage() {

  const [Movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(res =>{
        console.log(res)
        setMovies(res.results)
      })

  },[])

    return (
        <>
          <div style={{ width: '100%', margin: 0}}>

          {Movies[0] &&
            <MainImage image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${Movies[0].backdrop_path && Movies[0].backdrop_path}`}
            title={Movies[0].original_title}
            text={Movies[0].overview}/>}


            <div style={{background:'linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0)41%,rgba(0,0,0,0)100%),url(), #1c1c1c',
                        height: '500px',
                        backgroundSize: '100%, cover',
                        backgroundPosition: 'center, center',
                        width: '100%',
                        position:'relative'}}>
            </div>
            <div>
              <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem'}}>
                <Title style={{ color: 'white'}} level={2}> Title </Title>
                <p style={{ color: 'white', fontSize: '1rem'}}>text</p>
              </div>
            </div>

            <div style={{ width: '85%', margin: '1rem auto' }}>
              <Title level={2} > Movies by latest </Title>
              <hr />

              <Row gutter={[16, 16]}>
                {Movies && Movies.map((movie, index) => (
                  <React.Fragment>
                    <GridCard
                      image={`${IMAGE_BASE_URL}w500`}
                      movieId
                    />
                  </React.Fragment>
                ))}
              </Row>

              <br />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button  className="loadMore" >Load More</button>
              </div>
            </div>
          </div>
        </>
    )
}

export default LandingPage
