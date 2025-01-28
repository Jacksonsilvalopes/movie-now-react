import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import Header from "../../components/Header";
import { StyledH1, StyledContainer, StyledButton, StyledCardText, StyledCard, StyledCardImg, StyledCardBody, StyledRow } from './styles';
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';



function Main() {

    const [movies, setMovies] = useState([]);
    useEffect(() => {

        async function loadMovies() {
            const db = getFirestore();
            const querySnapshot = await getDocs(collection(db, "movies"));
            const arrayMovies = [];
            querySnapshot.forEach((doc) => {
                arrayMovies.push(doc.data());
            });
            setMovies(arrayMovies);

        }

        loadMovies();

    }, [])

    return (
        <>
            <Header />
            <StyledContainer >
                <StyledH1>Movie Now</StyledH1>
                <StyledRow >
                    {movies.map((movie) => (


                        <StyledCard key={movie.id}>
                            <StyledCardImg variant="top" src={movie.url_picture} />
                            <StyledCardBody >
                                <Card.Title>{movie.name}</Card.Title>
                                <StyledCardText>
                                    {movie.description}
                                </StyledCardText>
                                <StyledButton variant="outline-dark">Go somewhere</StyledButton>
                            </StyledCardBody>
                        </StyledCard>
                    ))}
                </StyledRow>
            </StyledContainer>
        </>
    )
}

export default Main;
