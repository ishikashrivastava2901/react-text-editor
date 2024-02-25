import React, { useEffect } from "react";
import "../TextEditor/style.css";
import copy from "copy-to-clipboard";
import { useState } from "react";
const TextEditor = () => {
  const [state, setState] = useState({
    input: "",
    character: 0,
    word: 0,
    sentence:0,
    paragraph:0,
    smalllest:0,
    largest:0,
    time:0
  });

  const copyToClipboard = () => {
    copy(state.input);
    alert(`You have copied "${state.input}"`);
  };

  const countCharacter = () => {
    setState((prevState) => {
      return { ...prevState, character: state.input.length };
    });
  };

  const countWords =()=>{
  const words =state.input.split(/ +/g).filter((item)=> item !== '');
 setState((prevState) => {
        return { ...prevState, word: words.length };
      });
  }

  const upperCaseClick = () => {
    setState((prevState) => {
      return { ...prevState, input: state.input.toUpperCase() };
    });
  };

  const lowerCaseClick = () => {
    setState((prevState) => {
      return { ...prevState, input: state.input.toLowerCase() };
    });
  };
  const trimClick = () => {
    setState((prevState) => {
      return { ...prevState, input: state.input.trim() };
    });
  };

  const removeSpaceClick = () => {
    setState((prevState) => {
      return { ...prevState, input: state.input.replace(/ /g, "") };
    });
  };
  const clearClick = () => {
    setState((prevState) => {
      return { ...prevState,
         input: "", 
         word: 0,
          character: 0 ,
          largest:0 ,
          smalllest:0,
          sentence:0,
          paragraph:0,
          time:0
        };
    });
  };

  const SmallestWord = () => {
    let str1 = state.input.trim();
    let str2 = str1.split(/ +/g);
    let smallestword ='';
    for (let i = 0; i < str2.length; i++) {
      if (str2[i].length <= smallestword.length +1) {
        smallestword = str2[i]
      }
    }
     setState((prevState) => {
          return { ...prevState, smalllest: smallestword.length };
        });
  }
  
  const LargestWord = () => {
      let Words = state.input.split(" ");
      let largestWord="";
      for(let i =0 ; i < Words.length ;i++){
          if(Words[i].length > largestWord.length){
            largestWord = Words[i];
          }
      }
  return setState((prevState) => {
        return { ...prevState, largest: largestWord.length };
      });;

  };

  const countSentences = () => {};
  const countParagraphs = () => {};
  const takeTimeToRead = () => {};

  useEffect(() => {
    countCharacter();
    countWords();
    LargestWord();
    SmallestWord();
  }, [state.input]);

  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
            TEXT EDITOR
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div class='navbar-nav'>
              <a class='nav-link active' aria-current='page' href='#'>
                <b>Home</b>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <br></br>
      <div className='head'>
        <div className='heading'>
          <h1>
            Simply enter your text and choose the case you want to convert it to
          </h1>
        </div>
        <br></br>
        <div>
          <textarea
            value={state.input}
            className='text-area'
            placeholder='Leave a comment here'
            onChange={(event) => {
              setState((prevState) => {
                return { ...prevState, input: event.target.value };
              });
            }}
          ></textarea>
        </div>
        <div className='button'>
          <button
            class='btn btn-primary'
            type='submit'
            onClick={upperCaseClick}
          >
            Upper Case
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            class='btn btn-primary'
            type='submit'
            onClick={lowerCaseClick}
          >
            Lower Case
          </button>
          &nbsp;&nbsp;&nbsp;
          <button class='btn btn-primary' type='submit' onClick={trimClick}>
            Trim Text
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            class='btn btn-primary'
            type='submit'
            onClick={removeSpaceClick}
          >
            Remove Extra Spaces
          </button>
          &nbsp;&nbsp;&nbsp;
          <button type='button' class='btn btn-danger' onClick={clearClick}>
            Clear
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            type='button'
            className='btn btn-success'
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <h2>Text Report</h2>
        <div>
          <p>Paragraph :</p>
          <p>Sentences:</p>
          <p>Character count: {state.character}</p>
          <p>Word count:{state.word} </p>
          <p>Smallest word length:{state.smalllest} </p>
          <p>Largest word length:{state.largest} </p>
          <p>Minutes takes to read: sec</p>
        </div>
      </div>
    </>
  );
};

export default TextEditor;
