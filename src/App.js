import './App.css';
import { useState } from 'react';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동 맛집','파이썬독학','여자 코드 추천'])
  let [modal, setModal] = useState(false)
  let [따봉, 따봉변경] = useState([0,0,0,0])
  let [title, setTitle] = useState(1)
  let [입력값, 입력값변경] = useState('')

  return (
    <div className="App">
        <div className='black-nav'>
            <h4>블로그임</h4>
        </div>
        {/* <div className='list'>
          <h4>{ 글제목[0] }<span onClick={()=>{따봉변경(따봉 + 1)}}>💛</span> {따봉} </h4>
          <p>2월 17일 발행</p>
          <button onClick={ () => {
              let copy = [...글제목];
              글제목변경(copy.sort());
            }} >글 제목 바꾸기</button>
        </div>
        <div className='list'>
          <h4>{ 글제목[1] }</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className='list'>
          <h4 onClick={ ()=>{setModal(!modal)} }>{ 글제목[2] }</h4>
          <p>2월 17일 발행</p>
        </div> */}

        {
          글제목.map(function(a, i){
            return(
              <div className='list' key={i}>
                <h4 onClick={ () => {setModal(!modal); setTitle(i)} }>{ a }
                  <span onClick={(e)=>{
                    e.stopPropagation();
                    let copy = [...따봉];
                    copy[i] = copy[i] + 1;
                    따봉변경(copy)
                  }}> 💛</span> {따봉[i]} 
                </h4>
                <p>2월 17일 발행</p>
                <button onClick={()=>{
                  let copy = [...글제목]
                  copy.splice(i, 1);
                  글제목변경(copy)
                }}>삭제</button>
              </div>
            )
          })
        }
        
        
        <input onChange={ (e)=>{ 
            입력값변경(e.target.value);
            // console.log(입력값) 
        } }/>

        <button onClick={()=>{
            let copy = [...글제목] // 글제목 copy
            copy.unshift(입력값); // copy 맨 처음에 유저가 입력한 값 추가
            글제목변경(copy)
        }}>글발행</button>


        {
          modal === true ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경}/> : null  
        }

    </div>
  );
}

function Modal(props){
  return (
        <div className="modal">
          <h4>{props.글제목[props.title]}</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button>글수정</button>
        </div>
  )
}

export default App;
