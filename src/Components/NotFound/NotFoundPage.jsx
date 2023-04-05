import React from 'react'
import "./404.css"
import { useHistory } from 'react-router-dom'


// App component
const NotFoundPage = () => {
    const history = useHistory();
const Home = () => history.push('/');
  return (
    <>
      <section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Désolé, la page que vous recherchez est introuvable. Il est possible que la page ait été supprimée, déplacée ou que son nom ait été modifié.
		</h3>
		
		<p>Nous vous invitons à cliquer sur le bouton ci-dessous pour retourner à la page d'accueil!</p>
		
		<a onClick={Home} class="link_404">Accueil</a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    </>
  )
}

export default NotFoundPage