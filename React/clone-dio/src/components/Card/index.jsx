// rfc :

import { FiThumbsUp } from "react-icons/fi"
import React from 'react'

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://img.freepik.com/vetores-gratis/fundo-de-tecnologia-digital-de-fio-de-rede_1017-27428.jpg?auto=format&h=200"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/94191095?s=96&v=4" />
                <div>
                    <h4>Juliana Marques</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para o curso de HTML e CSS</h4>
                <p>Projeto feito para o curso de HTML e CSS do bootcamp dio do Global avanade   <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp />10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
