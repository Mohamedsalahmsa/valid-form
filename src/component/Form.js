import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
            inputAfterSubmit: "",
            TextAreaValue: "",
            TextAreaAfterSubmit: "",
         
        }
       this.btn = this.btn.bind(this)
    
    }
    
    event = (element , event) => {
        if(element == "INPUT") {
            this.setState({inputValue: event.target.value})
        } else if(element == "TEXTAREA") {
            this.setState({TextAreaValue: event.target.value})
        }
    }

    btn = (event) => {
        event.preventDefault();
        this.setState({
            inputAfterSubmit: this.state.inputValue,
            TextAreaAfterSubmit: this.state.TextAreaValue,
        })
        
        if(this.state.inputValue == "root" && this.state.TextAreaValue == "123") {
            let ele = document.createElement("div")
            ele.className = "validDiv";

            let img = document.createElement("img");
            img.setAttribute("src" , "./checked_318-197857.avif")

            let h1 = document.createElement("h1");
            let text = document.createTextNode("Valid email and Password")
            h1.className='valid h1'
            h1.appendChild(text)

            ele.appendChild(img);
            ele.appendChild(h1);
            document.getElementById("success").play()
            document.body.appendChild(ele)
            setTimeout(function() {
                window.location.reload()
            }, 2000)
        } 
        else{
            let ele = document.createElement("div")
            ele.className = "validDiv";
            document.getElementById("no").play()
            let img = document.createElement("img");
            img.className = "img"
            img.setAttribute("src" , "./image-removebg-preview (8).png")
            let h1 = document.createElement("h1");
            let text = document.createTextNode("InValid email and Password")
            h1.className='not-valid-h1'
            h1.appendChild(text)

            ele.appendChild(img);
            ele.appendChild(h1);

            document.body.appendChild(ele)
            setTimeout(function() {
                window.location.reload()
            }, 2000)
        }
    }

    render() {
        return(
            <>
                <form  onSubmit={this.btn}>
                    <div className='card'>
                    <label htmlFor='email'>UserName:</label>
                    <input onChange={(e) => this.event(e.target.tagName, e)} id='email' value={this.state.inputValue} type='text' placeholder='UserName' />
                    {this.state.inputValue == "root"  ? <p className='valid'>Valid Email</p> : this.state.inputValue != '' ? <p className='error'>The UserName is Wrong</p> : console.log(".")}
                    <label htmlFor='pass'>Password:</label>
                    <textarea onChange={(e) => this.event(e.target.tagName, e)} value={this.state.TextAreaValue} type='text' placeholder='Password' />
                    {this.state.TextAreaValue == "123"  ? <p className='valid'>Valid Password</p> : this.state.TextAreaValue != '' ? <p className='error'>The Password is Wrong</p> : console.log(".")}
                    <input className='btn'  type='submit' value="Submit" />
               </div> 
               <audio id="success" preload="auto"  src="./collect-5930.mp3"></audio>
            <audio id="no" preload="auto" src="./wronganswer-37702.mp3"></audio>
               </form>

                
            
            </>
        )
    }
}

export default Form


/*
    this.state.inputAfterSubmit == "Mohamed"  && this.state.TextAreaAfterSubmit == "Mohamed" ?    
                     
                         // Valid
                         <div className='validDiv'>
                         <img src='/./checked_318-197857.avif' alt='validLogo' />
                         <h1 className='valid h1'>Valid Email And Password</h1>
                         </div> 
                         
                          // Not Valid
                         : <div className='validDiv'>
                         <img src='/./image-removebg-preview (8).png' alt='validLogo' />
                         <h1 className='not-valid-h1'>Not Valid Email And Password</h1>
                         </div>
*/