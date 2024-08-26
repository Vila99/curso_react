
'use client'
import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselClient(){
    return(
        <Carousel>
        {/* PRIMER SLIDE */}
            <Carousel.Item>
                <img
                        className="d-block w-100"
                        src="eventosPueblo\eventowns\public\img\carousel2.jpeg"
                        alt="First slide"
                />
                <Carousel.Caption>
                    <h3>E-SCooter</h3>
                    <p>Desplázate de una forma diferente</p>
                </Carousel.Caption>
            </Carousel.Item>
        {/* SEGUNDO SLIDE */}
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="eventosPueblo\eventowns\public\img\carousel1.jpg"
                alt="First slide"
              />
            <Carousel.Caption>
                <h3>Scooter segunda mano</h3>
                <p>Conectamos directamente al vendedor y comprado</p>
            </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    )
}
