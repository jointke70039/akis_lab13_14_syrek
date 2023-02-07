import React, {Component} from "react";

export default class CMainPage extends Component {
  

    render() {
        return(
            <section className="main-grid">
                <main>
                    <section className="main-baner">
                        <h3>Triton Racing</h3>  
                        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing.</h2>  
                    </section>

                    <section className="cards" name="first-card" onClick={this.onBorderChange}>
                        <div className="card" style={this.state}>
                            <img src="/img/meta-content.jpg" alt="meta-content" />     
                            <a href="./pages/oferta.html">Team Triton</a>                  
                        </div>
                        
                        <div className="card-desc">
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p onDoubleClick={this.onDbClickColor} style={{zIndex: "999", color: this.state.color}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eveniet inventore esse accusantium itaque, saepe asperiores 
                                dolorem iste ipsum id amet deleniti molestiae corrupti 
                                exercitationem temporibus laboriosam ex, beatae repudiandae 
                                qui! Porro dicta aut eum deserunt voluptatibus autem in assumenda 
                                cum eos laboriosam magni modi distinctio corporis aliquam 
                                blanditiis laborum magnam perferendis quaerat natus cumque vero, 
                                totam vitae quos. Quaerat rerum corrupti provident. Vitae amet 
                                blanditiis dolorem tempore iure nobis, ex ullam aut odio libero 
                                dolor quaerat dolorum velit eaque illum! Eum deserunt possimus 
                                aliquam repudiandae excepturi, voluptates autem amet fugit, ipsa 
                                tempora eligendi nemo explicabo! Iusto debitis assumenda itaque 
                                pariatur?
                            </p>
                        </div>
                    </section>

                    <section className="cards" name="second-card" onClick={this.onBorderChange}>
                        <div className="card-desc">
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p onKeyDown={this.onDbClickColor} style={{zIndex: "999", color: this.state.color}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eveniet inventore esse accusantium itaque, saepe asperiores 
                                dolorem iste ipsum id amet deleniti molestiae corrupti 
                                exercitationem temporibus laboriosam ex, beatae repudiandae 
                                qui! Porro dicta aut eum deserunt voluptatibus autem in assumenda 
                                cum eos laboriosam magni modi distinctio corporis aliquam 
                                blanditiis laborum magnam perferendis quaerat natus cumque vero, 
                                totam vitae quos. Quaerat rerum corrupti provident. Vitae amet 
                                blanditiis dolorem tempore iure nobis, ex ullam aut odio libero 
                                dolor quaerat dolorum velit eaque illum! Eum deserunt possimus 
                                aliquam repudiandae excepturi, voluptates autem amet fugit, ipsa 
                                tempora eligendi nemo explicabo! Iusto debitis assumenda itaque 
                                pariatur?
                            </p>
                        </div>

                        <div className="card" style={this.state}>
                            <img src="./img/infoabout.jpg" alt="" />     
                            <a href="./pages/oferta.html">Team Triton</a>                  
                        </div>
                    </section>
                </main>
                
               
            </section>
        );
    }
}