import React from 'react'

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

import './Style.css'

const HomeCard = () => {
    return (
        <div className='home-card'>
            <h1>MyWorkbench</h1>
            <p>MyWorkbench é uma plataforma onde é possível encontrar algumas das principais ferramentas usadas no dia a dia de alguém que trabalha o dia todo em um computador, tudo em um só lugar.</p>
            <p>Caso sinta falta de alguma ferramenta que você usa e gostaria que estivesse aqui, me contate em alguma das redes sociais abaixo.</p>
            <p>Aos devs, sintam-se à vontade.</p>

            <div className='social-container'>
                <a href="mailto:joaovitormororo2003@gmail.com" target="_blank" rel="noreferrer"><MdEmail /></a>
                <a href="https://linkedin.com/in/joaovitormororo" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <a href="https://github.com/joao-mororo/my-workbench" target="_blank" rel="noreferrer"><BsGithub /></a>
            </div>
        </div>
    )
}

export default HomeCard